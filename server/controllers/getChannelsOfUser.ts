
import { Bot } from 'grammy';
import { logger } from '../utils/logger';

const bot = new Bot(process.env.BOT_TOKEN); // Replace with your bot's token

// Fetch channels that the bot is an admin of
export async function getAdminChannels(): Promise<any[]> {
  try {
    // Using getUpdates method to get the channels the bot is part of
    const updates = await bot.api.getUpdates();

    // Filter the updates to get channels where the bot is an admin
    const channels = updates
      .filter((update) => update.message?.chat.type === 'channel' && update.message.chat.admin)
      .map((update) => update.message?.chat);

    return channels || [];
  } catch (error) {
    logger.error('Error fetching channels:', error);
    throw new Error('Error fetching channels');
  }
}
