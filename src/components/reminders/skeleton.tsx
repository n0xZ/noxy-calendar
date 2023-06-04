import { Edit, ChevronRight } from 'lucide-react'
import { Skeleton } from '../ui/skeleton'

export default function ReminderSkeleton() {
	return (
		<section className="grid w-full gap-4">
			{/* CardContainer */}
			<article className="w-full h-48 border rounded-lg shadow-sm bg-card animate-pulse text-card-foreground">
				{/* Card */}
				<header className="flex flex-col space-y-1.5 p-6">
					{/* CardHeader */}
					<article>
						{/* CardTitle */}
						<aside className="flex flex-row items-center justify-between text-lg font-semibold leading-none tracking-tight">
							<Skeleton className="h-6 bg-gray-300 w-36 animate-pulse" />
							<Skeleton className="w-24 h-6 bg-gray-300 animate-pulse" />
						</aside>
					</article>
				</header>
				{/* CardContent */}
				<article className="grid gap-5 p-6 pt-0">
					<aside className="flex items-center justify-end p-4 space-x-5 border rounded-md">
						<Edit className="w-6 h-6 hover:opacity-60" />
						<ChevronRight className="w-6 h-6 hover:opacity-60" />
					</aside>
				</article>
			</article>
			{/* CardContainer */}
			<article className="w-full h-48 border rounded-lg shadow-sm bg-card animate-pulse text-card-foreground">
				{/* Card */}
				<header className="flex flex-col space-y-1.5 p-6">
					{/* CardHeader */}
					<article>
						{/* CardTitle */}
						<aside className="flex flex-row items-center justify-between text-lg font-semibold leading-none tracking-tight">
							<Skeleton className="h-6 bg-gray-300 w-36 animate-pulse" />
							<Skeleton className="w-24 h-6 bg-gray-300 animate-pulse" />
						</aside>
					</article>
				</header>
				{/* CardContent */}
				<article className="grid gap-5 p-6 pt-0">
					<aside className="flex items-center justify-end p-4 space-x-5 border rounded-md">
						<Edit className="w-6 h-6 hover:opacity-60" />
						<ChevronRight className="w-6 h-6 hover:opacity-60" />
					</aside>
				</article>
			</article>
			{/* CardContainer */}
			<article className="w-full h-48 border rounded-lg shadow-sm bg-card animate-pulse text-card-foreground">
				{/* Card */}
				<header className="flex flex-col space-y-1.5 p-6">
					{/* CardHeader */}
					<article>
						{/* CardTitle */}
						<aside className="flex flex-row items-center justify-between text-lg font-semibold leading-none tracking-tight">
							<Skeleton className="h-6 bg-gray-300 w-36 animate-pulse" />
							<Skeleton className="w-24 h-6 bg-gray-300 animate-pulse" />
						</aside>
					</article>
				</header>
				{/* CardContent */}
				<article className="grid gap-5 p-6 pt-0">
					<aside className="flex items-center justify-end p-4 space-x-5 border rounded-md">
						<Edit className="w-6 h-6 hover:opacity-60" />
						<ChevronRight className="w-6 h-6 hover:opacity-60" />
					</aside>
				</article>
			</article>
			{/* CardContainer */}
			<article className="w-full h-48 border rounded-lg shadow-sm bg-card animate-pulse text-card-foreground">
				{/* Card */}
				<header className="flex flex-col space-y-1.5 p-6">
					{/* CardHeader */}
					<article>
						{/* CardTitle */}
						<aside className="flex flex-row items-center justify-between text-lg font-semibold leading-none tracking-tight">
							<Skeleton className="h-6 bg-gray-300 w-36 animate-pulse" />
							<Skeleton className="w-24 h-6 bg-gray-300 animate-pulse" />
						</aside>
					</article>
				</header>
				{/* CardContent */}
				<article className="grid gap-5 p-6 pt-0">
					<aside className="flex items-center justify-end p-4 space-x-5 border rounded-md">
						<Edit className="w-6 h-6 hover:opacity-60" />
						<ChevronRight className="w-6 h-6 hover:opacity-60" />
					</aside>
				</article>
			</article>
			{/* CardContainer */}
			<article className="w-full h-48 border rounded-lg shadow-sm bg-card animate-pulse text-card-foreground">
				{/* Card */}
				<header className="flex flex-col space-y-1.5 p-6">
					{/* CardHeader */}
					<article>
						{/* CardTitle */}
						<aside className="flex flex-row items-center justify-between text-lg font-semibold leading-none tracking-tight">
							<Skeleton className="h-6 bg-gray-300 w-36 animate-pulse" />
							<Skeleton className="w-24 h-6 bg-gray-300 animate-pulse" />
						</aside>
					</article>
				</header>
				{/* CardContent */}
				<article className="grid gap-5 p-6 pt-0">
					<aside className="flex items-center justify-end p-4 space-x-5 border rounded-md">
						<Edit className="w-6 h-6 hover:opacity-60" />
						<ChevronRight className="w-6 h-6 hover:opacity-60" />
					</aside>
				</article>
			</article>
			{/* CardContainer */}
			<article className="w-full h-48 border rounded-lg shadow-sm bg-card animate-pulse text-card-foreground">
				{/* Card */}
				<header className="flex flex-col space-y-1.5 p-6">
					{/* CardHeader */}
					<article>
						{/* CardTitle */}
						<aside className="flex flex-row items-center justify-between text-lg font-semibold leading-none tracking-tight">
							<Skeleton className="h-6 bg-gray-300 w-36 animate-pulse" />
							<Skeleton className="w-24 h-6 bg-gray-300 animate-pulse" />
						</aside>
					</article>
				</header>
				{/* CardContent */}
				<article className="grid gap-5 p-6 pt-0">
					<aside className="flex items-center justify-end p-4 space-x-5 border rounded-md">
						<Edit className="w-6 h-6 hover:opacity-60" />
						<ChevronRight className="w-6 h-6 hover:opacity-60" />
					</aside>
				</article>
			</article>
		</section>
	)
}
