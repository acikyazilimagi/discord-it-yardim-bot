const {
  SlashCommandBuilder
} = require('discord.js')
const {
  MongoDB
} = require("ark.db");
const db = new MongoDB("Mongo Bağlantı Linki", "Şema İsmi");

module.exports = {
  data: new SlashCommandBuilder()
      .setName('rolekle')
      .setDescription('Bir kullanıcıya rol ekler.')
      .addRoleOption((option) => option.setName('rol').setDescription('Rolü seçiniz.').setRequired(true))
      .addUserOption((option) => option.setName('kullanıcı').setDescription('Kullanıcıyı seçiniz.').setRequired(true)),

  // eslint-disable-next-line consistent-return
  async execute(interaction) {
      try {
          const userroles = interaction.member.roles.cache.map((role) => role.id) //Komut kullanan kişinin rolleri
          const roles = await db.get("modRole") || [] //Komutu kullanabilecek rollerin arrayi
          const role = interaction.options.getRole('rol') //Verilmek istenen rol
          const user = interaction.options.getUser('kullanıcı') //Verilmek istenen kişi
          const userRoles = interaction.guild.members.cache.get(user.id)._roles //Verilmek istenen kişinin bulunan rolleri


          if (!userroles.some((role) => roles.includes(role) || interaction.member.permissions.has(8))) {
              return interaction.reply('Bu komutu kullanmak için yetkiniz yok.')
          }

          if (userRoles.includes(role.id)) {
              return interaction.reply('Bu kişi bu role çoktan sahip.')
          }

          await interaction.guild.members.cache.get(user.id).roles.add(role)
          await interaction.reply(`${user.username} kullanıcısına ${role.name} rolü verildi.`)

          //console.log(role) DB'ye ne kaydetmek istersiniz bilmediğim için eklemedim o kısmı.
          //console.log(user) DB'ye ne kaydetmek istersiniz bilmediğim için eklemedim o kısmı.

      } catch (error) {
          console.error(error)
          console.log(error.rawError)
          console.log(error.rawError.message)
          await interaction.reply({
              content: `Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz. Hata kodu: ${error.rawError.message}`,
              ephemeral: true,
          })
      }
  },
}