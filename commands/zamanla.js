const {SlashCommandBuilder, ChannelType } = require('discord.js')
const schedule = require('node-schedule');
module.exports = {
    data:  new SlashCommandBuilder()
    .setName('zamanla')
    .setDescription('Mesajınız zamanlama.')
    .addStringOption((option) =>
      option
        .setName('message')
        .setDescription('Mesajınızı giriniz.')
        .setMinLength(10)
        .setMaxLength(2000)
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName('time')
        .setDescription('Mesajınız hangi zamana göre gönderilsin?')
        .setChoices(
          { name: '30 saniye', value: 15000 },
          { name: '1 Dakika', value: 60000 },
          { name: '15 Dakika', value: 900000 },
          { name: '30 Dakika', value: 1800000 },
          { name: '1 Saat', value: 3600000 }
        )
        .setRequired(true)
    )
    .addChannelOption((option) =>
      option
        .setName('channel')
        .setDescription('Mesajınızı Hangi Kanala Göndermek istiyorsunuz?')
        .addChannelTypes(ChannelType.GuildText)
        .setRequired(true)
    ),  

  async execute(interaction) {
    try{
        const message = interaction.options.getString('message');
        const time = interaction.options.getInteger('time');
        const channel = interaction.options.getChannel('channel');
  
        const date = new Date(new Date().getTime() + time);
        interaction.reply({
          content: `Mesajınız tarihine ayarlandı. ${date.toTimeString()}`,
        });
        console.log(date);
        schedule.scheduleJob(date, () => {
          channel.send({ content: message });
        })
        } catch (error) {
            console.error(error)
            )
          }
        },   
    }
      
