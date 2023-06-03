import { defineSchema, defineTable } from 'convex/schema'
import { v } from 'convex/values'

export default defineSchema({
	reminders: defineTable({
		createdAt: v.string(),
		description: v.string(),
		expiringDate: v.string(),
		title: v.string(),
		userId: v.string(),
	}).searchIndex('search_by_userId', {
		searchField: 'userId',
		filterFields: ['userId'],
	}),
})
