// ------------------------------
// TermsAndConditionsPage.tsx
// ------------------------------
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const siteName = "Marek Studnička – Trenér MB";
const businessName = "Marek Studnička";
const businessIco = "123 45 678";
const businessAddress = "Vinařice 53, 294 41 Dobrovice";
const contactEmail = "info@marekstudnicka.cz";
const contactPhone = "+420 777 186 849";
const effectiveDate = "19. 05. 2025";

const TermsAndConditionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Obchodní podmínky | {siteName}</title>
        <meta name="description" content={`Obchodní podmínky pro služby poskytované prostřednictvím webu ${siteName}.`} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="bg-white dark:bg-gray-900 py-8 md:py-12 text-gray-800 dark:text-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl prose dark:prose-invert lg:prose-lg">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-marek-cta hover:underline">
              <ArrowLeft size={18} className="mr-2" /> Zpět na hlavní stránku
            </Link>
          </div>

          <h1>Obchodní podmínky</h1>
          <p className="lead">Poslední aktualizace: {effectiveDate}</p>

          {/* ------------------------------------------------------------------ */}
          <h2>1. Definice pojmů</h2>
          <ul>
            <li>
              <strong>Poskytovatel</strong> – {businessName}, IČO {businessIco}, se sídlem {businessAddress}.
            </li>
            <li>
              <strong>Klient</strong> – fyzická nebo právnická osoba objednávající si služby.
            </li>
            <li>
              <strong>Služby</strong> – osobní trénink, online coaching a tvorba výživových plánů nabízené prostřednictvím
              webu {siteName}.
            </li>
            <li>
              <strong>Stránky</strong> – internetová prezentace dostupná na adrese <a href="/">{siteName}</a>.
            </li>
          </ul>

          {/* ------------------------------------------------------------------ */}
          <h2>2. Uzavření smlouvy</h2>
          <p>
            Klient provede rezervaci termínu prostřednictvím systému Calendly dostupného na Stránkách, případně e‑mailem
            nebo telefonicky. Objednávka je návrhem na uzavření smlouvy. Smlouva je uzavřena okamžikem, kdy Poskytovatel
            potvrdí rezervaci e‑mailem.
          </p>
          <p>
            Smlouva je uzavírána v českém jazyce a Poskytovatel ji archivuje v elektronické podobě po dobu 5 let; není
            veřejně přístupná.
          </p>

          {/* ------------------------------------------------------------------ */}
          <h2>3. Ceny a platební podmínky</h2>
          <p>
            Aktuální ceny jsou uvedeny v sekci <Link to="/sluzby">Služby</Link>. Ceny jsou konečné a uvedeny v českých
            korunách. Poskytovatel není plátcem DPH.
          </p>
          <p>
            Platbu lze provést:
          </p>
          <ul>
            <li>bankovním převodem na účet 123456789/0800 (VS – číslo faktury), splatnost 7 dnů,</li>
            <li>online platební bránou Stripe (okamžitě),</li>
            <li>v hotovosti před zahájením tréninku.</li>
          </ul>

          {/* ------------------------------------------------------------------ */}
          <h2>4. Storno a změna termínu</h2>
          <ul>
            <li>Bezplatné zrušení nebo změna termínu jsou možné nejpozději 24 h předem.</li>
            <li>Zrušení 24–6 h před termínem – účtuje se 50 % z ceny služby.</li>
            <li>Zrušení méně než 6 h / neúčast – účtuje se 100 % ceny.</li>
          </ul>

          {/* ------------------------------------------------------------------ */}
          <h2>5. Právo spotřebitele na odstoupení</h2>
          <p>
            Klient‑spotřebitel může podle § 1829 odst. 1 NOZ odstoupit od smlouvy uzavřené na dálku do 14 dnů od jejího
            uzavření. Pro odstoupení lze využít <a href="/odstoupeni">vzorový formulář</a>.
          </p>
          <p>
            Požádá‑li spotřebitel výslovně o poskytnutí služby před uplynutím lhůty a služba je zcela splněna, právo na
            odstoupení zaniká (§ 1837 a) NOZ).
          </p>

          {/* ------------------------------------------------------------------ */}
          <h2>6. Práva a povinnosti Klienta</h2>
          <ul>
            <li>Poskytnout pravdivé informace o zdravotním stavu relevantní pro trénink.</li>
            <li>Dodržovat pokyny Poskytovatele a uhradit cenu služby ve sjednané lhůtě.</li>
            <li>Cvičit na vlastní riziko a zvážit konzultaci s lékařem.</li>
          </ul>

          {/* ------------------------------------------------------------------ */}
          <h2>7. Práva a povinnosti Poskytovatele</h2>
          <ul>
            <li>Poskytovat služby s odbornou péčí a v souladu s aktuálními znalostmi.</li>
            <li>Odmítnout službu, pokud zdravotní stav Klienta neumožňuje bezpečné cvičení.</li>
            <li>
              Maximální náhrada škody způsobené Poskytovatelem je omezena na výši uhrazené ceny poslední objednané
              služby.
            </li>
          </ul>
          <p>
            Poskytovatel má sjednáno pojištění profesní odpovědnosti u Kooperativa pojišťovna, a.s., limit 1 000 000 Kč.
          </p>

          {/* ------------------------------------------------------------------ */}
          <h2>8. Reklamace</h2>
          <p>
            Není‑li Klient spokojen s poskytnutou službou, může reklamaci uplatnit písemně na {contactEmail} do 7 dnů od
            poskytnutí služby. Poskytovatel vyřídí reklamaci do 30 dnů.
          </p>

          {/* ------------------------------------------------------------------ */}
          <h2>9. Mimosoudní řešení sporů</h2>
          <p>
            Spotřebitel má právo na mimosoudní řešení sporu u
            <strong>České obchodní inspekce</strong>, Štěpánská 15, 120 00 Praha 2, <a href="https://www.coi.cz">www.coi.cz</a>.
            K online řešení sporů lze použít platformu <a href="https://ec.europa.eu/consumers/odr">ODR EU</a>.
          </p>

          {/* ------------------------------------------------------------------ */}
          <h2>10. Ochrana osobních údajů</h2>
          <p>
            Informace o zpracování osobních údajů najdete v dokumentu <Link to="/ochrana-osobnich-udaju">Zásady ochrany
            osobních údajů</Link>.
          </p>

          {/* ------------------------------------------------------------------ */}
          <h2>11. Duševní vlastnictví</h2>
          <p>
            Tréninkové a výživové plány, videa a další materiály jsou autorským dílem Poskytovatele. Klient získává
            nevýhradní licenci k vlastní osobní potřebě; další šíření je zakázáno bez písemného souhlasu.
          </p>

          {/* ------------------------------------------------------------------ */}
          <h2>12. Závěrečná ustanovení</h2>
          <ul>
            <li>Právní vztahy se řídí českým právem.</li>
            <li>Neplatnost některého ustanovení nemá vliv na platnost zbytku smlouvy.</li>
            <li>
              Poskytovatel může tyto Podmínky jednostranně změnit; Klient bude informován e‑mailem. Nesouhlasí‑li
              spotřebitel, může smlouvu ukončit do 14 dnů od oznámení.
            </li>
          </ul>
          <p>
            Tyto Podmínky nabývají účinnosti dnem {effectiveDate} a nahrazují předchozí verze.
          </p>

          <hr className="my-8" />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Tento dokument byl připraven v souladu s NOZ, zákonem o ochraně spotřebitele a dalšími předpisy. Doporučujeme
            konzultaci s advokátem při další aktualizaci.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditionsPage;
