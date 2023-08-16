// Dependencies
import mongoose from "mongoose";
import { Bot, session } from "grammy";
import dotenv from "dotenv";

// constants
import commands from "./constants/commands.js";

// helper functions

// middlewares
import { isMember } from "./middlewares/userMiddlewares.js";
dotenv.config();
const { BOT_TOKEN, NODE_ENV } = process.env;

const bot = new Bot(BOT_TOKEN);

bot.command(["start", "help"], async (ctx) => {
  ctx.reply("Welcome");
});

bot.command("register");

if (NODE_ENV == "production") {
} else {
  bot.start();
}
