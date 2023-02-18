const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sescek')
		.setDescription('İstediğin kişiyi olduğun sesli kanala çeker')
		.addUserOption(option => option.setName('kullanıcı').setDescription('(etiketleyerek) Çekmek istediğin kişi'))
        .addStringOption(option => option.setName('id').setDescription("(ID ile) Çekmek istediğin kişi")),
	async execute(interaction) {
        if(interaction.options.getString('id') === null && interaction.options.getUser('kullanıcı') === null){
            return interaction.reply({content:"boş değer gönderilemez",ephemeral:true});
        }
        const id = interaction.options.getString('id') || interaction.options.getUser('kullanıcı').id;
        const self = interaction.guild.members.cache.get(interaction.member.user.id);
        if(!self.voice.channel){
            return interaction.reply({content:"sesli kanalda olmalısın",ephemeral: true});
        }
        if(!interaction.guild.members.cache.get(id)){
            return interaction.reply({content:"geçerli bir kullanıcı ID'si girin",ephemeral:true});
        }
		const user = interaction.guild.members.cache.get(id);
        if(!user.voice.channel){
            return interaction.reply({content:"sesli kanalda olmayan birisini çekemezsin",ephemeral: true});
        }
        if(user.voice === self.voice){
            return interaction.reply({content: "kendini çekemezsin", ephemeral:true});
        }
        if(user.voice.channel == self.voice.channel){
            return interaction.reply({content:"aynı sesli kanalda olduğun birisini çekemezsin",ephemeral: true});
        }

        user.voice.setChannel(self.voice.channel);
        interaction.reply({content: "başarılı şekilde çekildi", ephemeral: true})
	},
};