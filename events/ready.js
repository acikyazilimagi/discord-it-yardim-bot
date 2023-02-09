const { Events, EmbedBuilder  } = require('discord.js');
const an_channel = require('../data/config.json')
module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		//SAAT BAŞI HATIRLATMA 
		setInterval(function mesaj() {
			const an_Embed = new EmbedBuilder()
			.setColor(000000)
			.setTitle('Herkese merhabalar, hoşgeldiniz! 🙌🏻')
			.addFields(
				{ name: 'Çok kısa sürede kocaman bir ekip olduk, Lütfen kayıt formunu doldurun ilgili ekiplerimiz başvurunuzu inceleyerek ihtiyaç halinde sizinle iletişime geçeceklerdir. O zaman kadar duyuru kanallarımızdan tüm projelerimiz hakkında bilgi alabilirsin.', value: "[📌 Kayıt Formu](https://app.retable.io/form/j3DtfkIkYlqj2cxn)"},
				{ name: 'Fikirlerinizi bizimle paylaşmaya hevesli olduğunuz için çok mutluyuz.Fakat fikirlerinizin incelenmesi ve hiç bir fikrin gözden kaçmaması için aşağıdaki formu doldurmanız gerekmektedir.', value: "[📌 Fikir Formu](https://app.retable.io/form/RVC67K3Ai5kQ5w4s)" },
				{ name: 'Geliştirilen uygulamalar ve sunucu ile ilgili feedbacklerinizi aşağıdaki formu doldurarak bize iletebilirsiniz.', value: "[📌 Feedback Formu](https://app.retable.io/form/NIfo34pdWuweWtfI)" },
				{ name: 'İlginiz için teşekkürler sizi daha yakından tanımamız için aşağıdaki formu lütfen doldurun. Kurumsal iletişim ekibimiz sizler ile iletişime geçeceklerdir.', value: "[📌 Kurumsal Destek Formu](https://app.retable.io/form/qdjgyl2NHrE5CLnA)" },
			)
			.setTimestamp()
			.setFooter({ text: 'Her bir saatte bir otomatik paylaşılır.'})

			client.channels.cache.get(an_channel.main_Announcment_channel).send({ embeds: [an_Embed] });
		}, 3600 * 1000);
		//SAAT BAŞI HATIRLATMA 
	},
};