const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('fikir')
    .setDescription('Fikirlerinizi bizimle nasıl paylaşabileceğiniz hakkında bilgi içerir.'),
  async execute(interaction) {
    await interaction.reply({
      content: `Fikirlerinizi bizimle paylaşmaya hevesli olduğunuz için çok mutluyuz, ${interaction.user}. Fakat fikirlerinizin incelenmesi ve hiç bir fikrin gözden kaçmaması için aşağıdaki formu doldurmanız gerekmektedir. \n[Form linki için tıklayın!](<https://app.retable.io/form/RVC67K3Ai5kQ5w4s>)`,
      ephemeral: true,
    })
  },
}
