const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254700150919,254115790827";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'composing' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_38_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA3MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDI2LFxuICAgICAgICA1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMixcbiAgICAgICAgOTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTksXG4gICAgICAgIDE1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDUzLFxuICAgICAgICA5MixcbiAgICAgICAgMjE3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNCxcbiAgICAgICAgNjksXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA1MixcbiAgICAgICAgMjIsXG4gICAgICAgIDg4LFxuICAgICAgICAzOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDc2LFxuICAgICAgICA5LFxuICAgICAgICAxOCxcbiAgICAgICAgMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA1LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgODAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDczLFxuICAgICAgICA3MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTksXG4gICAgICAgIDM3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTksXG4gICAgICAgIDYwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjksXG4gICAgICAgIDc0LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICAxMTksXG4gICAgICAgIDksXG4gICAgICAgIDE0LFxuICAgICAgICA1MixcbiAgICAgICAgMTc0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQzLFxuICAgICAgICA3OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA1MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDksXG4gICAgICAgIDQzLFxuICAgICAgICA4NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDczLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjdCeXFnOFpjN0tnRk5QcjBzL0ZQOGtZNmtyRXpyNE5PV3JzVkVGcXFpT3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm0wWDFoR2pGUUNpRTJYYjdHSTE4MVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2EzNzI0NmQtZDIxMi00OTE2LWJmZGQtNTQwOTY0N2JiZDA2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMixcbiAgICAgIDIwMixcbiAgICAgIDQzLFxuICAgICAgMTg0LFxuICAgICAgMjM5LFxuICAgICAgMzEsXG4gICAgICAyNyxcbiAgICAgIDEyLFxuICAgICAgNjMsXG4gICAgICAxMDUsXG4gICAgICAxMDAsXG4gICAgICAxMzMsXG4gICAgICAxMzIsXG4gICAgICA5NSxcbiAgICAgIDE5OCxcbiAgICAgIDE3NixcbiAgICAgIDI0MyxcbiAgICAgIDE5OCxcbiAgICAgIDE4MyxcbiAgICAgIDY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwOCxcbiAgICAgIDI1NSxcbiAgICAgIDI1MCxcbiAgICAgIDgsXG4gICAgICAyMzIsXG4gICAgICAxMzAsXG4gICAgICAxNDgsXG4gICAgICAxNTMsXG4gICAgICA2MCxcbiAgICAgIDE0OSxcbiAgICAgIDExOCxcbiAgICAgIDE0OSxcbiAgICAgIDE3NixcbiAgICAgIDIzMyxcbiAgICAgIDksXG4gICAgICA2OCxcbiAgICAgIDQ3LFxuICAgICAgMTk5LFxuICAgICAgNjMsXG4gICAgICAyMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUEhONkxGS1BcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwMDE1MDkxOTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NTA5NjM0Mzc5Mzg5Mjo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0krUit0Z0RFUEtncExRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVTAydDFGRXROVkpFZE5FTVpZKzZqR2xNWWZOK1N2bGh5WUNQOXRqU01Rdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIMEFCSGc5RDNBcG1jc2RMS1MySTJCWStLV1J2ZmFoSDNRQ1NwNEQxd3FjekY3TlpBUk52U3huTGs4ZDZqNlFRYVVDZEJVeGl6ZkpVZ1pQT2psbHlDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJuL2NiUm5rYzhSb01Eck0xOHRQam9VMDdNQ1N5NG9ySS90VmNRTkUvb2V6blN3aW5RVkd3Ykd6U1Nrc0pCYnpYTjd4R3E5WGJuS0xHU0syQnBHTytCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDAxNTA5MTk6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyNTg2NzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKN1VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUo3VS5qc29uIjogIntcImtleURhdGFcIjpcIjlNbU82UDlSdlVpY0kxQkxGMEZRU1hiQitrZ1FJSXMzdXBzNklEU2Vma2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTkxODU2NzgzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk1NzM1MjAyODJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
