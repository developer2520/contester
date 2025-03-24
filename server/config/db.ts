import { MongoClient } from "mongodb";
import "dotenv/config";

const uri: string = process.env.MONGO_URI as string; // Ensure MONGO_URI exists
if (!uri) {
  throw new Error("MONGO_URI is not defined in environment variables");
}

const client = new MongoClient(uri);

export const connectDB = async (): Promise<void> => {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};

export { client };
