export async function GET(request: Request) {
	const message = {
		hoge: 0,
		fuga: "hello",
	};

	return Response.json({ message });
}
