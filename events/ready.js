/* eslint-disable prettier/prettier */
const { Events, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const { mainAnnouncement } = require('../data/config.json')

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`)

    const announcementEmbed = new EmbedBuilder()
      .setColor(0xf26666)
      .setTitle('Herkese merhabalar, hoş geldiniz! 🙌🏻')
      .setDescription(
        `Çok kısa sürede kocaman bir ekip olduk, proje yönetiminin sağlıklı bir şekilde yapılabilmesi için yeni gelen arkadaşlarımızın aşağıdaki kayıt formunu doldurması gerekmektedir. Formu doldurduktan sonra ilgili ekiplerimiz başvurunuzu inceleyerek ihtiyaç halinde sizinle iletişime geçeceklerdir. O zaman kadar duyuru kanallarımızdan tüm projelerimiz hakkında bilgi alabilirsin.\n**[📌 Kayıt Formu](https://app.retable.io/form/j3DtfkIkYlqj2cxn)**\n\nFikirlerinizi bizimle paylaşmaya hevesli olduğunuz için çok mutluyuz.Fakat fikirlerinizin incelenmesi ve hiç bir fikrin gözden kaçmaması için aşağıdaki formu doldurmanız gerekmektedir.\n**[📌 Fikir Formu](https://app.retable.io/form/RVC67K3Ai5kQ5w4s)** | **[🗣 Github Discussions](<https://github.com/acikkaynak/afet-org/discussions>)**\n\nGeliştirilen uygulamalar ve sunucu ile ilgili feedbacklerinizi aşağıdaki formu doldurarak bize iletebilirsiniz.\n **[📌 Feedback Formu](https://app.retable.io/form/NIfo34pdWuweWtfI)**\n\nİlginiz için teşekkürler sizi daha yakından tanımamız için aşağıdaki formu lütfen doldurun. Kurumsal iletişim ekibimiz sizler ile iletişime geçeceklerdir.\n**[📌 Kurumsal Destek Formu](https://app.retable.io/form/qdjgyl2NHrE5CLnA)**`,
      )
      .addFields({
        name: '**Açık Yazılım Ağı**',
        value:
          '**[⛓ Github Repoları](https://github.com/orgs/acikkaynak/repositories)\n[⛓ Instagram](https://www.instagram.com/acikyazilimagi/)\n[⛓ Twitter](https://twitter.com/acikyazilimagi)\n[⛓ Linktree](https://linktr.ee/acikyazilimagi)**',
      })
      .setFooter({ text: 'Bu mesaj otomatik olarak paylaşılmaktadır.' })

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('announcementEn').setLabel('ENG').setStyle(ButtonStyle.Danger),
    )

    const channel = client.channels.cache.get(mainAnnouncement.channelId)
    const embedTitle = announcementEmbed.data.title
    let oldMessage

    channel.messages.fetch({ limit: 50 }).then(async (messages) => {
      let botMessage = await messages.find((msg) => {
        if (msg.embeds[0] && msg.embeds[0].title === embedTitle) {
          return msg
        }
      })
      oldMessage = botMessage
    })

    // Morning
    setInterval(async () => {
      // if time is not between 9am and 9pm
      let messages = await channel.messages.fetch({ limit: 50 })

      if (
        new Date().getHours() >= mainAnnouncement.morningTime &&
        new Date().getHours() <= mainAnnouncement.nightTime
      ) {
        if (!messages.find((msg) => msg === oldMessage)) {
          oldMessage = await client.channels.cache
            .get(mainAnnouncement.channelId)
            .send({ embeds: [announcementEmbed], components: [row] })
        }
      }
    }, mainAnnouncement.morningInterval * 1000)

    // Night
    setInterval(async () => {
      let messages = await channel.messages.fetch({ limit: 50 })
      if (new Date().getHours() < mainAnnouncement.morningTime || new Date().getHours() > mainAnnouncement.nightTime) {
        if (!messages.find((msg) => msg === oldMessage)) {
          oldMessage = await client.channels.cache
            .get(mainAnnouncement.channelId)
            .send({ embeds: [announcementEmbed], components: [row] })
        }
      }
    }, mainAnnouncement.nightInterval * 1000)
    // An interval which will be executed every 1 hour if the time is morning (6:00 - 21:00)
  },
}
