const { SlashCommandBuilder } = require('discord.js')
const translate = require('translatte')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('translate')
    .setDescription(' Translate Bla Bla To Leanguage (EN,SY)')
    .addStringOption((option) => option.setName('word').setDescription('Word to translate').setRequired(true))
    .addStringOption((option) => option.setName('language').setDescription('Language to translate').setRequired(true)),

  async execute(interaction) {
    try {
      const word = interaction.options.getString('word')
      const language = interaction.options.getString('language')
      const result = await translate(word, { to: language.toUpperCase() })
      console.log('reuslt:', result)
      await interaction.reply(
        `${interaction.user} :  [${result.from.language.iso.toUpperCase()}]->[${language.toUpperCase()}] ${
          result.text
        }`,
      )
    } catch (error) {
      console.error(error)
      console.log(error.rawError)
      console.log(error.rawError.message)
      // rawError: { message: 'Unknown interaction', code: 10062 },
      if (error.rawError) {
        await interaction.reply(
          `Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz. **Hata:** ${error.rawError.message} (${error.rawError.code})`,
        )
      } else {
        await interaction.reply(`Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz. **Hata:** ${error.message}`)
      }
    }
  },
}
