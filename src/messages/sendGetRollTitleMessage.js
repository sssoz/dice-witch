const { logEvent } = require("../services");

const sendGetRollTitleMessage = async (message, logOutputChannel) => {
  let title;
  const originalMessage = message;

  const filter = () => message.author.id === originalMessage.author.id;

  await message.channel.send(`${message.author} what's this roll for?`);

  try {
    const collected = await originalMessage.channel.awaitMessages(filter, {
      max: 1,
      time: 30000,
    });
    if (!collected) return;
    if (collected.first().content.length > 256) {
      message.channel.send(
        `that title's too long, ${message.author} -- roll cancelled`
      );
      logEvent(
        "rollTitleRejected",
        logOutputChannel,
        message,
        undefined,
        undefined,
        title
      );
      return;
    }
    title = collected.first().cleanContent;
    collected.first().react("👀");
    logEvent(
      "rollTitleAccepted",
      logOutputChannel,
      message,
      undefined,
      undefined,
      title
    );
  } catch (err) {
    console.error(err);
    message.channel.send(
      `didn't get a reaponse from ${message.author} -- roll cancelled 😢`
    );
    logEvent("rollTitleTimeout", logOutputChannel, message);
    return;
  }
  // eslint-disable-next-line consistent-return
  return title;
};

module.exports = sendGetRollTitleMessage;
