const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder().setName('projeler').setDescription('Projeler hakkında bilgi verir.'),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(0xf26666)
      .setAuthor({
        name: 'Aşağıda bulunan projelerden ilgili olanı seçip bilgi alabilirsiniz.',
      })
      .setDescription('1. depremyardim.com\n2. beniyiyim.com\n3. afetharita.com\n4. afetbilgi.com')

    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder().setCustomId('depremyardimcom').setLabel('depremyardim.com').setStyle(ButtonStyle.Primary),
      )
      .addComponents(
        new ButtonBuilder().setCustomId('beniyiyimcom').setLabel('beniyiyim.com').setStyle(ButtonStyle.Primary),
      )
      .addComponents(
        new ButtonBuilder().setCustomId('afetharitacom').setLabel('afetharita.com').setStyle(ButtonStyle.Primary),
      )
      .addComponents(
        new ButtonBuilder().setCustomId('afetbilgicom').setLabel('afetbilgi.com').setStyle(ButtonStyle.Primary),
      )

    await interaction.reply({
      embeds: [embed],
      components: [row],
      ephemeral: true,
    })
  },
}
