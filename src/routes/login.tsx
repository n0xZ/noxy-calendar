import { SignIn, useSession } from '@clerk/clerk-react'
import { Navigate } from 'react-router-dom'

export function Login() {
	const { isLoaded, isSignedIn } = useSession()
	if (!isLoaded) return <div>Loading...</div>
	if (isSignedIn && isLoaded) return <Navigate to="/home" />
	return (
		<main className="grid h-screen place-items-center ">
			<SignIn
				routing="path"
				path="/login"
				afterSignInUrl="/home"
				redirectUrl="/home"
			/>
		</main>
	)
}
