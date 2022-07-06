// const qrcode = require('qrcode-terminal');
// const {sendMessageFriend, sendMessageMarv} = require('./controller');

// const { Client, LocalAuth, Buttons } = require('whatsapp-web.js');
// const client = new Client({
//     authStrategy: new LocalAuth()
// });

// client.on('qr', qr => {
//     qrcode.generate(qr, {small: true});
// });

// client.on('ready', () => {
//     console.log('Client is ready!');
// });


// let answers = "1.A\n2.D\n3.C\n4.A\n5.C\n6.A\n7.A\n8.B\n9.C\n10.C\n11.A\n12.C\n13.21,600\n14.A\n15.200\n16.D\n17.D\n18.A\n19.A\n20.B\n21.A\n22.D\n23.B\n24.B\n25.A\n26.C\n27.C\n28.D\n29.D\n30.A\n31.A\n32.C\n33.C\n34.A\n35.B\n36.B\n37.C\n38.1,500\n39.C\n40.A\n41.D\n42.D\n43.B\n44.B\n45.A\n46.A\n47.C\n48.C\n49.A\n50.D";
// const delay = ms => new Promise(res => setTimeout(res, ms));

// client.on('message', async message => {
//     // const result = await sendMessage(message.body).catch(err => console.log(err));
//     // message.reply(result);
    
// 	if(message.body.length > 0 ) {

        
//         if(message.from.includes("206546543") || message.from.includes("0246525279")){
//             const result = await sendMessageFriend(message.body).catch(err => console.log(err));
//             message.reply(result.trim()); 
            
//         } else {

//         // && message.from.includes("206546543") || message.from.includes("542480050")
//         // var button = new Buttons("Hello",[{id:'customId',body:'button1'},{body:'button2'},{body:'button3'},{body:'button4'}]);

//         // button.onClick(message.body, (id,body) => {
//         //     console.log(id,body);
//         //     message.reply(body);
//         // })
        
//         // if(message.body.toLowerCase().includes("can you hack sakai")) {
//         //         message.reply("Of course I can do that. I have something for you. Hold on");
//         //         await delay(3000).catch(err => console.log(err));
//         //         message.reply('What is your next paper? Just enter the course code')
                
//         //     } else if (message.body.toLowerCase() === 'cscd421...' || message.body.toLowerCase() === 'cscd 421...')  {
//         //         delay(5000).catch(err => console.log(err));
//         //         message.reply(answers);
//         //     }
//         //     else { 
//                 const result = await sendMessageMarv(message.body).catch(err => console.log(err));
//                 message.reply(result.trim());
//             //  }
//         }
//     // client.sendMessage(message.from, 'Crashing your phones!');
// 	// 	message.reply('Done!');
// 	}
// });

// client.initialize();