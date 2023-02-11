const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rol')
    .setDescription('Nasıl rol alınabileceği ve kayıt olabileceği hakkında bilgi içerir.'),
  async execute(interaction) {
    await interaction.reply({
      content:
        'Çok kısa sürede kocaman bir ekip olduk, proje yönetiminin sağlıklı bir şekilde yapılabilmesi için yeni gelen arkadaşlarımızın aşağıdaki kayıt formunu doldurması gerekmektedir. Formu doldurduktan sonra ilgili ekiplerimiz başvurunuzu inceleyerek ihtiyaç halinde sizinle iletişime geçeceklerdir. O zaman kadar duyuru kanallarımızdan tüm projelerimiz hakkında bilgi alabilirsin.\n[Form linki için tıklayın!](<https://app.retable.io/form/j3DtfkIkYlqj2cxn>)',
      ephemeral: true,
    })
  },
}
