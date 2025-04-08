
import { Hono } from 'hono';
import telegramRoutes from './routes/getChannelsOfUserRoute';
import { logger } from './utils/logger';
import { cors } from 'hono/cors';  // Correct import for CORS middleware

// Initialize Hono app
const app = new Hono();

// Use the CORS middleware
app.use(cors());

// Use the routes for Telegram endpoints
app.route('/', telegramRoutes);

// Start the server using `start()`

export default {
   port: 3000,
   fetch: app.fetch,
 };
