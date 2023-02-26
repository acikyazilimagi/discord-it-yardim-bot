const {
  SlashCommandBuilder
} = require('discord.js')
const {
  MongoDB
} = require("ark.db");
const db = new MongoDB("Mongo Bağlantı Linki", "Şema İsmi");

module.exports = {
  data: new SlashCommandBuilder()
      .setName('modrol')
      .setDescription('Moderatör izni gerektiren komutları kullanabilecek moderatör rollerini veritabanına kaydeder.')
      .addRoleOption((option) => option.setName('rol').setDescription('Rolü seçiniz.').setRequired(true)),
  async execute(interaction) {
      try {
          const userroles = interaction.member.roles.cache.map((role) => role.id) //Komut kullanan kişinin rolleri
          const roles = await db.get("modRole") || [] //Komutu kullanabilecek rollerin arrayi
          const role = interaction.options.getRole('rol') //Verilmek istenen rol

          if (!userroles.some((role) => roles.includes(role) || interaction.member.permissions.has(8))) {
              return interaction.reply('Bu komutu kullanmak için yetkiniz yok.')
          }

          if (roles.includes(role.id)) {
              return interaction.reply('Bu rol sistemde moderatör rolü olarak bulunuyor.')
          }

          await db.push('modRole', role.id)
          await interaction.reply(`${role.name} adındaki rol komutları kullanabilecek moderatör rolü listesine eklendi.`)

      } catch (error) {
          if (error)
              console.log(error.rawError)
          console.log(error.rawError.message)
          await interaction.reply({
              content: `Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz. Hata kodu: ${error.rawError.message}`,
              ephemeral: true,
          })
      }
  },
}