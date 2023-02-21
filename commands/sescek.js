const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('sescek')
    .setDescription('İstenilen kişiyi komudu kullanan kullanıcının olduğu sesli kanala çeker')
    .setDefaultMemberPermissions(16777216)
    .addUserOption((option) =>
      option.setName('kullanıcı').setDescription('(@etiketleyerek) Çekmek istediğin kişi').setRequired(true),
    ),

  execute(interaction) {
    let self, user

    interaction.guild.members.fetch(interaction.member.user.id).then((selfMember) => {
      self = selfMember

      interaction.guild.members.fetch(interaction.options.getUser('kullanıcı').id).then((userMember) => {
        user = userMember

        if (!self.voice.channel) return interaction.reply({ content: 'sesli kanalda olmalısın', ephemeral: true })

        if (!user.voice.channel)
          return interaction.reply({ content: 'sesli kanalda olmayan birisini çekemezsin', ephemeral: true })

        user.voice
          .setChannel(self.voice.channel)
          .then((user) => {
            interaction.reply({ content: `${user} başarılı şekilde çekildi`, ephemeral: true })
          })
          .catch((error) => {
            console.error(error)
            interaction.reply({
              content: `kullanıcı çekilemedi **Hata:**`,
              ephemeral: true,
            })
          })
      })
    })
  },
}
