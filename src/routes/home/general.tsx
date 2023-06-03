import { ReminderList } from '@/components/reminders/list'
import { useQuery } from '../../../convex/_generated/react'
import { useUser } from '@clerk/clerk-react'
import ReminderSkeleton from '@/components/reminders/skeleton'

export function HomeGeneral() {
	const { user } = useUser()
	const reminders = useQuery('getRemindersByUserId', { userId: user?.id! })

	return (
		<section className="w-full h-screen ">
			<h2 className="mt-5 mb-3 text-2xl text-center">Lista de recordatorios</h2>
			{reminders ? <ReminderList reminders={reminders} /> : <ReminderSkeleton />}
		</section>
	)
}
