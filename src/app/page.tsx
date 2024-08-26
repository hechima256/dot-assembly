import Image from "next/image";

export default function Home() {
	const cardData = [
		{
			id: 1,
			title: "Card Title 1",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
		},
		{
			id: 2,
			title: "Card Title 2",
			content:
				"Accusamus quod facere tempora alias eos, eum architecto repudiandae.",
		},
		{
			id: 3,
			title: "Card Title 3",
			content: "Doloribus magni ut necessitatibus, esse maiores illo.",
		},
		{
			id: 4,
			title: "Card Title 4",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
		},
		{
			id: 5,
			title: "Card Title 5",
			content:
				"Accusamus quod facere tempora alias eos, eum architecto repudiandae.",
		},
		{
			id: 6,
			title: "Card Title 6",
			content: "Doloribus magni ut necessitatibus, esse maiores illo.",
		},
		{
			id: 7,
			title: "Card Title 7",
			content:
				"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			id: 8,
			title: "Card Title 8",
			content:
				"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
		{
			id: 9,
			title: "Card Title 9",
			content:
				"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		},
		{
			id: 10,
			title: "Card Title 10",
			content:
				"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		},
		{
			id: 11,
			title: "Card Title 11",
			content:
				"Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.",
		},
		{
			id: 12,
			title: "Card Title 12",
			content:
				"Mauris eleifend est et turpis dignissim, a iaculis arcu aliquet. Curabitur vehicula, ante sed sodales luctus, felis metus convallis est.",
		},
	];

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col">
			<header className="bg-primary-500 text-white py-6 pl-8">
				<p className="text-4xl font-bold">Dot Assembly</p>
			</header>
			<main className="flex-grow flex flex-col justify-center p-4">
				<div className="container mx-auto ">
					<h1 className="text-4xl font-bold pb-8">Card Items</h1>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
						{cardData.map((card) => (
							<div
								key={card.id}
								className="bg-white p-6 rounded-lg shadow-lg min-h-[200px]"
							>
								<p className="text-2xl font-semibold text-gray-900 mb-2">
									{card.title}
								</p>
								<p className="text-gray-700 text-base leading-relaxed">
									{card.content}
								</p>
							</div>
						))}
					</div>
				</div>
			</main>
			<footer className="bg-primary-600 text-white py-6 mt-8">
				<div className="container mx-auto px-4">
					<div className="flex flex-col items-center space-y-4">
						<p className="text-lg font-semibold">
							© 2024 Dot Assembly. All rights reserved.
						</p>
						<p className="text-gray-300">
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Quasi necessitatibus illum, sunt eveniet a
							labore!
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
