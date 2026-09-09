// 🔥 Wstaw swój token Mapbox
mapboxgl.accessToken = 'pk.eyJ1Ijoic3psYWtwYW1pZWNpIiwiYSI6ImNtc2Q2ajQzbTFuYm8yenF5NzlxMm94NmIifQ.onRsmrhonmqffC3GfOnYFg' ;

// 🔥 Inicjalizacja mapy
const map = new mapboxgl.Map({
  container: 'map',
 
style:'mapbox://styles/mapbox/light-v11',
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
  'pos_014.geojson'
];
