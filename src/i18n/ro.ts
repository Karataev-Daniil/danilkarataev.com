import type { Dictionary } from "./en";

/** 1 proiect · 2–19 proiecte (also 101–119…) · 20+ de proiecte */
function plural(n: number, one: string, few: string): string {
  if (n === 1) return `${n} ${one}`;
  const m100 = n % 100;
  return n === 0 || (m100 >= 1 && m100 <= 19) ? `${n} ${few}` : `${n} de ${few}`;
}

export const ro: Dictionary = {
  meta: {
    title: "Daniil Karataev · Dezvoltator Middle Front-end / Full-stack",
    description:
      "Dezvoltator front-end / full-stack în Chișinău, Moldova. React, TypeScript, Next.js, WordPress. 2 angajatori, freelance și 8 site-uri comerciale din 2024, dintre care două sunt produsele mele.",
    ogAlt: "Daniil Karataev · Dezvoltator Middle Front-end / Full-stack",
  },
  skip: "Salt la conținut",
  nav: {
    label: "Principal",
    about: "Despre mine",
    experience: "Experiență",
    products: "Produse",
    projects: "Proiecte",
    activity: "Activitate",
    stack: "Tehnologii",
    contact: "Contact",
    cv: "CV",
  },
  hero: {
    eyebrow: "Portofoliu",
    role: "Dezvoltator Middle Front-end / Full-stack",
    focus: "React · TypeScript · Next.js · WordPress",
    location: "Chișinău, Moldova",
    languages: ["engleză · B1–B2", "rusă · nativă"],
    intro:
      "Fac magazine online rapide în mai multe limbi, platforme de landing page-uri și teme WordPress personalizate. O funcționalitate o duc singur până la capăt, de la integrarea cu API-ul până la SEO-ul tehnic.",
    now: "Acum",
    nowText: "Lucrez la produsele mele, Dinastia și GoodAntShop, și iau proiecte freelance. Acum lucrez la chinolog.md, fci.md și magazinul Flower2Go.",
    ctaEmail: "Scrie-mi pe Telegram",
    ctaCv: "Descarcă CV-ul",
    cvFrontend: "CV Front-end",
    cvWordpress: "CV WordPress",
  },
  stats: [
    { value: 2024, from: 2016, label: "în producție din" },
    { value: 2, from: 0, label: "angajatori" },
    { value: 8, from: 0, label: "site-uri comerciale" },
    { value: 2, from: 0, label: "sunt produsele mele" },
  ],
  map: {
    label: "Traseul profesional din 2024",
    lead: "Traseul din 2024",
    lines: { work: "Muncă", own: "Proiecte proprii" },
    nodes: {
      aroundwire: "Full-stack · birou, Chișinău",
      freelance2025: "Freelance · Samozanyatye.rf și Webcost",
      goodantshop: "Magazin de furnicare",
      rocketseo: "Middle Front-end · agenție web",
      dinastia: "Marketplace de animale cu pedigree",
      freelance: "Freelance · clienți proprii",
    },
    now: "acum",
    legend: { done: "Încheiat", ongoing: "În desfășurare", scale: "Fără scară. Stațiile sunt în ordinea în care au început" },
  },
  sections: {
    about: { title: "Despre mine", note: "pe scurt" },
    experience: { title: "Experiență", note: "proiecte comerciale" },
    products: { title: "Produse proprii", note: "idee → brand → cod → trafic" },
    projects: { title: "Proiecte selectate", note: "pentru clienți și angajatori" },
    activity: { title: "Activitate pe GitHub", note: "actualizată zilnic" },
    stack: { title: "Tehnologii", note: "ce folosesc în fiecare săptămână" },
    recommendation: { title: "Recomandări", note: "AroundWire · Samozanyatye.rf" },
    contact: { title: "Contact", note: "hai să vorbim" },
  },
  experience: {
    current: "acum",
    items: {
      freelance: {
        role: "Full-stack Developer · freelance",
        dates: "din 2026",
        place: "Chișinău",
        format: "la distanță și întâlniri",
        summary: "Lucrez direct cu clienții și fac singur tot: auditul, oferta, designul, codul, lansarea și suportul.",
        points: [
          "Demolator: un site bilingv pentru o firmă de tăiere a betonului și demolări, în locul celui vechi pe Tilda. Are prețuri, calculator și cereri cu poze în Telegram.",
          "chinolog.md: noul portal chinologic al Moldovei, în trei limbi. Are registre, verificarea actelor câinelui și un admin din care clientul își ține singur site-ul.",
          "fci.md: un site nou pentru Uniunea Chinologică din Moldova în trei limbi, cu calendarul expozițiilor, registrele arbitrilor și caniselor și catalogul raselor FCI.",
          "Flower2Go: mut site-ul unei florării din Haifa de pe OpenCart pe Next.js, în ebraică, rusă și engleză.",
        ],
      },
      rocketseo: {
        role: "Middle Front-end Developer",
        dates: "mar. 2026 – nov. 2026",
        place: "Chișinău",
        format: "hibrid",
        summary: "Am lucrat pe front-end într-o agenție web. Proiectele și clienții agenției sunt sub acord de confidențialitate, așa că aici las doar o cifră.",
        points: [
          "12 proiecte cât am lucrat acolo",
        ],
      },
      freelance2025: {
        role: "Full-stack Developer · freelance",
        dates: "mar. 2025 – dec. 2025",
        place: "Chișinău",
        format: "la distanță",
        summary: "Am lucrat la distanță pentru doi clienți: serviciul rusesc Samozanyatye.rf și agenția web poloneză Webcost.",
        points: [
          "Samozanyatye.rf: am adus landing page-urile React și blogul vechi într-o singură platformă WordPress cu temă proprie, am făcut un constructor de landing page-uri pentru marketing și trimiterea cererilor în Bitrix24 CRM.",
          "Webcost, gonutz.pl: configuratorul „fă-ți mixul” cu limită de 500 g și calcul automat al prețului. În coș și în facturi mixul apare pe un singur rând.",
          "Webcost, interpolska.pl: blocuri noi în constructorul de pagini și căutarea celor mai apropiate instituții pe o hartă Google.",
        ],
      },
      aroundwire: {
        role: "Full-stack Developer",
        dates: "feb. 2024 – apr. 2025",
        place: "Chișinău",
        format: "la birou",
        summary: "Tot aici: ForceWind și Skilful Web Developers. Am refăcut pro.aroundwire.com pe o platformă modulară personalizată.",
        points: [
          "Am făcut peste 40 de landing page-uri pixel-perfect. Cu constructorul din admin, marketingul lansa peste 5 pe zi.",
          "Fiecare bloc încarcă doar CSS-ul și JS-ul lui, așa că PageSpeed pe mobil rămâne la 70–80+. Cererile ajung la call center.",
          "Am făcut site-ul companiei, aroundwire.com, pe Next.js și TypeScript, cu SSR.",
        ],
      },
    },
  },
  products: {
    badge: "produs propriu",
    visit: "Deschide site-ul",
    code: "Codul pe GitHub",
    codePrivate: "Codul îl arăt la cerere",
    caseStudy: "Citește studiul de caz",
    items: {
      dinastia: {
        kind: "Marketplace de animale cu pedigree în Moldova · RO/RU",
        summary:
          "Am creat brandul și logoul, apoi am construit platforma. Are cataloage pe rase și orașe, conturi de crescători cu moderare și import de pe 999.md, vitrine plătite pentru canise, o secțiune de servicii pentru animale și un bot de Telegram pentru crescători și cumpărători.",
        points: [
          "298 de adrese în sitemap, în două limbi, și 23 de rase cu pagină proprie",
          "Abonamente pentru canise și meșteri, insigna „Canisă verificată”, reclamații și aplicație pentru Android",
        ],
        metrics: [
          { value: "3000+", label: "de clicuri organice din Google de la lansarea din august 2026 (Search Console)" },
          { value: "Top 3–4", label: "în Google pentru „cumpăr pisică / animal cu pedigree” în Moldova (oct. 2026)" },
        ],
      },
      goodantshop: {
        kind: "Magazin de furnicare · RU/RO/EN",
        summary:
          "Magazinul meu de furnici și furnicare. Are catalog și coș, un kit de start cu cadouri, un API serverless pentru comenzi cu notificări pe email, un blog și o hartă interactivă a speciilor.",
        points: ["React, Vite și TypeScript cu prerandare SSR și hidratare", "Sitemap generat și date structurate pentru fiecare rută"],
        metrics: [
          { value: "Top 1–2", label: "în Google pentru „cumpăr furnici” în Moldova (oct. 2026)" },
          { value: "19%", label: "CTR din Google în Moldova (iun.–oct. 2026)" },
        ],
      },
    },
  },
  projects: {
    visit: "Deschide site-ul",
    offline: "offline",
    offlineNote: "Site-ul nu e disponibil acum",
    privateState: "nepublic",
    privateNote: "Fără link public",
    devNote: "Încă nu e lansat",
    caseStudy: "Citește studiul de caz",
    openLive: (domain) => `Deschide ${domain} într-o filă nouă`,
    filter: {
      label: "Filtrează proiectele după tehnologie",
      all: "Toate",
      groups: { react: "Next.js și React", wordpress: "WordPress" },
      status: (n) => `Se afișează ${plural(n, "proiect", "proiecte")}`,
    },
    items: {
      demolator: {
        title: "Demolator",
        kind: "Site pentru o firmă de demolări · freelance",
        summary: "Site nou pentru o firmă de tăiere diamantată a betonului și demolări, în locul celui vechi pe Tilda. Are 48 de pagini în două limbi, prețuri „de la”, un calculator de cost și cereri cu poze direct în Telegram.",
      },
      chinolog: {
        title: "chinolog.md",
        kind: "Portalul chinologic al Moldovei · redesign",
        summary: "Portal nou în trei limbi, cu registre de chinologi, canise și arbitri, verificarea câinelui după cip sau pedigree, expoziții, știri și un admin pentru client.",
      },
      fci: {
        title: "fci.md",
        kind: "Site-ul Uniunii Chinologice din Moldova",
        summary: "Un site nou pentru Uniunea Chinologică, singurul membru FCI din Moldova, în trei limbi: calendarul expozițiilor cu programul pe zile, registrele arbitrilor și caniselor, rezultatele expozițiilor, catalogul raselor FCI și știri.",
      },
      flower2go: {
        title: "Flower2Go",
        kind: "Florărie din Haifa",
        summary: "Mut magazinul de pe OpenCart pe Next.js. Are ebraică de la dreapta la stânga, rusă și engleză, 237 de produse, harta zonelor de livrare și comanda.",
      },
      aroundwire: {
        title: "AroundWire",
        kind: "Site-ul companiei",
        summary: "Site-ul principal al companiei pe Next.js, cu randare pe server și componente React tipizate.",
      },
      aroundwirePro: {
        title: "AroundWire PRO",
        kind: "Platformă de landing page-uri",
        summary: "Peste 40 de landing page-uri pe o temă modulară personalizată, cu constructor de pagini în admin și resurse încărcate pe bloc. PageSpeed pe mobil: 70–80+.",
      },
      samozanyatye: {
        title: "Samozanyatye.rf",
        kind: "Platformă care leagă afacerile de liber-profesioniști",
        summary: "Am mutat landing page-urile în React și blogul vechi într-o singură platformă. Am adăugat un constructor de landing page-uri pentru marketing și am legat formularele de Bitrix24 CRM.",
      },
      interpolska: {
        title: "INTER Polska",
        kind: "Companie de asigurări",
        summary: "Blocuri noi pentru constructorul de pagini, plus o căutare a celei mai apropiate unități pe o hartă sincronizată cu lista din lateral.",
      },
      gonutz: {
        title: "GoNutz",
        kind: "Magazin de nuci",
        summary: "Un configurator „compune-ți mixul” cu limită de 500 g și preț calculat automat. Fiecare mix ocupă o singură linie în coș și pe factură.",
      },
    },
  },
  cases: {
    ui: {
      home: "Acasă",
      projects: "Proiecte",
      label: "Studiu de caz",
      role: "Rol",
      period: "Perioadă",
      context: "Context",
      format: "Format",
      stack: "Tehnologii",
      live: "Deschide site-ul",
      offline: "offline",
      code: "Codul pe GitHub",
      codeTheme: "Tema WordPress pe GitHub",
      codeRequest: "Codul îl arăt la cerere",
      codeNone: "Cod de client, nepublic",
      related: "Cod public înrudit",
      task: "Sarcina",
      built: "Ce am construit",
      outcome: "Rezultat",
      next: "Proiectul următor",
      desktopAlt: (name) => `Pagina principală ${name} pe un ecran de desktop`,
      mobileAlt: (name) => `Pagina principală ${name} pe telefon`,
      videoAlt: (name) => `Înregistrare din jocul ${name}`,
      placeholder: "Site-ul e offline, de aceea nu am o captură de ecran recentă",
      placeholderPrivate: "Site de client fără link public, de aceea nu pun aici captură de ecran",
      inDevelopment: "încă nu e lansat",
      metaTitle: (title) => `${title} · Studiu de caz · Daniil Karataev`,
    },
    items: {
      dinastia: {
        title: "Dinastia",
        kind: "Marketplace de animale cu pedigree în Moldova · RO/RU",
        description:
          "Cum am construit singur Dinastia, un marketplace de animale cu pedigree în Moldova: catalog pe rase și orașe, vitrine de canise cu abonamente, servicii pentru animale, verificarea actelor, reclamații și bot de Telegram.",
        lead: "Produsul meu. Am făcut totul, de la nume și logo până la baza de date. Este un catalog bilingv în care crescătorii și proprietarii publică câini și pisici cu pedigree, iar cumpărătorii sună sau scriu vânzătorului direct de pe pagina animalului.",
        role: "Fondator · design și full-stack",
        period: "aug. 2026 – prezent",
        context: "Produs propriu",
        format: "Singur · Chișinău",
        task: {
          paragraphs: [
            "Cățeii și pisoii cu pedigree din Moldova se vând mai ales prin anunțuri împrăștiate și rețele sociale, unde actele și vânzătorii sunt greu de verificat. Voiam un catalog în care oamenii să aibă încredere. Trebuia să apară în Google la căutări după rasă și oraș și să meargă în română și rusă. Crescătorii trebuiau să-și gestioneze singuri anunțurile, dar fără să poată ocoli moderarea.",
          ],
          points: [
            "Pagini rapide și indexabile pentru fiecare rasă și oraș",
            "Crescătorii își țin singuri contul, dar nimic nu devine public fără moderare",
            "Cumpărătorul ajunge repede la vânzător, pentru că aici lumea cumpără sunând la telefon",
            "Scanările pedigree-ului și ale pașaportului veterinar le vede doar moderatorul",
          ],
        },
        built: {
          groups: [
            {
              title: "Vitrinele caniselor",
              points: [
                "O canisă verificată are pagina ei: despre canisă, reproducători cu titluri și teste, cuiburi, anunțuri, condiții, galerie, video, recenzii, absolvenți și contacte. Ordinea blocurilor o alege canisa, doar contactele nu pot fi ascunse.",
                "Vitrina se ține ușor de pe telefon: secțiunile editorului poartă aceleași nume ca blocurile pe care le vede cumpărătorul. Fiecare modificare trece pe la moderator, care vede ce a fost și ce a devenit.",
                "„Absolvenții” sunt povești ale cățeilor și pisoilor în familiile noi, separat de recenziile cumpărătorilor. Video și recenzii se adaugă cu un link de YouTube sau Instagram.",
                "Linkul vitrinei trimis în messenger arată bannerul canisei, logourile FCI și ale Uniunii Chinologice și un rând despre actele verificate de moderator.",
                "Blocul vânzătorului din anunț duce la vitrina canisei. După plată, canisa primește un email cu abonamentul, termenul și condițiile de rambursare.",
              ],
            },
            {
              title: "Abonamente",
              points: [
                "Crescătorii au trei niveluri: publicare gratuită, „Vitrină” și „Vitrină + promovare”, cu plată anuală.",
                "Promovarea aduce până la două locuri de reclamă pe pagina rasei, cu rotație zilnică, 4 ridicări în plus pe lună, 2 postări în rețele, primul loc în lista caniselor și de două ori mai multe video și absolvenți în vitrină.",
                "Abonamentul se prelungește o dată pe an, iar cu 30 de zile înainte de termen vine o amintire.",
              ],
            },
            {
              title: "Servicii pentru animale",
              points: [
                "O secțiune pentru grooming, veterinar, hotel pentru animale, dresaj și plimbare. Fiecare serviciu are o pagină cu prețuri din Chișinău, iar cât timp categoria nu are meșteri, în locul catalogului apare o cerere de selecție.",
                "Meșterii au cabinetul lor și trei niveluri plătite: un rând în catalog, o pagină cu prețuri și cereri în Telegram și o vitrină cu lucrări „înainte și după”, echipă și întrebări frecvente.",
                "Locurile plătite sunt marcate ca reclamă. Când expiră termenul, meșterul revine singur la un rând simplu în catalog.",
              ],
            },
            {
              title: "Pentru cumpărători și vânzători",
              points: [
                "Am refăcut filtrele catalogului pentru cumpărător: preț cu glisor, rasă confirmată, părinți cu titluri, doar canise și „ascunde vândute”. La fiecare opțiune se vede câte anunțuri rămân.",
                "Ordinea e aceeași peste tot, în catalog, pe pagina principală și în postări: întâi anunțurile promovate, apoi cele cu rasa confirmată, apoi restul.",
                "Prețul se poate indica în lei, euro sau dolari. Cardul îl arată așa cum a fost introdus, iar pagina anunțului adaugă conversia la cursul BNM.",
                "Anunțul editat nu dispare de pe site: cât timp moderatorul verifică modificarea, rămâne versiunea aprobată.",
              ],
            },
            {
              title: "Încredere și reclamații",
              points: [
                "Pe site există o singură insignă de încredere, „Canisă verificată”. Vânzătorul încarcă certificatul afixului și apartenența la club (FCI, WCF, FIFe, TICA, CFA), moderatorul le verifică după o listă, iar insigna dispare singură când expiră.",
                "Cumpărătorul vede imediat cine vinde: o canisă verificată, un crescător sau un proprietar al cărui animal a avut pui.",
                "Pentru câini, moderarea verifică animalul în registrul Uniunii Chinologice. Dacă câinele nu e acolo, rasa e marcată ca neconfirmată.",
                "Un anunț poate fi reclamat pentru unul din șase motive, de la plata în avans și fraudă până la poze furate și cruzime, cu descriere și fișiere. Moderatorul răspunde în 5 zile lucrătoare.",
              ],
            },
            {
              title: "Aplicație, video și rețele sociale",
              points: [
                "Am făcut o aplicație Android pentru Google Play. Se deschide în limba telefonului și fără internet arată pagina ei.",
                "Anunțurile noi apar în canalul de Telegram și pe Instagram. Miercurea și vinerea sunt zile de video, cu reels puse la rând în admin.",
                "Clipurile promo le fac din cod, fără editor video. În cadru sunt ecrane reale de pe dinastia.md: Chrome le capturează cadru cu cadru, vocea o citește Gemini TTS, iar ffmpeg pune laolaltă cadrele, vocea, muzica și subtitrările. Ca să schimb o frază, editez scenariul și refac clipul cu o singură comandă.",
                "Statistica exclude boții și numără fiecare dispozitiv o dată pe zi. Tab-uri separate arată vizualizările și contactele pentru servicii și vitrine.",
              ],
            },
            {
              title: "Catalog și căutare",
              points: [
                "Pagini pentru 15 rase de câini, 8 rase de pisici, Chișinău și Tiraspol, în română și rusă. Cumpărătorul ajunge din Google direct la rasa din orașul lui.",
                "Titlul rasei arată prețul minim și numărul de anunțuri, iar rezultatul unui animal în Google arată prețul și vânzătorul.",
                "O rasă fără anunțuri nu promite o cumpărare: trimite la rase asemănătoare și propune abonare sau o cerere.",
                "Anunțurile fără poze sau cu descriere scurtă nu ajung în căutare. Un anunț redenumit duce la adresa nouă, iar unul retras la pagina rasei, așa că linkurile vechi nu se strică.",
                "Filtrele catalogului rămân în adresă și trec de butonul „înapoi”. Articolele din blog apar după program.",
                "Catalogul vânzătorilor are filtre după specie, tip de vânzător și oraș. Cardul vânzătorului arată un mozaic cu animalele de vânzare, prețul minim și rasele.",
                "Site-ul a devenit mai ușor pe telefon: Lighthouse a crescut de la 83 la 94, iar primul ecran se încarcă în 3,0 s în loc de 4,5.",
              ],
            },
            {
              title: "Cabinetul crescătorului",
              points: [
                "Import de pe 999.md: după linkul anunțului formularul completează singur pozele, prețul, rasa, orașul și textul. Se poate muta și tot profilul, cu proprietatea confirmată prin numărul de telefon.",
                "Anunțul apare după moderare, iar motivele respingerii se văd direct în cabinet.",
                "Butonul „Încă unul din cuib” copiază rasa, părinții și actele, așa că următorul cățel din cuib se adaugă într-un minut.",
                "Pozele se comprimă direct pe telefon, înainte de încărcare, așa că urcă repede chiar și pe internet mobil.",
                "Anunțul se poate ridica o dată la 7 zile. Dacă rasa lipsește, crescătorul o cere, iar moderatorul vede ce rase se cer mai des.",
                "Cabinetul e în rusă și română. Intrarea se face cu telefonul, emailul sau Google.",
              ],
            },
            {
              title: "Moderare și statistică",
              points: [
                "Moderatorul vede ce a schimbat vânzătorul de la ultima lui decizie și verifică doar modificarea.",
                "Actele animalelor le vede doar moderatorul, ele nu ajung pe pagina publică. Mai există tab-ul celor vândute, vânzătorii și setările site-ului.",
                "Statistica: vizualizări pe zile, contacte pe canale și surse de trafic, separat pentru anunțuri și blog. Crescătorilor li se poate deschide cu un comutator.",
              ],
            },
            {
              title: "Contacte",
              points: [
                "În prima lună formularul de cerere de pe cardul animalului a fost deschis de 5 ori și niciodată trimis, iar telefonul aducea două treimi din contacte. Așa că am scos formularul și am pus în locul lui telefonul, Viber, WhatsApp și Telegram ale vânzătorului.",
                "Formularul de cerere a rămas pe paginile raselor, orașelor, contactelor și publicării, iar cererile vin în Telegram.",
              ],
            },
            {
              title: "Botul de Telegram și notificări",
              points: [
                "Abonarea „Anunță-mă când apare rasa” prin Telegram sau email. Mesajul pleacă la publicarea primului anunț al acelei rase.",
                "O dată pe săptămână botul întreabă crescătorul dacă animalul mai e disponibil, până la 8 anunțuri într-un mesaj. Răspunsul cu un buton schimbă imediat statusul pe site.",
                "Imediat după înregistrare, site-ul propune botul. Rezultatele moderării vin pe email.",
              ],
            },
            {
              title: "Estimarea prețului",
              points: [
                "Un anunț fără preț poate fi publicat cu un reper: mediana anunțurilor active ale aceleiași rase sau mijlocul intervalului obișnuit, dacă sunt prea puține.",
                "Un astfel de preț apare cu semnul „≈” și o notă și nu mută intervalul de prețuri al rasei.",
              ],
            },
          ],
        },
        outcome: {
          metrics: [
            { value: "3000+", label: "de clicuri organice din Google de la lansarea din august 2026 (Search Console)" },
            { value: "33 000+", label: "de afișări în căutarea Google în aceeași perioadă" },
            { value: "Top 3–4", label: "în Google pentru „cumpăr pisică / animal cu pedigree” în Moldova (oct. 2026)" },
            { value: "298", label: "de adrese în sitemap, în două limbi" },
            { value: "326", label: "de teste node:test, toate trec" },
          ],
          paragraphs: [
            "Brandul, logoul, textele și designul le-am făcut tot eu. Cea mai mare parte a traficului vine din căutarea Google.",
          ],
        },
      },
      goodantshop: {
        title: "GoodAntShop",
        kind: "Magazin de furnicare · RU/RO/EN",
        description:
          "GoodAntShop e magazinul meu de furnici și furnicare, făcut pe React, Vite și TypeScript, cu prerandare SSR proprie, SEO în trei limbi, date structurate și comenzi serverless.",
        lead: "E mica mea afacere, iar site-ul e cel care vinde. Vând colonii de furnici, furnicare și accesorii, iar site-ul mai are un blog și un atlas al speciilor de furnici din Moldova.",
        role: "Proprietar · design și full-stack",
        period: "mai 2026 – prezent",
        context: "Produs propriu",
        format: "Singur · Chișinău",
        task: {
          paragraphs: [
            "Un magazin pentru un produs de nișă depinde de căutare. O aplicație React doar pe client îi dă lui Google un HTML gol, iar trecerea pe un framework complet ar fi fost prea mult pentru 11 produse și un blog. Așa că am vrut să rămân pe React + Vite și totuși să dau HTML complet, indexabil, în trei limbi.",
          ],
          points: [
            "HTML real pe fiecare rută, cu title, canonical, hreflang și Open Graph proprii",
            "Comenzi fără server de backend și fără bază de date",
            "Conținut care răspunde la întrebările începătorilor despre îngrijire, specii și alegerea furnicarului",
          ],
        },
        built: {
          groups: [
            {
              title: "Fluxul de prerandare",
              points: [
                "Build-ul are patru pași: verificarea tipurilor, apoi bundle-ul de client, bundle-ul SSR și scripts/prerender.mjs.",
                "Fiecare dintre cele 72 de rute (24 de pagini × 3 limbi) este randată cu renderToString și StaticRouter și scrisă în propriul index.html. Build-ul eșuează dacă o rută iese goală.",
                "Fiecare rută primește title, description, canonical, hreflang (ru / ro / en + x-default) și taguri og:* cu localizarea corectă.",
                "Imaginile Open Graph sunt generate cu sharp la 1200×630. sitemap.xml cu alternative hreflang se construiește din aceeași listă de rute, iar pagina 404 statică există în trei limbi.",
                "Pe client, hydrateRoot preia markupul prerandat. Coșul se citește abia după montare, așa că prima randare coincide cu HTML-ul de pe server.",
              ],
            },
            {
              title: "Magazinul",
              points: [
                "Catalog de furnici, furnicare și accesorii cu opțiuni. Coșul se păstrează în localStorage.",
                "Pagina kitului de start: furnicarul Terra și o colonie Messor structor la 2250 de lei. Prețul vine din catalog, stocul urmează produsul mai puțin disponibil dintre cele două, iar pagina are propria marcare Product și FAQPage.",
                "Când comanda are și o colonie, și un furnicar, coșul adaugă singur unelte și hrană potrivite speciei și face livrarea în Chișinău gratuită.",
                "Comenzile trec printr-o funcție serverless pe Vercel. Ea validează și escapează HTML-ul comenzii, apoi trimite o notificare pe email prin API-ul Resend.",
                "Harta speciilor rulează pe Leaflet și se încarcă la cerere. Arată 10 specii în 6 zone ale Moldovei, are vizualizare pe specie și pentru toate speciile și trimite la speciile din catalog.",
              ],
            },
            {
              title: "Noul design",
              points: [
                "Un nou sistem de design în culorile paiului, ale cernoziomului și roșul din logo. Culorile sunt tokenuri, iar fonturile Unbounded și Onest se încarcă local. Am refăcut pagina principală, antetul și subsolul, iar restul paginilor le-am trecut pe sistem.",
                "O „cărare de feromoni” animată în SVG: opt furnici merg pe ea cu pas în trepied, unele duc grăunțe. Se mișcă pe un CSS offset-path cu viteză constantă, iar cărarea se reconstruiește la redimensionare, se oprește în afara ecranului și se dezactivează cu prefers-reduced-motion.",
                "Am trecut tot proiectul pe TypeScript în mod strict (strict și noUncheckedIndexedAccess). N-a rămas niciun fișier .js.",
              ],
            },
            {
              title: "Blogul",
              points: [
                "Articole și întrebări frecvente pentru începători, plus un ghid al kitului de start cu poze adnotate. După comanda kitului, cumpărătorul primește imediat linkul spre el.",
                "Articole fixate și publicare programată. Un articol cu dată în viitor nu intră în build, în sitemap și în „Citește și”, iar linkul direct dă 404.",
              ],
            },
          ],
        },
        outcome: {
          metrics: [
            { value: "Top 1–2", label: "în Google pentru „cumpăr furnici” în Moldova (oct. 2026)" },
            { value: "72", label: "de rute prerandate" },
            { value: "19%", label: "CTR din Google în Moldova (iun.–oct. 2026)" },
          ],
          paragraphs: [
            "Nișa e mică și puțini oameni din Moldova caută furnici, așa că numărul de clicuri e modest. În schimb, 19% din afișările din Moldova se transformă în vizite, la o poziție medie de 4,8.",
            "Magazinul îl țin ca afacere proprie.",
          ],
        },
        extra: {
          title: "Arhitectura SEO",
          points: [
            "O singură listă de rute alimentează prerandarea, sitemap-ul și hreflang-ul, așa că nu se pot desincroniza.",
            "Fiecare pagină are un @graph JSON-LD cu Organization, WebSite, BreadcrumbList, ItemList, Product cu Offer, detalii de livrare și politica de retur, FAQPage și BlogPosting.",
            "AggregateRating și Review apar doar acolo unde produsul are recenzii proprii.",
            "Meta tagurile există doar în HTML-ul prerandat, așa că hidratarea nu le dublează niciodată.",
            "Paginile coșului sunt noindex și blocate în robots.txt. Resursele statice se păstrează în cache un an ca immutable.",
            "Pagina principală rusă stă pe domeniul simplu, unde ajung căutările după brand și linkurile din afară. /ru redirecționează permanent acolo, iar paginile interioare și-au păstrat adresele.",
            "Un plugin de build face copii WebP de 160–1280 px pentru fiecare imagine, srcset îi dă telefonului mărimea de care are nevoie, iar imaginea principală se încarcă prima. După o verificare Lighthouse am reparat contrastul, numele linkurilor și ordinea titlurilor.",
          ],
        },
      },
      demolator: {
        title: "Demolator",
        kind: "Site pentru tăiere și demolări · freelance",
        description: "Cum am obținut singur un client freelance și am făcut pentru Demolator un site bilingv pe Next.js: 48 de pagini cu prețuri, un calculator și cereri cu poze în Telegram, lansat pe demolator.md în locul unui site vechi pe Tilda.",
        lead: "Demolator taie betonul cu scule diamantate și demolează clădiri cu utilaje grele în Chișinău. Este proiectul meu freelance, nu al agenției. Am făcut auditul site-ului vechi și am propus unul nou, cu un volum clar de lucru și suport SEO lunar. I-am arătat proprietarului un demo funcțional, ne-am înțeles la volum și preț, apoi am făcut modificările convenite. Site-ul e live pe demolator.md.",
        role: "Freelance · dezvoltare și coordonarea proiectului",
        period: "oct. 2026 – prezent",
        context: "Freelance · client propriu",
        format: "Remote și întâlniri · Chișinău",
        task: {
          paragraphs: [
            "Site-ul vechi pe Tilda răspundea la toate căutările cu trei pagini generale pe limbă. Pe telefon avea 36–40 de puncte din 100 și afișa primul ecran în 11–12 secunde. Nicio pagină nu avea H1, versiunile română și rusă nu erau legate între ele, iar cererea se putea trimite fără telefon."
          ],
          points: [
            "O pagină pentru fiecare serviciu căutat de clienți",
            "Prețuri „de la” și un calculator, ca clientul să vadă imediat ordinul sumei",
            "O cerere cu poze ale obiectului care ajunge imediat în Telegram",
            "Păstrarea pozițiilor actuale în Google la mutare"
          ]
        },
        built: {
          groups: [
            {
              title: "Contractul și proiectul",
              points: [
                "Am făcut auditul site-ului vechi: viteza, erorile SEO, textele și pozițiile pentru 40 de căutări în română și rusă.",
                "Am pregătit o ofertă cu volum fix de lucru, suport SEO lunar și un plan de lansare de 4–5 săptămâni.",
                "La întâlnire i-am arătat proprietarului un demo funcțional, ne-am înțeles la volum și preț, apoi am făcut modificările convenite.",
                "Înainte de lansare am verificat fiecare afirmație cu site-ul vechi și cu registrul de stat. Pe site a rămas doar ce scria pe site-ul vechi sau ce a confirmat proprietarul."
              ]
            },
            {
              title: "Site-ul",
              points: [
                "48 de pagini statice, câte 24 în română și rusă: secțiuni, două direcții de lucru și 16 servicii cu preț, parametri, etape și FAQ.",
                "Un calculator pentru gol în perete, gol în planșeu și demolare. Demolarea se calculează pe etaje, cu evacuarea molozului inclusă mereu, iar intervalul de preț în lei apare imediat.",
                "Formularul de cerere primește până la șase poze și le trimite în Telegram într-un singur mesaj. Un câmp ascuns și o limită de cereri opresc spamul.",
                "Cererile ajung la toți cei care pornesc botul și își trimit propriul număr, dacă acesta e pe lista permisă. Scos de pe listă, un număr nu mai primește cereri imediat. Mesajul e în rusă, câte un fapt pe rând, cu limba în care trebuie sunat clientul.",
                "Găurirea și demolarea cu robotul, pe care firma nu le oferă deocamdată, sunt oprite dintr-o singură listă, nu șterse. Paginile, punctele de meniu, prețurile și fila din calculator dispar, iar adresele lor duc la cel mai apropiat serviciu activ."
              ]
            },
            {
              title: "SEO și viteză",
              points: [
                "Româna fără prefix, rusa sub /ru, perechi hreflang și un comutator de limbă care deschide același serviciu.",
                "Date structurate pentru firmă, servicii cu preț, FAQ și breadcrumbs, texte alt la toate pozele și un sitemap pentru ambele limbi.",
                "Redirecționări 301 de la toate adresele pe care le-a avut domeniul: paginile Tilda după nume și după adresele /pageNNN.html, plus cele două site-uri mai vechi găsite în Wayback Machine.",
                "Doar build-ul de producție al demolator.md e deschis motoarelor de căutare. Orice alt build răspunde cu noindex în tagul meta, în antetul X-Robots-Tag și în robots.txt."
              ]
            },
            {
              title: "Codul și găzduirea",
              points: [
                "Next.js 15 cu App Router, React 19 și TypeScript strict, stiluri în CSS Modules, fără kituri UI și fără dependențe în plus.",
                "Paginile, textele și prețurile vin dintr-un singur registru. Un serviciu nou înseamnă o singură intrare, iar rutele, sitemap-ul, hreflang și meniurile îl preiau singure.",
                "Găzduit pe Cloudflare Workers prin OpenNext, pe planul gratuit, care permite uz comercial. Paginile sunt generate dinainte și servite ca fișiere statice, iar Worker-ul rulează doar middleware-ul, redirecționările, două rute API și redimensionarea imaginilor. Fiecare push în main se publică singur."
              ]
            }
          ]
        },
        outcome: {
          metrics: [
            {
              value: "48",
              label: "de pagini în două limbi"
            },
            {
              value: "77–81",
              label: "puncte de viteză Lighthouse pe telefon pe site-ul live, cel vechi avea 36–40"
            },
            {
              value: "100",
              label: "puncte Lighthouse la accesibilitate și SEO pe telefon"
            },
            {
              value: "537 KB",
              label: "greutatea paginii principale, era 1,4 MB"
            }
          ],
          paragraphs: [
            "Site-ul e live pe demolator.md. Deocamdată pozele sunt de stoc, până sosesc cele de pe obiectele firmei, iar pagina de lucrări arată cele două lucrări reale din blogul site-ului vechi. Codul este privat, îl pot arăta la cerere."
          ]
        }
      },
      chinolog: {
        title: "chinolog.md",
        kind: "Portalul Chinologic Unic al Moldovei · redesign",
        description: "Cum am făcut noul chinolog.md, portalul chinologic al Moldovei: registre cu căutare, verificarea actelor câinelui, expoziții și știri în trei limbi și un admin în care clientul își ține singur site-ul.",
        lead: "chinolog.md este portalul Centrului Educațional Chinologic din Moldova, care lucrează împreună cu Uniunea Chinologică, membră FCI. Am scris pentru el un site nou și îl ajustez după observațiile clientului. Deocamdată clientul vede site-ul nou ca prototip, iar pe domeniu e încă versiunea veche pe Tilda.",
        role: "Design și full-stack",
        period: "nov. 2026 – prezent",
        context: "Freelance · client",
        format: "La distanță · Chișinău",
        compare: {
          title: "Înainte și după",
          before: "Înainte · chinolog.md acum, pe Tilda",
          after: "După · site-ul nou",
          points: [
            "Pagina principală e de 50 de ori mai ușoară. Toate măsurătorile înainte și după sunt mai jos, la „Optimizare”.",
            "Pe primul ecran, în locul a patru carduri cu linkuri, e un singur câmp de verificare: numărul de cip sau de pedigree ori numele chinologului sau al canisei.",
            "Versiunea rusă e în întregime în rusă, iar fiecare pagină are pereche în română și engleză.",
          ],
        },
        task: {
          paragraphs: ["Pagina principală veche cântărea 32 MB și făcea 97 de cereri. Paginile aveau câte două adrese canonical și câte două titluri H1, versiunile de limbă nu erau legate, iar pe versiunea rusă meniul și bannerul de cookie rămâneau în română. Articolele de prim ajutor erau publicate ca imagini, așa că motoarele de căutare nu le vedeau."],
          points: [
            "Un singur câmp în care verifici un câine, un chinolog sau o canisă",
            "Registre în care se poate căuta și filtra",
            "Trei limbi cu același set de pagini",
            "Clientul publică singur știri, expoziții și înregistrări în registre",
          ],
        },
        built: {
          groups: [
            {
              title: "Portalul",
              points: [
                "Primul ecran e un singur câmp de verificare. Portalul înțelege singur ce s-a introdus: numărul de cip, numărul de pedigree, numele unui chinolog sau al unei canise. Fiecare număr desenează propria amprentă de labă.",
                "Șase registre cu căutare și filtre: chinologi, canise, câini salvatori și trei registre de arbitri, 112 înregistrări în total.",
                "Expoziții și evenimente cu numărătoare inversă și stările „peste 4 zile”, „în desfășurare” și „încheiat”. Un flux de 74 de știri cu rubrici și autori.",
                "Căutare pe tot site-ul cu Ctrl+K, verificarea actelor și certificatelor, cod QR generat direct în browser, Registrul Voluntar al Câinilor și secțiunea „Am găsit un câine”.",
                "Formulare de înscriere la curs, în registru, la veterinar și la organizatorul de expoziții.",
              ],
            },
            {
              title: "Pentru vizitator",
              points: [
                "Designul arată ca un formular securizat: hârtie, indigo luat din sigiliul de pe logo și auriu ca folia.",
                "Trei limbi: română, rusă și engleză. Comutatorul deschide aceeași pagină în cealaltă limbă.",
                "Un panou de accesibilitate cu text mare și contrast ridicat. Analitica pornește doar după acordul pentru cookie.",
                "Pozele se deschid într-un vizualizator cu lupă și răsfoire, iar pe telefon merge zoomul cu două degete.",
              ],
            },
            {
              title: "Admin",
              points: [
                "Clientul își ține singur știrile, paginile, evenimentele, registrele, partenerii, textele și fișierele. O cerere de înscriere în registru devine înregistrare cu un singur buton.",
                "Fiecare modificare are istoric de versiuni cu revenire. Butonul „Publică” reconstruiește site-ul.",
                "Adresele vechi de pe Tilda duc la paginile noi, ca site-ul să nu piardă traficul din căutare la mutare.",
              ],
            },
          ],
        },
        outcome: {
          metrics: [
            { value: "100", label: "puncte Lighthouse pe telefon la viteză, SEO și accesibilitate (au fost 87, 85 și 86)" },
            { value: "0,64 MB", label: "greutatea paginii principale, a fost 32,2 MB" },
            { value: "23", label: "de cereri pe pagina principală în loc de 97" },
            { value: "1,1 s", label: "LCP pe telefon, a fost 2,3 s" },
          ],
          paragraphs: ["Am verificat site-ul nou cu cel vechi: 41 de pagini din harta site-ului, 112 înregistrări din registre și 72 de știri. Clientul îl vede acum ca prototip, iar eu îi introduc observațiile."],
        },
        extra: {
          title: "Optimizare: înainte și după",
          paragraphs: [
            "Pagina principală, măsurători Google Lighthouse din 11.11.2026. Imaginile le-am numărat separat: ce descarcă browserul imediat ce se deschide pagina.",
          ],
          points: [
            "Greutatea paginii principale: 32,2 MB → 0,64 MB pe telefon și 32,3 MB → 0,67 MB pe calculator.",
            "Imagini la deschidere: 57 de fișiere, 32,5 MB → 3 fișiere, 10 KB pe telefon și 5 fișiere, 68 KB pe calculator. Imaginile sunt tăiate în AVIF și WebP pe lățimea ecranului, iar restul se încarcă la derulare.",
            "Cereri către server: 97 → 23 pe telefon și 97 → 26 pe calculator. În locul celor 48 de scripturi ale constructorului, pagina vine ca HTML gata făcut.",
            "Blocul principal pe ecran (LCP): 2,3 s → 1,1 s pe telefon și 0,9 s → 0,3 s pe calculator. Deplasarea machetei la încărcare (CLS): 0,18 → 0.",
            "Lighthouse pe telefon: viteză 87 → 100, SEO 85 → 100, accesibilitate 86 → 100. Pe calculator: 97, 85 și 80 → 100.",
          ],
        },
      },
      aroundwire: {
        title: "AroundWire",
        kind: "Site-ul companiei și platforma de landing page-uri",
        description:
          "Peste 40 de landing page-uri pixel-perfect pentru AroundWire pe o temă WordPress modulară cu constructor de pagini și PageSpeed pe mobil 70–80+, plus site-ul companiei pe Next.js.",
        lead: "AroundWire este un marketplace american pentru afaceri mici și prestatori de servicii. Am lucrat în echipa companiei. Am refăcut platforma de landing page-uri pro.aroundwire.com pe o temă modulară personalizată și am făcut site-ul companiei, aroundwire.com, pe Next.js.",
        role: "Full-stack Developer",
        period: "feb. 2024 – apr. 2025",
        context: "Angajat în companie · inclusiv ForceWind și Skilful Web Developers",
        format: "La birou · Chișinău",
        task: {
          paragraphs: [
            "Ca să atragă prestatori de servicii, marketingul avea nevoie mereu de landing page-uri noi pentru diferite meserii și orașe, iar fiecare pagină trebuia să meargă repede pe mobil. Dacă făceam fiecare pagină de mână, nu țineam pasul, iar un constructor plin de pluginuri ar fi încetinit paginile.",
          ],
          points: [
            "Marketingul asamblează multe landing page-uri din același set de secțiuni",
            "Pixel-perfect după machete și rapide pe mobil",
            "Cererile de pe fiecare landing page ajung la call center",
            "Un site separat pentru companie",
          ],
        },
        built: {
          groups: [
            {
              title: "Platforma de landing page-uri pe WordPress (pro.aroundwire.com)",
              points: [
                "Temă personalizată cu 9 tipuri de secțiuni, fiecare în mai multe variante de design, 54 de variante în total.",
                "În constructorul de pagini din admin, un panou lateral alege varianta fiecărei secțiuni. Un preset salvează toată combinația pentru următorul landing page.",
                "Resursele se încarcă pe bloc. O pagină primește doar CSS-ul și JS-ul variantelor pe care le folosește, iar scripturile merg în footer.",
                "Formulare de cerere Contact Form 7 în ferestre popup, cu evenimente GTM la începerea și trimiterea formularului și integrarea cererilor cu call centerul.",
                "Un blog cu taguri pe meserii, cu landing page-urile înrudite sub fiecare articol, și landing page-uri pe orașe pentru promovarea în regiuni.",
                "Export și import ZIP al paginilor cu toate câmpurile ACF, ca landing page-urile să treacă ușor dintr-un mediu în altul.",
              ],
            },
            {
              title: "Site-ul companiei (aroundwire.com)",
              points: [
                "Next.js și TypeScript, cu randare pe server.",
                "Componente React tipizate.",
              ],
            },
            {
              title: "Echipa",
              points: ["Am lucrat la birou, într-o echipă Scrum, cu Jira și Bitbucket."],
            },
          ],
        },
        outcome: {
          metrics: [
            { value: "40+", label: "de landing page-uri pixel-perfect" },
            { value: "5+", label: "landing page-uri pe zi lansa marketingul cu constructorul" },
            { value: "70–80+", label: "PageSpeed pe mobil pe landing page-uri" },
          ],
          quote: {
            text: "Daniil dezvoltă atât frontendul, cât și backendul fără să se bazeze pe pluginuri gata făcute.",
            author: "Sergiu Butucea, Team Lead, departamentul de dezvoltare · AroundWire",
          },
        },
        extra: {
          title: "De ce paginile sunt rapide",
          points: [
            "O variantă de secțiune primește fișier CSS și JS propriu doar dacă are nevoie. Pentru secțiunile care nu sunt pe pagină nu se încarcă nimic.",
            "Resursele sunt versionate după data modificării fișierului, așa că browserele iau stilurile noi după fiecare deploy.",
            "N-am folosit niciun plugin de constructor de pagini. Secțiunile sunt șabloane PHP simple cu markup BEM.",
            "Pe șablonul paginii principale, imaginile au lazy loading și dimensiuni explicite.",
          ],
        },
      },
      samozanyatye: {
        title: "Samozanyatye.rf",
        kind: "Platformă care leagă afacerile de liber-profesioniști",
        description:
          "Cum am mutat landing page-urile în React și blogul vechi al Samozanyatye.rf într-o singură platformă WordPress personalizată, cu constructor din blocuri și Bitrix24 CRM.",
        lead: "Un serviciu care pune afacerile în legătură cu liber-profesioniști. Lucrând la distanță, am mutat landing page-urile separate în React și blogul vechi, plin de pluginuri, într-o singură platformă WordPress personalizată, cu un design nou.",
        role: "Full-stack Developer · freelance",
        period: "mar. – dec. 2025",
        context: "Freelance",
        format: "La distanță · Moscova",
        task: {
          paragraphs: [
            "Site-ul trăia în două locuri. Landing page-urile erau în React, iar vechiul blog pe WordPress era plin de pluginuri grele. Fiecare pagină nouă cerea un dezvoltator, cererile veneau pe căi diferite, iar blogul era greu de editat.",
          ],
          points: [
            "O singură platformă și un singur design pentru landing page-uri și blog",
            "Marketingul lansează pagini fără dezvoltatori",
            "Fiecare cerere din formulare ajunge în CRM",
            "Mai puține pluginuri grele și mai mult control asupra codului",
          ],
        },
        built: {
          groups: [
            {
              title: "Platforma",
              points: [
                "O temă WordPress personalizată în noul design, în care am mutat landing page-urile din React.",
                "Un constructor de landing page-uri: marketingul asamblează pagini din blocuri gata făcute.",
                "Un manager de meniu pe trei niveluri pentru secțiunile de afaceri, prestatori și parteneri.",
                "Un blog complet editabil (Jurnalul), cu secțiuni pentru afaceri și prestatori și studii de caz.",
              ],
            },
            {
              title: "Integrări și curățenie",
              points: [
                "Cererile din Contact Form 7 ajung în Bitrix24 CRM.",
                "Am scos pluginurile grele și am scris în locul lor cod propriu, simplu.",
                "Am făcut tot proiectul, de la arhitectură până la suport.",
              ],
            },
          ],
        },
        outcome: {
          metrics: [
            { value: "3", label: "niveluri de meniu gestionate din admin" },
          ],
          paragraphs: [
            "Acum marketingul construiește pagini din blocuri gata făcute, fără dezvoltator.",
            "Structura se vede și pe site-ul live. Are secțiuni separate pentru afaceri, prestatori și parteneri, un jurnal cu studii de caz și formulare de apel invers.",
          ],
        },
      },
      gonutz: {
        title: "GoNutz",
        kind: "Magazin de nuci · configurator WooCommerce „compune-ți mixul”",
        description:
          "Un configurator WooCommerce „compune-ți mixul” pentru GoNutz, cu limită de 500 g, preț calculat automat și o singură linie pentru mix în coș și pe factură.",
        lead: "Un magazin online polonez de nuci. Am lucrat prin agenția Webcost și am făcut un configurator în care clienții își compun singuri mixul din catalogul magazinului.",
        role: "Full-stack Developer · freelance",
        period: "2025",
        context: "Freelance · prin agenția Webcost",
        format: "La distanță · Varșovia",
        task: {
          paragraphs: [
            "Magazinul voia ca clienții să-și compună singuri mixul de nuci, în loc să cumpere pachete fixe. WooCommerce nu are un astfel de tip de produs, iar mixul trebuia totuși să se comporte ca un singur produs în coș, la comandă și pe factură.",
          ],
          points: [
            "Ingredientele vin din catalogul existent, fără produse duplicate",
            "O limită fixă de greutate pentru fiecare mix",
            "Preț și cantități corecte fără muncă manuală",
          ],
        },
        built: {
          points: [
            "Un configurator WooCommerce personalizat care ia produsele din catalogul magazinului.",
            "O limită de 500 g pentru greutatea mixului.",
            "Prețul și cantitățile se recalculează automat pe măsură ce clientul adaugă ingrediente.",
            "Tot mixul apare ca o singură linie în coș și pe factură.",
          ],
        },
        outcome: {
          metrics: [
            { value: "500 g", label: "limita de greutate pentru un mix" },
            { value: "1", label: "linie în coș și pe factură pentru fiecare mix" },
          ],
        },
        extra: {
          title: "Cod public înrudit",
          paragraphs: [
            "E o sarcină de test separată, nu face parte din GoNutz. Am scris un plugin WooCommerce care importă prețurile de achiziție din CSV sau Excel și le recalculează pentru fiecare greutate a variației (1 kg, 500 g, 250 g). Codul sursă este pe GitHub.",
          ],
        },
      },
      interpolska: {
        title: "INTER Polska",
        kind: "Companie de asigurări · căutarea celei mai apropiate unități și blocuri de constructor",
        description: "Pentru compania de asigurări INTER Polska am făcut blocuri pentru constructorul de pagini și o căutare a celei mai apropiate unități, cu o hartă Google sincronizată cu lista de adrese.",
        lead: "INTER Polska este o companie poloneză de asigurări. Am lucrat prin agenția Webcost. Am adăugat blocuri noi în constructorul ei de pagini și am făcut căutarea care arată pe hartă cele mai apropiate unități medicale și filiale.",
        role: "Full-stack Developer · freelance",
        period: "2025",
        context: "Freelance · prin agenția Webcost",
        format: "La distanță · Varșovia",
        task: {
          paragraphs: [
            "Clienții asigurătorului trebuie să găsească repede cea mai apropiată clinică parteneră sau filială, de multe ori de pe telefon. Harta și lista de adrese trebuiau să lucreze împreună, ca un clic într-un loc să arate aceeași locație în celălalt.",
          ],
          points: [
            "Găsirea celei mai apropiate unități după oraș sau după locație",
            "O hartă și o listă sincronizate",
            "Blocuri noi pe care marketingul le pune pe orice pagină",
          ],
        },
        built: {
          groups: [
            {
              title: "Căutarea unităților",
              points: [
                "Un șablon propriu pentru WP Store Locator, cu butoane rapide pentru orașele principale, un câmp de căutare și un buton „determină locația mea”.",
                "O hartă Google cu grupare a markerelor. Locațiile se încarcă prin AJAX, așa că pagina rămâne ușoară.",
                "La clic pe un marker, lista din lateral derulează la adresa lui și o evidențiază.",
                "Aceeași căutare merge pentru unitățile medicale și pentru filiale.",
                "Evenimente GTM pentru clicurile pe locații și pentru termenii căutați.",
              ],
            },
            {
              title: "Constructorul de pagini",
              points: [
                "Blocuri noi pentru constructorul de pagini al temei.",
                "Blocurile mai mari au CSS propriu, împărțit în partea pentru primul ecran și partea care se încarcă după.",
              ],
            },
          ],
        },
        outcome: {
          metrics: [
            {
              value: "2",
              label: "căutări: unități medicale și filiale",
            },
            {
              value: "1",
              label: "clic leagă harta de listă",
            },
          ],
        },
      },
    },
  },
  activity: {
    contributions: "contribuții",
    lastYear: "în ultimul an",
    activeDays: "zile cu activitate",
    less: "Mai puțin",
    more: "Mai mult",
    heatmapLabel: (total) => `Calendarul contribuțiilor pe GitHub, ${plural(total, "contribuție", "contribuții")} în ultimul an`,
    dayTitle: (count, date) => `${date}, ${count === 0 ? "nicio contribuție" : plural(count, "contribuție", "contribuții")}`,
    repos: "Repozitorii publice",
    languages: "Cod pe limbaje în repozitoriile publice",
    learning: "de studiu",
    unavailableTitle: "Activitatea nu este disponibilă acum",
    unavailableText: "Datele GitHub nu s-au putut încărca la ultimul build. Poți deschide profilul direct.",
    profile: "Deschide profilul GitHub",
    updated: "Date de pe GitHub, actualizate zilnic",
    months: ["ian.", "feb.", "mar.", "apr.", "mai", "iun.", "iul.", "aug.", "sept.", "oct.", "nov.", "dec."],
    weekdays: ["lun.", "mie.", "vin."],
  },
  stack: {
    groups: {
      frontend: "Front-end",
      backend: "Back-end și date",
      cms: "CMS",
      practices: "Practici",
      tools: "Instrumente",
    },
    practices: ["SEO tehnic", "Date structurate", "Core Web Vitals", "i18n", "Accesibilitate"],
    education: { label: "Educație", text: "Autodidact, învăț sistematic din 2023." },
  },
  about: {
    paragraphs: [
      "Sunt din Chișinău și construiesc site-uri din 2024. Am învățat singur, mai ales lucrând la proiecte reale. Am început cu WordPress și PHP, apoi am trecut la React, Next.js și TypeScript. React îmi place cel mai mult, dar folosesc stack-ul care se potrivește problemei.",
      "Îmi place să duc un site până la un produs care chiar funcționează. Așa au apărut cele două afaceri ale mele. Prima, GoodAntShop, este un magazin de furnicare unde mă ocup singur de site, SEO și vânzări. A doua, Dinastia, este un marketplace pentru crescătorii de animale cu pedigree.",
      "Țin să scriu cod lizibil. Înainte să adaug ceva nou, încerc să îmbunătățesc ce există deja. Părțile riscante le acopăr cu teste, iar deciziile le notez în documentația proiectului, ca după mine să poată lucra cu codul și alt dezvoltator.",
    ],
    outsideLabel: "În afara muncii",
    outside: "furnici și mirmecologie, volei și fotbal, filme SF, mașini, jocuri de societate cu prietenii.",
    photoAlt: "Daniil Karataev",
  },
  recommendations: [
    {
      quote: [
        "Daniil dezvoltă atât frontendul, cât și backendul fără să folosească pluginuri gata făcute, ceea ce arată un nivel înalt de profesionalism.",
        "Colegii i-au apreciat mult capacitatea de a livra proiecte complexe în termene scurte.",
      ],
      name: "Sergiu Butucea",
      title: "Team Lead, departamentul de dezvoltare · AroundWire",
      note: "Tradus din rusă",
    },
    {
      quote: [
        "Cu Danil am lucrat la site-ul Samozanyatye.rf din martie până în decembrie 2025. A preluat toată dezvoltarea. A unit landing pages-urile împrăștiate în React și vechiul blog într-o singură platformă WordPress cu un design nou.",
        "Pentru marketing, cel mai valoros a fost constructorul de landing pages din blocuri gata făcute. Am putut lansa singuri pagini noi, fără dezvoltator. Danil a configurat și trimiterea cererilor din formulare în Bitrix24 și a scos pluginurile grele, înlocuindu-le cu soluțiile lui.",
        "A dus proiectul de la arhitectură până la suport, a intrat repede în sarcinile marketingului și a propus singur soluții. Îl recomand ca dezvoltator responsabil și independent.",
      ],
      name: "Evgenia Demir",
      title: "Director de marketing · Samozanyatye.rf",
      note: "Tradus din rusă",
    },
    {
      quote: [
        "Danil are o atenție excepțională la detalii, lucru deosebit de important în implementarea soluțiilor de design. Toată munca lui a respectat principiul „pixel perfect”, asigurând conformitatea exactă cu toate aspectele designului.",
        "Danil a luat constant inițiativa de a actualiza și îmbunătăți soluțiile de design.",
      ],
      name: "Vasile Milescu",
      title: "Lead UI/UX Designer · AroundWire",
      note: "Tradus din engleză",
    },
  ],
  contact: {
    heading: "Scrie-mi.",
    text: "Caut un post de dezvoltator front-end sau full-stack și iau proiecte freelance. Cel mai repede răspund pe Telegram.",
    email: "Email",
    elsewhere: "În altă parte",
    downloads: "CV (PDF)",
  },
  footer: {
    built: "Făcut cu Next.js, TypeScript și CSS Modules.",
    data: "Datele GitHub se actualizează zilnic.",
    top: "Sus",
  },
};
