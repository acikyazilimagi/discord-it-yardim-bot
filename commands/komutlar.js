const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder().setName('komutlar').setDescription('Sunucudaki komutlar hakkında bilgi verir.'),
  async execute(interaction) {
    await interaction.reply({
      content: `${interaction.user},\n\`/komutlar\`: IT Deprem Yardım içerisinde kullanabileceğiniz komutları listeler.\n\`/projeler\`: IT Deprem Yardım tarafından geliştirilen projelerimizi görüntüleyebilir ve hakkında bilgi alabilirsiniz.\n\`/rol\`: Nasıl rol alınabileceği ve kayıt olabileceği hakkında bilgi içerir.\n\`/fikir\`: Fikirlerinizi bizimle nasıl paylaşabileceğiniz hakkında bilgi içerir.\n\`/feedback\`:  Feedbacklerinizi bizimle nasıl paylaşabileceğiniz hakkında bilgi içerir.\n\`/bireysel-destek\`: Bizlere destek olmak için forma ulaşmabilirsiniz.\n\`/kurumsal-destek\`: Bize nasıl kurumsal destek verebileceğiniz hakkında bilgi içerir.\n\`/kayıt [ad] [soyad]\`: Sunucu içerisinde adınızı ve soyadınızı güncellemenizi sağlar.\n\`/pin\` Sabitlenmiş mesajların kontrol edilmesi hatırlatılır.\n\`/sescek\` Belirtilen kişiyi olduğun sesli kanala çeker.`,
      ephemeral: true,
    })
  },
}
