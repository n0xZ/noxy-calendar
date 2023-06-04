import { query } from './_generated/server'
export default query(async ({ db }, { reminderId }: { reminderId: string }) => {
	const reminderById = await db
		.query('reminders')
		.withSearchIndex('search_by_id', (q) => q.search('reminderId', reminderId))
		.first()
	return reminderById
})
