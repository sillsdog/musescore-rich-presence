const wi = require("@arcsine/win-info");
const fp = require("find-process");
const path = require("path");
const fs = require("fs");

const { Client } = require("discord-rpc");
const client = new Client({ transport: "ipc" });

let start = new Date();
let lastfile = "";
let stateindex = 0;
let sheetcache = null;

async function update() {
    const apps = await fp("name", "MuseScore");
    let app;
    for (let i = 0; i < apps.length; i++) {
        if (["MuseScore.exe", "MuseScore2.exe", "MuseScore3.exe"].includes(apps[i].name)) {
            app = apps[i];
            break;
        }
    }

    let window;
    if (app) {
        try {
            window = await wi.getByPid(app.pid);
        } catch (e) {
            // ...
        }
    }
    if (window) {
        if (fs.existsSync("curr.json")) {
            try {
                const curr = JSON.parse(fs.readFileSync("curr.json"));
                // console.log(curr);
                window.sheet = curr;
                if (window.sheet.name != lastfile) {
                    start = new Date();
                    lastfile = window.sheet.name;
                }
            } catch(e) {
                console.log("X Unable to read curr.json! Is the file corrupt?")
            }
        } else {
            console.log("X Whoops! I wasn't able to find the curr.json. Did you install the CurrentScoreInfo MuseScore plugin?");
        }
    }

    if (window && window.sheet || app && !window && sheetcache) {
        if (window && window.sheet) sheetcache = window.sheet;
        else if (sheetcache) {
            window = {};
            window.sheet = sheetcache;
        }
        var states = [];
        if (window.sheet.title) states.push(`Title: ${window.sheet.title}`);
        if (window.sheet.subtitle) states.push(`Subtitle: ${window.sheet.subtitle}`);
        if (window.sheet.composer) states.push(`Composer: ${window.sheet.composer}`);
        states.push(`Contains ${window.sheet.nmeasures} Measures`);
        if (window.sheet.npages > 1) {
            states.push(`Contains ${window.sheet.npages} Pages`);
        } else {
            states.push(`Contains ${window.sheet.npages} Page`);
	      };
        if (window.sheet.nstaves > 1) {
            states.push(`Contains ${window.sheet.nstaves} Staves`);
        } else {
            states.push(`Contains ${window.sheet.nstaves} Staff`);
	      };
        states.push(`Contains ${window.sheet.ntracks} Tracks`);

        stateindex++;
        if (stateindex >= states.length) stateindex = 0;

        client.setActivity({
            details: `Editing ${window.sheet.scoreName}.mscz`,
            state: states[stateindex],
            startTimestamp: start,
            largeImageKey: "musescore3-square",
            smallImageKey: "musescore3-circle",
            largeImageText: window.sheet.mscoreVersion ? `MuseScore ${window.sheet.mscoreVersion}` : "MuseScore",
            smallImageText: `Contains ${window.sheet.nmeasures} Measures`
        });
    } else {
        client.setActivity({
            details: "Musescore",
            state: "Unknown",
            startTimestamp: start,
            largeImageKey: "musescore3-square",
            smallImageKey: "musescore3-circle",
            largeImageText: "MuseScore 3",
            smallImageText: "Composing"
        });
    }
}

update();

client.on("ready", () => {
    console.log("Online and ready to rock!")
    update();
    setInterval(() => {
        update();
    }, 3000);
});

console.log("Connecting...");
client.login({ clientId: "577645453429047314" });

process.on("unhandledRejection", console.error);
