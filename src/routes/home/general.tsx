import { useRouteError } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'

import { ReminderList } from '@/components/reminders/list'
import ReminderSkeleton from '@/components/reminders/skeleton'
import Paragraph from '@/components/ui/paragraph'
import { Button } from '@/components/ui/button'
import { useQuery } from '../../../convex/_generated/react'

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

function EmptyReminders() {
	return (
		<article className="flex flex-col w-full">
			<h2 className="pb-2 text-3xl font-semibold tracking-tight transition-colors border-b scroll-m-20 first:mt-0 ">
				Parece que no tienes creado ningún recordatorio por el momento.
			</h2>
			<Link to="/home/reminder/create" className="underline">
				Haz click aquí para empezar a crear tu primer recordatorio.
			</Link>
		</article>
	)
}

export function HomeGeneral() {
	const { user } = useUser()
	const reminders = useQuery('getRemindersByUserId', { userId: user?.id! })

	return (
		<section className="w-full h-full min-h-screen">
			<h2 className="pb-2 text-3xl font-semibold tracking-tight text-center transition-colors border-b scroll-m-20 first:mt-0">
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
