README

This repository contains a simple web application that displays train departure information and a map using Mapbox. The application is built with HTML, CSS, JavaScript, and the Mapbox API.

Features
Displays a Mapbox map centered on Bürstadt with a marker indicating the location of the train station.
Retrieves and displays the next departures for trains departing from the Bürstadt station using the Deutsche Bahn (DB) API.
The list of train departures is updated every 30 seconds.

Setup
Clone the repository to your local machine using the command git clone https://github.com/your-username/mapbox-example.git
Navigate to the project directory using cd mapbox-example
In the TrainScript.js file, replace the YOUR_API_KEY_HERE placeholder with your actual API code from Deutsche Bahn.
Install the project dependencies by running npm install
Update the stationId, apiKey, and clientId variables in the index.html file with your own values. You can obtain an API key and client ID from the Deutsche Bahn API website.
Start the application by running npm start in your terminal.
The application can be accessed by navigating to http://localhost:3000 in your web browser.

Dependencies
mapbox-gl v2.4.1
express v4.17.1
Credits
This application was created by [Your Name] as a demonstration of using Mapbox and the Deutsche Bahn API. Feel free to use this code as a starting point for your own projects!