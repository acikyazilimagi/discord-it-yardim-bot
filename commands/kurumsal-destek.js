const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('kurumsal-destek')
    .setDescription('Bize nasıl kurumsal destek verebileceğiniz hakkında bilgi içerir.'),
  async execute(interaction) {
    await interaction.reply({
      content: `${interaction.user}, İlginiz için teşekkürler sizi daha yakından tanımamız için aşağıdaki formu lütfen doldurun. Kurumsal iletişim ekibimiz sizler ile iletişime geçeceklerdir.\n[Form linki için tıklayın!](<https://app.retable.io/form/qdjgyl2NHrE5CLnA>)`,
      ephemeral: true,
    })
  },
}
