import { Edit, ChevronRight, XSquare } from 'lucide-react'
import { Reminder } from './list'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '../ui/card'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { getRemainingTime } from '@/utils/getRemainingTime'
import { Button } from '../ui/button'
import { useMutation } from '../../../convex/_generated/react'
import { Id } from '../../../convex/_generated/dataModel'

type Props = {
	reminder: Reminder
}
type MutationStatus = 'stale' | 'loading'
function DeleteReminder(props: { docId: Id<'reminders'> }) {
	const mutation = useMutation('deleteReminder')

	async function deleteReminder() {
		try {
			const result = await mutation({ doc: props.docId })
			console.log(result)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Dialog>
			<DialogTrigger>
				<Button variant={'outline'} className="p-0 border-0 hover:bg-transparent">
					<XSquare className="w-6 h-6 hover:opacity-60" />
				</Button>
				<DialogContent className="sm:max-w-[36rem]">
					<DialogHeader>
						<DialogTitle>Eliminar recordatorio</DialogTitle>
						<DialogDescription>
							Estás seguro de querer eliminar este recordatorio? No se puede revertir.
						</DialogDescription>
					</DialogHeader>
					<DialogFooter className='gap-3'>
						<Button onClick={deleteReminder}>Confirmar</Button>
						<Button>Cancelar</Button>
					</DialogFooter>
				</DialogContent>
			</DialogTrigger>
		</Dialog>
	)
}
export function ReminderItem(props: Props) {
	const remainingTime = getRemainingTime(props.reminder.expiringDate)
	const handleRemainingLabelColor = () => {
		if (remainingTime > 7) return 'text-emerald-500'
		if (remainingTime > 3) return 'text-amber-500'
		if (remainingTime >= 0 || remainingTime <= 3) return 'text-red-500'
	}
	return (
		<Card className="w-full h-44">
			<CardHeader>
				<CardTitle className="flex flex-row items-center justify-between">
					<span>{props.reminder.title}</span>{' '}
					<span className={`${handleRemainingLabelColor()} text-md`}>
						{remainingTime} {remainingTime > 1 ? 'días restantes' : 'día restante'}
					</span>
				</CardTitle>
				<CardDescription>{props.reminder.description}</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-5">
				<aside className="flex items-center justify-end space-x-4">
					<DeleteReminder docId={props.reminder._id} />
					<NavLink
						to={`/home/reminder/edit/${props.reminder.reminderId}`}
						title="Editar recordatorio"
					>
						<Edit className="w-6 h-6 hover:opacity-60" />
					</NavLink>

					<NavLink
						to={`/home/reminder/${props.reminder.reminderId}`}
						title="Ver detalles de recordatorio"
					>
						<ChevronRight className="w-6 h-6 hover:opacity-60" />
					</NavLink>
				</aside>
			</CardContent>
		</Card>
	)
}
