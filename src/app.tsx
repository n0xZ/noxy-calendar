import { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

export function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			lazy: async () => {
				const { Landing } = await import('./routes/landing')
				return {
					Component: Landing,
				}
			},
		},
		{
			path: '/login/*',
			lazy: async () => {
				const { Login } = await import('./routes/login')
				return {
					Component: Login,
				}
			},
		},
		{
			path: '/home',
			lazy: async () => {
				const { HomeOutlet } = await import('./routes/home.outlet')
				return {
					Component: HomeOutlet,
				}
			},

			children: [
				{
					path: '',
					lazy: async () => {
						const { HomeGeneral, ErrorBoundary } = await import(
							'./routes/home/general'
						)
						return {
							Component: HomeGeneral,
							ErrorBoundary,
						}
					},
				},
				{
					path: 'reminder/:id',
					lazy: async () => {
						const { ReminderById, ErrorBoundary } = await import(
							'./routes/home/reminder/$id'
						)
						return { Component: ReminderById, ErrorBoundary }
					},
				},
				{
					path: 'reminder/edit/:id',
					lazy: async () => {
						const { EditReminder, ErrorBoundary } = await import(
							'./routes/home/reminder/edit'
						)
						return { Component: EditReminder, ErrorBoundary }
					},
				},
				{
					path: 'reminder/create',
					lazy: async () => {
						const { CreateReminder, ErrorBoundary } = await import(
							'./routes/home/reminder/create'
						)
						return { Component: CreateReminder, ErrorBoundary }
					},
				},
			],
		},
	])
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<RouterProvider router={router} />
		</Suspense>
	)
}
