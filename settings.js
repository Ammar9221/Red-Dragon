//════════════(00)════════════════\\
//
//          RED DRAGON v6.0
//
//════════════(00)════════════════\\

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `My name is NATSU🔥
My Creator is AYATO🤗` //Costomize Alive Message (type your message in `` )

global.owner = ['+96891103640'] //Owner number in aive msg
global.premium = ['+96891103640'] //Owner Number info
global.ownernomer = '+96891103640' //Owner Number <<<

global.ownername = 'AYATO KIRISHIMA🤗' //Owner Name
global.botname = 'NATSU DRAGNEEL🔥' //Bot Name

global.button = '🔥E.N.D🔥' //Costomize A Button Name In Alive Message
global.btnurl = '🔥Etherious Natsu Dragneel🔥' //Change Your Button's URL

global.region = 'India, South India, Kerala' //Country Region

global.packname = '🔥E.N.D🔥' //Bot Pacage Name
global.author = '+96891103640❯❯' //Author Name
global.prefa = ['','!','.','😂','❤️','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor
global.dragonemoji = '🧩' // Menu emoji
global.footer = '🔥E.N.D🔥' //In list menu
global.chatbotpre = 'true'  // Chat bot true/false

global.ig = 'https://github.com' //Github Account!

global.mess = { // COSTOMIZE WITH YOUR LANGUAGE
	
    success: 'Done🔥',
    admin: 'Only Admins can use it!🔥',
    botAdmin: 'Bot wants to be an Admin🔥',
    owner: 'Only Owner can use this!🔥',
    group: 'Feature Used Only For Groups!🔥',
    private: 'This Features Only For Private Chat!🔥',
    bot: 'This Feature Is Only For Bot'🔥,
    wait: 'Please Wait..🔥',
    error: 'Error!!! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
