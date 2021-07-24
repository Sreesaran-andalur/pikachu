const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════💥ZREE HERE💥═════╗*\n           \n*⚜═ZREE HERE═⚜*\n\n*owner Sreesran-Andalur - http://Wa.me/+919400025258*\n* *\n🔰instagram:-https://www.instagram.com/sreesaranandalur?r=nametag*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: ZREE HERE*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═ZREE HERE Owner Sreesaran Andalur═💥*\n\n*💘https://github.com/Sreesaran-andalur/ZREE-HERE\n*     *⚜https://github.com/Sreesaran-andalur/ZREE-HERE*    

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════💥ZREE HERE💥═════╗*\n           \n*⚜═ZREE HERE═⚜*\n\n*owner Sreesaran Andalur - http://Wa.me/+919400025258*\n* *\n🔰instagram:-https://www.instagram.com/sreesaranandalur?r=nametag*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: ZREE HERE*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

        r_text[1] = "*Git links*\n           *\n💥═ZREE HERE Owner Sreesaran Andalur═💥💘

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
