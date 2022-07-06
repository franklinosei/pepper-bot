const qrcode = require('qrcode-terminal');
const { sendMessageFriend, sendMessageMarv } = require('./controller');
const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
var fs = require('fs');


const client = new Client({
    authStrategy: new LocalAuth()
});

var stickers = fs.readdirSync('./stickers');


client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async msg => {
    
    if (msg.type == 'sticker') {
        // var tmp = await msg.getChat();
        // var contact = await tmp.getContact();
        // var profilePhoto = await contact.getProfilePicUrl();

        const rand = Math.floor(Math.random() * stickers.length);

        var sticker = MessageMedia.fromFilePath("./stickers/" + stickers[rand]);
        msg.reply(sticker, undefined, { sendMediaAsSticker: true });

        // if (profilePhoto.length < 1) {
        //     var sticker = MessageMedia.fromFilePath(stickers[rand]);
        //     msg.reply(sticker, undefined, { sendMediaAsSticker: true });
        // } else {
        //     var sticker = await MessageMedia.fromUrl(profilePhoto);
        //     msg.reply(sticker, undefined, { sendMediaAsSticker: true });

        // }
    } else if (msg.body.length > 0) {

          var tmp = await msg.getChat();
          await tmp.sendStateTyping(); // send typing indicator

        // if (msg.from.includes("206546543") || msg.from.includes("542480050")) {
        //     const result = await sendMessageFriend(msg.body).catch(err => console.log(err));
        //     msg.reply(result.trim());

        // } else {

            const result = await sendMessageMarv(msg.body).catch(err => console.log(err));
            msg.reply(result.trim());
        // }
    }
});

client.initialize();