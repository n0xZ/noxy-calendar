import { Doc, Id } from '../../../convex/_generated/dataModel'
import { ReminderItem } from './item'

export type Reminder = {
	_id: Id<'reminders'>
	reminderId: string
	title: string
	description: string
	createdAt: Date
	status: 'ACTIVE' | 'FINISHED'
	expiringDate: Date
	userId: string
}
type Props = {
	reminders: Doc<'reminders'>
}

export function ReminderList(props: Props) {
	return (
		<article className="grid w-full h-full grid-rows-2 gap-4">
			{props.reminders.map((r: Reminder) => (
				<ReminderItem reminder={r} key={r._id.id} />
			))}
		</article>
	)
}
