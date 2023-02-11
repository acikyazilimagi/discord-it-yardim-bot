const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('feedback')
    .setDescription('Feedbacklerinizi bizimle nasıl paylaşabileceğiniz hakkında bilgi içerir.'),
  async execute(interaction) {
    await interaction.reply({
      content: `${interaction.user}, Geliştirilen uygulamalar ve sunucu ile ilgili feedbacklerinizi aşağıdaki formu doldurarak bize iletebilirsiniz.\n[Form linki için tıklayın!](<https://app.retable.io/form/NIfo34pdWuweWtfI>)`,
      ephemeral: true,
    })
  },
}
