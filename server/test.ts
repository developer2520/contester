import { Bot } from "grammy";

// Bun automatically loads .env files, but let's check
console.log("BOT_TOKEN:", process.env.BOT_TOKEN);
console.log("BOT_PROVIDER_TOKEN:", process.env.BOT_PROVIDER_TOKEN);

if (!process.env.BOT_TOKEN || !process.env.BOT_PROVIDER_TOKEN) {
    throw new Error("⚠️ Missing BOT_TOKEN or BOT_PROVIDER_TOKEN in .env file!");
}

const bot = new Bot(process.env.BOT_TOKEN!);

bot.command("start", (ctx) => {
    ctx.reply("Hello! I'm your bot. Use /buy to purchase with Telegram Stars.");
});


bot.command("pay", (ctx) => {
    return ctx.replyWithInvoice(
      "Creating a giveaway", // Product title
      "you can support us with these stars" ,// Product description
      "{}", // Product payload, not required for now
      "XTR", // Stars Currency 
      [{ amount: 10000, label: "contester" }, // Product variants
    ]);
  });
// Start the bot
bot.start();
console.log("Bot is running...");
