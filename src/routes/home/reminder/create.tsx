import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { CalendarIcon } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useUser } from '@clerk/clerk-react'
import { format } from 'date-fns'
import { v4 } from 'uuid'
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
import { cn } from '@/lib/utils'
import { useMutation } from '../../../../convex/_generated/react'
import { Textarea } from '@/components/ui/textarea'

const createReminderSchema = z.object({
	title: z.string({ required_error: 'El título es requerido' }),
	description: z.string({ required_error: 'La descripción es requerida' }),
	expiringDate: z.date({
		required_error: 'La fecha de expiración es requerida',
	}),
})
type CreateReminderForm = z.infer<typeof createReminderSchema>
type MutationStatus = 'loading' | 'stale'
export function CreateReminder() {
	const { user } = useUser()
	const navigate = useNavigate()
	const mutation = useMutation('createReminder')
	const [status, setStatus] = useState<MutationStatus>('stale')
	const form = useForm<CreateReminderForm>({
		resolver: zodResolver(createReminderSchema),
	})

	const createReminder = form.handleSubmit(
		async ({ title, description, expiringDate }) => {
			setStatus('loading')
			const parsedExpiringDate =
				expiringDate.getFullYear() +
				'-' +
				(expiringDate.getMonth() + 1) +
				'-' +
				expiringDate.getDate()
			const result = await mutation({
				title,
				description,
				expiringDate: parsedExpiringDate,
				reminderId: v4(),
				userId: user?.id!,
			})
			if (result) {
				setStatus('stale')
				navigate('/home/')
			}
			setStatus('stale')
		}
	)
	return (
		<section className="container grid h-screen mx-auto ">
			<Form {...form}>
				<form
					className="flex flex-col justify-center w-full space-y-6"
					onSubmit={createReminder}
				>
					<h2 className="pb-2 mb-4 text-3xl font-semibold tracking-tight text-center transition-colors border-b scroll-m-20 first:mt-0">
						Agregar nuevo recordatorio
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
												{field.value ? (
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
								<FormDescription>
									Esta será la fecha que se acontecerá el evento mencionado.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button className="w-full" type="submit">
						{status === 'loading' ? 'Cargando...' : 'Agregar nuevo recordatorio'}
					</Button>
				</form>
			</Form>
		</section>
	)
}
