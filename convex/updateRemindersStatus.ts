import { mutation } from './_generated/server'

export default mutation(async ({ db }) => {
	const activeReminders = await db
		.query('reminders')
		.withSearchIndex('search_by_activeStatus', (q) =>
			q.search('status', 'ACTIVE')
		)
		.collect()
	const remindersWithParsedDate = activeReminders.map((r) => ({
		...r,
		expiringDate: new Date(r.expiringDate),
	}))
	const remindersThatMatchesActualDay = remindersWithParsedDate.filter(
		(r) => r.expiringDate.toDateString() === new Date().toDateString()
	)
	remindersThatMatchesActualDay.forEach(async (r) => {
		await db.patch(r._id, { status: 'FINISHED' })
	})
})
