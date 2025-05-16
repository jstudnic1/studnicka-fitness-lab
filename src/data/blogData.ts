export interface BlogPost {
  id: number;
  slug: string; // For URL generation
  title: string;
  date: string; // Keep a publication date
  image: string; // For the summary card and potentially the post page
  excerpt: string; // Short summary for the blog listing page
  description: string; // For SEO meta description on the post page
  content: string; // Full blog post content as a single string
  // Optional: author, tags, etc. can be added later
}

const today = new Date();
const formatDate = (date: Date) => {
  return `${date.getDate()}. ${date.getMonth() + 1}. ${date.getFullYear()}`;
};

export const blogData: BlogPost[] = [
  {
    id: 1,
    slug: "nove-objevy-hubnuti-leky-molekularni-vodik",
    title: "Nové objevy v hubnutí – od léků po molekulární vodík",
    date: formatDate(new Date(today.setDate(today.getDate() - 2))), // Example: 2 days ago
    image: "/images/blog/BRP_img.jpeg", // Updated image path
    excerpt: "Převratné novinky v hubnutí, od GLP-1 agonistů po potenciální účinky látky BRP a molekulárního vodíku.",
    description: "Prozkoumejte nejnovější vědecké objevy v oblasti hubnutí, včetně moderních léků jako Ozempic, nadějné látky BRP a vlivu molekulárního vodíku na metabolismus.",
    content: `V posledních měsících zaznamenal svět fitness a medicíny několik převratných novinek v oblasti hubnutí. Největší pozornost stále poutají moderní léky na bázi GLP-1 agonistů (například semaglutid, liraglutid nebo tirzepatid), které nejenže pomáhají snižovat tělesnou hmotnost, ale podle nejnovější rozsáhlé studie také výrazně snižují riziko až 42 různých onemocnění včetně demence a psychotických poruch. Výzkumy ukazují, že tyto léky mohou snížit riziko rakoviny spojené s obezitou až o 50 %.

Ještě větší revoluci ale může přinést nově objevená látka BRP, kterou vědci ze Stanfordu nalezli pomocí umělé inteligence. BRP potlačuje chuť k jídlu podobně jako Ozempic, ale podle testů na zvířatech nemá některé nežádoucí účinky, jako je nevolnost nebo ztráta svalové hmoty. BRP působí přímo v hypotalamu, tedy v mozku, kde reguluje hlad a metabolismus, a v testech vedla k dramatickému snížení příjmu potravy a úbytku tuku bez negativních vedlejších účinků. Klinické testy na lidech jsou teprve před námi, ale pokud se účinnost potvrdí, může jít o zásadní průlom v léčbě obezity.

Zajímavý směr ukazuje i český výzkum s inhalací molekulárního vodíku. Studie Univerzity Palackého prokázala, že hodinová inhalace vodíku posouvá metabolismus směrem k vyššímu spalování tuků i v klidovém stavu, zejména u lidí s vyšším podílem tělesného tuku. Vodík sice není "zázračná pilulka", ale může významně podpořit metabolismus a zvýšit efektivitu hubnutí, zvlášť pokud je kombinován s vytrvalostním pohybem a posilováním.`
  },
  {
    id: 2,
    slug: "trendy-suplementy-2025",
    title: "Nejnovější trendy v suplementech – co opravdu funguje v roce 2025?",
    date: formatDate(new Date(today.setDate(today.getDate() - 5))), // Example: 5 days ago relative to previous
    image: "/images/blog/suplements.jpg", // Updated image path
    excerpt: "Objevte klíčové suplementy pro rok 2025, od leucinu a kreatinu po ZMA a personalizované doplňky.",
    description: "Přečtěte si o nejnovějších trendech ve sportovní výživě pro rok 2025. Které suplementy jako leucin, kreatin, ZMA, beta-alanin skutečně fungují?",
    content: `Rok 2025 přináší několik nových trendů v oblasti sportovní výživy a suplementace. Stále platí, že základem je kvalitní strava, ale některé doplňky mají vědecky podložený efekt a posouvají hranice sportovního výkonu i regenerace.

Leucin je označován za "it" suplement roku 2025. Tato esenciální aminokyselina hraje klíčovou roli ve stimulaci svalové syntézy a její dostatečný příjem (2–3 g v dávce) je zásadní pro růst svalové hmoty, zejména v kombinaci se silovým tréninkem. Moderní syrovátkové proteiny jsou stále jedním z nejefektivnějších suplementů, protože kromě vysokého obsahu leucinu poskytují i další esenciální aminokyseliny potřebné pro regeneraci a růst svalů.

Kreatin si udržuje pozici jednoho z nejbezpečnějších a nejúčinnějších suplementů. Zvyšuje sílu, výkon, objem svalů a podporuje regeneraci. Dlouhodobé studie neprokázaly žádné významné vedlejší účinky ani při užívání přes 300 dní.

Mezi další trendy patří:
ZMA (kombinace zinku, hořčíku a vitamínu B6) pro podporu tvorby vlastních anabolických hormonů a zlepšení spánku.
Beta-alanin pro zvýšení svalové vytrvalosti při intervalových a silových trénincích.
Arginin a glutamin pro podporu regenerace, imunitního systému a ochranu svalů před katabolismem.

Roste také zájem o personalizovanou suplementaci na základě genetických testů a dat z nositelných zařízení, stejně jako o rostlinné proteiny (například z řas nebo hub), které nabízejí kompletní spektrum aminokyselin a jsou šetrné k životnímu prostředí.`
  },
  {
    id: 3,
    slug: "novinky-cviceni-superserie-izometrie-dlouhovekost",
    title: "Novinky ve cvičení – supersérie, izometrie a trénink pro dlouhověkost",
    date: formatDate(new Date(today.setDate(today.getDate() - 7))), // Example: 7 days ago relative to previous
    image: "/images/blog/super_series.avif", // Updated image path
    excerpt: "Prozkoumejte efektivní tréninkové metody jako supersérie a izometrie, a zjistěte více o trendu tréninku pro dlouhověkost.",
    description: "Zjistěte, jaké jsou novinky ve světě cvičení: časově úsporné supersérie, izometrický trénink pro snížení krevního tlaku a komplexní trénink pro dlouhověkost.",
    content: `Ve světě fitness se stále více prosazují nové přístupy k tréninku, které šetří čas a zároveň přinášejí srovnatelné nebo lepší výsledky než tradiční metody.

Supersérie – Nová studie ukázala, že cvičení v supersériích (střídání dvou cviků bez odpočinku, často na protichůdné svalové skupiny) vede ke stejnému svalovému růstu, síle i vytrvalosti jako klasický trénink, ale za o 36 % kratší dobu. Skupina cvičící supersérie potřebovala na trénink jen 44 minut oproti 69 minutám u tradičního přístupu. Výkon i hypertrofie byly srovnatelné, pouze vnímaná obtížnost a četnost nevolnosti byla zpočátku vyšší, proto je vhodné začínat s nižší intenzitou a postupně navyšovat.

Izometrický trénink – Rozsáhlá meta-analýza potvrdila, že izometrické cvičení (například statické držení v určité pozici) je jednou z nejúčinnějších metod pro snižování krevního tlaku, dokonce efektivnější než běžný aerobní trénink nebo HIIT. To je důležité nejen pro sportovce, ale i pro širokou veřejnost s rizikem hypertenze.

Trénink pro dlouhověkost – V roce 2025 je patrný posun od čistě estetických cílů k udržitelnému tréninku zaměřenému na zdraví, funkčnost a prevenci zranění. Silový trénink už není jen doménou kulturistů, ale stává se základem zdravého životního stylu pro všechny věkové kategorie. Fitness centra rozšiřují zóny pro volné váhy, funkční trénink a cvičení zaměřené na spodní část těla.

Zároveň se posiluje propojení fyzického a duševního zdraví – pravidelné cvičení (včetně lekcí typu BODYBALANCE) zlepšuje kvalitu spánku, snižuje úzkost a zvyšuje životní spokojenost. Moderní technologie umožňují personalizovat trénink podle dat z wearables, ať už jde o intenzitu, regeneraci nebo kombinaci s duševní hygienou.

Závěr:
Fitness svět se v roce 2025 rychle mění. Nové léky, chytrá suplementace a inovativní přístupy ke cvičení přinášejí efektivnější a udržitelnější cesty ke zdraví, výkonu i psychické pohodě. Vyplatí se sledovat vývoj a být otevřený novým vědecky podloženým trendům!`
  }
];
