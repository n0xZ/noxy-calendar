import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useRouteError } from 'react-router-dom'
import { CalendarIcon } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { Reminder } from '@/components/reminders/list'
import { Textarea } from '@/components/ui/textarea'
import Paragraph from '@/components/ui/paragraph'
import { cn } from '@/lib/utils'
import { formatConvexDate } from '@/utils/formatConvexDate'
import { useMutation, useQuery } from '../../../../convex/_generated/react'

const editReminderSchema = z.object({
	title: z.string({ required_error: 'El título es requerido' }),
	description: z.string({ required_error: 'La descripción es requerida' }),
	expiringDate: z.date({
		required_error: 'La fecha de expiración es requerida',
	}),
})
type EditReminderForm = z.infer<typeof editReminderSchema>
type MutationStatus = 'loading' | 'stale'

export function ErrorBoundary() {
	const error = useRouteError() as { message?: string }
	const reloadPage = () => window.location.reload()
	return (
		<section className="flex flex-col justify-center w-full h-full min-h-screen space-y-2 text-center">
			<h2 className="pb-2 text-3xl font-semibold tracking-tight transition-colors border-b scroll-m-20 first:mt-0 ">
				Ups! Al parecer ocurrió un error 😥
			</h2>
			<Paragraph>Por favor, volvé a intentarlo más tarde.</Paragraph>
			<small className="text-sm font-medium leading-none">
				{error ? error.message : null}
			</small>
			<Button onClick={reloadPage}>Volver a intentar</Button>
		</section>
	)
}

export function EditReminder() {
	const navigate = useNavigate()
	const params = useParams()
	const reminder: Reminder = useQuery('getReminderById', {
		reminderId: params.id!,
	})
	const mutation = useMutation('updateReminder')
	const [status, setStatus] = useState<MutationStatus>('stale')
	const form = useForm<EditReminderForm>({
		resolver: zodResolver(editReminderSchema),
	})

	const editReminder = form.handleSubmit(
		async ({ title, description, expiringDate }) => {
			setStatus('loading')

			const parsedExpiringDate =
				expiringDate.getFullYear() +
				'-' +
				(expiringDate.getMonth() + 1) +
				'-' +
				expiringDate.getDate()
			await mutation({
				title,
				description,
				expiringDate: parsedExpiringDate,
				relatedDoc: reminder._id,
			})

			navigate('/home/')

			setStatus('stale')
		}
	)
	useEffect(() => {
		if (reminder) {
			form.setValue('title', reminder.title)
			form.setValue('description', reminder.description)
			form.setValue('expiringDate', new Date(reminder.expiringDate))
		}
	}, [reminder])

	return (
		<section className="container grid h-screen mx-auto ">
			{reminder ? (
				<Form {...form}>
					<form
						className="flex flex-col justify-center w-full space-y-6"
						onSubmit={editReminder}
					>
						<h2 className="pb-2 mb-4 text-3xl font-semibold tracking-tight text-center transition-colors border-b scroll-m-20 first:mt-0">
							{' '}
							Editar recordatorio
						</h2>
						<FormField
							name="title"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Título del recordatorio</FormLabel>
									<FormControl>
										<Input
											placeholder="Reunión ATR"
											type="text"
											{...field}
											disabled={status === 'loading'}
										/>
									</FormControl>
									<FormDescription>
										{' '}
										Este será el título de tu recordatorio. Tip: Que sea lo más redundante
										posible.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name="description"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Descripción del recordatorio</FormLabel>
									<FormControl>
										<Textarea
											placeholder="La reunión de todos los días (o eso creo)"
											disabled={status === 'loading'}
											{...field}
										/>
									</FormControl>
									<FormDescription>
										La descripción de lo que tratará el recordatorio. Incluso podés pegar
										Markdown en el mísmo!
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="expiringDate"
							render={({ field }) => (
								<FormItem className="flex flex-col ">
									<FormLabel>Fecha del evento del recordatorio</FormLabel>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant={'outline'}
													className={cn(
														'w-[240px] pl-3 text-left font-normal',
														!field.value && 'text-muted-foreground'
													)}
													disabled={status === 'loading'}
												>
													{reminder && !field.value ? (
														format(formatConvexDate(reminder.expiringDate), 'PPP')
													) : field.value ? (
														format(field.value, 'PPP')
													) : (
														<span>Elegí una fecha</span>
													)}
													<CalendarIcon className="w-4 h-4 ml-auto opacity-50" />
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0" align="start">
											<Calendar
												mode="single"
												selected={field.value}
												onSelect={field.onChange}
												disabled={(date) =>
													date < new Date() || date < new Date('1900-01-01')
												}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
									<FormDescription>Esta será la fecha .</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button className="w-full" type="submit">
							{status === 'loading' ? 'Cargando...' : 'Editar recordatorio'}
						</Button>
					</form>
				</Form>
			) : (
				<div>Cargando...</div>
			)}
		</section>
	)
}
