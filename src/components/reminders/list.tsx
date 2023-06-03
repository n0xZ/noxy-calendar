import { Doc } from '../../../convex/_generated/dataModel'
import { ReminderItem } from './item'

export type Reminder = {
	_id: {
		id: string
	}
	title: string
	description: string
	createdAt: Date
	expiringDate: Date
	userId: string
}
type Props = {
	reminders: Doc<'reminders'>
}

export function ReminderList(props: Props) {
	return (
		<section className="grid w-full h-full gap-4">
			{props.reminders.map((r: Reminder) => (
				<ReminderItem reminder={r} key={r._id.id} />
			))}
		</section>
	)
}
