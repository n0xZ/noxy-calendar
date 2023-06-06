import { marked } from 'marked'
import { useRouteError } from 'react-router-dom'
import { Reminder } from '@/components/reminders/list'
import Paragraph from '@/components/ui/paragraph'
import { Button } from '@/components/ui/button'
import { useQuery } from '../../../../convex/_generated/react'

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
			<div dangerouslySetInnerHTML={{ __html: props.reminder.description }}></div>
		</>
	)
}
export function ReminderById() {
	const params = useParams()
	const reminder: Reminder = useQuery('getReminderById', {
		reminderId: params.id!,
	})
	return (
		<section className="flex flex-col justify-center w-full h-full max-w-4xl prose">
			{reminder ? (
				<ReminderInformation
					reminder={{ ...reminder, description: marked.parse(reminder.description) }}
				/>
			) : (
				<ReminderSkeleton />
			)}
		</section>
	)
}
