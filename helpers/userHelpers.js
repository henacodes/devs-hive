import User from "../models/User.js";

export const createUser = async (ctx) => {
  const { first_name, last_name, id } = ctx.chat;
  const { isDeveloper } = ctx.session.user;
  const userExists = await User.findOne({ tgId: id });
  if (userExists) {
    ctx.session.user.dbId = userExists.id;
    ctx.session.user.isDeveloper = userExists.isDeveloper;
    ctx.reply(`Welcome back ${userExists.firstName} `);
  } else {
    const newUser = new User({
      firstName: first_name,
      lastName: last_name,
      tgId: id,
      isDeveloper,
    });
    await newUser.save();
    ctx.reply(`Welcome ${ctx.chat.first_name}. `);
  }
};
