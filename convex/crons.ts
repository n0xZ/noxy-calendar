import { cronJobs } from './_generated/server'

const crons = cronJobs()

crons.interval(
	'update reminders status each day',
	{ hours: 24 },
	'updateRemindersStatus'
)

export default crons
