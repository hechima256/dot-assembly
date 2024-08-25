import Image from "next/image";

export default function Home() {
	return (
		<div className="min-h-screen bg-gray-100 flex flex-col">
			<header className="bg-gray-800 text-white py-6 pl-8">
				<h1 className="text-4xl font-bold">Dot Assembly</h1>
			</header>
			<main className="flex-grow flex items-center justify-center">
				<div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
					<p className="text-gray-800 text-center text-lg leading-relaxed">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Impedit, sit omnis commodi accusamus quod facere tempora
						alias eos, eum architecto repudiandae fugiat
						accusantium! Doloribus magni ut necessitatibus, esse
						maiores illo.
					</p>
				</div>
			</main>
		</div>
	);
}
