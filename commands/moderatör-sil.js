const {
  SlashCommandBuilder,
  PermissionsBitField
} = require('discord.js')
const {
  MongoDB
} = require("ark.db");
const db = new MongoDB("Mongo Bağlantı Linki", "Şema İsmi");

module.exports = {
  data: new SlashCommandBuilder()
      .setName('modrolsil')
      .setDescription('Moderatör izni gerektiren komutları kullanabilecek moderatör rollerini veritabanından siler.')
      .addRoleOption((option) => option.setName('rol').setDescription('Rolü seçiniz.').setRequired(true)),
  async execute(interaction) {
      try {
          const userroles = interaction.member.roles.cache.map((role) => role.id) //Komut kullanan kişinin rolleri
          const role = interaction.options.getRole('rol') //Verilmek istenen rol
          const roles = await db.get("modRole") || [] //Komutu kullanabilecek rollerin arrayi

          if (!userroles.some((role) => roles.includes(role) || interaction.member.permissions.has(8))) {
              return interaction.reply('Bu komutu kullanmak için yetkiniz yok.')
          }

          if (!roles.includes(role.id)) {
              return interaction.reply('Bu rol sistemde moderatör rolü olarak bulunmuyor.')
          }

          await db.pull('modRole', role.id)
          await interaction.reply(`${role.name} adındaki rol komutları kullanabilecek moderatör rolü listesinden silindi.`)

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