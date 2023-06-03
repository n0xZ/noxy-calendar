import { query } from './_generated/server'

export default query(async ({ db }, { userId }: { userId: string }) => {
	const remindersByUserId = await db
		.query('reminders')
		.withSearchIndex('search_by_userId', (q) => q.search('userId', userId))
		.collect()
	return remindersByUserId
})
