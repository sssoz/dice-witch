const { availableDice, maxDice } = require("../constants");
const {
  sendDiceResultMessage,
  sendHelperMessage,
  sendDiceRolledMessage,
  sendDiceOverMaxMessage,
  sendNeedPermissionMessage,
} = require("../messages");
const {
  rollDice,
  generateDiceAttachment,
  checkForAttachPermission,
} = require("../services");
const { getTotalDiceRolled } = require("../helpers");

module.exports = {
  name: "roll",
  aliases: ["r"],
  description: "Throw some dice",
  usage:
    "[dice notation], e.g. 1d20 2d12. Type `!roll` with no arguments for a detailed explanation",
  async execute(message, args, _, logOutputChannel) {
    if (!args.length)
      return sendHelperMessage(message, module.exports.name, logOutputChannel);
    if (!checkForAttachPermission(message))
      return sendNeedPermissionMessage(message, logOutputChannel);

    const { diceArray, resultArray } = rollDice(args, availableDice);
    if (!diceArray.length) {
      return sendHelperMessage(message, module.exports.name, logOutputChannel);
    }
    if (getTotalDiceRolled(diceArray) > maxDice) {
      return sendDiceOverMaxMessage(message);
    }

    sendDiceRolledMessage(message, diceArray);
    const attachment = await generateDiceAttachment(diceArray);
    return sendDiceResultMessage(
      resultArray,
      message,
      attachment,
      undefined,
      undefined,
      logOutputChannel
    );
  },
};
