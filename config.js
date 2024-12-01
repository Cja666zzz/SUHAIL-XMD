const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_50_12_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MixcbiAgICAgICAgNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEyLFxuICAgICAgICA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg2LFxuICAgICAgICA3MixcbiAgICAgICAgOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDU2LFxuICAgICAgICA4NixcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDY4LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDQwLFxuICAgICAgICAyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDU0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDc2LFxuICAgICAgICAyLFxuICAgICAgICAxODQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTExLFxuICAgICAgICA2MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICA3OSxcbiAgICAgICAgODUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDY5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTExLFxuICAgICAgICA0MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDM0LFxuICAgICAgICA1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODksXG4gICAgICAgIDE5LFxuICAgICAgICAyNixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1LFxuICAgICAgICA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZCZmd1MXJhZXhmOXFrWCtEblRzRktQa0ZhZXRvd3ZSQmg3RFByNXgydFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlQyNnBEaTFYUmk2THREdXdUN0YwRWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDg2ZGQwZmEtZDE5My00MTg4LWE2ZTUtNDc4MTliN2IwODU2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NCxcbiAgICAgIDE5MixcbiAgICAgIDI3LFxuICAgICAgMTg0LFxuICAgICAgNTUsXG4gICAgICAxOTIsXG4gICAgICAxNDEsXG4gICAgICAyMTcsXG4gICAgICA4MCxcbiAgICAgIDQ5LFxuICAgICAgMTYzLFxuICAgICAgMTM1LFxuICAgICAgMjQ3LFxuICAgICAgMTcxLFxuICAgICAgNDEsXG4gICAgICAyMzIsXG4gICAgICAyMTEsXG4gICAgICA0OCxcbiAgICAgIDIwOCxcbiAgICAgIDExOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTEsXG4gICAgICA3OSxcbiAgICAgIDUzLFxuICAgICAgMTI5LFxuICAgICAgMTk2LFxuICAgICAgMTEyLFxuICAgICAgMjI4LFxuICAgICAgNjYsXG4gICAgICAxNjcsXG4gICAgICAxOCxcbiAgICAgIDE0NyxcbiAgICAgIDIyOCxcbiAgICAgIDczLFxuICAgICAgODgsXG4gICAgICA0MyxcbiAgICAgIDE4OSxcbiAgICAgIDEzMyxcbiAgICAgIDc5LFxuICAgICAgMTUwLFxuICAgICAgNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTFg1TFFDMk1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxNzgwNjU3Mjo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTU3NjQ2OTkyNzY1MDgzOjQyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01DT3c5d0NFUHJmc3JvR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRmxKTEZYT1pXN09leFR5RWx3TDF0bXlGaStjL2gxQ0Q3TzlpSFRxY1NTbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpejJ0cjY0RWdobjIwWGViNjZJN1NxbStSM1RKell4RmZNT2xkZzNOWmZTWHZtelF5OEEwVTNmak5oMmU0SC9ZUkRpOGRPSTY3TGVGRXl0WjREaGxEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOdWlGd3Fod0RWM2g1aFVuandUQ3B3STJPbFd1YzZDUG5Hbjd3WlMzZzRBbysvRHNyOW9LY05VQVo5WEN1Q2RWR3RxNVhySFg5Vm11TVdXRjg1T3BCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTc4MDY1NzI6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMwNzkwMzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDWUhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNZSC5qc29uIjogIntcImtleURhdGFcIjpcIk1ERmRBa0R5ZE9YMSs2MzJ6Y29vemkrVS80d0FDSE9rZHVrVG4rbkswTTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzMwOTA4NDgwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzMwNjk0NjYxOTVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "COLLEGUE-JAM🇿🇼🫂🔥",
  ownername:process.env.OWNER_NAME|| "COLLEGUE🤝🔒-JAM🇿🇼",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
