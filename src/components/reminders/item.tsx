import { Edit, ChevronRight } from 'lucide-react'
import { Reminder } from './list'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '../ui/card'

type Props = {
	reminder: Reminder
}

export function ReminderItem(props: Props) {
	const oneDay = 24 * 60 * 60 * 1000
	const actualDate = new Date()
	const reminderDate = new Date(props.reminder.expiringDate)
	actualDate.getMilliseconds()
	const actualDateUTC = Date.UTC(
		actualDate.getFullYear(),
		actualDate.getMonth(),
		actualDate.getDate()
	)
	const reminderDateUTC = Date.UTC(
		reminderDate.getFullYear(),
		reminderDate.getMonth(),
		reminderDate.getDate()
	)

	const remainingTime = (actualDateUTC - reminderDateUTC) / oneDay
	const handleRemainingLabelColor = () => {
		if (remainingTime > 7) return 'text-emerald-400'
		if (remainingTime > 3) return 'text-yellow-400'
		if (remainingTime >= 0 || remainingTime <= 3) return 'text-red-400'
	}
	return (
		<Card className="w-full h-48">
			<CardHeader>
				<CardTitle className="flex flex-row items-center justify-between">
					<span>{props.reminder.title}</span>{' '}
					<span className={`${handleRemainingLabelColor()}`}>
						{remainingTime} {remainingTime > 1 ? 'días restantes' : 'día restante'}
					</span>
				</CardTitle>
				<CardDescription>{props.reminder.description}</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-5">
				<aside className="flex items-center justify-end p-4 space-x-5 border rounded-md">
					<NavLink
						to={`/home/reminder/edit/${props.reminder._id.id}`}
						title="Editar recordatorio"
					>
						<Edit className="w-6 h-6 hover:opacity-60" />
					</NavLink>
					<NavLink
						to={`/home/reminder/${props.reminder._id.id}`}
						title="Ver detalles de recordatorio"
					>
						<ChevronRight className="w-6 h-6 hover:opacity-60" />
					</NavLink>
				</aside>
			</CardContent>
		</Card>
	)
}
