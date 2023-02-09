const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder().setName('komutlar').setDescription('Sunucudaki komutlar hakkında bilgi verir.'),
  async execute(interaction) {
    await interaction.reply({
      content: `${interaction.user}, \`/komutlar:\` IT Deprem Yardım tarafından geliştirilen projelerimizi görüntüleyebilir ve haklarında bilgi alabilirsiniz.\n\`/rol:\` Nasıl rol alınabileceği ve kayıt olabileceği hakkında bilgi içerir.\n\`/fikir:\` Fikirlerinizi bizimle nasıl paylaşabileceğiniz hakkında bilgi içerir.\n\`/feedback:\`  Feedbacklerinizi bizimle nasıl paylaşabileceğiniz hakkında bilgi içerir.\n\`/kurumsal-destek:\` Bize nasıl kurumsal destek verebileceğiniz hakkında bilgi içerir.`,
      ephemeral: true,
    })
  },
}
