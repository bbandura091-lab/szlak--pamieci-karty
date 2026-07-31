// 🔥 Wstaw swój token Mapbox
mapboxgl.accessToken = "pk.eyJ1Ijoic3psYWtwYW1pZWNpIiwiYSI6ImNtcG9mbnc2NzAyejMycXF3YzBmejUxaWgifQ.IzEorkORB8T0RbT6N-WCLg';

// 🔥 Inicjalizacja mapy
const map = new mapboxgl.Map({
  container: 'mapa',
  style: 'mapbox://styles/mapbox/light-v11',
  center: [22.609, 51.460], // Lubartów
  zoom: 12
});

// 🔥 Lista Twoich plików geoJSON
const files = [
  'data/pos_001.geojson',
  'data/pos_002.geojson',
  'data/pos_003.geojson',
  'data/pos_004.geojson',
  'data/pos_005.geojson',
  'data/pos_006.geojson',
  'data/pos_007.geojson',
  'data/pos_008.geojson',
  'data/pos_009.geojson',
  'data/pos_010.geojson',
  'data/pos_011.geojson',
  'data/pos_013.geojson',
  'data/pos_014.geojson'
];
