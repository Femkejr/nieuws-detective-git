/* =====================================================================
   BEWERK HIER JULLIE NIEUWSBERICHTEN
   =====================================================================
   Voeg zoveel berichten toe als je wilt. Kopieer gewoon een heel blok
   tussen { en }, plak het er nog een keer bij, en zet er een komma
   tussen de blokken.

   Velden per bericht:
   - titel      : de kop van het bericht (verplicht)
   - tekst      : de inhoud / het bijschrift (verplicht) - beschrijf geen
                  foto/video die er niet is, want dat oogt meteen nep
   - afbeelding : url naar een plaatje, of null als er geen is
   - platform   : waar het "gepost" is, bv. "WhatsApp", "Instagram",
                  "Nieuwswebsite", "Officiële website gemeente"
   - bron       : wie het zogenaamd deelt/schrijft - dit staat gewoon
                  zichtbaar OP de kaart, dus dit mag nooit verklappen
                  dat iets nep is (bv. nooit "satire" of "nepaccount")
   - isNep      : true als het NEPnieuws is, false als het ECHT is
   - uitleg     : de uitleg die pas NA het swipen getoond wordt - hier
                  mag je wel alles verklappen en uitleggen
   - kenmerken  : lijstje met korte labels (waarom nep/echt herkenbaar is)
   ===================================================================== */

const ARTIKELEN = [
  // ===== 7 ECHTE, BESTAANDE ARTIKELEN VAN JEUGDJOURNAAL.NL (NOS) =====
  // Elk artikel is in eigen woorden samengevat. Bronvermelding met exacte
  // url staat in de toelichting hieronder / in de chat, niet in het
  // bron-veld zelf, want dat zou een kaart er meteen "officieel" uit
  // laten zien terwijl een echt bericht dat ook niet doet.
  {
    titel: "Onderzoeker bestudeerde jarenlang oude poep uit beerputten",
    tekst: "Een onderzoeker van de Rijksuniversiteit Groningen bekeek jarenlang de inhoud van eeuwenoude beerputten om erachter te komen wat mensen vroeger aten. Ze vond onder meer resten van groenten, fruit en pitten, en las ook oude kookboeken.",
    afbeelding: null,
    platform: "Nieuwswebsite voor kinderen",
    bron: "Jeugdjournaal (NOS)",
    isNep: false,
    uitleg: "Een echt, actueel bericht van Jeugdjournaal (de nieuwssite van de NOS speciaal voor kinderen), met een concrete, natrekbare bron (de onderzoeker en universiteit worden genoemd). Bron: jeugdjournaal.nl/artikel/2631769",
    kenmerken: ["Genoemde onderzoeker en universiteit", "Betrouwbare, bekende nieuwsbron", "Geen overdreven claims"],
  },
  {
    titel: "Hond krijgt standbeeld omdat hij mensen redde na aardbeving",
    tekst: "Een reddingshond met de naam Tsunami heeft een eigen standbeeld gekregen. De hond hielp na een zware aardbeving in Venezuela mensen op te sporen die onder het puin lagen, zodat reddingswerkers hen konden redden.",
    afbeelding: null,
    platform: "Nieuwswebsite voor kinderen",
    bron: "Jeugdjournaal (NOS)",
    isNep: false,
    uitleg: "Een concreet, feitelijk bericht met een naam (Tsunami), een gebeurtenis (de aardbeving) en een gevolg (het standbeeld) die allemaal apart te checken zijn. Bron: jeugdjournaal.nl/artikel/2631757",
    kenmerken: ["Naam en gebeurtenis te checken", "Betrouwbare, bekende nieuwsbron", "Past bij eerdere berichtgeving over dezelfde aardbeving"],
  },
  {
    titel: "Negenjarige Maria wint Junior Songfestival, mag naar Malta",
    tekst: "De negenjarige Maria uit Groningen heeft het Nederlandse Junior Songfestival gewonnen met haar liedje 'Stronger Together'. Ze is de jongste Nederlandse deelnemer ooit die naar de internationale finale mag, dit jaar op Malta.",
    afbeelding: null,
    platform: "Nieuwswebsite voor kinderen",
    bron: "Jeugdjournaal (NOS)",
    isNep: false,
    uitleg: "Verslag van een officiële, live uitgezonden wedstrijd met een bekende jury en stemprocedure - voor iedereen live te volgen geweest en dus door heel veel mensen tegelijk te bevestigen. Bron: jeugdjournaal.nl/artikel/2631726",
    kenmerken: ["Live uitgezonden wedstrijd", "Door veel mensen tegelijk waargenomen", "Concrete, natrekbare details"],
  },
  {
    titel: "Grote Clubactie van start met recordaantal deelnemende clubs",
    tekst: "Leden van duizenden Nederlandse sport- en andere verenigingen gaan dit weekend van deur tot deur om geld op te halen voor hun club. Dit jaar doen er ruim 6700 verenigingen mee, een record.",
    afbeelding: null,
    platform: "Nieuwswebsite voor kinderen",
    bron: "Jeugdjournaal (NOS)",
    isNep: false,
    uitleg: "Een jaarlijks terugkerende, landelijke actie met een vaste organisatie erachter - iedereen met een sportclub in de buurt kan dit zelf bevestigen. Bron: jeugdjournaal.nl/artikel/2631668",
    kenmerken: ["Vaste, jaarlijkse organisatie", "Zelf te controleren via je eigen sportclub", "Concreet getal genoemd"],
  },
  {
    titel: "Hotel en gemeente Maastricht oneens over kerstverlichting",
    tekst: "In Maastricht is een discussie ontstaan tussen een hotelier en de gemeente over de kerstversiering van zijn hotel. De gemeente wil dat hij kiest tussen de lichtjes of de grote strik, omdat het pand anders niet goed meer zichtbaar is.",
    afbeelding: null,
    platform: "Nieuwswebsite voor kinderen",
    bron: "Jeugdjournaal (NOS)",
    isNep: false,
    uitleg: "Klein, alledaags lokaal nieuws met duidelijk genoemde partijen (de hoteleigenaar en de gemeente) die je apart kunt navragen. Bron: jeugdjournaal.nl/artikel/2631796",
    kenmerken: ["Duidelijk genoemde partijen", "Klein, alledaags onderwerp zonder overdrijving", "Lokaal natrekbaar"],
  },
  {
    titel: "Fruitcorso Tiel dit jaar anders door geldtekort",
    tekst: "Het traditionele fruitfeest in Tiel bestaat al 65 jaar, maar kon dit jaar door geldgebrek niet op de gebruikelijke manier doorgaan: de praalwagens rijden dit jaar niet rond, maar staan stil. De deelnemende kinderen zijn er toch blij mee.",
    afbeelding: null,
    platform: "Nieuwswebsite voor kinderen",
    bron: "Jeugdjournaal (NOS)",
    isNep: false,
    uitleg: "Een jaarlijkse, bekende traditie (65 jaar oud) met een concrete uitleg voor de verandering - precies het soort nieuws dat makkelijk lokaal te checken is. Bron: jeugdjournaal.nl/artikel/2631816",
    kenmerken: ["Lang bestaande, bekende traditie", "Concrete reden gegeven", "Lokaal natrekbaar"],
  },
  {
    titel: "Replica van beroemd VOC-schip Batavia maakt laatste vaartocht",
    tekst: "De Batavia, een populair museumschip en replica van een beroemd VOC-schip, voer van Lelystad naar Amsterdam om daar uit het water gehaald en gerepareerd te worden. Het schip trekt al jaren veel bezoekers.",
    afbeelding: null,
    platform: "Nieuwswebsite voor kinderen",
    bron: "Jeugdjournaal (NOS)",
    isNep: false,
    uitleg: "Een bekend, bestaand museumschip met een concrete, aangekondigde vaarroute - voor iedereen in de omgeving live te zien geweest. Bron: jeugdjournaal.nl/artikel/2631661",
    kenmerken: ["Bekend, bestaand museum/schip", "Vooraf aangekondigde gebeurtenis", "Door omstanders te bevestigen"],
  },

  // ===== 7 NEPBERICHTEN, GEBASEERD OP ECHTE GEBEURTENISSEN/CONTEXT =====
  // Belangrijk: het bron-veld (zichtbaar VOOR het swipen) verklapt nooit
  // dat iets nep is - dat zou de kaart een oneerlijke hint geven. De
  // uitleg waarom het nep is staat alleen in "uitleg" (na het swipen).
  // Ook: geen enkel bericht verwijst naar een foto/video die er niet is.
  {
    titel: "Koning reed dit jaar toch weer in de Gouden Koets",
    tekst: "Bij de rijtoer op Prinsjesdag zat het Koninklijk Huis dit jaar voor het eerst in jaren weer in de Gouden Koets in plaats van de Glazen Koets, schrijven meerdere mensen die langs de route stonden.",
    afbeelding: null,
    platform: "WhatsApp",
    bron: "Doorgestuurd bericht",
    isNep: true,
    uitleg: "Dit klopt niet: de Gouden Koets staat sinds de restauratie in het Amsterdam Museum en wordt niet meer gebruikt op Prinsjesdag - de familie rijdt tegenwoordig in de Glazen Koets. Dit bericht klinkt geloofwaardig omdat het over iets echts gaat (Prinsjesdag bestaat écht), maar bevat een feitelijke fout die je alleen ontdekt als je het navraagt bij een officiële bron.",
    kenmerken: ["Klinkt aannemelijk want gaat over iets echts", "Feitelijk detail klopt niet bij navraag", "Geen enkele grote nieuwssite meldt hetzelfde"],
  },
  {
    titel: "Speler belooft: 'Als we wereldkampioen worden, krijgt elke school een dag vrij'",
    tekst: "Tijdens een persmoment zou een speler van het Nederlands elftal deze belofte hebben gedaan. Leerlingen delen het bericht massaal, in de hoop op een extra vrije dag als Oranje wereldkampioen wordt.",
    afbeelding: null,
    platform: "Instagram",
    bron: "Doorgestuurd bericht",
    isNep: true,
    uitleg: "Een individuele voetballer kan dit helemaal niet beslissen - dat gaat niet via het elftal maar via de overheid en scholen zelf. Zoek je de uitspraak zelf op, dan is er nergens een origineel interview of officieel bericht van te vinden. Een goede denkvraag: zou deze persoon dit eigenlijk wel kunnen beloven?",
    kenmerken: ["Onrealistische bevoegdheid (kan diegene dit beslissen?)", "Nergens een origineel interview van te vinden", "Wensdenken maakt het verleidelijk om te geloven"],
  },
  {
    titel: "Geen Kinderboekenweekgeschenk dit jaar: 'te duur om te printen'",
    tekst: "Vanwege de hoge papierprijzen zou er dit jaar geen gratis boekengeschenk worden uitgedeeld bij de Kinderboekenweek. In plaats daarvan zou je een QR-code krijgen waarmee je 'het boek in je hoofd kunt voorstellen'.",
    afbeelding: null,
    platform: "Instagram",
    bron: "Doorgestuurd bericht",
    isNep: true,
    uitleg: "Dit bericht is eigenlijk als grap bedoeld: de 'oplossing' (een boek voorstellen met een QR-code) is expres onzinnig. Dit soort overdreven, onmogelijke 'oplossingen' is vaak een teken van humor. Het probleem is dat als zo'n grap zonder duidelijke context wordt doorgestuurd, mensen soms denken dat het serieus bedoeld is. Check bij twijfel de officiële website van de Kinderboekenweek.",
    kenmerken: ["Absurde 'oplossing' als aanwijzing voor humor", "Niet te vinden op de officiële Kinderboekenweek-website", "Klinkt overdreven als je het navertelt"],
  },
  {
    titel: "Zwitserse boeren oogsten spaghetti van hun bomen",
    tekst: "Na een ongewoon zachte winter plukten families in Zuid-Zwitserland volgens een tv-nieuwsitem een recordoogst spaghetti van hun bomen. De verslaggever legde serieus uit dat de 'spaghettikorenworm', die de oogst normaal opvreet, dit jaar nergens te bekennen was.",
    afbeelding: null,
    platform: "Tv-programma (1 april 1957)",
    bron: "BBC Panorama",
    isNep: true,
    uitleg: "Spaghetti groeit natuurlijk niet aan bomen - het wordt gemaakt van tarwemeel en water. Dit was een serieus gebrachte 1 april-grap van een heel bekend en betrouwbaar nieuwsprogramma. Toch geloofden duizenden Britse kijkers het en belden ze de omroep op om te vragen hoe ze zelf een spaghettiboom konden kweken. Het laat zien: ook een normaal betrouwbare bron kan je een keer voor de gek houden, zeker rond 1 april.",
    kenmerken: ["Biologisch onmogelijke claim", "Serieuze, geloofwaardige presentatie door een bekende bron", "Zelfs een betrouwbare bron kan een grap maken"],
  },
  {
    titel: "Eindtoets groep 8 dit jaar plots verplicht op zaterdag",
    tekst: "Vanaf dit jaar zou de eindtoets van groep 8 voortaan op een zaterdag worden afgenomen, volledig online en vanuit huis. Het bericht meldt dat dit al vanaf komende maand ingaat.",
    afbeelding: null,
    platform: "X (Twitter)",
    bron: "@onderwijsupdate_nl",
    isNep: true,
    uitleg: "Dit account lijkt op het eerste gezicht officieel, maar is niet het echte, geverifieerde account van een onderwijsorganisatie - het is een verzonnen naam die daarop lijkt. Grote veranderingen in de eindtoets worden altijd eerst via scholen zelf gecommuniceerd, niet als losse social media post van een onbekend account. Check bij twijfel altijd de officiële website of vraag het gewoon aan je juf of meester.",
    kenmerken: ["Accountnaam klinkt officieel, maar is het niet", "Niet bevestigd door school of officiële website", "Grote, plotselinge verandering zonder aankondiging elders"],
  },
  {
    titel: "Arbeiders graven versteende reus van ruim drie meter op",
    tekst: "Bij het graven van een waterput op een boerderij in de Amerikaanse staat New York stuitten arbeiders volgens de lokale kranten op een enorm stenen lichaam: een versteende reus, die duizenden jaren oud zou zijn. Binnen een paar dagen kwamen er honderden nieuwsgierige bezoekers op af.",
    afbeelding: null,
    platform: "Krant (1869)",
    bron: "Lokale kranten, regio Syracuse",
    isNep: true,
    uitleg: "Een zakenman had het beeld stiekem laten maken door een steenhouwer en het een jaar eerder zelf op die plek begraven. Hij verdiende goed geld met kaartjes voor bezoekers die de 'reus' wilden zien, tot een wetenschapper beitelsporen ontdekte en de truc ontmaskerde. Dit laat een belangrijk motief achter nepnieuws zien: geld verdienen aan de nieuwsgierigheid van mensen - iets wat vandaag de dag met clickbait en advertenties nog steeds gebeurt.",
    kenmerken: ["Onwaarschijnlijke, sensationele vondst", "Iemand verdiende er geld aan - een veelvoorkomend motief achter nepnieuws", "Uiteindelijk door een wetenschapper ontkracht"],
  },
  {
    titel: "Astronoom ontdekt eenhoorns en vleermuismensen op de maan",
    tekst: "Met een gloednieuwe, extreem krachtige telescoop zou een bekende sterrenkundige vanuit Zuid-Afrika leven op de maan hebben waargenomen: kuddes eenhoorns, vliegende wezens die op mensen leken, en zelfs een tempel. De krant bracht het verhaal in een reeks van meerdere lange, serieuze artikelen.",
    afbeelding: null,
    platform: "Krant (1835)",
    bron: "The Sun (New York)",
    isNep: true,
    uitleg: "Dit is een van de beroemdste nepnieuwsverhalen ooit, bekend als de 'Great Moon Hoax'. Een journalist verzon het hele verhaal om meer kranten te verkopen, en gebruikte de naam van een echte, bekende sterrenkundige zonder dat die daar iets van wist. Pas drie weken later gaf de krant toe dat alles verzonnen was. Het laat mooi zien: hoe uitgebreider en serieuzer iets wordt gebracht, wil nog niet zeggen dat het ook waar is.",
    kenmerken: ["Onmogelijke, fantastische claim", "Naam van een echte deskundige gebruikt zonder toestemming", "Lange, serieuze 'verslaggeving' maakt het overtuigender, niet waarder"],
  },
];

/* =====================================================================
   HIERONDER STAAT DE PROGRAMMEERCODE VAN HET SPEL, OBJECT-GEORIËNTEERD
   OPGEZET MET TWEE KLASSEN.

   Je hoeft hier niets aan te passen om nieuwe berichten toe te voegen
   (daarvoor pas je alleen ARTIKELEN hierboven aan), maar dit deel is
   ook nuttig om te snappen en te bespreken in je verslag.
   ===================================================================== */

// Hoeveel pixels je moet slepen voordat een keuze telt
const DREMPEL = 110;

/* =====================================================================
   KLASSE: SwipeKaart
   -----------------------------------------------------------------
   Eén object van deze klasse = één kaart op het scherm. De klasse
   "kapselt in" (encapsulatie) hoe die ene kaart getekend wordt én hoe
   die met de muis/vinger versleept kan worden. De rest van het
   programma hoeft niets te weten van pixels, rotatiehoeken of
   pointer-events - dat blijft privé binnen deze klasse (de velden
   met een # ervoor).
   ===================================================================== */
class SwipeKaart {
  #element;      // het HTML-element van deze kaart
  #artikel;      // het nieuwsbericht dat deze kaart toont
  #onSwipe;      // functie die wordt aangeroepen zodra er geswiped is
  #dragging = false;
  #startX = 0;
  #dragX = 0;

  // laagKlasse is "boven", "laag-1" of "laag-2" (zie style.css)
  // onSwipe is optioneel: alleen de bovenste kaart is versleepbaar
  constructor(artikel, laagKlasse, onSwipe = null) {
    this.#artikel = artikel;
    this.#onSwipe = onSwipe;
    this.#element = this.#bouwElement(laagKlasse);
    if (onSwipe) this.#maakSleepbaar();
  }

  // Een "getter": zo kan de buitenwereld this.element opvragen,
  // zonder bij de private velden te kunnen
  get element() {
    return this.#element;
  }

  #bouwElement(laagKlasse) {
    const kaart = document.createElement("div");
    kaart.className = `nd-card ${laagKlasse}`;

    const afbeeldingHtml = this.#artikel.afbeelding
      ? `<img class="nd-card-img" src="${this.#artikel.afbeelding}" alt="" draggable="false">`
      : `<div class="nd-card-img-fallback">💬</div>`;

    kaart.innerHTML = `
      <div class="nd-pin">📌</div>
      <div class="nd-stamp nep">NEP</div>
      <div class="nd-stamp echt">ECHT</div>
      ${afbeeldingHtml}
      <div class="nd-card-body">
        <span class="nd-platform">${this.#artikel.platform}</span>
        <div class="nd-card-titel">${this.#artikel.titel}</div>
        <div class="nd-card-tekst">${this.#artikel.tekst}</div>
        <div class="nd-card-bron">Gedeeld door: ${this.#artikel.bron}</div>
      </div>
    `;
    return kaart;
  }

  #maakSleepbaar() {
    this.#element.addEventListener("pointerdown", this.#pointerDown);
    this.#element.addEventListener("pointermove", this.#pointerMove);
    this.#element.addEventListener("pointerup", this.#pointerUp);
    this.#element.addEventListener("pointerleave", this.#pointerUp);
  }

  // Dit zijn "arrow function" klasse-velden. Het voordeel: 'this'
  // wijst hierin altijd naar dit SwipeKaart-object, ook als de
  // functie als event listener wordt doorgegeven.
  #pointerDown = (e) => {
    this.#dragging = true;
    this.#startX = e.clientX;
    this.#element.setPointerCapture(e.pointerId);
  };

  #pointerMove = (e) => {
    if (!this.#dragging) return;
    this.#dragX = e.clientX - this.#startX;
    this.#updatePositie();
  };

  #pointerUp = () => {
    if (!this.#dragging) return;
    this.#dragging = false;

    if (Math.abs(this.#dragX) > DREMPEL) {
      this.swipeWeg(this.#dragX < 0);
    } else {
      // terug naar het midden laten veren
      this.#element.style.transition = "transform 0.25s ease";
      this.#element.style.transform = "translateX(0) rotate(0)";
    }
  };

  #updatePositie() {
    const rotatie = this.#dragX / 18;
    this.#element.style.transform = `translateX(${this.#dragX}px) rotate(${rotatie}deg)`;

    const nepStempel = this.#element.querySelector(".nd-stamp.nep");
    const echtStempel = this.#element.querySelector(".nd-stamp.echt");
    nepStempel.style.opacity = this.#dragX < 0 ? Math.min(Math.abs(this.#dragX) / DREMPEL, 1) : 0;
    echtStempel.style.opacity = this.#dragX > 0 ? Math.min(this.#dragX / DREMPEL, 1) : 0;
  }

  // Publieke methode: laat de kaart wegschuiven, hetzij door te
  // slepen, hetzij programmatisch via de knoppen onderaan.
  swipeWeg(isNepKeuze) {
    this.#element.style.transition = "transform 0.25s ease";
    this.#element.style.transform = `translateX(${isNepKeuze ? -600 : 600}px) rotate(${isNepKeuze ? -12 : 12}deg)`;
    setTimeout(() => this.#onSwipe?.(isNepKeuze), 180);
  }
}

/* =====================================================================
   KLASSE: NieuwsDetectiveSpel
   -----------------------------------------------------------------
   Eén object van deze klasse = één speelsessie. Het houdt de score,
   de voortgang en de antwoorden bij (allemaal private velden), en
   regisseert wanneer er een nieuwe SwipeKaart getekend wordt.
   ===================================================================== */
class NieuwsDetectiveSpel {
  #artikelen;
  #huidigeIndex = 0;
  #score = 0;
  #antwoorden = [];
  #huidigeKaart = null;

  // DOM-elementen die dit object nodig heeft, meteen als privé-veld opgezocht
  #stackEl = document.getElementById("kaarten-stack");
  #scoreEl = document.getElementById("score-teller");
  #voortgangEl = document.getElementById("voortgangsbalk");
  #controlsEl = document.getElementById("controls");
  #hintEl = document.querySelector(".nd-hint");
  #eindschermEl = document.getElementById("eindscherm");
  #eindGetalEl = document.getElementById("eind-getal");
  #eindLijstEl = document.getElementById("eind-lijst");
  #introEl = document.getElementById("intro");

  constructor(artikelen) {
    this.#artikelen = artikelen;

    document.getElementById("intro-tekst").innerHTML =
      `Je krijgt <b>${artikelen.length} berichten</b> te zien. Swipe naar links als je denkt dat het ` +
      `<b>nepnieuws</b> is, of naar rechts als je denkt dat het <b>echt</b> is.`;

    document.getElementById("btn-start").addEventListener("click", () => this.#start());
    document.getElementById("btn-nep").addEventListener("click", () => this.#swipeMetKnop(true));
    document.getElementById("btn-echt").addEventListener("click", () => this.#swipeMetKnop(false));
    document.getElementById("btn-opnieuw").addEventListener("click", () => this.#opnieuw());
  }

  #start() {
    this.#introEl.style.display = "none";
    this.#tekenStapel();
  }

  #tekenStapel() {
    this.#stackEl.innerHTML = "";

    const derde = this.#artikelen[this.#huidigeIndex + 2];
    const tweede = this.#artikelen[this.#huidigeIndex + 1];
    const eerste = this.#artikelen[this.#huidigeIndex];

    if (derde) this.#stackEl.appendChild(new SwipeKaart(derde, "laag-2").element);
    if (tweede) this.#stackEl.appendChild(new SwipeKaart(tweede, "laag-1").element);

    if (eerste) {
      this.#huidigeKaart = new SwipeKaart(eerste, "boven", (isNepKeuze) => this.#beoordeel(isNepKeuze));
      this.#stackEl.appendChild(this.#huidigeKaart.element);
    }

    this.#scoreEl.textContent = `${this.#score} / ${this.#artikelen.length}`;
    this.#voortgangEl.style.width = `${(this.#huidigeIndex / this.#artikelen.length) * 100}%`;
  }

  #swipeMetKnop(isNepKeuze) {
    this.#huidigeKaart?.swipeWeg(isNepKeuze);
  }

  #beoordeel(keuzeIsNep) {
    const artikel = this.#artikelen[this.#huidigeIndex];
    const juist = keuzeIsNep === artikel.isNep;

    if (juist) this.#score++;
    this.#antwoorden.push({ artikel, juist, keuzeIsNep });

    this.#toonFeedback(artikel, juist);
  }

  #toonFeedback(artikel, juist) {
    const overlay = document.createElement("div");
    overlay.className = "nd-overlay";

    const kenmerkenHtml = artikel.kenmerken
      .map((k) => `<span class="nd-chip">${k}</span>`)
      .join("");

    overlay.innerHTML = `
      <div class="nd-feedback">
        <div class="nd-feedback-head ${juist ? "juist" : "fout"}">
          ${juist ? "👍 Goed gezien!" : "⚠️ Niet helemaal..."}
        </div>
        <div class="nd-feedback-sub">Dit was eigenlijk ${artikel.isNep ? "NEPNIEUWS" : "ECHT NIEUWS"}</div>
        <div class="nd-feedback-uitleg">${artikel.uitleg}</div>
        <div class="nd-chips">${kenmerkenHtml}</div>
        <button class="nd-next-btn" id="btn-volgende">
          ${this.#huidigeIndex + 1 >= this.#artikelen.length ? "Bekijk je resultaat" : "Volgende bericht"}
        </button>
      </div>
    `;
    this.#stackEl.appendChild(overlay);

    document.getElementById("btn-volgende").addEventListener("click", () => this.#volgende());
  }

  #volgende() {
    this.#huidigeIndex++;
    if (this.#huidigeIndex >= this.#artikelen.length) {
      this.#toonEindscherm();
    } else {
      this.#tekenStapel();
    }
  }

  #toonEindscherm() {
    this.#stackEl.style.display = "none";
    this.#controlsEl.style.display = "none";
    this.#hintEl.style.display = "none";
    this.#eindschermEl.hidden = false;

    this.#eindGetalEl.textContent = `${this.#score}/${this.#artikelen.length}`;

    this.#eindLijstEl.innerHTML = this.#antwoorden
      .map((a) => `
        <div class="nd-eind-item">
          <div class="nd-eind-icon ${a.juist ? "juist" : "fout"}">${a.juist ? "✓" : "✕"}</div>
          <div>
            <div class="nd-eind-titel">${a.artikel.titel}</div>
            <div class="nd-eind-detail">
              Jouw keuze: ${a.keuzeIsNep ? "nep" : "echt"} · Was eigenlijk: ${a.artikel.isNep ? "nep" : "echt"}
            </div>
          </div>
        </div>
      `)
      .join("");
  }

  #opnieuw() {
    this.#huidigeIndex = 0;
    this.#score = 0;
    this.#antwoorden = [];
    this.#eindschermEl.hidden = true;
    this.#stackEl.style.display = "block";
    this.#controlsEl.style.display = "flex";
    this.#hintEl.style.display = "block";
    this.#tekenStapel();
  }
}

/* =====================================================================
   SPEL STARTEN
   -----------------------------------------------------------------
   Hier wordt de klasse NieuwsDetectiveSpel voor het eerst gebruikt:
   we maken er één "instantie" (object) van. Alles wat hierboven bij
   de klasse hoort, gebeurt nu automatisch voor dit ene spel.
   ===================================================================== */
const spel = new NieuwsDetectiveSpel(ARTIKELEN);
