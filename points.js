const points = [
  {
    id: 1,
    order_route: 1,
    name: "Sztab Marszalka Pilsudskiego 1920",
    era: "WOJNA 1920",
    type: "OBIEKT HISTORYCZNY / ARCHITEKTURA",
    addr: "Rynek 11, Gmach Starostwa",
    coords: [22.60789, 51.46234],
    audio: "audio_sztab_pilsudskiego_1920.mp3"
  },
  {
    id: 2,
    order_route: 2,
    name: "Tablica Wojska Polskiego 1920",
    era: "WOJNA 1920",
    type: "POMNIK / TABLICA",
    addr: "Rynek 15 (Fasada Kosciola)",
    coords: [22.6075, 51.4628],
    audio: "audio_tablica_wojska_polskiego_1920.mp3"
  },
  {
    id: 3,
    order_route: 3,
    name: "Siedziba Gestapo i Zandarmerii",
    era: "II WOJNA SWIATOWA",
    type: "OBIEKT HISTORYCZNY / ARCHITEKTURA",
    addr: "ul. Cmentarna 4",
    coords: [22.6081, 51.4631],
    audio: "audio_siedziba_gestapo_zandarmerii.mp3"
  },
  {
    id: 4,
    order_route: 4,
    name: "Wiezienie Gestapo i Katownia UB",
    era: "II WOJNA SWIATOWA",
    type: "MIEJSCE PAMIECI / TABLICA",
    addr: "ul. Slowackiego 7",
    coords: [22.6062, 51.4619],
    audio: "audio_wiezienie_gestapo_katownia_ub.mp3"
  },
  {
    id: 5,
    order_route: 5,
    name: "Dawny Szpital Polowy AK",
    era: "II WOJNA SWIATOWA",
    type: "OBIEKT HISTORYCZNY / ARCHITEKTURA",
    addr: "ul. Legionow 2",
    coords: [22.605, 51.4605],
    audio: "audio_dawny_szpital_polowy_ak.mp3"
  },
  {
    id: 6,
    order_route: 6,
    name: "Dom Przejsciowy Wolyniakow",
    era: "II WOJNA SWIATOWA",
    type: "MIEJSCE PAMIECI / TABLICA",
    addr: "ul. Lubelska 34",
    coords: [22.6041, 51.4598],
    audio: "audio_dom_przejsciowy_wolyniakow.mp3"
  },
  {
    id: 7,
    order_route: 7,
    name: "Punkt Kontaktowy 27 WDP AK",
    era: "II WOJNA SWIATOWA",
    type: "OBIEKT HISTORYCZNY / ARCHITEKTURA",
    addr: "ul. Cicha 8",
    coords: [22.603, 51.4589],
    audio: "audio_punkt_kontaktowy_27_wdp_ak.mp3"
  },
  {
    id: 8,
    order_route: 8,
    name: "Kryjowka Zolnierzy Wykletych",
    era: "OKRES POWOJENNY",
    type: "MIEJSCE PAMIECI / TABLICA",
    addr: "ul. Poprzeczna 12",
    coords: [22.6091, 51.4642],
    audio: "audio_kryjowka_zolnierzy_wykletych.mp3"
  },
  {
    id: 9,
    order_route: 9,
    name: "Posterunek MO i Urzad Bezpieczenstwa",
    era: "OKRES POWOJENNY",
    type: "MIEJSCE PAMIECI / TABLICA",
    addr: "ul. Lipowa 3",
    coords: [22.6105, 51.465],
    audio: "audio_posterunek_mo_ub.mp3"
  },
  {
    id: 10,
    order_route: 10,
    name: "Pomnik Niepodleglosci",
    era: "II WOJNA SWIATOWA",
    type: "POMNIK / TABLICA",
    addr: "Plac Wolnosci 1",
    coords: [22.6012, 51.457],
    audio: "audio_pomnik_niepodleglosci.mp3"
  },
  {
    id: 11,
    order_route: 11,
    name: "Drukarnia Podziemna AK",
    era: "II WOJNA SWIATOWA",
    type: "OBIEKT HISTORYCZNY / ARCHITEKTURA",
    addr: "ul. Partyzantow 15",
    coords: [22.6025, 51.4581],
    audio: "audio_drukarnia_podziemna_ak.mp3",
    bohater_naglowek: "sierż. rez. Karol Skaruch ps. „Warta”",
    bohater_kafelek: "W czasach, gdy prawda była zakazana, on ją drukował - pionier walki słowem, twórca podziemnych struktur informacji i propagandy Obwodu Lubartów."
  },
  {
    id: 12,
    order_route: 12,
    name: "Siedziba Sztabu BCh",
    era: "II WOJNA SWIATOWA",
    type: "MIEJSCE PAMIECI / TABLICA",
    addr: "ul. Kosciuszki 20",
    coords: [22.6068, 51.4611],
    audio: "audio_siedziba_sztabu_bch.mp3"
  },
  {
    id: 13,
    order_route: 13,
    name: "Mogila Powstancow Styczniowych 1863",
    era: "POWSTANIE STYCZNIOWE",
    type: "POMNIK / MOGILA",
    addr: "Cmentarz Parafialny",
    coords: [22.612, 51.4665],
    audio: "audio_mogila_powstancow_styczniowych.mp3"
  },
  {
    id: 14,
    order_route: 14,
    name: "Kwatera Zolnierzy AK i Wrzesnia 1939",
    era: "II WOJNA SWIATOWA",
    type: "MIEJSCE PAMIECI / TABLICA",
    addr: "Cmentarz Parafialny",
    coords: [22.6128, 51.467],
    audio: "audio_kwatera_zolnierzy_ak_wrzesnia_1939.mp3"
  },
  {
    id: 15,
    order_route: 15,
    name: "Symboliczny Grobowiec Zolnierzy Wykletych",
    era: "OKRES POWOJENNY",
    type: "MIEJSCE PAMIECI / TABLICA",
    addr: "Cmentarz Parafialny",
    coords: [22.6132, 51.4674],
    audio: "audio_symboliczny_grobowiec_zolnierzy_wykletych.mp3",
    bohater_naglowek: "por. Zdzisław Broński ps. „Uskok”",
    bohater_kafelek: "Legenda lubartowskich lasów - dowódca i obrońca. Upamiętniony Symbolicznym Grobem na Cmentarzu Parafialnym."
  },
  {
    id: 16,
    order_route: 16,
    name: "Schron Wojskowy i Magazyn Broni",
    era: "II WOJNA SWIATOWA",
    type: "OBIEKT HISTORYCZNY / ARCHITEKTURA",
    addr: "ul. Nowa 5",
    coords: [22.6001, 51.4555],
    audio: "audio_schron_wojskowy_magazyn_broni.mp3"
  },
  {
    id: 17,
    order_route: 17,
    name: "Punkt Zrzutowy Broni",
    era: "II WOJNA SWIATOWA",
    type: "MIEJSCE PAMIECI / TABLICA",
    addr: "ul. Polna 18",
    coords: [22.5985, 51.454],
    audio: "audio_punkt_zrzutowy_broni.mp3"
  },
  {
    id: 18,
    order_route: 18,
    name: "Miejsce Egzekucji Cywilow 1943",
    era: "II WOJNA SWIATOWA",
    type: "POMNIK / TABLICA",
    addr: "ul. Piaskowa 2",
    coords: [22.614, 51.468],
    audio: "audio_miejsce_egzekucji_cywilow_1943.mp3"
  },
  {
    id: 19,
    order_route: 19,
    name: "Dom Pamieci Ochotnikow 1920",
    era: "WOJNA 1920",
    type: "MIEJSCE PAMIECI / TABLICA",
    addr: "ul. Krotka 1",
    coords: [22.6045, 51.46],
    audio: "audio_dom_pamieci_ochotnikow_1920.mp3"
  },
  {
    id: 20,
    order_route: 20,
    name: "Apteka Podziemna i Punkt Opatrunkowy",
    era: "II WOJNA SWIATOWA",
    type: "OBIEKT HISTORYCZNY / ARCHITEKTURA",
    addr: "ul. Rynek 8",
    coords: [22.6071, 51.4621],
    audio: "audio_apteka_podziemna_punkt_opatrunkowy.mp3"
  },
  {
    id: 21,
    order_route: 21,
    name: "Siedziba Tajnego Nauczania",
    era: "II WOJNA SWIATOWA",
    type: "MIEJSCE PAMIECI / TABLICA",
    addr: "ul. Cmentarna 18",
    coords: [22.6098, 51.4645],
    audio: "audio_siedziba_tajnego_nauczania.mp3",
    bohater_naglowek: "ks. kapelan rez. Aleksander Szulc ps. „Ina”",
    bohater_kafelek: "Był głosem sumienia i tarczą ducha - jako kapelan Obwodu towarzyszył żołnierzom podziemia, a tajne nauczanie i chroniony księgozbiór stanowiły oręż duchowego oporu."
  },
  {
    id: 22,
    order_route: 22,
    name: "Lokal Kontaktowy WiN",
    era: "OKRES POWOJENNY",
    type: "MIEJSCE PAMIECI / TABLICA",
    addr: "ul. Ogrodowa 4",
    coords: [22.6112, 51.4658],
    audio: "audio_lokal_kontaktowy_win.mp3"
  },
  {
    id: 23,
    order_route: 23,
    name: "Dawne Gimnazjum - Osrodek Oporu",
    era: "II WOJNA SWIATOWA",
    type: "OBIEKT HISTORYCZNY / ARCHITEKTURA",
    addr: "ul. Lubelska 10",
    coords: [22.6038, 51.4592],
    audio: "audio_dawne_gimnazjum_osrodek_oporu.mp3"
  },
  {
    id: 24,
    order_route: 24,
    name: "Warsztat Krawiecki - Kryjowka Sluzb",
    era: "II WOJNA SWIATOWA",
    type: "MIEJSCE PAMIECI / TABLICA",
    addr: "ul. Szewska 3",
    coords: [22.602, 51.4578],
    audio: "audio_warsztat_krawiecki_kryjowka_sluzb.mp3"
  },
  {
    id: 25,
    order_route: 25,
    name: "Krzyz Pamieci Powstancow 1863",
    era: "POWSTANIE STYCZNIOWE",
    type: "POMNIK / TABLICA",
    addr: "Rondo Styczniowe",
    coords: [22.615, 51.469],
    audio: "audio_krzyz_pamieci_powstancow_1863.mp3"
  },
  {
    id: 26,
    order_route: 26,
    name: "Punkt Odbioru Radiowego Sztabu",
    era: "II WOJNA SWIATOWA",
    type: "MIEJSCE PAMIECI / TABLICA",
    addr: "ul. Slowackiego 12",
    coords: [22.606, 51.4615],
    audio: "audio_punkt_odbioru_radiowego_sztabu.mp3"
  },
  {
    id: 27,
    order_route: 27,
    name: "por. Boleslaw Mucharski Lekarz",
    era: "II WOJNA SWIATOWA",
    type: "MIEJSCE PAMIECI / TABLICA",
    addr: "ul. Cmentarna 10",
    coords: [22.6085, 51.4635],
    audio: "audio_tablica_boleslaw_mucharski.mp3",
    bohater_naglowek: "por. Bolesław Mucharski ps. „Lekarz”",
    bohater_kafelek: "Dowódca oddziału partyzanckiego AK w Obwodzie Lubartowskim. Walczył z okupantem niemieckim w latach 1941–1945, zamordowany na Zamku Lubelskim 12.04.1945 r."
  },
  {
    id: 28,
    order_route: 28,
    name: "kpt. dr Zbigniew Bartkow",
    era: "II WOJNA SWIATOWA",
    type: "MIEJSCE PAMIECI / TABLICA",
    addr: "ul. Rynek 20",
    coords: [22.6073, 51.4625],
    audio: "audio_tablica_zbigniew_bartkow.mp3",
    bohater_naglowek: "kpt. dr Zbigniew Bartków",
    bohater_kafelek: "Żołnierz Armii Krajowej, harcmistrz ZHP oraz powojenny lekarz okulista w Lubartowie. Osoba niezwykle skromna i oddana służbie drugiemu człowiekowi."
  }
];
