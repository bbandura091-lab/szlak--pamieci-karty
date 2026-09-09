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
 const files = [
  'pos_001.html',
  'pos_002.html',
  'pos_003.html',
  'pos_004.html',
  'pos_005.html',
  'pos_006.html',
  'pos_007.html',
  'pos_008.html',
  'pos_009.html',
  'pos_010.html',
  'pos_011.html'
]; 
];
