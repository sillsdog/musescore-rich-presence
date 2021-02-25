import QtQuick 2.0
import QtQuick.Dialogs 1.1
import MuseScore 3.0
import FileIO 3.0

MuseScore {
      menuPath: "Plugins.Discord Rich Presence"
      description: "A plugin that outputs the current score's information to a text file in the plugins folder"
      version: "1.0"
      requiresScore: true
      FileIO {
            id: outfile
            source: "curr.json"
            onError: console.log(msg)
      }
      function makeScoreInfo(cscore) {
            const score = fetchScoreInfo(curScore);
            outfile.write(JSON.stringify(score));
      }
      function fetchScoreInfo(obj) {
            const thisScore = {};
            thisScore.scoreName = obj.scoreName;
            thisScore.title = obj.title;
            thisScore.subtitle = obj.subtitle;
            thisScore.composer = obj.composer;
            thisScore.nstaves = obj.nstaves;
            thisScore.nmeasures = obj.nmeasures;
            thisScore.npages = obj.npages;
            thisScore.ntracks = obj.ntracks;
            return thisScore;
      }
      Timer {
            id: csitimer
            interval: 1000
            running: true
            repeat: true
            onTriggered: {
                makeScoreInfo();
            }
      }
      onRun: {
            csitimer.restart();
      }
}
