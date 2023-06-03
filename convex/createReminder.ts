import { mutation } from './_generated/server'

export default mutation(
	async (
		{ db },
		{
			description,

			title,
			expiringDate,
			userId,
		}: {
			title: string
			description: string
			expiringDate: Date
			userId: string
		}
	) => {
		const actualDay = Date.now().toString()
		const createdReminder = await db.insert('reminders', {
			userId,
			title,
			description,
			expiringDate: expiringDate.toISOString(),
			createdAt: actualDay,
		})
		return createdReminder
	}
)
