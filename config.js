//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "daloa, côte d'ivoire";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "2250150095961";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2250575324586";"2250150095961"
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEZKS2tlQnJCYXBBOCtWNzlrSS95cHVoU1ZWYnF1bXhCOWtaUkhTLytXRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiczZUNjcwZHdhMnBXYWVPd1QraGVhTGlpNTZRMXRBYXMyZ1crdUovczhubz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnQUQ0WlNyWWJZUERtL01KbmdPYmN1QmdPT1lId3lOY2N0WFYvSzlhaFc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZN3VxekxrM1JUdFBkSjdPTFAxaGozWUtTWHVSSG1OR2xhUGsrUlVuNmdrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlENXlnQjhHODVvaEhzZk95U2krVjFKYU8vOVVaSHhySlFieVVrSGh3WDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZnZkVoMC9GQ01Dc2R4TGJ6SCtLV0MyemxYUXNqZ0JWdUJMS0dnTFhxUmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEtaVnd3SHZxVllQY2UrUWlsOHdNaGZxbDVoTk10M3VDMFBQQjJmdi9Vcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzNGVUZ0RXRYdy9vcFZOcFpXV3FtcGl4RStwQmNrT3JNTVo2REFCMXFrUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InczSzZHMUM1eUJQT3IvbjY5TS9uZGN6Mk96SnllUU9ZL0hzUm5nL2ZydkxpckZKK0YrRldjZCt0aHVVSG01YU55Uzd3UVdYbmtza0VWNTcwWkM1T2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgsImFkdlNlY3JldEtleSI6IlhxYjhQTUl1dXA4Q01PRlJjdFhNeVVSZWdBNCt1V01jN21KcUovb0h0WWc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjI1NTAwOTU5NjFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkEwOTZDOThDNzJDODAwNzhFQjY0N0E3QjgzOTkwNEMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTIyODczM30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjI1NTAwOTU5NjFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjU4NTdBRDUxODBEM0EzQTU5MjExMzU0MzVDMDlDNzQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTIyODczNH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWFo4YnlRV19Sc2lQVTk0OTc1cDY2USIsInBob25lSWQiOiIyMTkxMDc2ZC1kM2ZhLTQwMWItOGVjZi1mOWNjOGYwYTVjZmQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVjhQZHkvYVJlMFBTZDl3M2pQWjlkdEtPSUJVPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFhK2VIeHVlNHpLL01xMGJGSjg2UWwxU0pLbz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJBRERNQldCUiIsIm1lIjp7ImlkIjoiMjI1NTAwOTU5NjE6N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTaGFkb3cgR2FyZGVuIEJvdCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHlYbkl3RUVLMjczN1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTERpR0pQckFYdzdQdEJFckUvSkhUYTkzaHZ1WkNpUDhnVzNKWXF4cXZVST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiLy91NzgyVThZZ2ttL2VaTHZTdFlOeG1rQnhQMklCQVJjNUFKaWVkVnFnVkxZd3B6Ym9rVGhZZUI5V1pMSmJRZWpONDNlUUFROFJnbWNZVDIzbWxqQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IlhpZU5ZOG5LMkF2eHNSTkJWV0FqUDBOT091MnJSZDE3WmJFamUrSTROLzV4M2diZTJPcEtYZ0dmRDJYTkNRcWMzRzZnTHhVdDB0azMxV0QvNTF3SmlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI1NTAwOTU5NjE6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTdzRoaVQ2d0Y4T3o3UVJLeFB5UjAydmQ0YjdtUW9qL0lGdHlXS3NhcjFDIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMjI4NzMwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUozcSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "𝐒𝐀𝐒𝐔𝐊𝐄_𝐔𝐂𝐇𝐈𝐖𝐀-𝐕2",
  packname: process.env.PACK_NAME || "𝐒𝐀𝐒𝐔𝐊𝐄",
  botname: process.env.BOT_NAME || "𝐒𝐀𝐒𝐔𝐊𝐄_𝐔𝐂𝐇𝐈𝐖𝐀-𝐕2",
  ownername: process.env.OWNER_NAME || "𝐂𝐈𝐃_𝐊𝐀𝐆𝐄𝐍𝐎",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-X00anFgosmRhhWP75khXT3BlbkFJlyo7xhWoWhz9Sdoap9Hv",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
