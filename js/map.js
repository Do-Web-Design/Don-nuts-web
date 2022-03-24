const map = L.map("map", {
  center: [37.786468696182794, -122.45322081631939],
  zoom: 13,
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

setInterval(function () {
  map.invalidateSize();
}, 200);

const marker1 = L.marker([37.786468696182794, -122.45322081631939])
    .bindPopup("Don'nuts - 3595 California St, CA")
    .addTo(map),
  marker2 = L.marker([37.79087626546618, -122.40389892343612])
    .bindPopup("Don'nuts - 264 Kearny St, CA")
    .addTo(map),
  marker3 = L.marker([37.78932944886201, -122.40848450984791])
    .bindPopup("Don'nuts - 462 Powell St, CA")
    .addTo(map),
  marker4 = L.marker([37.78638591429656, -122.40570839376996])
    .bindPopup("Don'nuts - 780 Market St, CA")
    .addTo(map),
  marker5 = L.marker([37.802645933798125, -122.40264823674336])
    .bindPopup("Don'nuts - 1255 Battery St, CA")
    .addTo(map),
  marker6 = L.marker([37.79689360407562, -122.42207453852579])
    .bindPopup("Don'nuts - 2165 Polk St, CA")
    .addTo(map),
  marker7 = L.marker([37.7862772154162, -122.43982790934814])
    .bindPopup("Don'nuts - 1750 Divisadero St, CA")
    .addTo(map),
  marker8 = L.marker([37.77152701652553, -122.38934692342825])
    .bindPopup("Don'nuts - 1375 3rd St, CA")
    .addTo(map),
  marker9 = L.marker([37.75150876833221, -122.43163817897117])
    .bindPopup("Don'nuts - 3995 24th St, CA")
    .addTo(map),
  marker10 = L.marker([37.78993464660432, -122.40191672316558])
    .bindPopup("Don'nuts - 44 Montgomery St, CA")
    .addTo(map);
