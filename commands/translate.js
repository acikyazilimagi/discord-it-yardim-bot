const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('translate')
    .setDescription(' Translate Bla Bla To Leanguage (EN,SY)')
    .addStringOption((option) => option.setName('word').setDescription('Word to translate').setRequired(true))
    .addStringOption((option) => option.setName('language').setDescription('Language to translate').setRequired(true)),

  async execute(interaction) {
    const word = interaction.options.getString('word')
    const language = interaction.options.getString('language')
    const translate = require('translatte')
    const result = await translate(word, { to: language.toUpperCase })
    console.log(interaction)
    await interaction.reply(`<@${interaction.user.id}> :  ${result.text}`)
  },
}
