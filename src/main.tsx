import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app.tsx'
import { ClerkProvider } from '@clerk/clerk-react'
import './tailwind.css'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ClerkProvider publishableKey={PUBLISHABLE_KEY}>
			<App />
		</ClerkProvider>
		,
	</React.StrictMode>
)
