// 🔥 Wstaw swój token Mapbox
mapboxgl.accessToken = "pk.eyJ1Ijoic3psYWtwYW1pZWNpIiwiYSI6ImNtcG9mbnc2NzAyejMycXF3YzBmejUxaWgifQ.IzEorkORB8T0RbT6N-WCLg"

// 🔥 Inicjalizacja mapy
const map = new mapboxgl.Map({
  container: 'mapa',
  style: 'mapbox://styles/mapbox/light-v11',
  center: [22.609, 51.460], // Lubartów
  zoom: 12
});

// 🔥 Lista Twoich plików geoJSON
const files = [
  'pos_001.geojson',
  'pos_002.geojson',
  'pos_003.geojson',
  'pos_004.geojson',
  'pos_005.geojson',
  'pos_006.geojson',
  'pos_007.geojson',
  'pos_008.geojson',
  'pos_009.geojson',
  'pos_010.geojson',
  'pos_011.geojson',
  'pos_013.geojson',
  'pos_014.geojson',
  'pos_015.geojson',
  'pos_016.geojson',
  'pos_017.geojson',
  'pos_018.geojson',
  'pos_019.geojson'
];

// 🔥 Wczytywanie każdego pliku geoJSON
files.forEach(file => {
  fetch(file)
    .then(res => res.json())
    .then(data => {

      // Dodaj źródło
      map.addSource(file, {
        type: 'geojson',
        data: data
      });

      // Dodaj warstwę (znacznik)
      map.addLayer({
        id: file,
        type: 'circle',
        source: file,
        paint: {
          'circle-radius': 8,
          'circle-color': '#b30000'
        }
      });

      // Popup po kliknięciu
      map.on('click', file, (e) => {
        const props = e.features[0].properties;

        new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(`
            <h3>${props.name}</h3>
            <p>${props.role}</p>
            <a href="${props.page}" target="_blank">Zobacz kartę</a>
          `)
          .addTo(map);
      });
    })
    .catch(err => console.error('Błąd wczytywania:', file, err));
});
