import { mutation } from './_generated/server'
import { Id } from './_generated/dataModel'
export default mutation(
	async (
		{ db },
		{
			description,
			expiringDate,
			title,
			relatedDoc,
		}: {
			title?: string
			description?: string
			expiringDate?: string
			relatedDoc: Id<'reminders'>
		}
	) => {
		const updatedReminder = await db.patch(relatedDoc, {
			title,
			expiringDate: expiringDate,
			description,
		})
		return updatedReminder
	}
)
