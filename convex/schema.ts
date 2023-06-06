import { defineSchema, defineTable } from 'convex/schema'
import { v } from 'convex/values'

export default defineSchema({
	reminders: defineTable({
		reminderId: v.string(),
		createdAt: v.string(),
		description: v.string(),
		expiringDate: v.string(),
		title: v.string(),
		status: v.union(v.literal('ACTIVE'), v.literal('FINISHED')),
		userId: v.string(),
	})
		.searchIndex('search_by_userId', {
			searchField: 'userId',
			filterFields: ['userId'],
		})
		.searchIndex('search_by_id', {
			searchField: 'reminderId',
			filterFields: ['reminderId'],
		})
		.searchIndex('search_by_activeStatus', {
			searchField: 'status',
			filterFields: ['status'],
		}),
})
