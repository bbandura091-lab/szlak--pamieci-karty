// Kompletną tablica 28 punktów dla pliku HTML / aplikacji
const points = [
  {
    "id": 1,
    "era": "WOJNA 1920",
    "type": "OBIEKT HISTORYCZNY / ARCHITEKTURA",
    "order_route": 1,
    "coords": [22.60789, 51.46234],
    "addr": "Rynek 11 Gmach Starostwa",
    "name": "Sztab Marszałka Piłsudskiego 1920"
  },
  {
    "id": 2,
    "era": "WOJNA 1920",
    "type": "POMNIK / TABLICA",
    "order_route": 2,
    "coords": [22.60750, 51.46280],
    "addr": "Rynek 15 (Fasada Kościoła)",
    "name": "Tablica Wojska Polskiego 1920"
  },
  {
    "id": 3,
    "era": "II WOJNA ŚWIATOWA",
    "type": "OBIEKT HISTORYCZNY / ARCHITEKTURA",
    "order_route": 3,
    "coords": [22.60810, 51.46310],
    "addr": "ul. Cmentarna 4",
    "name": "Siedziba Gestapo i Żandarmerii"
  },
  {
    "id": 4,
    "era": "II WOJNA ŚWIATOWA",
    "type": "MIEJSCE PAMIĘCI / TABLICA",
    "order_route": 4,
    "coords": [22.60620, 51.46190],
    "addr": "ul. Słowackiego 7",
    "name": "Więzienie Gestapo i Katownia UB"
  },
  {
    "id": 5,
    "era": "II WOJNA ŚWIATOWA",
    "type": "OBIEKT HISTORYCZNY / ARCHITEKTURA",
    "order_route": 5,
    "coords": [22.60500, 51.46050],
    "addr": "ul. Legionów 2",
    "name": "Dawny Szpital Polowy AK"
  },
  {
    "id": 6,
    "era": "II WOJNA ŚWIATOWA",
    "type": "MIEJSCE PAMIĘCI / TABLICA",
    "order_route": 6,
    "coords": [22.60410, 51.45980],
    "addr": "ul. Lubelska 34",
    "name": "Dom Przejściowy Wołyniaków"
  },
  {
    "id": 7,
    "era": "II WOJNA ŚWIATOWA",
    "type": "OBIEKT HISTORYCZNY / ARCHITEKTURA",
    "order_route": 7,
    "coords": [22.60300, 51.45890],
    "addr": "ul. Cicha 8",
    "name": "Punkt Kontaktowy 27 WDP AK"
  },
  {
    "id": 8,
    "era": "OKRES POWOJENNY",
    "type": "MIEJSCE PAMIĘCI / TABLICA",
    "order_route": 8,
    "coords": [22.60910, 51.46420],
    "addr": "ul. Poprzeczna 12",
    "name": "Kryjówka Żołnierzy Wyklętych"
  },
  {
    "id": 9,
    "era": "OKRES POWOJENNY",
    "type": "MIEJSCE PAMIĘCI / TABLICA",
    "order_route": 9,
    "coords": [22.61050, 51.46500],
    "addr": "ul. Lipowa 3",
    "name": "Posterunek MO i Urząd Bezpieczeństwa"
  },
  {
    "id": 10,
    "era": "II WOJNA ŚWIATOWA",
    "type": "POMNIK / TABLICA",
    "order_route": 10,
    "coords": [22.60120, 51.45700],
    "addr": "Plac Wolności 1",
    "name": "Pomnik Niepodległości"
  },
  {
    "id": 11,
    "era": "II WOJNA ŚWIATOWA",
    "type": "OBIEKT HISTORYCZNY / ARCHITEKTURA",
    "order_route": 11,
    "coords": [22.60250, 51.45810],
    "addr": "ul. Partyzantów 15",
    "name": "Drukarnia Podziemna AK"
  },
  {
    "id": 12,
    "era": "II WOJNA ŚWIATOWA",
    "type": "MIEJSCE PAMIĘCI / TABLICA",
    "order_route": 12,
    "coords": [22.60680, 51.46110],
    "addr": "ul. Kościuszki 20",
    "name": "Siedziba Sztabu BCh"
  },
  {
    "id": 13,
    "era": "POWSTANIE STYCZNIOWE",
    "type": "POMNIK / MOGIŁA",
    "order_route": 13,
    "coords": [22.61200, 51.46650],
    "addr": "Cmentarz Parafialny",
    "name": "Mogiła Powstańców Styczniowych 1863"
  },
  {
    "id": 14,
    "era": "II WOJNA ŚWIATOWA",
    "type": "MIEJSCE PAMIĘCI / TABLICA",
    "order_route": 14,
    "coords": [22.61280, 51.46700],
    "addr": "Cmentarz Parafialny",
    "name": "Kwatera Żołnierzy AK i Września 1939"
  },
  {
    "id": 15,
    "era": "OKRES POWOJENNY",
    "type": "MIEJSCE PAMIĘCI / TABLICA",
    "order_route": 15,
    "coords": [22.61320, 51.46740],
    "addr": "Cmentarz Parafialny",
    "name": "Symboliczny Grobowiec Żołnierzy Wyklętych"
  },
  {
    "id": 16,
    "era": "II WOJNA ŚWIATOWA",
    "type": "OBIEKT HISTORYCZNY / ARCHITEKTURA",
    "order_route": 16,
    "coords": [22.60010, 51.45550],
    "addr": "ul. Nowa 5",
    "name": "Schron Wojskowy i Magazyn Broni"
  },
  {
    "id": 17,
    "era": "II WOJNA ŚWIATOWA",
    "type": "MIEJSCE PAMIĘCI / TABLICA",
    "order_route": 17,
    "coords": [22.59850, 51.45400],
    "addr": "ul. Polna 18",
    "name": "Punkt Zrzutowy Broni"
  },
  {
    "id": 18,
    "era": "II WOJNA ŚWIATOWA",
    "type": "POMNIK / TABLICA",
    "order_route": 18,
    "coords": [22.61400, 51.46800],
    "addr": "ul. Piaskowa 2",
    "name": "Miejsce Egzekucji Cywilów 1943"
  },
  {
    "id": 19,
    "era": "WOJNA 1920",
    "type": "MIEJSCE PAMIĘCI / TABLICA",
    "order_route": 19,
    "coords": [22.60450, 51.46000],
    "addr": "ul. Krótka 1",
    "name": "Dom Pamięci Ochotników 1920"
  },
  {
    "id": 20,
    "era": "II WOJNA ŚWIATOWA",
    "type": "OBIEKT HISTORYCZNY / ARCHITEKTURA",
    "order_route": 20,
    "coords": [22.60710, 51.46210],
    "addr": "ul. Rynek 8",
    "name": "Apteka Podziemna i Punkt Opatrunkowy"
  },
  {
    "id": 21,
    "era": "II WOJNA ŚWIATOWA",
    "type": "MIEJSCE PAMIĘCI / TABLICA",
    "order_route": 21,
    "coords": [22.60980, 51.46450],
    "addr": "ul. Cmentarna 18",
    "name": "Siedziba Tajnego Nauczania"
  },
  {
    "id": 22,
    "era": "OKRES POWOJENNY",
    "type": "MIEJSCE PAMIĘCI / TABLICA",
    "order_route": 22,
    "coords": [22.61120, 51.46580],
    "addr": "ul. Ogrodowa 4",
    "name": "Lokal Kontaktowy WIN"
  },
  {
    "id": 23,
    "era": "II WOJNA ŚWIATOWA",
    "type": "OBIEKT HISTORYCZNY / ARCHITEKTURA",
    "order_route": 23,
    "coords": [22.60380, 51.45920],
    "addr": "ul. Lubelska 10",
    "name": "Dawne Gimnazjum – Ośrodek Oporu"
  },
  {
    "id": 24,
    "era": "II WOJNA ŚWIATOWA",
    "type": "MIEJSCE PAMIĘCI / TABLICA",
    "order_route": 24,
    "coords": [22.60200, 51.45780],
    "addr": "ul. Szewska 3",
    "name": "Warsztat Krawiecki – Kryjówka Służb"
  },
  {
    "id": 25,
    "era": "POWSTANIE STYCZNIOWE",
    "type": "POMNIK / TABLICA",
    "order_route": 25,
    "coords": [22.61500, 51.46900],
    "addr": "Rondo Styczniowe",
    "name": "Krzyż Pamięci Powstańców 1863"
  },
  {
    "id": 26,
    "era": "II WOJNA ŚWIATOWA",
    "type": "MIEJSCE PAMIĘCI / TABLICA",
    "order_route": 26,
    "coords": [22.60600, 51.46150],
    "addr": "ul. Słowackiego 12",
    "name": "Punkt Odbioru Radiowego Sztabu"
  },
  {
    "id": 27,
    "era": "II WOJNA ŚWIATOWA",
    "type": "MIEJSCE PAMIĘCI / TABLICA",
    "order_route": 27,
    "coords": [22.60850, 51.46350],
    "addr": "ul. Cmentarna 10",
    "name": "por. Bolesław Mucharski „Lekarz”"
  },
  {
    "id": 28,
    "era": "II WOJNA ŚWIATOWA",
    "type": "MIEJSCE PAMIĘCI / TABLICA",
    "order_route": 28,
    "coords": [22.60730, 51.46250],
    "addr": "ul. Rynek 20",
    "name": "kpt. dr Zbigniew Bartków"
  }
];
