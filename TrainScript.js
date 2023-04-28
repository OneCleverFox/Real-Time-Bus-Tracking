const stationId = "8098360";
  const apiKey = "6a0010ab1a1f6c80ac0e716cb7b78dd8";
  const clientId = "71c347e5d3ba42482aefd9fec6327b87";

  getTrainDepartures(stationId, apiKey, clientId);



// Funktion zum Abrufen von Zugabfahrten
export function getTrainDepartures(stationId, apiKey, clientId) {
  const evaNumber = stationId;
  const url = `https://apis.deutschebahn.com/db-api-marketplace/apis/timetables/v1/fchg/${evaNumber}`;
  const headers = {
    "Accept": "application/xml",
    "DB-Client-Id": clientId,
    "DB-Api-Key": apiKey
  };
  
  // XMLHttpRequest erstellen und konfigurieren
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.setRequestHeader("Accept", headers.Accept);
  xhr.setRequestHeader("DB-Client-Id", headers["DB-Client-Id"]);
  xhr.setRequestHeader("DB-Api-Key", headers["DB-Api-Key"]);
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Erfolgreiche Antwort erhalten, Zugdaten parsen und anzeigen
        const xmlData = xhr.responseXML;
        const departures = xmlData.getElementsByTagName("s");
        const trainList = document.getElementById("train-info");
        
        for (let i = 0; i < departures.length; i++) {
          const train = departures[i];
          const trainNumber = train.getAttribute("l");
          const trainDestination = train.getAttribute("bs");
          const trainDepartureTime = new Date(parseInt(train.getAttribute("dp")) * 1000);
          
          const listItem = document.createElement("li");
          const listItemText = document.createTextNode(`Train ${trainNumber} to ${trainDestination}, departure at ${trainDepartureTime.toLocaleTimeString("de-DE")}`);
          listItem.appendChild(listItemText);
          trainList.appendChild(listItem);
        }
      } else {
        // Fehler beim Abrufen der Daten, Fehlermeldung anzeigen
        const trainList = document.getElementById("train-info");
        const listItem = document.createElement("li");
        const listItemText = document.createTextNode("Error loading train departures");
        listItem.appendChild(listItemText);
        trainList.appendChild(listItem);
      }
    }
  };
  
  xhr.send();
}
