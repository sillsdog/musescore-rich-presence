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
2. Install the plugin into MuseScore by putting the `DiscordRP` folder into MuseScore's user plugins file. For example, the file should be in the `C:/Users/user/Documents/MuseScore3/Plugins` folder.
3. When inside MuseScore, enable the plugin.
4. Edit `start.bat` so the first line indexes the correct folder with `rpc.js`. For example, `C:/Users/user/Documents/MuseScore3/Plugins/DiscordRP` should be indexed.
5. Run `start.bat`. This is a file that will run the javascript file while also opening MuseScore so it does not have to be manually ran. Instead of using a shortcut to open Musescore, this batch file will open both the plugin and MuseScore at the same time.
6. After opening MuseScore (after closing from when installing the plugin), be sure to run the `Current Score Info` plugin. While this plugin is running, it will constantly update Discord's rich presence.

## Examples
This Rich Presence includes active states, meaning your state will constantly change to show more information. Below shows an example for each one of those.

![](https://i.imgur.com/fPKKteE.png)  
![](https://i.imgur.com/OnaBi5m.png)  
![](https://i.imgur.com/dhVm2ZE.png)  
![](https://i.imgur.com/e45SDcX.png)  
![](https://i.imgur.com/usmmLbB.png)  
![](https://i.imgur.com/aWgurbw.png)
