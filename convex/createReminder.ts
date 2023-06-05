import { mutation } from './_generated/server'

export default mutation(
	async (
		{ db },
		{
			description,
			userId,
			title,
			expiringDate,
			reminderId,
		}: {
			title: string
			description: string
			expiringDate: string
			userId: string
			reminderId: string
		}
	) => {
		const actualDay = new Date()
		const parsedActualDay =
			actualDay.getFullYear() +
			'-' +
			(actualDay.getMonth() + 1) +
			'-' +
			actualDay.getDate()
		const createdReminder = await db.insert('reminders', {
			userId,
			title,
			description,
			reminderId,
			expiringDate,
			status: 'ACTIVE',
			createdAt: parsedActualDay,
		})
		return createdReminder
	}
)
