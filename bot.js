// Dependencies
import mongoose from "mongoose";
import { Bot, session } from "grammy";
import dotenv from "dotenv";

// constants
import commands from "./constants/commands.js";

// helper functions
import { createUser } from "./helpers/userHelpers.js";
// middlewares
import { isMember } from "./middlewares/userMiddlewares.js";
import { initialState } from "./constants/sessionState.js";

dotenv.config();
const { BOT_TOKEN, NODE_ENV, MONGO_URI } = process.env;

const bot = new Bot(BOT_TOKEN);

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

bot.use(session({ initial: initialState }));
bot.command(["start", "help"], async (ctx) => {
  const { user } = ctx.session;
  if (!user.dbId) {
    await createUser(ctx);
  }
});

bot.command("register");

if (NODE_ENV == "production") {
} else {
  bot.start();
}
