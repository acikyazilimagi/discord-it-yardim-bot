const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rolekle')
    .setDescription('Kullanıcıya rol eklemenizi sağlar.')
    .addUserOption((option) => option.setName('user').setDescription('Rolü vermek istediğiniz kullanıcıyı giriniz.').setRequired(true))
    .addRoleOption((option)=> option.setName('role').setDescription('Vermek istediğiniz rolü giriniz.').setRequired(true)),

  async execute(interaction) {
    try {
      const users = interaction.options.getMember('user');
      const rol = interaction.options.getRole('role');  
      if(users.roles.cache.has(rol.id)){
        await interaction.reply({content:`${users} adlı kullanıcıdan ${rol} rolünü aldınız.`, ephemeral: true })
        await users.roles.remove(rol);
      }
      else {
        await users.roles.add(rol);
        await interaction.reply({content:`${users} adlı kullanıcıya ${rol} rolünü eklediniz.`, ephemeral: true })
      }
    } catch (error) {
      console.error(error)
      await interaction.reply(
        `Rol eklenemedi. Hata: ${error.rawError.code} - ${error.rawError.message}`,
      )
    }
  },
}
