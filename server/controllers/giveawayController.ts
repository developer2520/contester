import { client } from "/config/db";
import { ObjectId } from "mongodb";
import { Context } from "hono";

const db = client.db("giveawayDB");
const giveaways = db.collection("giveaways");
const participants = db.collection("participants");

// 🎁 Create a giveaway
export const createGiveaway = async (c: Context) => {
  const { creator_id, title, description, prize, deadline } = await c.req.json();

  const newGiveaway = {
    creator_id,
    title,
    description,
    prize,
    deadline: new Date(deadline),
    participants: [],
    winner: null,
    createdAt: new Date(),
  };

  const result = await giveaways.insertOne(newGiveaway);
  return c.json({ success: true, giveawayId: result.insertedId });
};

// 🎟️ Join a giveaway
export const joinGiveaway = async (c: Context) => {
  const { giveaway_id, user_id } = await c.req.json();

  const giveaway = await giveaways.findOne({ _id: new ObjectId(giveaway_id) });

  if (!giveaway) return c.json({ success: false, error: "Giveaway not found" });

  if (giveaway.participants.includes(user_id)) {
    return c.json({ success: false, error: "Already joined" });
  }

  await giveaways.updateOne(
    { _id: new ObjectId(giveaway_id) },
    { $push: { participants: user_id } }
  );

  await participants.insertOne({ giveaway_id, user_id, joinedAt: new Date() });

  return c.json({ success: true, message: "Joined successfully!" });
};

// 🎲 Pick a winner
export const pickWinner = async (c: Context) => {
  const { giveaway_id } = await c.req.json();

  const giveaway = await giveaways.findOne({ _id: new ObjectId(giveaway_id) });

  if (!giveaway) return c.json({ success: false, error: "Giveaway not found" });

  if (giveaway.winner) {
    return c.json({ success: false, error: "Winner already chosen" });
  }

  if (giveaway.participants.length === 0) {
    return c.json({ success: false, error: "No participants" });
  }

  const winnerId =
    giveaway.participants[Math.floor(Math.random() * giveaway.participants.length)];
import { client } from "../db/connect";
import { ObjectId } from "mongodb";
import { Context } from "hono";

const db = client.db("giveawayDB");
const giveaways = db.collection("giveaways");
const participants = db.collection("participants");

// 🎁 Create a giveaway
export const createGiveaway = async (c: Context) => {
  const { creator_id, title, description, prize, deadline } = await c.req.json();

  const newGiveaway = {
    creator_id,
    title,
    description,
    prize,
    deadline: new Date(deadline),
    participants: [],
    winner: null,
    createdAt: new Date(),
  };

  const result = await giveaways.insertOne(newGiveaway);
  return c.json({ success: true, giveawayId: result.insertedId });
};

// 🎟️ Join a giveaway
export const joinGiveaway = async (c: Context) => {
  const { giveaway_id, user_id } = await c.req.json();

  const giveaway = await giveaways.findOne({ _id: new ObjectId(giveaway_id) });

  if (!giveaway) return c.json({ success: false, error: "Giveaway not found" });

  if (giveaway.participants.includes(user_id)) {
    return c.json({ success: false, error: "Already joined" });
  }

  await giveaways.updateOne(
    { _id: new ObjectId(giveaway_id) },
    { $push: { participants: user_id } }
  );

  await participants.insertOne({ giveaway_id, user_id, joinedAt: new Date() });

  return c.json({ success: true, message: "Joined successfully!" });
};

// 🎲 Pick a winner
export const pickWinner = async (c: Context) => {
  const { giveaway_id } = await c.req.json();

  const giveaway = await giveaways.findOne({ _id: new ObjectId(giveaway_id) });

  if (!giveaway) return c.json({ success: false, error: "Giveaway not found" });

  if (giveaway.winner) {
    return c.json({ success: false, error: "Winner already chosen" });
  }

  if (giveaway.participants.length === 0) {
    return c.json({ success: false, error: "No participants" });
  }

  const winnerId =
    giveaway.participants[Math.floor(Math.random() * giveaway.participants.length)];

  await giveaways.updateOne(
    { _id: new ObjectId(giveaway_id) },
    { $set: { winner: winnerId } }
  );

  return c.json({ success: true, winnerId });
};

// 📝 Get giveaway details
export const getGiveaway = async (c: Context) => {
  const giveaway = await giveaways.findOne({ _id: new ObjectId(c.req.param("id")) });

  if (!giveaway) return c.json({ success: false, error: "Giveaway not found" });

  return c.json({ success: true, giveaway });
};

  await giveaways.updateOne(
    { _id: new ObjectId(giveaway_id) },
    { $set: { winner: winnerId } }
  );

  return c.json({ success: true, winnerId });
};

// 📝 Get giveaway details
export const getGiveaway = async (c: Context) => {
  const giveaway = await giveaways.findOne({ _id: new ObjectId(c.req.param("id")) });

  if (!giveaway) return c.json({ success: false, error: "Giveaway not found" });

  return c.json({ success: true, giveaway });
};
