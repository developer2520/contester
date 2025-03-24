import { Hono } from "hono";
import {connectDB} from './config/db'
import {Bot } from 'grammy'

const bot = new Bot("7343758532:AAGTYrA72OvtRiXwtYLCEHeaE57N84p4fAc")
const app = new Hono();
connectDB()
// Define a simple route
app.get("/whatsapp", (c) => {
  return c.text("Hello, Bun + Hono!");
});

bot.command('start', (ctx) => {
ctx.reply("Welcome")
})

bot.start()
// Start the server
export default {
  port: 4000,
  fetch: app.fetch,
};
