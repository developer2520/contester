import { Hono } from "hono";

const app = new Hono();

// Define a simple route
app.get("/whatsapp", (c) => {
  return c.text("Hello, Bun + Hono!");
});

// Start the server
export default {
  port: 3000,
  fetch: app.fetch,
};
