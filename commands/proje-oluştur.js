const { SlashCommandBuilder,PermissionsBitField,ChannelType } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('proje-oluştur')
    .setDescription('Proje oluşturmanızı sağlar.')
    .addStringOption((option) =>
      option
        .setName('projectname')
        .setDescription('Proje adinizi giriniz.')
        .setRequired(true)
    ),

  async execute(interaction, data) {
    try {
        if(interaction.member.permissions.has(PermissionsBitField.Flags.ManageGuild)){
            const text = interaction.options.getString("projectname");
           const categorycik = await interaction.guild.channels.create({name: `${text}`, type: ChannelType.GuildCategory });
            await interaction.reply({content: `Created **${text}** category!`, ephemeral: true});
            interaction.guild.roles.create({name:`${text}-backend-lead`, permissions: [PermissionsBitField.Flags.ViewChannel]})
            interaction.guild.roles.create({name:`${text}-front-end-lead`, permissions: [PermissionsBitField.Flags.ViewChannel]})
            interaction.guild.roles.create({name:`${text}-pm`, permissions: [PermissionsBitField.Flags.ViewChannel]})
            let berke = await interaction.guild.roles.cache.find(x => x.name == `${text}-backend-lead`);
            let berke2 = await interaction.guild.roles.cache.find(x => x.name == `${text}-front-end-lead`);
            let berke3 = await interaction.guild.roles.cache.find(x => x.name == `${text}-pm`);
            interaction.guild.channels.create({name: `${text}`,
             type: ChannelType.GuildText,
              parent: categorycik,
              });
            interaction.guild.channels.create({name: `${text}`,
             type: ChannelType.GuildVoice,
              parent: categorycik,
              });
        }else { 
            await interaction.reply("yapamazsin.")
        }
    
    } catch (err) {
     console.log(err)
    }
  },
}
