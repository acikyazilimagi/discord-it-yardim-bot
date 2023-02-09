const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('kayıt')
    .setDescription('Ad ve soyad değiştirmenizi sağlar.')
    .addStringOption((option) => option.setName('ad').setDescription('Adınızı giriniz.').setRequired(true))
    .addStringOption((option) => option.setName('soyad').setDescription('Soyadınızı giriniz.').setRequired(true)),

  async execute(interaction) {
    try {
      const ad = interaction.options.getString('ad')
      const soyad = interaction.options.getString('soyad')
      await interaction.member.setNickname(`${ad} ${soyad}`)
      await interaction.reply({ content: 'Ad ve soyadınız değiştirildi.', ephemeral: true })
    } catch (error) {
      console.error(error)
      // console.log(error.rawError)
      // console.log(error.rawError.message)
      await interaction.reply(
        `Ad ve soyadınız değiştirilemedi. Hata: ${error.rawError.code} - ${error.rawError.message}`},
      )
    }
  },
}
