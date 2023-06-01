import { render } from 'preact'
import { App } from './app.tsx'
import { ClerkProvider } from '@clerk/clerk-react'
import './tailwind.css'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

render(
	<ClerkProvider publishableKey={PUBLISHABLE_KEY}>
		<App />
	</ClerkProvider>,
	document.getElementById('app') as HTMLElement
)
