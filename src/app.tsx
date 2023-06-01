import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Suspense, lazy } from 'preact/compat'

import { Login } from '@/routes/login'

const Landing = lazy(() => import('@/routes/landing'))
export function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			lazy: async () => {
				return {
					Component: Landing,
				}
			},
		},
		{
			path: '/login/*',
			lazy: async () => {
				return {
					Component: Login,
				}
			},
		},
	])
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<RouterProvider router={router} />
		</Suspense>
	)
}
