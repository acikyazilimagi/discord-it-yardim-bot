const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('bireysel-destek')
    .setDescription('Bize nasıl bireysel destek verebileceğiniz hakkında bilgi içerir.'),
  async execute(interaction) {
    await interaction.reply(
      'Merhaba eğer formu dolduysanız size ulaşabiliriz.\nŞuan insan kaynağı dolmuş durumdadır.\n[Form linki için tıklayın!](<https://app.retable.io/form/qdjgyl2NHrE5CLnA>)',
    )
  },
}
