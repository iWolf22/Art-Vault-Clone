export default function Container({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex justify-center">
			<div className="container">
				{children}
			</div>
		</div>
	);
}