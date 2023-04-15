const evaNumber = "8098360"; // EVA-Nummer der Station
const url = `https://apis.deutschebahn.com/db-api-marketplace/apis/timetables/v1/fchg/${evaNumber}`;
const headers = {
  "Accept": "application/xml",
  "DB-Client-Id": "6a0010ab1a1f6c80ac0e716cb7b78dd8",
  "DB-Api-Key": "71c347e5d3ba42482aefd9fec6327b87"
};

// XMLHttpRequest-Objekt erstellen
const xhr = new XMLHttpRequest();

xhr.open("GET", url, true);

// Header setzen
for (const key in headers) {
  xhr.setRequestHeader(key, headers[key]);
}

// Callback-Funktion
xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Antwort in XML umwandeln
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xhr.responseText, "text/xml");
    
    // Informationen aus der XML extrahieren
    const trains = xmlDoc.getElementsByTagName("tl")[0].getElementsByTagName("t");
    
    // Train-Informationen in HTML-Liste einfügen
    const trainList = document.getElementById("train-info");
    for (let i = 0; i < trains.length; i++) {
      const train = trains[i];
      const time = train.getElementsByTagName("dp")[0].getAttribute("pt");
      const destination = train.getElementsByTagName("ppth")[0].getAttribute("ppth");
      const platform = train.getElementsByTagName("ppth")[0].getAttribute("pp");
      const trainType = train.getAttribute("c");
      const trainNumber = train.getAttribute("n");
      const listItem = document.createElement("li");
      listItem.innerHTML = `${time} - ${trainType} ${trainNumber} nach ${destination} (Gleis ${platform})`;
      trainList.appendChild(listItem);
    }
  } else {
    console.error(xhr.statusText);
  }
};

xhr.onerror = function() {
  console.error(xhr.statusText);
};

// Anfrage senden
xhr.send();
