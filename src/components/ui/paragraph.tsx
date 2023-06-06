import { ReactNode } from 'react'

export default function Paragraph(props: {
	children: ReactNode
	className?: string
}) {
	return (
		<p className={`${props.className} leading-7 [&:not(:first-child)]:mt-6`}>
			{props.children}
		</p>
	)
}
