# MuseScore Rich Presence
Discord rich presence for MuseScore\
Only tested on Windows 10\
Untested on Musescore 2.x\
Edited by sillsdog, forked from FireController1847

## Requirements
* [MuseScore 3.x](https://musescore.org/en)
* [node.js](https://nodejs.dev/)
* [@arcsine/win-info](https://www.npmjs.com/package/@arcsine/win-info)
* [fp](https://www.npmjs.com/package/fp)
* [path](https://www.npmjs.com/package/path)
* fs
* [discord-rpc](https://www.npmjs.com/package/discord-rpc)

## Installation for MuseScore 3.x
1. Download/clone the repository and install node modules (`npm i`).
2. Install the plugin into MuseScore by putting the `DiscordRP` folder into MuseScore's user plugins file.
   * For example, the file should be in the `C:/Users/user/Documents/MuseScore3/Plugins` folder.
3. When inside MuseScore, enable the `CurrentScoreInfo-MS3` plugin.
4. Edit `CurrentScoreInfo-MS3.qml` so line 13 (`source: "path_to_curr.json"`) indexes `curr.json` specifically. 
   * For example, the line may look like `source: "C:/Users/user/Documents/MuseScore3/Plugins/DiscordRP/curr.json"`.
   * *Note: I don't know why, but `source: "curr.json"` does not work.*
5. Edit `start.bat` so the first line indexes the correct folder with `rpc.js`.
   * For example, `C:/Users/user/Documents/MuseScore3/Plugins/DiscordRP` should be indexed.
6. Run `start.bat`. This is a file that will run the javascript file while also opening MuseScore so it does not have to be manually ran. Instead of using a shortcut to open Musescore, use this batch file to open both the plugin and MuseScore at the same time.
7. After opening MuseScore again after installation (assuming MuseScore has been closed after the plugin was installed), be sure to run the `Current Score Info` plugin. While this plugin is running, it will constantly update Discord's rich presence. If this step is forgotten, only the score from the most recent session will appear on rich presence.

## Examples
This Rich Presence includes active states, meaning your state will constantly change to show more information. Below shows an example for each one of those.

![](https://i.imgur.com/fPKKteE.png)  
![](https://i.imgur.com/OnaBi5m.png)  
![](https://i.imgur.com/dhVm2ZE.png)  
![](https://i.imgur.com/e45SDcX.png)  
![](https://i.imgur.com/usmmLbB.png)  
![](https://i.imgur.com/aWgurbw.png)
