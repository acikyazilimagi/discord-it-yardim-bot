const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('pin')
    .setDescription('Sabitlenmiş mesajları kontrol edilmesi hatırlatılır.'),
  async execute(interaction) {
    await interaction.reply({
      content: `Lütfen pinli mesajları kontrol edin.`,
      ephemeral: true,
    })
  },
}
