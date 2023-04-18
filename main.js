import "./public/iss.png";

// Making map and tiles


const mymap = L.map("issMap").setView([0, 0], 1);

const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attribution });
const api_url = "https://api.wheretheiss.at/v1/satellites/25544";
tiles.addTo(mymap);

// making a marker with a custom icon

const issIcon = L.icon({
  iconUrl: "iss.png",
  iconSize: [26, 16],
  iconAnchor: [13, 8],
});

const marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);
let firstTime = true;

async function getISS() {
  const response = await fetch(api_url);
  const data = await response.json();

  const { latitude, longitude } = data;

  marker.setLatLng([latitude, longitude]);
  if(firstTime){
    mymap.setView([latitude, longitude], 2);
    firstTime = false;
  }

  document.getElementById("lat").textContent = latitude.toFixed(2);
  document.getElementById("lon").textContent = longitude.toFixed(2);
}

getISS();
setInterval(getISS, 1000);
