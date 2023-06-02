import { NavLink, Navigate, Outlet } from 'react-router-dom'
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/clerk-react'

export function HomeOutlet() {
	const { isLoaded, user } = useUser()
	return (
		<>
			<header className="p-6 border-b-2 border-primary-50 ">
				<nav className="container flex flex-row items-center justify-between max-w-4xl mx-auto ">
					<NavLink aria-disabled={!isLoaded} to="/home">
						{isLoaded ? user?.username : 'Loading...'}
					</NavLink>
					<ul className="flex flex-row">
						<SignedIn>
							<UserButton afterSignOutUrl="/" />
						</SignedIn>
						<SignedOut>
							<Navigate to="/" />
						</SignedOut>
					</ul>
				</nav>
			</header>
			<Outlet />
		</>
	)
}
