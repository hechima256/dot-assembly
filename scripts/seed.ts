import mongoose from "mongoose";
import { PixelArt } from "@/models/PixelArt";
import connectDB from "@/utils/mongodb";

const seedData = async () => {
	try {
		await connectDB();

		// 既にデータが存在する場合は削除
		await PixelArt.deleteMany({});

		// ダミーデータを挿入
		await PixelArt.create({
			color: "#FF5733",
			colorHistory: [{ color: "#FF5733", timestamp: new Date() }],
		});

		console.log("Dummy data inserted");
	} catch (error) {
		console.error("Error seeding data:", error);
	} finally {
		mongoose.connection.close();
	}
};

seedData();
