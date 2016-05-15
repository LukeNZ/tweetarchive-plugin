var pageMod = require("sdk/page-mod");

pageMod.PageMod({
    include: 'https://twitter.com/*',
    contentScriptFile: "./test.js",
    contentStyleFile: "./styles.css"
});