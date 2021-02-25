# MuseScore Rich Presence
Discord rich presence for MuseScore\
Only tested on Windows 10\
Untested on Musescore 2.x\
Edited by sillsdog, forked from FireController1847

## Requirements
* [Musescore 3.x](https://musescore.org/en)
* [node.js](https://nodejs.dev/)
* [@arcsine/win0info](https://www.npmjs.com/package/@arcsine/win-info)
* [fp](https://www.npmjs.com/package/fp)
* [path](https://www.npmjs.com/package/path)
* fs
* [discord-rpc](https://www.npmjs.com/package/discord-rpc)

### Installation for MuseScore 3
1. Install the CurrentScoreInfo-MS3.qml Plugin Into MuseScore
2. When inside MuseScore, enable the plugin. Then click on the button once under Plugins -> CurrentScoreInfo to run it.
3. Clone this repository and install node modules (`npm i`)
4. Run rpc.js (`node src/rpc.js`)

## Examples
\* This Rich Presence includes active states, meaning your state will constantly change to show more information. Below shows an example for each one of those.

![](https://i.imgur.com/fPKKteE.png)  
![](https://i.imgur.com/OnaBi5m.png)  
![](https://i.imgur.com/dhVm2ZE.png)  
![](https://i.imgur.com/e45SDcX.png)  
![](https://i.imgur.com/usmmLbB.png)  
![](https://i.imgur.com/aWgurbw.png)
