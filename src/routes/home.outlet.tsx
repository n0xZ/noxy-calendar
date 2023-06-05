import {
	Menubar,
	MenubarContent,
	MenubarTrigger,
	MenubarItem,
	MenubarMenu,
} from '@/components/ui/menubar'
import { UserButton, useUser } from '@clerk/clerk-react'

import { Authenticated, Unauthenticated, AuthLoading } from 'convex/react'
import { ChevronUp, CalendarPlus } from 'lucide-react'

function Avatar() {
	return <div className="w-8 h-8 bg-gray-500 rounded-full animate-pulse"></div>
}

function HomeMenubar() {
	return (
		<Menubar className="space-x-6 bg-transparent border-0">
			<MenubarMenu>
				<MenubarTrigger className="flex flex-row items-center gap-1 ">
					<ChevronUp />
					<span>Recordatorio</span>
				</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						<NavLink
							to="/home/reminder/create"
							className="flex flex-row items-center space-x-2"
						>
							<CalendarPlus />
							<span>Crear nuevo recordatorio</span>
						</NavLink>
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<AuthLoading>
					<Avatar />
				</AuthLoading>
				<Authenticated>
					<UserButton afterSignOutUrl="/" />
				</Authenticated>
				<Unauthenticated>
					<Navigate to="/" />
				</Unauthenticated>
			</MenubarMenu>
		</Menubar>
	)
}
export function HomeOutlet() {
	const { isLoaded, user } = useUser()
	return (
		<>
			<header className="w-full p-5 text-base border-b-2 border-[#e9ecef]">
				<nav className="container flex flex-row items-center justify-between max-w-4xl mx-auto font-bold opacity-80">
					<NavLink aria-disabled={!isLoaded} to="/home" className="font-bold ">
						{isLoaded ? user?.username : 'Cargando...'}
					</NavLink>

					<HomeMenubar />
				</nav>
			</header>
			<main className="container w-full h-full max-w-4xl mx-auto mt-5">
				<Outlet />
			</main>
		</>
	)
}
