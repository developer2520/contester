import { ObjectId } from "mongodb";

export interface Giveaway {
  _id?: ObjectId; // Optional since MongoDB auto-generates it
  creator_id: string; // Telegram User ID
  title: string;
  description?: string;
  prize: string;
  deadline: Date;
  participants: string[]; // Array of user IDs
  winner?: string; // The user ID of the winner (if chosen)
  createdAt: Date;
}
