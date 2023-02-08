const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require('discord.js');

module.exports = {
  name: 'interactionCreate',
  /**
   * @param interaction {import('discord.js').Interaction}
   * @description butonlarda tıklanılan siteler hakkında bilgi gönderir.
   */
  execute(interaction) {
    if (!interaction.isButton()) return;

    const customId = interaction.customId;

    switch (customId) {
      case 'depremyardimcom':
        {
          const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setLabel('Siteye Git')
              .setURL('https://depremyardim.com')
              .setStyle(ButtonStyle.Link)
          );

          interaction.reply({
            content: `${interaction.user} \n**Depremyardim.com**, afet zamanlarında hayatını kaybetmekte tehlikeye düşen insanlar için bir fırsattır. Kullanıcılar, kendileri veya yardıma ihtiyaç duyan insanların bilgilerini, siteye ekleyebilirler. Bu bilgiler, AFAD ve TSK gibi yardım kuruluşlarına doğrudan yönlendirilir ve bu şekilde afetzedelerin kurtarılmasına yardımcı olunur. Depremyardim.com, depremzedelerin erken müdahale ile hayatta kalma şansını arttırır.`,
            components: [row],
          });
        }
        break;

      case 'beniyiyimcom':
        {
          const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setLabel('Siteye Git')
              .setURL('https://beniyiyim.com')
              .setStyle(ButtonStyle.Link)
          );

          interaction.reply({
            content: `${interaction.user} \n**Beniyiyim.com**, Hayat kurtaran bir adım: Beniyiyim.com. Deprem, sel gibi doğal afetler sonrası enkaz altında kalanların anlık durumlarını bildirebilmeleri veya yardım için çağrısında bulunabilmeleri için geliştirilen bir uygulamadır. Konum bilgilerinizi uygulamaya girerek afet durumunda hayatınızı veya başkalarının hayatını kurtarabilirsiniz.`,
            components: [row],
          });
        }
        break;

      case 'afetharitacom':
        {
          const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setLabel('Siteye Git')
              .setURL('https://afetharita.com')
              .setStyle(ButtonStyle.Link)
          );

          interaction.reply({
            content: `${interaction.user} \n**Afetharita.com**, Afet durumlarında enkaz altındaki veya yardıma ihtiyacı olanların anlık durumlarını takip edebilir veya yardım için çağrıda bulunabilirsiniz. `,
            components: [row],
          });
        }
        break;

      case 'afetbilgicom':
        {
          const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setLabel('Siteye Git')
              .setURL('https://afetbilgi.com')
              .setStyle(ButtonStyle.Link)
          );

          interaction.reply({
            content: `${interaction.user} \n**Afetbilgi.com**, Deprem sonrası hayati bilgiye ihtiyaç duyduğunuzda Afetbilgi.com sizin yanınızda. Geçici barınma ve toplanma alanları, önemli telefon numaraları, bağış kanalları gibi hayati bilgilere buradan ulaşabilirsiniz.`,
            components: [row],
          });
        }
        break;
    }
  },
};
