export function getRemainingTime(comparativeDate: Date) {
	const oneDay = 24 * 60 * 60 * 1000
	const actualDate = new Date()
	const reminderDate = new Date(comparativeDate)
	const actualDateUTC = Date.UTC(
		actualDate.getFullYear(),
		actualDate.getMonth(),
		actualDate.getDate()
	)
	const reminderDateUTC = Date.UTC(
		reminderDate.getFullYear(),
		reminderDate.getMonth(),
		reminderDate.getDate()
	)

	const remainingTime = (reminderDateUTC - actualDateUTC) / oneDay
	return remainingTime
}
