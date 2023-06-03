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
						const { HomeGeneral } = await import('./routes/home/general')
						return {
							Component: HomeGeneral,
						}
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
