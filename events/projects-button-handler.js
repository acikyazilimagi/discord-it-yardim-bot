const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')

const sites = {
  depremyardimcom: {
    url: 'https://depremyardim.com',
    description:
      'Depremyardim.com afet zamanlarında hayatını kaybetmekte tehlikeye düşen insanlar için bir fırsattır. Kullanıcılar, kendileri veya yardıma ihtiyaç duyan insanların bilgilerini, siteye ekleyebilirler. Bu bilgiler, AFAD ve TSK gibi yardım kuruluşlarına doğrudan yönlendirilir ve bu şekilde afetzedelerin kurtarılmasına yardımcı olunur. Depremyardim.com, depremzedelerin erken müdahale ile hayatta kalma şansını arttırır.',
  },
  beniyiyimcom: {
    url: 'https://beniyiyim.com',
    description:
      'Beniyiyim.com Hayat kurtaran bir adım: Beniyiyim.com. Deprem, sel gibi doğal afetler sonrası enkaz altında kalanların anlık durumlarını bildirebilmeleri veya yardım için çağrısında bulunabilmeleri için geliştirilen bir uygulamadır. Konum bilgilerinizi uygulamaya girerek afet durumunda hayatınızı veya başkalarının hayatını kurtarabilirsiniz.',
  },
  afetharitacom: {
    url: 'https://afetharita.com',
    description:
      'Afetharita.com Afet durumlarında enkaz altındaki veya yardıma ihtiyacı olanların anlık durumlarını takip edebilir veya yardım için çağrıda bulunabilirsiniz.',
  },
  afetbilgicom: {
    url: 'https://afetbilgi.com',
    description:
      'Afetbilgi.com Deprem sonrası hayati bilgiye ihtiyaç duyduğunuzda Afetbilgi.com sizin yanınızda. Geçici barınma ve toplanma alanları, önemli telefon numaraları, bağış kanalları gibi hayati bilgilere buradan ulaşabilirsiniz.',
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
    const site = sites[customId]

    if (!site) return
    await interaction.deferReply({ ephemeral: true })
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setLabel('Siteye Git').setURL(site.url).setStyle(ButtonStyle.Link),
    )

    interaction.editReply({
      content: `${interaction.user} \n**${customId}**, ${site.description}`,
      components: [row],
      ephemeral: true,
    })
  },
}
