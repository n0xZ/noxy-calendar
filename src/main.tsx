import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app.tsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { ConvexProvider, ConvexReactClient } from 'convex/react'
import './tailwind.css'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const convexClient = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL!)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ConvexProvider client={convexClient}>
			<ClerkProvider publishableKey={PUBLISHABLE_KEY}>
				<App />
			</ClerkProvider>
		</ConvexProvider>
	</React.StrictMode>
)
