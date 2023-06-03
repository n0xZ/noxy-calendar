import { mutation } from './_generated/server'
import { Id } from './_generated/dataModel'
export default mutation(async ({ db }, { doc }: { doc: Id<'reminders'> }) => {
	const deletedReminder = await db.delete(doc)
	return deletedReminder
})
