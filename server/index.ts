import { Hono } from "hono";
import {connectDB} from './config/db'
const app = new Hono();
connectDB()
// Define a simple route
app.get("/whatsapp", (c) => {
  return c.text("Hello, Bun + Hono!");
});

// Start the server
export default {
  port: 4000,
  fetch: app.fetch,
};
