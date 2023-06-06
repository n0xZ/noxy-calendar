import { useUser } from '@clerk/clerk-react'
import { ReminderList } from '@/components/reminders/list'
import ReminderSkeleton from '@/components/reminders/skeleton'
import { useQuery } from '../../../convex/_generated/react'


function EmptyReminders() {
	return (
		<article>
			<h2>Parece que no tienes creado ningún recordatorio por el momento.</h2>
			<Link to="/home/reminder/create" className='underline'>
				Haz click aquí para empezar a crear tu primer recordatorio.
			</Link>
		</article>
	)
}

export function HomeGeneral() {
	const { user } = useUser()
	const reminders = useQuery('getRemindersByUserId', { userId: user?.id! }, {})

	return (
		<section className="w-full h-full min-h-screen">
			<h2 className="mt-5 mb-3 text-2xl font-bold text-center">
				Lista de recordatorios
			</h2>
			{reminders ? (
				reminders.length ? (
					<ReminderList reminders={reminders} />
				) : (
					<EmptyReminders />
				)
			) : (
				<ReminderSkeleton />
			)}
		</section>
	)
}
