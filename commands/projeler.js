const { SlashCommandBuilder } = require('discord.js')

const embed = {
  content: '',
  tts: false,
  components: [
    {
      type: 1,
      components: [
        {
          style: 1,
          label: 'depremyardim.com',
          custom_id: 'row_0_button_0',
          disabled: false,
          type: 2,
        },
        {
          style: 1,
          label: ' beniyiyim.com',
          custom_id: 'row_0_button_1',
          disabled: false,
          type: 2,
        },
        {
          style: 1,
          label: 'afetharita.com',
          custom_id: 'row_0_button_2',
          disabled: false,
          type: 2,
        },
        {
          style: 1,
          label: 'afetbilgi.com',
          custom_id: 'row_0_button_3',
          disabled: false,
          type: 2,
        },
      ],
    },
  ],
  embeds: [
    {
      type: 'rich',
      title: 'Aşağıda bulunan projelerden ilgili olanı seçip bilgi alabilirsiniz',
      description: '1. depremyardim.com\n2. beniyiyim.com\n3. afetharita.com\n4. afetbilgi.com',
      color: 0xf26666,
    },
  ],
}
module.exports = {
  data: new SlashCommandBuilder().setName('projeler').setDescription('Projeler hakkında bilgi verir.'),
  async execute(interaction) {
    await interaction.reply(embed)
  },
}
