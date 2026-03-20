import { GrammarBox } from '../components/GrammarBox';
import { Example } from '../components/Example';
import { Tip } from '../components/Tip';
import type { Unit } from '../types';

export const COURSE: Unit[] = [
  // ===================== UNIT 1 =====================
  {
    id: 1, level: "A1", title: "Ciao! — Greetings & Introductions",
    desc: "Learn to introduce yourself, greet people, and use basic courtesy phrases.",
    lessons: [
      {
        title: "Greetings & Courtesy", icon: "👋",
        content: (
          <>
            <GrammarBox title="Essential Greetings">
              <Example it="Ciao!" en="Hi! / Bye! (informal)" />
              <Example it="Buongiorno" en="Good morning / Good day (formal)" />
              <Example it="Buonasera" en="Good evening (formal)" />
              <Example it="Buonanotte" en="Good night" />
              <Example it="Arrivederci" en="Goodbye (formal)" />
              <Example it="Per favore / Grazie / Prego" en="Please / Thank you / You're welcome" />
              <Example it="Scusi (formal) / Scusa (informal)" en="Excuse me / Sorry" />
            </GrammarBox>
            <Tip><strong>💡 Tip:</strong> Use "buongiorno" until about 4-5 PM, then switch to "buonasera." "Ciao" is only for friends & family!</Tip>
          </>
        )
      },
      {
        title: "Introducing Yourself", icon: "🗣️",
        content: (
          <>
            <GrammarBox title="Key Phrases">
              <Example it="Come ti chiami? / Come si chiama?" en="What's your name? (informal / formal)" />
              <Example it="Mi chiamo Marco." en="My name is Marco." />
              <Example it="Piacere! / Molto lieto/a!" en="Nice to meet you!" />
              <Example it="Di dove sei? / Di dov'è?" en="Where are you from? (inf. / form.)" />
              <Example it="Sono di Milano. / Sono inglese." en="I'm from Milan. / I'm English." />
              <Example it="Quanti anni hai?" en="How old are you?" />
              <Example it="Ho venticinque anni." en="I'm 25 years old." />
            </GrammarBox>
            <Tip><strong>💡 Tip:</strong> Italian uses "avere" (to have) for age: literally "I have 25 years."</Tip>
          </>
        )
      }
    ],
    vocab: [["ciao","hi/bye"],["buongiorno","good morning"],["buonasera","good evening"],["grazie","thank you"],["prego","you're welcome"],["sì","yes"],["no","no"],["per favore","please"],["scusa","sorry"],["arrivederci","goodbye"],["come","how"],["dove","where"]],
    quiz: [
      { q: "How do you say 'My name is Anna'?", opts: ["Mi chiamo Anna","Io sono nome Anna","Chiamo mi Anna","Anna mi chiama"], correct: 0 },
      { q: "Which greeting is formal?", opts: ["Ciao","Buongiorno","Ehi","Salve"], correct: 1 },
      { q: "'Quanti anni hai?' asks about your…", opts: ["Name","Job","Age","Origin"], correct: 2 }
    ]
  },

  // ===================== UNIT 2 =====================
  {
    id: 2, level: "A1", title: "The Italian Alphabet & Pronunciation",
    desc: "Master Italian sounds, stress rules, and the alphabet.",
    lessons: [
      {
        title: "The Alphabet & Sounds", icon: "🔤",
        content: (
          <>
            <GrammarBox title="Italian Alphabet (21 letters + 5 foreign)">
              <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "14px", lineHeight: "2" }}>
                A B C D E F G H I L M N O P Q R S T U V Z<br />
                <span style={{ color: "var(--text3)" }}>+ foreign letters: J K W X Y (used in loanwords)</span>
              </p>
            </GrammarBox>
            <GrammarBox title="Key Pronunciation Rules">
              <Example it={'C + e/i → "ch" sound'} en="cena (CHE-na), cinema (CHI-ne-ma)" />
              <Example it={'C + a/o/u → "k" sound'} en="casa (KA-za), come (KO-me)" />
              <Example it={'CH → always "k"'} en="chiave (KYAH-ve), che (ke)" />
              <Example it={'G + e/i → "j" sound'} en="gelato (je-LA-to), giro (JI-ro)" />
              <Example it={'G + a/o/u → hard "g"'} en="gatto (GAT-to), gusto (GOO-sto)" />
              <Example it={'GH → always hard "g"'} en="spaghetti (spa-GET-ti)" />
              <Example it={'GN → "ny" sound'} en="gnocchi (NYOK-ki), bagno (BA-nyo)" />
              <Example it={'GL + i → "ly" sound'} en="gli (lyee), famiglia (fa-MI-lya)" />
              <Example it={'SC + e/i → "sh" sound'} en="pesce (PE-she), scienza (SHEN-tsa)" />
              <Example it="Double consonants → longer" en="notte vs note, palla vs pala" />
            </GrammarBox>
            <Tip><strong>💡 Tip:</strong> Italian is mostly phonetic — what you see is what you say! Stress usually falls on the second-to-last syllable.</Tip>
          </>
        )
      }
    ],
    vocab: [["lettera","letter"],["parola","word"],["frase","sentence"],["leggere","to read"],["scrivere","to write"],["parlare","to speak"],["ascoltare","to listen"],["capire","to understand"],["ripetere","to repeat"],["pronuncia","pronunciation"]],
    quiz: [
      { q: "How is 'C' pronounced before 'E'?", opts: ["Like K","Like CH (as in church)","Like S","Silent"], correct: 1 },
      { q: "What sound does 'GN' make?", opts: ["G-N separately","NY (like canyon)","Silent G","Hard G"], correct: 1 },
      { q: "Where does stress usually fall?", opts: ["First syllable","Last syllable","Second-to-last syllable","Third syllable"], correct: 2 }
    ]
  },

  // ===================== UNIT 3 =====================
  {
    id: 3, level: "A1", title: "Nouns, Articles & Gender",
    desc: "Understand masculine/feminine, singular/plural, and definite/indefinite articles.",
    lessons: [
      {
        title: "Gender of Nouns", icon: "📖",
        content: (
          <>
            <GrammarBox title="Gender Rules">
              <p style={{ marginBottom: "10px", fontSize: "14px" }}>Most Italian nouns are either <strong>masculine</strong> or <strong>feminine</strong>:</p>
              <Example it="-O → masculine" en="il libro (book), il ragazzo (boy)" />
              <Example it="-A → feminine" en="la casa (house), la ragazza (girl)" />
              <Example it="-E → can be either!" en="il ristorante (m.), la notte (f.)" />
            </GrammarBox>
            <GrammarBox title="Plurals">
              <Example it="-O → -I" en="libro → libri" />
              <Example it="-A → -E" en="casa → case" />
              <Example it="-E → -I" en="notte → notti" />
            </GrammarBox>
            <Tip><strong>💡 Tip:</strong> Nouns ending in -ista can be M or F (il turista / la turista). Context and articles tell you!</Tip>
          </>
        )
      },
      {
        title: "Definite & Indefinite Articles", icon: "📝",
        content: (
          <>
            <table className="conj-table">
              <thead>
                <tr><th></th><th>Masc. Sing.</th><th>Fem. Sing.</th><th>Masc. Plur.</th><th>Fem. Plur.</th></tr>
              </thead>
              <tbody>
                <tr><td style={{ fontWeight: 700 }}>Definite (the)</td><td>il / lo / l'</td><td>la / l'</td><td>i / gli</td><td>le</td></tr>
                <tr><td style={{ fontWeight: 700 }}>Indefinite (a/an)</td><td>un / uno</td><td>una / un'</td><td colSpan={2} style={{ color: "var(--text3)" }}>— (use "dei/degli/delle" for some)</td></tr>
              </tbody>
            </table>
            <GrammarBox title="When to use LO / GLI / UNO" style={{ marginTop: "16px" }}>
              <p style={{ fontSize: "14px" }}>Before masculine nouns starting with: <strong>z, s+consonant, gn, ps, x, y</strong></p>
              <Example it="lo studente → gli studenti" en="the student → the students" />
              <Example it="lo zaino → gli zaini" en="the backpack → the backpacks" />
            </GrammarBox>
            <GrammarBox title="L' (elision)">
              <p style={{ fontSize: "14px" }}>Before any singular noun starting with a vowel:</p>
              <Example it="l'amico (m.) / l'amica (f.)" en="the (male) friend / the (female) friend" />
            </GrammarBox>
          </>
        )
      }
    ],
    vocab: [["il libro","the book"],["la casa","the house"],["l'uomo","the man"],["la donna","the woman"],["il ragazzo","the boy"],["la ragazza","the girl"],["un amico","a friend (m)"],["un'amica","a friend (f)"],["la scuola","the school"],["il cane","the dog"],["il gatto","the cat"],["l'acqua","the water"]],
    quiz: [
      { q: "What is the plural of 'il libro'?", opts: ["i libri","le libre","gli libri","i libre"], correct: 0 },
      { q: "Which article goes with 'studente'?", opts: ["il studente","lo studente","la studente","un studente"], correct: 1 },
      { q: "'La casa' becomes in plural…", opts: ["le case","la case","le casa","i casi"], correct: 0 }
    ]
  },

  // ===================== UNIT 4 =====================
  {
    id: 4, level: "A1", title: "Essere & Avere — The Essential Verbs",
    desc: "Conjugate the two most important Italian verbs in the present tense.",
    lessons: [
      {
        title: "ESSERE (to be)", icon: "🔵",
        content: (
          <>
            <table className="conj-table">
              <thead><tr><th>Pronoun</th><th>Conjugation</th><th>Example</th></tr></thead>
              <tbody>
                <tr><td className="pronoun">io</td><td className="verb">sono</td><td>Io sono italiano. (I am Italian.)</td></tr>
                <tr><td className="pronoun">tu</td><td className="verb">sei</td><td>Tu sei simpatico. (You are nice.)</td></tr>
                <tr><td className="pronoun">lui/lei/Lei</td><td className="verb">è</td><td>Lei è dottoressa. (She is a doctor.)</td></tr>
                <tr><td className="pronoun">noi</td><td className="verb">siamo</td><td>Noi siamo amici. (We are friends.)</td></tr>
                <tr><td className="pronoun">voi</td><td className="verb">siete</td><td>Voi siete studenti. (You all are students.)</td></tr>
                <tr><td className="pronoun">loro</td><td className="verb">sono</td><td>Loro sono a Roma. (They are in Rome.)</td></tr>
              </tbody>
            </table>
            <Tip><strong>💡 Tip:</strong> "Io sono" and "Loro sono" are the same form! Context makes it clear. Also, subject pronouns are often dropped: "Sono italiano" is perfectly natural.</Tip>
          </>
        )
      },
      {
        title: "AVERE (to have)", icon: "🟢",
        content: (
          <>
            <table className="conj-table">
              <thead><tr><th>Pronoun</th><th>Conjugation</th><th>Example</th></tr></thead>
              <tbody>
                <tr><td className="pronoun">io</td><td className="verb">ho</td><td>Ho fame. (I'm hungry.)</td></tr>
                <tr><td className="pronoun">tu</td><td className="verb">hai</td><td>Hai ragione. (You're right.)</td></tr>
                <tr><td className="pronoun">lui/lei/Lei</td><td className="verb">ha</td><td>Ha un cane. (He/She has a dog.)</td></tr>
                <tr><td className="pronoun">noi</td><td className="verb">abbiamo</td><td>Abbiamo tempo. (We have time.)</td></tr>
                <tr><td className="pronoun">voi</td><td className="verb">avete</td><td>Avete domande? (Do you have questions?)</td></tr>
                <tr><td className="pronoun">loro</td><td className="verb">hanno</td><td>Hanno una casa grande. (They have a big house.)</td></tr>
              </tbody>
            </table>
            <GrammarBox title="Expressions with AVERE">
              <Example it="avere fame / sete" en="to be hungry / thirsty" />
              <Example it="avere caldo / freddo" en="to be hot / cold" />
              <Example it="avere sonno" en="to be sleepy" />
              <Example it="avere paura" en="to be afraid" />
              <Example it="avere ragione / torto" en="to be right / wrong" />
              <Example it="avere bisogno di" en="to need" />
            </GrammarBox>
            <Tip><strong>💡 Tip:</strong> The 'H' in ho, hai, ha, hanno is <em>always silent</em>. It's only there to distinguish these from other words (o = or, ai = to the, a = to, anno = year).</Tip>
          </>
        )
      }
    ],
    vocab: [["essere","to be"],["avere","to have"],["fame","hunger"],["sete","thirst"],["caldo","hot"],["freddo","cold"],["sonno","sleep"],["paura","fear"],["ragione","reason/right"],["bisogno","need"],["tempo","time"],["domanda","question"]],
    quiz: [
      { q: "Complete: Noi ___ italiani.", opts: ["sono","è","siamo","siete"], correct: 2 },
      { q: "'I am hungry' in Italian is:", opts: ["Sono fame","Ho fame","Io fame","Avere fame"], correct: 1 },
      { q: "Complete: Loro ___ due gatti.", opts: ["ha","hanno","avete","abbiamo"], correct: 1 }
    ]
  },

  // ===================== UNIT 5 =====================
  {
    id: 5, level: "A1", title: "Present Tense — Regular Verbs",
    desc: "Learn to conjugate -ARE, -ERE, and -IRE verbs in the present indicative.",
    lessons: [
      {
        title: "-ARE Verbs (parlare — to speak)", icon: "🗨️",
        content: (
          <>
            <table className="conj-table">
              <thead><tr><th>Pronoun</th><th>Ending</th><th>Parlare</th><th>Lavorare</th></tr></thead>
              <tbody>
                <tr><td className="pronoun">io</td><td className="ending">-o</td><td className="verb">parlo</td><td className="verb">lavoro</td></tr>
                <tr><td className="pronoun">tu</td><td className="ending">-i</td><td className="verb">parli</td><td className="verb">lavori</td></tr>
                <tr><td className="pronoun">lui/lei</td><td className="ending">-a</td><td className="verb">parla</td><td className="verb">lavora</td></tr>
                <tr><td className="pronoun">noi</td><td className="ending">-iamo</td><td className="verb">parliamo</td><td className="verb">lavoriamo</td></tr>
                <tr><td className="pronoun">voi</td><td className="ending">-ate</td><td className="verb">parlate</td><td className="verb">lavorate</td></tr>
                <tr><td className="pronoun">loro</td><td className="ending">-ano</td><td className="verb">parlano</td><td className="verb">lavorano</td></tr>
              </tbody>
            </table>
            <Tip><strong>💡 Common -ARE verbs:</strong> mangiare (eat), guardare (watch), ascoltare (listen), comprare (buy), cucinare (cook), abitare (live), studiare (study), viaggiare (travel).</Tip>
          </>
        )
      },
      {
        title: "-ERE & -IRE Verbs", icon: "✏️",
        content: (
          <>
            <table className="conj-table">
              <thead><tr><th>Pronoun</th><th>-ERE (scrivere)</th><th>-IRE (dormire)</th><th>-IRE -isc (capire)</th></tr></thead>
              <tbody>
                <tr><td className="pronoun">io</td><td className="verb">scrivo</td><td className="verb">dormo</td><td className="verb">cap<span className="ending">isc</span>o</td></tr>
                <tr><td className="pronoun">tu</td><td className="verb">scrivi</td><td className="verb">dormi</td><td className="verb">cap<span className="ending">isc</span>i</td></tr>
                <tr><td className="pronoun">lui/lei</td><td className="verb">scrive</td><td className="verb">dorme</td><td className="verb">cap<span className="ending">isc</span>e</td></tr>
                <tr><td className="pronoun">noi</td><td className="verb">scriviamo</td><td className="verb">dormiamo</td><td className="verb">capiamo</td></tr>
                <tr><td className="pronoun">voi</td><td className="verb">scrivete</td><td className="verb">dormite</td><td className="verb">capite</td></tr>
                <tr><td className="pronoun">loro</td><td className="verb">scrivono</td><td className="verb">dormono</td><td className="verb">cap<span className="ending">isc</span>ono</td></tr>
              </tbody>
            </table>
            <GrammarBox title="-ISC- Verbs (important group!)">
              <p style={{ fontSize: "14px" }}>Many -IRE verbs insert <strong>-isc-</strong> in all forms except noi and voi.</p>
              <Example it="finire → finisco, finisci, finisce… finiamo, finite, finiscono" en="to finish" />
              <Example it="preferire → preferisco…" en="to prefer" />
              <Example it="pulire → pulisco…" en="to clean" />
            </GrammarBox>
          </>
        )
      }
    ],
    vocab: [["parlare","to speak"],["mangiare","to eat"],["lavorare","to work"],["abitare","to live"],["scrivere","to write"],["leggere","to read"],["vivere","to live"],["dormire","to sleep"],["capire","to understand"],["finire","to finish"],["partire","to leave"],["aprire","to open"]],
    quiz: [
      { q: "Conjugate 'mangiare' for 'noi':", opts: ["mangiamo","mangia","mangiate","mangiano"], correct: 0 },
      { q: "'Tu _____ un libro' (leggere):", opts: ["legge","leggi","leggete","leggo"], correct: 1 },
      { q: "'Loro _____ italiano' (capire):", opts: ["capono","capiamo","capiscono","capisce"], correct: 2 }
    ]
  },

  // ===================== UNIT 6 =====================
  {
    id: 6, level: "A1", title: "Adjectives & Descriptions",
    desc: "Describe people, places, and things with adjective agreement and position.",
    lessons: [
      {
        title: "Adjective Agreement", icon: "🎨",
        content: (
          <>
            <GrammarBox title="4-form Adjectives (-o/-a/-i/-e)">
              <Example it="il ragazzo alto / la ragazza alta" en="the tall boy / the tall girl" />
              <Example it="i ragazzi alti / le ragazze alte" en="the tall boys / the tall girls" />
            </GrammarBox>
            <GrammarBox title="2-form Adjectives (-e/-i)">
              <Example it="il ragazzo intelligente / la ragazza intelligente" en="Same form for M and F singular" />
              <Example it="i ragazzi intelligenti / le ragazze intelligenti" en="Same form for M and F plural" />
            </GrammarBox>
            <Tip><strong>💡 Tip:</strong> Adjectives usually go <em>after</em> the noun in Italian: "una macchina rossa" (a red car). A few common ones go before: bello, buono, grande, piccolo, brutto, giovane, vecchio.</Tip>
          </>
        )
      },
      {
        title: "Common Adjectives", icon: "📋",
        content: (
          <GrammarBox title="Opposites">
            <Example it="grande ↔ piccolo/a" en="big ↔ small" />
            <Example it="bello/a ↔ brutto/a" en="beautiful ↔ ugly" />
            <Example it="buono/a ↔ cattivo/a" en="good ↔ bad" />
            <Example it="nuovo/a ↔ vecchio/a" en="new ↔ old" />
            <Example it="facile ↔ difficile" en="easy ↔ difficult" />
            <Example it="caro/a ↔ economico/a" en="expensive ↔ cheap" />
            <Example it="lungo/a ↔ corto/a" en="long ↔ short" />
            <Example it="felice ↔ triste" en="happy ↔ sad" />
          </GrammarBox>
        )
      }
    ],
    vocab: [["grande","big"],["piccolo","small"],["bello","beautiful"],["brutto","ugly"],["buono","good"],["cattivo","bad"],["nuovo","new"],["vecchio","old"],["caldo","hot"],["freddo","cold"],["alto","tall"],["basso","short"]],
    quiz: [
      { q: "'Le ragazze sono ___' (smart):", opts: ["intelligente","intelligenti","intelligento","intelligentas"], correct: 1 },
      { q: "Where do most adjectives go?", opts: ["Before the noun","After the noun","Either position","At the end of the sentence"], correct: 1 },
      { q: "The opposite of 'facile' is:", opts: ["duro","complesso","difficile","pesante"], correct: 2 }
    ]
  },

  // ===================== UNIT 7 =====================
  {
    id: 7, level: "A1", title: "Numbers, Time & Days",
    desc: "Count, tell time, and talk about days, months, and dates.",
    lessons: [
      {
        title: "Numbers 0–100", icon: "🔢",
        content: (
          <>
            <GrammarBox title="0–20">
              <p style={{ fontSize: "14px", lineHeight: "2", fontFamily: "'Playfair Display',serif", fontStyle: "italic" }}>
                zero, uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci, undici, dodici, tredici, quattordici, quindici, sedici, diciassette, diciotto, diciannove, venti
              </p>
            </GrammarBox>
            <GrammarBox title="Tens & Patterns">
              <p style={{ fontSize: "14px" }}>venti (20), trenta (30), quaranta (40), cinquanta (50), sessanta (60), settanta (70), ottanta (80), novanta (90), cento (100)</p>
              <Example it="venti + uno = ventuno" en="21 (drop final vowel before uno/otto)" />
              <Example it="trenta + tre = trentatré" en="33" />
              <Example it="quarant'otto" en="48" />
            </GrammarBox>
          </>
        )
      },
      {
        title: "Days, Months & Time", icon: "📅",
        content: (
          <>
            <GrammarBox title="Days of the Week (i giorni della settimana)">
              <p style={{ fontFamily: "'Playfair Display',serif", fontStyle: "italic", fontSize: "15px", lineHeight: "2" }}>
                lunedì, martedì, mercoledì, giovedì, venerdì, sabato, domenica
              </p>
            </GrammarBox>
            <GrammarBox title="Months (i mesi)">
              <p style={{ fontFamily: "'Playfair Display',serif", fontStyle: "italic", fontSize: "15px", lineHeight: "2" }}>
                gennaio, febbraio, marzo, aprile, maggio, giugno, luglio, agosto, settembre, ottobre, novembre, dicembre
              </p>
            </GrammarBox>
            <GrammarBox title="Telling Time">
              <Example it="Che ore sono? / Che ora è?" en="What time is it?" />
              <Example it="È l'una. / Sono le due." en="It's 1:00. / It's 2:00." />
              <Example it="Sono le tre e mezza." en="It's 3:30." />
              <Example it="Sono le cinque e un quarto." en="It's 5:15." />
              <Example it="Sono le otto meno dieci." en="It's 7:50 (ten to eight)." />
            </GrammarBox>
            <Tip><strong>💡 Tip:</strong> Days & months are NOT capitalized in Italian! Dates use cardinal numbers: "il 3 marzo" (March 3rd), except for the 1st: "il primo marzo."</Tip>
          </>
        )
      }
    ],
    vocab: [["oggi","today"],["domani","tomorrow"],["ieri","yesterday"],["ora","now"],["sempre","always"],["mai","never"],["mattina","morning"],["pomeriggio","afternoon"],["sera","evening"],["notte","night"],["anno","year"],["mese","month"]],
    quiz: [
      { q: "How do you say 48 in Italian?", opts: ["quaranta otto","quarantotto","quarant'otto","quarantaotto"], correct: 1 },
      { q: "'Sono le due e mezza' means:", opts: ["It's 12:30","It's 2:30","It's half past midnight","It's 2:15"], correct: 1 },
      { q: "Which is correct for March 1st?", opts: ["il uno marzo","il 1 marzo","il primo marzo","marzo uno"], correct: 2 }
    ]
  },

  // ===================== UNIT 8 =====================
  {
    id: 8, level: "A2", title: "Prepositions & Contractions",
    desc: "Master Italian prepositions and their contractions with articles.",
    lessons: [
      {
        title: "Simple Prepositions", icon: "📍",
        content: (
          <GrammarBox title="The 8 Simple Prepositions">
            <Example it="di" en="of, from, about" />
            <Example it="a" en="to, at, in (cities)" />
            <Example it="da" en="from, by, since, at (someone's place)" />
            <Example it="in" en="in, to (countries, large areas)" />
            <Example it="con" en="with" />
            <Example it="su" en="on, upon, about" />
            <Example it="per" en="for, through, in order to" />
            <Example it="tra/fra" en="between, among, in (time)" />
          </GrammarBox>
        )
      },
      {
        title: "Prepositions + Articles (Preposizioni Articolate)", icon: "🔗",
        content: (
          <>
            <table className="conj-table">
              <thead><tr><th></th><th>il</th><th>lo</th><th>la</th><th>l'</th><th>i</th><th>gli</th><th>le</th></tr></thead>
              <tbody>
                <tr><td className="pronoun">di</td><td>del</td><td>dello</td><td>della</td><td>dell'</td><td>dei</td><td>degli</td><td>delle</td></tr>
                <tr><td className="pronoun">a</td><td>al</td><td>allo</td><td>alla</td><td>all'</td><td>ai</td><td>agli</td><td>alle</td></tr>
                <tr><td className="pronoun">da</td><td>dal</td><td>dallo</td><td>dalla</td><td>dall'</td><td>dai</td><td>dagli</td><td>dalle</td></tr>
                <tr><td className="pronoun">in</td><td>nel</td><td>nello</td><td>nella</td><td>nell'</td><td>nei</td><td>negli</td><td>nelle</td></tr>
                <tr><td className="pronoun">su</td><td>sul</td><td>sullo</td><td>sulla</td><td>sull'</td><td>sui</td><td>sugli</td><td>sulle</td></tr>
              </tbody>
            </table>
            <Tip><strong>💡 Tip:</strong> "con," "per," and "tra/fra" do NOT usually contract with articles in modern Italian. You say "con il" not "col" (though "col" exists, it's less common).</Tip>
            <GrammarBox title="Examples" style={{ marginTop: "14px" }}>
              <Example it="Vado al cinema." en="I'm going to the cinema." />
              <Example it="Il libro è sulla tavola." en="The book is on the table." />
              <Example it="Vengo dalla Francia." en="I come from France." />
              <Example it="La chiave è nella borsa." en="The key is in the bag." />
            </GrammarBox>
          </>
        )
      }
    ],
    vocab: [["sopra","above"],["sotto","below"],["dentro","inside"],["fuori","outside"],["vicino","near"],["lontano","far"],["davanti","in front of"],["dietro","behind"],["accanto","next to"],["verso","toward"],["fino a","until"],["attraverso","through"]],
    quiz: [
      { q: "'Di + il' contracts to:", opts: ["dil","del","dal","nel"], correct: 1 },
      { q: "'Vado ___ Roma' (I go to Rome):", opts: ["in","a","da","per"], correct: 1 },
      { q: "'In + la' contracts to:", opts: ["inla","nla","nella","lla"], correct: 2 }
    ]
  },

  // ===================== UNIT 9 =====================
  {
    id: 9, level: "A2", title: "Passato Prossimo — Past Tense",
    desc: "Talk about completed actions in the past using essere and avere as auxiliaries.",
    lessons: [
      {
        title: "Forming the Passato Prossimo", icon: "⏪",
        content: (
          <>
            <GrammarBox title="Structure: auxiliary (essere/avere) + past participle">
              <Example it="-ARE → -ato" en="parlare → parlato" />
              <Example it="-ERE → -uto" en="avere → avuto" />
              <Example it="-IRE → -ito" en="dormire → dormito" />
            </GrammarBox>
            <GrammarBox title="With AVERE (most verbs)">
              <Example it="Ho mangiato una pizza." en="I ate a pizza." />
              <Example it="Hai comprato il pane?" en="Did you buy the bread?" />
              <Example it="Abbiamo parlato con Marco." en="We spoke with Marco." />
            </GrammarBox>
            <GrammarBox title="With ESSERE (movement, state, reflexive verbs)">
              <p style={{ fontSize: "14px", marginBottom: "8px" }}><strong>Past participle agrees with subject!</strong></p>
              <Example it="Sono andato/a a Roma." en="I went to Rome. (m/f)" />
              <Example it="Maria è partita ieri." en="Maria left yesterday." />
              <Example it="Siamo arrivati tardi." en="We arrived late." />
            </GrammarBox>
            <Tip><strong>💡 ESSERE verbs to memorize:</strong> andare, venire, arrivare, partire, tornare, entrare, uscire, nascere, morire, restare, stare, essere, diventare + all reflexives.</Tip>
          </>
        )
      },
      {
        title: "Irregular Past Participles", icon: "⚡",
        content: (
          <GrammarBox title="Must-Know Irregular Participles">
            <Example it="fare → fatto" en="Ho fatto colazione. (I had breakfast.)" />
            <Example it="dire → detto" en="Ha detto la verità. (He told the truth.)" />
            <Example it="scrivere → scritto" en="Ho scritto una lettera." />
            <Example it="leggere → letto" en="Hai letto il libro?" />
            <Example it="prendere → preso" en="Ho preso un caffè." />
            <Example it="vedere → visto" en="Abbiamo visto un film." />
            <Example it="essere → stato" en="Sono stato a Napoli." />
            <Example it="venire → venuto" en="È venuto da Firenze." />
            <Example it="aprire → aperto" en="Ho aperto la finestra." />
            <Example it="chiudere → chiuso" en="Ha chiuso la porta." />
            <Example it="mettere → messo" en="Ho messo il libro sul tavolo." />
            <Example it="rispondere → risposto" en="Non ha risposto." />
          </GrammarBox>
        )
      }
    ],
    vocab: [["ieri","yesterday"],["la settimana scorsa","last week"],["l'anno scorso","last year"],["già","already"],["ancora","yet/still"],["mai","never/ever"],["sempre","always"],["appena","just"],["prima","before"],["dopo","after"],["poi","then"],["infine","finally"]],
    quiz: [
      { q: "'Maria è _____ a casa.' (tornare)", opts: ["tornato","tornata","tornati","torna"], correct: 1 },
      { q: "The past participle of 'fare' is:", opts: ["fato","faccio","fatto","faciuto"], correct: 2 },
      { q: "Which uses ESSERE?", opts: ["Ho mangiato","Ho dormito","Sono andato","Ho parlato"], correct: 2 }
    ]
  },

  // ===================== UNIT 10 =====================
  {
    id: 10, level: "A2", title: "Imperfetto — The Other Past",
    desc: "Describe habits, ongoing states, and background actions in the past.",
    lessons: [
      {
        title: "Forming the Imperfetto", icon: "🔄",
        content: (
          <>
            <table className="conj-table">
              <thead><tr><th>Pronoun</th><th>-ARE (parlare)</th><th>-ERE (leggere)</th><th>-IRE (dormire)</th></tr></thead>
              <tbody>
                <tr><td className="pronoun">io</td><td className="verb">parlavo</td><td className="verb">leggevo</td><td className="verb">dormivo</td></tr>
                <tr><td className="pronoun">tu</td><td className="verb">parlavi</td><td className="verb">leggevi</td><td className="verb">dormivi</td></tr>
                <tr><td className="pronoun">lui/lei</td><td className="verb">parlava</td><td className="verb">leggeva</td><td className="verb">dormiva</td></tr>
                <tr><td className="pronoun">noi</td><td className="verb">parlavamo</td><td className="verb">leggevamo</td><td className="verb">dormivamo</td></tr>
                <tr><td className="pronoun">voi</td><td className="verb">parlavate</td><td className="verb">leggevate</td><td className="verb">dormivate</td></tr>
                <tr><td className="pronoun">loro</td><td className="verb">parlavano</td><td className="verb">leggevano</td><td className="verb">dormivano</td></tr>
              </tbody>
            </table>
            <GrammarBox title="Irregular Imperfetto">
              <Example it="essere → ero, eri, era, eravamo, eravate, erano" en="" />
              <Example it="fare → facevo, facevi, faceva…" en="" />
              <Example it="dire → dicevo, dicevi, diceva…" en="" />
              <Example it="bere → bevevo, bevevi, beveva…" en="" />
            </GrammarBox>
          </>
        )
      },
      {
        title: "Imperfetto vs Passato Prossimo", icon: "⚖️",
        content: (
          <>
            <GrammarBox title="When to use Imperfetto">
              <Example it="Habits: Da bambino giocavo ogni giorno." en="As a child I used to play every day." />
              <Example it="Descriptions: Era una bella giornata." en="It was a beautiful day." />
              <Example it="Ongoing: Dormivo quando hai chiamato." en="I was sleeping when you called." />
              <Example it="Age/Time: Avevo 10 anni. Erano le tre." en="I was 10. It was 3 o'clock." />
            </GrammarBox>
            <GrammarBox title="When to use Passato Prossimo">
              <Example it="Completed: Ho mangiato alle otto." en="I ate at eight." />
              <Example it="Interrupting: Mentre dormivo, è arrivato Marco." en="While I was sleeping, Marco arrived." />
            </GrammarBox>
            <Tip><strong>💡 Key:</strong> Imperfetto = "was doing / used to do" (background, habits). Passato Prossimo = "did" (completed action, specific event). They often appear in the same sentence!</Tip>
          </>
        )
      }
    ],
    vocab: [["quando","when"],["mentre","while"],["spesso","often"],["di solito","usually"],["ogni giorno","every day"],["a volte","sometimes"],["da bambino/a","as a child"],["una volta","once upon a time"],["all'epoca","at that time"],["in quel momento","at that moment"],["nel frattempo","meanwhile"],["continuamente","continuously"]],
    quiz: [
      { q: "'Da bambina ___ al mare ogni estate.' (andare)", opts: ["sono andata","andavo","ho andato","vado"], correct: 1 },
      { q: "Imperfetto is used for:", opts: ["Completed single actions","Habits and descriptions","Future plans","Commands"], correct: 1 },
      { q: "'Mentre ___, ha suonato il telefono.' (studiare, io)", opts: ["ho studiato","studio","studiavo","studiai"], correct: 2 }
    ]
  },

  // ===================== UNIT 11 =====================
  {
    id: 11, level: "A2", title: "Reflexive Verbs & Daily Routine",
    desc: "Talk about your daily routine using reflexive verbs.",
    lessons: [
      {
        title: "Reflexive Verbs (Verbi Riflessivi)", icon: "🪞",
        content: (
          <>
            <GrammarBox title="Structure: reflexive pronoun + verb">
              <Example it="mi, ti, si, ci, vi, si" en="myself, yourself, him/herself, ourselves, yourselves, themselves" />
            </GrammarBox>
            <table className="conj-table">
              <thead><tr><th>Pronoun</th><th>Svegliarsi (to wake up)</th><th>Vestirsi (to get dressed)</th></tr></thead>
              <tbody>
                <tr><td className="pronoun">io</td><td className="verb">mi sveglio</td><td className="verb">mi vesto</td></tr>
                <tr><td className="pronoun">tu</td><td className="verb">ti svegli</td><td className="verb">ti vesti</td></tr>
                <tr><td className="pronoun">lui/lei</td><td className="verb">si sveglia</td><td className="verb">si veste</td></tr>
                <tr><td className="pronoun">noi</td><td className="verb">ci svegliamo</td><td className="verb">ci vestiamo</td></tr>
                <tr><td className="pronoun">voi</td><td className="verb">vi svegliate</td><td className="verb">vi vestite</td></tr>
                <tr><td className="pronoun">loro</td><td className="verb">si svegliano</td><td className="verb">si vestono</td></tr>
              </tbody>
            </table>
            <GrammarBox title="Common Reflexive Verbs" style={{ marginTop: "14px" }}>
              <Example it="alzarsi" en="to get up" />
              <Example it="lavarsi" en="to wash oneself" />
              <Example it="pettinarsi" en="to comb one's hair" />
              <Example it="mettersi" en="to put on (clothes)" />
              <Example it="addormentarsi" en="to fall asleep" />
              <Example it="sentirsi" en="to feel" />
              <Example it="divertirsi" en="to have fun" />
              <Example it="chiamarsi" en="to be called" />
            </GrammarBox>
            <Tip><strong>💡 Tip:</strong> In the passato prossimo, reflexives ALWAYS use essere: "Mi sono svegliato/a alle sette." The participle agrees with the subject!</Tip>
          </>
        )
      }
    ],
    vocab: [["svegliarsi","to wake up"],["alzarsi","to get up"],["lavarsi","to wash"],["vestirsi","to get dressed"],["prepararsi","to get ready"],["addormentarsi","to fall asleep"],["rilassarsi","to relax"],["divertirsi","to have fun"],["sentirsi","to feel"],["arrabbiarsi","to get angry"],["innamorarsi","to fall in love"],["ricordarsi","to remember"]],
    quiz: [
      { q: "'Noi ___ alle 7.' (svegliarsi)", opts: ["si svegliamo","ci svegliamo","vi svegliate","mi sveglio"], correct: 1 },
      { q: "Passato prossimo of 'alzarsi' (io, f.):", opts: ["Ho alzata","Mi sono alzata","Mi ho alzato","Sono alzata"], correct: 1 },
      { q: "'Lei ___ Maria.' (chiamarsi)", opts: ["mi chiama","ti chiami","si chiama","ci chiamiamo"], correct: 2 }
    ]
  },

  // ===================== UNIT 12 =====================
  {
    id: 12, level: "A2", title: "Future Tense & Modal Verbs",
    desc: "Talk about plans, possibilities, and express ability, desire, and obligation.",
    lessons: [
      {
        title: "Futuro Semplice", icon: "🔮",
        content: (
          <>
            <table className="conj-table">
              <thead><tr><th>Pronoun</th><th>-ARE (parlare)</th><th>-ERE (prendere)</th><th>-IRE (partire)</th></tr></thead>
              <tbody>
                <tr><td className="pronoun">io</td><td className="verb">parlerò</td><td className="verb">prenderò</td><td className="verb">partirò</td></tr>
                <tr><td className="pronoun">tu</td><td className="verb">parlerai</td><td className="verb">prenderai</td><td className="verb">partirai</td></tr>
                <tr><td className="pronoun">lui/lei</td><td className="verb">parlerà</td><td className="verb">prenderà</td><td className="verb">partirà</td></tr>
                <tr><td className="pronoun">noi</td><td className="verb">parleremo</td><td className="verb">prenderemo</td><td className="verb">partiremo</td></tr>
                <tr><td className="pronoun">voi</td><td className="verb">parlerete</td><td className="verb">prenderete</td><td className="verb">partirete</td></tr>
                <tr><td className="pronoun">loro</td><td className="verb">parleranno</td><td className="verb">prenderanno</td><td className="verb">partiranno</td></tr>
              </tbody>
            </table>
            <GrammarBox title="Common Irregular Stems">
              <Example it="essere → sar- (sarò, sarai…)" en="" />
              <Example it="avere → avr- (avrò, avrai…)" en="" />
              <Example it="fare → far- (farò…)" en="" />
              <Example it="andare → andr- (andrò…)" en="" />
              <Example it="venire → verr- (verrò…)" en="" />
              <Example it="potere → potr- (potrò…)" en="" />
              <Example it="dovere → dovr- (dovrò…)" en="" />
              <Example it="volere → vorr- (vorrò…)" en="" />
            </GrammarBox>
            <Tip><strong>💡 Tip:</strong> In informal speech, Italians often use the present tense for the near future: "Domani vado a Roma" instead of "Domani andrò a Roma." Both are correct!</Tip>
          </>
        )
      },
      {
        title: "Modal Verbs: Potere, Dovere, Volere", icon: "🔑",
        content: (
          <>
            <table className="conj-table">
              <thead><tr><th>Pronoun</th><th>Potere (can)</th><th>Dovere (must)</th><th>Volere (want)</th></tr></thead>
              <tbody>
                <tr><td className="pronoun">io</td><td className="verb">posso</td><td className="verb">devo</td><td className="verb">voglio</td></tr>
                <tr><td className="pronoun">tu</td><td className="verb">puoi</td><td className="verb">devi</td><td className="verb">vuoi</td></tr>
                <tr><td className="pronoun">lui/lei</td><td className="verb">può</td><td className="verb">deve</td><td className="verb">vuole</td></tr>
                <tr><td className="pronoun">noi</td><td className="verb">possiamo</td><td className="verb">dobbiamo</td><td className="verb">vogliamo</td></tr>
                <tr><td className="pronoun">voi</td><td className="verb">potete</td><td className="verb">dovete</td><td className="verb">volete</td></tr>
                <tr><td className="pronoun">loro</td><td className="verb">possono</td><td className="verb">devono</td><td className="verb">vogliono</td></tr>
              </tbody>
            </table>
            <GrammarBox title="Usage: Modal + Infinitive">
              <Example it="Posso venire domani." en="I can come tomorrow." />
              <Example it="Devi studiare di più." en="You must study more." />
              <Example it="Voglio imparare l'italiano!" en="I want to learn Italian!" />
              <Example it="Vorrei un caffè, per favore." en="I would like a coffee, please. (conditional — polite)" />
            </GrammarBox>
          </>
        )
      }
    ],
    vocab: [["potere","to be able to"],["dovere","to have to"],["volere","to want"],["sapere","to know (how)"],["domani","tomorrow"],["la prossima settimana","next week"],["fra poco","soon"],["più tardi","later"],["forse","maybe"],["probabilmente","probably"],["sicuramente","certainly"],["sperare","to hope"]],
    quiz: [
      { q: "'Domani noi ___ a Firenze.' (andare, futuro)", opts: ["andiamo","andremo","anderemo","andaremo"], correct: 1 },
      { q: "'I want to eat' in Italian:", opts: ["Voglio mangiare","Posso mangiare","Devo mangiare","Mangio volere"], correct: 0 },
      { q: "The future stem of 'essere' is:", opts: ["esser-","ess-","sar-","ser-"], correct: 2 }
    ]
  }
];
