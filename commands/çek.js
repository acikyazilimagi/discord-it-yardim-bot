const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cek')
    .setDescription('Kullanıcıyı odanıza çekmenizi sağlar.')
    .addUserOption((option) => option.setName('user').setDescription('Odaya çekmek istediğiniz kullanıcıyı giriniz.').setRequired(true)),

  async execute(interaction) {
    try {
        const users = interaction.options.getMember('user');
        if(!users) return interaction.reply({content: "Geçerli bir kullanıcı etiketlemelisin.",ephemeral: true})

        if(users.id === interaction.member.id) return interaction.reply({content:"Kendinizi çekemezsiniz!", ephemeral: true})

        if(!users.voice.channel) return interaction.reply({content: "Kullanıcı seste bulunmuyor.",ephemeral: true})

        if(interaction.member.voice.channelId === users.voice.channelId) return interaction.reply({content: "Zaten kullanıcı ile aynı kanaldasın.",ephemeral: true})

        users.voice.setChannel(interaction.member.voice.channelId);
        interaction.reply({content: `${users} adlı kişiyi başarılı şekilde yanınıza çektiniz. ${interaction.member.voice.channel}`,ephemeral: true})

        console.log(`${users.id} idli kişiyi başarılı şekilde ${interaction.member.voice.channel.name} adlı kanala çektiniz.`);
    } catch (error) {
      console.error(error)
    }
  },
}
