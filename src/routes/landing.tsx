import { NavLink } from 'react-router-dom'

export function Landing() {
	return (
		<>
			<header className="p-6 ">
				<nav className="container flex flex-row items-center justify-between max-w-4xl mx-auto text-lg  leading-7 [&:not(:first-child)] font-bold">
					<NavLink to="/ " className="hover:opacity-50">
						Noxy - calendar
					</NavLink>
					<NavLink to="/login" className="underline hover:opacity-50">
						Empieza ya!
					</NavLink>
				</nav>
			</header>
			<main className="container flex flex-col justify-center h-screen max-w-4xl mx-auto space-y-5">
				<h2 className="text-5xl font-bold text-center text-primary">
					Crear recordatorios nunca fue{' '}
					<span className="text-emerald-500">tan facil.</span>
				</h2>
				<p className="text-center opacity-70">
					En Noxy - calendar, podés definir tus recordatorios de todo tipo, y previo
					a su fecha máxima, recibirás una notificación del mísmo.
				</p>
				<NavLink
					to="/login"
					className="self-center w-full max-w-xs p-3 mt-5 font-bold text-center text-white rounded-lg bg-primary hover:bg-primary/80 "
				>
					Empieza ya a utilizar Noxy - calendar!
				</NavLink>
			</main>
			<footer className="p-5 font-medium text-center">
				<p>
					© 2023, n0xZ. Powered by <span className="text-sky-500">React + Vite</span>{' '}
					💙
				</p>
			</footer>
		</>
	)
}
