const { EmbedBuilder } = require('discord.js')

const announcements = {
  announcementEn: {
    title: 'Hello everyone, welcome! 🙌🏻',
    description: `We have became a huge team in a very short time. In order for the project management to be carried out better. Dear new members should fill in the registration form below. After filling out the form, our related teams will review your application and contact you if needed. In this process, you can get more information about all our projects from our announcement channels.\n**[📌 Registration Form](https://app.retable.io/form/j3DtfkIkYlqj2cxn)**\n\nWe are very happy that you are eager to share your ideas with us. If you want to share new ideas and want us to evaluate your ideas, you can fill out the form below. We are very happy that you are eager to share your ideas with us. If you want to share new ideas and want us to evaluate your ideas, you can fill out the form below.\n**[📌 Idea Form](https://app.retable.io/form/RVC67K3Ai5kQ5w4s)** | **[🗣 Github Discussions](<https://github.com/acikkaynak/afet-org/discussions>)**\n\nYou can send us your feedback about the developed projects or the Açık Yazılım Ağı server by filling out the form below.\n **[📌 Feedback Form](https://app.retable.io/form/NIfo34pdWuweWtfI)**\n\nThank you for your interest, please fill out the form below so that we can get to know you better. Our corporate communication team will contact you. Thank you for your interest, please fill out the form below so that we can get to know you better. Our corporate communication team will contact you.\n**[📌 Corporate Support Form](https://app.retable.io/form/qdjgyl2NHrE5CLnA)**`,
    fields: [
      {
        name: '**Açık Yazılım Ağı**',
        value:
          '**[⛓ Github Repositories](https://github.com/orgs/acikkaynak/repositories)\n[⛓ Instagram](https://www.instagram.com/acikyazilimagi/)\n[⛓ Twitter](https://twitter.com/acikyazilimagi)\n[⛓ Linktree](https://linktr.ee/acikyazilimagi)**',
      },
    ],
    footer: 'This message is sent automatically.',
  },
}

module.exports = {
  name: 'interactionCreate',
  /**
   * @param interaction {import('discord.js').Interaction}
   * @description butonlarda tıklanılan siteler hakkında bilgi gönderir.
   */
  async execute(interaction) {
    if (!interaction.isButton()) return

    const { customId } = interaction
    const announcement = announcements[customId]

    if (!announcement) return
    await interaction.deferReply({ ephemeral: true })
    const embed = new EmbedBuilder()
      .setColor(0xf26666)
      .setTitle(announcement.title)
      .setDescription(announcement.description)
      .setFooter({ text: announcement.footer })
    announcement.fields.forEach((field) => {
      embed.addFields({
        name: field.name,
        value: field.value,
      })
    })

    interaction.editReply({
      embeds: [embed],
      ephemeral: true,
    })
  },
}
