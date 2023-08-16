import dotenv from "dotenv";
dotenv.config();

const { CHANNEL_HANDLE } = process.env;
export const isMember = async (ctx) => {
  const channel = await ctx.api.getChat(CHANNEL_HANDLE);
  try {
    const member = await ctx.api.getChatMember(channel.id, ctx.chat.id);
    next();
  } catch (error) {
    ctx.reply("First join our channel to be able to be able to do this", {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "DevsHive Channel",
              url: `https://t.me/${CHANNEL_HANDLE.slice(1)}`,
            },
          ],
        ],
      },
    });
  }
};
