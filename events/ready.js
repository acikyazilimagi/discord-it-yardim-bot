const { Events, EmbedBuilder } = require('discord.js')
const { mainAnnouncement } = require('../data/config.json')

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`)
    // SAAT BAŞI HATIRLATMA
    setInterval(() => {
      const announcementEmbed = new EmbedBuilder()
        .setColor(0xf26666)
        .setTitle('Herkese merhabalar, hoşgeldiniz! 🙌🏻')
        .setDescription(
          `Çok kısa sürede kocaman bir ekip olduk, proje yönetiminin sağlıklı bir şekilde yapılabilmesi için yeni gelen arkadaşlarımızın aşağıdaki kayıt formunu doldurması gerekmektedir. Formu doldurduktan sonra ilgili ekiplerimiz başvurunuzu inceleyerek ihtiyaç halinde sizinle iletişime geçeceklerdir. O zaman kadar duyuru kanallarımızdan tüm projelerimiz hakkında bilgi alabilirsin.\n**[📌 Kayıt Formu](https://app.retable.io/form/j3DtfkIkYlqj2cxn)**\n\nFikirlerinizi bizimle paylaşmaya hevesli olduğunuz için çok mutluyuz.Fakat fikirlerinizin incelenmesi ve hiç bir fikrin gözden kaçmaması için aşağıdaki formu doldurmanız gerekmektedir.\n**[📌 Fikir Formu](https://app.retable.io/form/RVC67K3Ai5kQ5w4s)** | **[🗣 Github Discussions](<https://github.com/acikkaynak/deprem-yardim-projesi/discussions>)**\n\nGeliştirilen uygulamalar ve sunucu ile ilgili feedbacklerinizi aşağıdaki formu doldurarak bize iletebilirsiniz.\n **[📌 Feedback Formu](https://app.retable.io/form/NIfo34pdWuweWtfI)**\n\nİlginiz için teşekkürler sizi daha yakından tanımamız için aşağıdaki formu lütfen doldurun. Kurumsal iletişim ekibimiz sizler ile iletişime geçeceklerdir.\n**[📌 Kurumsal Destek Formu](https://app.retable.io/form/qdjgyl2NHrE5CLnA)**`,
        )
        .addFields({
          name: '**Açık Yazılım Ağı**',
          value:
            '**[⛓ Github Repoları](https://github.com/orgs/acikkaynak/repositories)\n[⛓ Instagram](https://www.instagram.com/acikyazilimagi/)\n[⛓ Twitter](https://twitter.com/acikyazilimagi)**',
        })
        .setTimestamp()
        .setFooter({ text: 'Her bir saatte bir otomatik paylaşılır.' })

      client.channels.cache.get(mainAnnouncement.channelId).send({ embeds: [announcementEmbed] })
    }, mainAnnouncement.interval * 1000)
    // SAAT BAŞI HATIRLATMA
  },
}
