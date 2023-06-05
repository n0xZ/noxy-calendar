import { Reminder } from '@/components/reminders/list'
import { useQuery } from '../../../../convex/_generated/react'

function ReminderSkeleton() {
	return (
		<article className="flex flex-col items-center w-full">
			<div className="self-center bg-gray-300 rounded-md h-7 w-36 animate-pulse "></div>
			<div className="self-start bg-gray-300 rounded-md h-7 w-36 animate-pulse "></div>
		</article>
	)
}

function ReminderInformation(props: { reminder: Reminder }) {
	return (
		<>
			<h2 className="text-2xl font-bold text-center">{props.reminder.title}</h2>
			<time
				dateTime={new Date(props.reminder.expiringDate).toUTCString()}
				className="opacity-50"
			>
				{props.reminder.expiringDate.toString()}
			</time>
			<p className='mt-3 opacity-80'>{props.reminder.description}</p>
		</>
	)
}
export function ReminderById() {
	const params = useParams()
	const reminder: Reminder = useQuery('getReminderById', {
		reminderId: params.id!,
	})
	return (
		<section className="flex flex-col justify-center h-full">
			{reminder ? (
				<ReminderInformation reminder={reminder} />
			) : (
				<ReminderSkeleton />
			)}
		</section>
	)
}
