`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;

// ════════════════════════|▷   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!   ◁|════════════════════════

`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;
require("./𝕷𝖆ყO𝖚𝖙")
let { Caught } = require("../Ѷ𝖑𝐤𝐲𝖗𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Caught");
let { Image_Button } = require("../Ѷ𝖑𝐤𝐲𝖗𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Image_Button");
let UserPrivate = require(`../Ѷ𝖑𝐤𝐲𝖗𝖊🧆𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊/🍃𝖒𝖔𝖓𝖌𝖔/private`);
exports._ᴘᴏᴡᴇʀ = async (𝖍𝖆𝖜ӄ, Ѷ𝖑𝐤𝐲𝖗𝖊) => {
await UserPrivate.findOne(
{
ID: Ѷ𝖑𝐤𝐲𝖗𝖊.sender,
},
async (𝕰𝖗𝖗𝖔𝖗, user) => {
if (𝕰𝖗𝖗𝖔𝖗) return Caught(𝖍𝖆𝖜ӄ, Ѷ𝖑𝐤𝐲𝖗𝖊, 𝕰𝖗𝖗𝖔𝖗);
if (!user) {
var newUser = new UserPrivate({
ID: Ѷ𝖑𝐤𝐲𝖗𝖊.sender,
Amount: 1,
});
await newUser.save().catch((𝕰𝖗𝖗𝖔𝖗) => Caught(𝖍𝖆𝖜ӄ, Ѷ𝖑𝐤𝐲𝖗𝖊, 𝕰𝖗𝖗𝖔𝖗));
return await Image_Button(
𝖍𝖆𝖜ӄ,
Ѷ𝖑𝐤𝐲𝖗𝖊,
Ѷ𝖑𝐤𝐲𝖗𝖊.A𝖗𝖌𝖘,
"./Ѷ𝖑𝐤𝐲𝖗𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖑𝐤𝐲𝖗𝖊_Red.png",
`✋🏽‍𝐖𝐚𝐢𝐭 𝐅𝐨𝐫 𝐌𝐲 𝐎𝐰𝐧𝐞𝐫 𝐓𝐨 𝐑𝐞𝐬𝐩𝐨𝐧𝐝!
• Dear Random User, This Private Is Being Guarded By Vlkyre AI!
• Do Not Spam The Chat Box!

🌿𝐏𝐮𝐧𝐢𝐬𝐡𝐦𝐞𝐧𝐭
• 𝗪𝗮𝗿𝗻𝗶𝗻𝗴𝘀: 1/4
• You Will be Auto-Blocked After 4 warnings!`
);
} else if (user.Amount < 4) {
user.Amount = user.Amount + 1;
await user.save().catch((𝕰𝖗𝖗𝖔𝖗) => Caught(𝖍𝖆𝖜ӄ, Ѷ𝖑𝐤𝐲𝖗𝖊, 𝕰𝖗𝖗𝖔𝖗));
return await Image_Button(
𝖍𝖆𝖜ӄ,
Ѷ𝖑𝐤𝐲𝖗𝖊,
Ѷ𝖑𝐤𝐲𝖗𝖊.A𝖗𝖌𝖘,
"./Ѷ𝖑𝐤𝐲𝖗𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖑𝐤𝐲𝖗𝖊_Red.png",
`✋🏽‍𝐖𝐚𝐢𝐭 𝐅𝐨𝐫 𝐌𝐲 𝐎𝐰𝐧𝐞𝐫 𝐓𝐨 𝐑𝐞𝐬𝐩𝐨𝐧𝐝!
• Dear Random User, This Private Is Being Guarded By Vlkyre AI!
• Do Not Spam The Chat Box!

🌿𝐏𝐮𝐧𝐢𝐬𝐡𝐦𝐞𝐧𝐭
• 𝗪𝗮𝗿𝗻𝗶𝗻𝗴𝘀: ${user.Amount}/4
• You Will be Auto-Blocked After 4 warnings!`
);
} else {
await user.delete().catch((𝕰𝖗𝖗𝖔𝖗) => Caught(𝖍𝖆𝖜ӄ, Ѷ𝖑𝐤𝐲𝖗𝖊, 𝕰𝖗𝖗𝖔𝖗));
return await 𝖍𝖆𝖜ӄ.updateBlockStatus(Ѷ𝖑𝐤𝐲𝖗𝖊.sender, "block").catch((𝕰𝖗𝖗𝖔𝖗) => Caught(𝖍𝖆𝖜ӄ, Ѷ𝖑𝐤𝐲𝖗𝖊, 𝕰𝖗𝖗𝖔𝖗));
}
}
);
};
`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;

// ════════════════════════|▷   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!   ◁|════════════════════════

`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;
