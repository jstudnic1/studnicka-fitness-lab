// ------------------------------
// PrivacyPolicyPage.tsx
// ------------------------------
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

/**
 * Přehled konstant – jednoduše upravíš na jednom místě
 */
const siteName = "Marek Studnička – Trenér MB";
const businessName = "Marek Studnička";           // živnostník nebo název s právní formou
const businessIco = "123 45 678";                 // skutečné IČO
const businessAddress = "Vinařice 53, 294 41 Dobrovice";
const contactEmail = "studnickam@outlook.cz";
const contactPhone = "+420 777 186 849";
const effectiveDate = "19. 05. 2025";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ochrana osobních údajů | {siteName}</title>
        <meta
          name="description"
          content={`Zásady ochrany osobních údajů pro web ${siteName}. Přečtěte si, jak nakládáme s vašimi daty.`}
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="bg-white dark:bg-gray-900 py-8 md:py-12 text-gray-800 dark:text-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl prose dark:prose-invert lg:prose-lg">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-marek-cta hover:underline">
              <ArrowLeft size={18} className="mr-2" /> Zpět na hlavní stránku
            </Link>
          </div>

          <h1>Zásady ochrany osobních údajů</h1>
          <p className="lead">Poslední aktualizace: {effectiveDate}</p>

          {/* ------------------------------------------------------------------ */}
          {/* 1) Identifikace a kontakty správce                                   */}
          {/* ------------------------------------------------------------------ */}
          <h2>1. Kdo je správcem osobních údajů?</h2>
          <p>
            Správcem je <strong>{businessName}</strong>, IČO {businessIco}, se sídlem {businessAddress}
            . Správce můžete kontaktovat na e‑mailu <a href={`mailto:${contactEmail}`}>{contactEmail}</a> nebo
            telefonicky na <a href={`tel:${contactPhone.replace(/\s+/g, "")}`}>{contactPhone}</a>.
          </p>

          {/* ------------------------------------------------------------------ */}
          {/* 2) Jaké údaje zpracováváme                                         */}
          {/* ------------------------------------------------------------------ */}
          <h2>2. Jaké osobní údaje zpracováváme a proč</h2>
          <table>
            <thead>
              <tr>
                <th>Účel / činnost</th>
                <th>Kategorie údajů</th>
                <th>Právní titul</th>
                <th>Doba uchování</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rezervace tréninku, plnění smlouvy</td>
                <td>Jméno, e‑mail, telefon, objednaná služba, poznámka</td>
                <td>Plnění smlouvy – čl. 6 (1) b) GDPR</td>
                <td>5 let od poslední služby</td>
              </tr>
              <tr>
                <td>Fakturace, účetnictví</td>
                <td>Jméno, adresa, IČO, e‑mail, částka</td>
                <td>Právní povinnost – čl. 6 (1) c) GDPR</td>
                <td>10 let dle zákona o účetnictví</td>
              </tr>
              <tr>
                <td>Základní webová analytika (Vercel Analytics)</td>
                <td>IP adresa, typ prohlížeče, navštívené stránky</td>
                <td>Oprávněný zájem – čl. 6 (1) f) GDPR</td>
                <td>26 měsíců</td>
              </tr>
              <tr>
                <td>E‑mailový newsletter (volitelný)</td>
                <td>Jméno, e‑mail</td>
                <td>Souhlas – čl. 6 (1) a) GDPR</td>
                <td>Do odvolání souhlasu / 3 roky od poslední aktivity</td>
              </tr>
            </tbody>
          </table>

          {/* ------------------------------------------------------------------ */}
          <h2>3. Kdo má k údajům přístup (příjemci a zpracovatelé)</h2>
          <p>
            Vaše data mohou být zpřístupněna pouze důvěryhodným partnerům, se kterými máme uzavřené zpracovatelské smlouvy:
          </p>
          <ul>
            <li>
              <strong>Calendly, LLC</strong> (USA) – rezervační systém, přenos chráněn prostřednictvím EU‑US Data Privacy
              Framework.
            </li>
            <li>
              <strong>Vercel Inc.</strong> (USA) – hosting a analýza provozu, přenos na základě standardních
              smluvních doložek (SCC).
            </li>
            <li>
              <strong>Fakturoid s.r.o.</strong> (CZ) – fakturace.
            </li>
          </ul>
          <p>
            Vaše údaje <strong>nikdy neprodáváme</strong> a nezpřístupňujeme dalším subjektům, pokud to nevyžaduje zákon.
          </p>

          {/* ------------------------------------------------------------------ */}
          <h2>4. Přenos údajů mimo&nbsp;EU/EHP</h2>
          <p>
            U Calendly a Vercel dochází k přenosu do USA. Přenos je zajištěn na základě Standardních smluvních doložek a
            partner je zařazen v DPF (Data Privacy Framework). Kopii záruk vám poskytneme na vyžádání.
          </p>

          {/* ------------------------------------------------------------------ */}
          <h2>5. Cookies a obdobné technologie</h2>
          <p>
            Na webu používáme cookies podle následujících kategorií:
          </p>
          <ul>
            <li><strong>Nezbytné</strong> – fungování webu (cookie‑consent, bezpečnost).</li>
            <li><strong>Statistické</strong> – Vercel Analytics (měření návštěvnosti).</li>
            <li><strong>Marketingové</strong> – jen pokud udělíte souhlas (např. Meta Pixel).</li>
          </ul>
          <p>
            Při první návštěvě se zobrazí lišta, kde si můžete nastavit preference. Souhlas můžete kdykoli odvolat v dolní
            části webu ("Nastavení cookies").
          </p>

          {/* ------------------------------------------------------------------ */}
          <h2>6. Vaše práva</h2>
          <p>Můžete od nás kdykoli požadovat:</p>
          <ul>
            <li>potvrzení, zda zpracováváme vaše osobní údaje (právo na přístup),</li>
            <li>opravu nepřesných údajů,</li>
            <li>výmaz, popř. omezení zpracování,</li>
            <li>námitku proti zpracování založenému na oprávněném zájmu,</li>
            <li>přenositelnost údajů k jinému správci,</li>
            <li>odvolání souhlasu (u souhlasných operací).</li>
          </ul>
          <p>
            Kontaktujte nás e‑mailem na <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. Vaši žádost vyřídíme bez
            zbytečného odkladu, nejpozději do 30 dnů.
          </p>
          <p>
            Pokud se domníváte, že s údaji nakládáme v rozporu s předpisy, máte právo podat stížnost u dozorového úřadu –
            <strong>Úřad pro ochranu osobních údajů, Pplk. Sochora 27, 170 00 Praha 7</strong>.
          </p>

          {/* ------------------------------------------------------------------ */}
          <h2>7. Automatizované rozhodování</h2>
          <p>Neprovádíme profilování ani automatizované rozhodování s právními účinky.</p>

          {/* ------------------------------------------------------------------ */}
          <h2>8. Zpracování údajů dětí</h2>
          <p>
            Web a služby nejsou určeny dětem mladším 16 let. Vědomě takové údaje neshromažďujeme. Zjistíme‑li, že jsme
            omylem získali údaje dítěte, neprodleně je vymažeme.
          </p>

          {/* ------------------------------------------------------------------ */}
          <h2>9. Bezpečnost zpracování</h2>
          <p>
            Přijali jsme vhodná technická a organizační opatření (šifrování HTTPS, 2FA, pravidelné zálohy) k ochraně vašich
            údajů před ztrátou či zneužitím.
          </p>

          {/* ------------------------------------------------------------------ */}
          <h2>10. Změny zásad</h2>
          <p>
            Tyto Zásady můžeme aktualizovat. O významných úpravách vás informujeme e‑mailem (pokud ho evidujeme) nebo
            bannerem na webu. Nová verze je účinná dnem zveřejnění.
          </p>

          <hr className="my-8" />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Tento dokument byl připraven v souladu s GDPR a českými právními předpisy. Pro specifické otázky se obraťte na
            právního poradce.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
