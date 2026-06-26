const MAIL = "mailto:hello@ojidigital.com";
const C = {
 en: {
  short: "EN", navtag: "AI & Automation", navcta: "Get in touch", blog: "Blog", mailsubj: "Automation enquiry",
  heroEyebrow: "AI-powered business automation",
  h1: "Automate the work a machine should be doing.",
  sub: "We design and build AI-powered automations that quietly run your repetitive business processes — inbox, invoicing, documents, data, reporting — so your team spends its hours on what actually grows the business.",
  cta1: "Book a free automation audit",
  trust: "An AI &amp; automation studio in Tokyo, working with companies worldwide.",
  whyEyebrow: "Why automate", whyH: "Repetitive work is quietly expensive.",
  why: [["clock", "Reclaim hours every week", "Stop paying skilled people to copy-paste between tabs and chase the same emails."], ["check", "Fewer mistakes", "Software doesn't get tired, distracted, or forget a step at 6pm on a Friday."], ["bolt", "Runs 24/7", "Your processes don't wait for office hours — leads, orders and replies get handled instantly."], ["scale", "Scale without hiring", "Handle 10× the volume with the team you already have."]],
  svcEyebrow: "What we automate", svcH: "If it's repetitive and rule-based, it can probably run itself.",
  svc: [["mail", "Email & inbox", "AI that reads, sorts and drafts replies in your voice — sent or queued for one click."], ["receipt", "Invoicing & billing", "Capture, generate and reconcile invoices with zero manual data entry."], ["doc", "Documents & e-signature", "Quotes, contracts and sealed PDFs generated and sent automatically."], ["data", "Data entry & enrichment", "Pull, clean and enrich records across the tools you already use."], ["chart", "Reporting & dashboards", "Live numbers assembled for you — a fresh report in your inbox every morning."], ["link", "Connect your tools", "Make the systems you already pay for finally talk to each other."]],
  caseEyebrow: "Selected work", caseH: "Automations we've built and run in production.",
  caseSub: "Real systems — designed, built and running today across software, operations and client work.",
  cases: [
   { t: "An AI inbox that replies for you", d: "An AI system (InboxOji) that reads incoming email and drafts on-brand replies — Japanese keigo included — then sends them or holds them for one-click approval.", m: "Hours/day → minutes" },
   { t: "Hands-off invoicing", d: "A portal where vendors upload a PDF or auto-generate an invoice; it's read, validated and routed to the books — nobody re-types anything.", m: "0 manual entry" },
   { t: "DocuSign, replaced", d: "A self-hosted send → sign → sealed-PDF flow with an audit certificate, emailed automatically. The same workflow, without the per-seat fees.", m: "$0 per-seat e-sign" },
   { t: "Talent-agency enrichment", d: "For an agency: paste a list of influencer handles and each is auto-enriched — followers, average views, audience, background flags — into a formatted sheet.", m: "Hours → minutes per list" }],
  roiEyebrow: "ROI calculator", roiH: "See what automation could save you.",
  roiHours: "Hours a week on the task", roiPeople: "People doing it", roiCost: "Fully-loaded cost / hour",
  roiTpl: "≈ {h} hours and {m} reclaimed every year.", cur: "$", cost: 40,
  roiNote: "Assumes automation removes ~80% of the time. A rough estimate — not a quote.",
  procEyebrow: "How it works", procH: "Simple, low-risk, and you own the result.",
  proc: [["1", "Free automation audit", "A short call to find the one or two processes where automation pays back the fastest. You leave with a plan even if we don't work together."], ["2", "Design & build", "We build it — AI, automation tooling and any custom code — and wire it into the stack you already have."], ["3", "Handover & run", "It runs quietly in the background. You own it. Optional ongoing support if you want it."]],
  pricing: "Fixed-price projects or a monthly retainer. Most first projects pay for themselves within weeks.",
  whoEyebrow: "Why us", whoH: "A studio that ships — not a slide deck.",
  who: ["We run a live AI SaaS and a dozen production automations.", "Full-stack: the AI, the automation (n8n / APIs), and the web app around it.", "We work in English, 日本語 and Français — across your market and ours.", "Tokyo-based; remote worldwide."],
  finalH: "Tell us your most annoying repetitive task.",
  finalSub: "We'll tell you — free — whether it can be automated and roughly what it would save you.",
  fName: "Your name", fEmail: "Email", fCompany: "Company (optional)", fMsg: "What would you like to automate?",
  fSend: "Send enquiry", fSending: "Sending…", fOk: "Thank you — we'll reply within one business day.",
  fErr: "Couldn't send. Please email hello@ojidigital.com directly.", fAlt: "Prefer email?", fOpening: "Opening your email app — just hit send.",
  foot: "OJI DIGITAL · Vegan Oji Inc. · AI & business-process automation"
 },
 ja: {
  short: "日本語", navtag: "AI・業務自動化", navcta: "お問い合わせ", blog: "ブログ", mailsubj: "業務自動化のご相談",
  heroEyebrow: "AIによる業務自動化",
  h1: "機械がやるべき仕事は、機械に。",
  sub: "メール対応・請求・書類作成・データ入力・レポートといった繰り返しの業務を、AIで静かに自動化します。社員の時間を、本当に価値のある仕事へ。",
  cta1: "無料の自動化診断を予約する",
  trust: "東京を拠点に、世界の企業と協働するAI・自動化スタジオです。",
  whyEyebrow: "なぜ自動化か", whyH: "繰り返しの作業は、静かにコストを生み続けます。",
  why: [["clock", "毎週、時間を取り戻す", "優秀な人材がタブ間のコピペやメール追跡に時間を奪われるのを止めます。"], ["check", "ミスが減る", "ソフトウェアは疲れず、気を散らさず、手順を忘れません。"], ["bolt", "24時間365日稼働", "営業時間を待ちません。問い合わせ・注文・返信を即座に処理します。"], ["scale", "採用せずに拡大", "今のチームのままで、10倍の量をこなせます。"]],
  svcEyebrow: "自動化できること", svcH: "繰り返しで、ルールがある業務なら、ほぼ自動化できます。",
  svc: [["mail", "メール・受信箱", "AIが読み、振り分け、御社のトーンで返信を下書き。送信または承認待ちに。"], ["receipt", "請求・経理", "請求書の取り込み・作成・消し込みを、手入力ゼロで。"], ["doc", "書類・電子署名", "見積・契約・封緘済みPDFを自動生成し送付。"], ["data", "データ入力・補完", "各ツールをまたいでデータを取得・整形・補完。"], ["chart", "レポート・ダッシュボード", "最新の数字を自動で集計。毎朝、受信箱に届きます。"], ["link", "ツール連携", "すでに使っているシステム同士を、ようやく連携させます。"]],
  caseEyebrow: "実績", caseH: "本番環境で構築・運用している自動化です。",
  caseSub: "ソフトウェア・社内業務・クライアント案件で、実際に設計・構築し、今も稼働しているシステムです。",
  cases: [
   { t: "自動で返信するAI受信箱", d: "受信メールを読み、敬語を含む御社トーンの返信を下書きし、送信またはワンクリック承認に回すAIシステム（InboxOji）。", m: "1日数時間 → 数分" },
   { t: "手のかからない請求業務", d: "取引先がPDFをアップロード、または自動生成。読み取り・検証して帳簿へ。誰も入力し直しません。", m: "手入力ゼロ" },
   { t: "DocuSignを置き換え", d: "送付 → 署名 → 封緘済みPDF＋監査証明書を自動メール送付。同じ流れを、席数課金なしで。", m: "電子署名 席数課金ゼロ" },
   { t: "タレント事務所のデータ補完", d: "事務所向け：インフルエンサーのハンドルを貼り付けるだけで、フォロワー・平均再生数・属性・確認事項を自動で整形シートに。", m: "リスト1件 数時間 → 数分" }],
  roiEyebrow: "ROI計算", roiH: "自動化で、どれだけ削減できるか試算する。",
  roiHours: "その業務に費やす 週あたり時間", roiPeople: "担当している人数", roiCost: "1時間あたりのコスト",
  roiTpl: "年間で約 {h} 時間・{m} を節約できます。", cur: "¥", cost: 4000,
  roiNote: "自動化で作業時間の約80%が削減される前提の概算です（正式な見積もりではありません）。",
  procEyebrow: "進め方", procH: "シンプル・低リスク・成果は御社のもの。",
  proc: [["1", "無料の自動化診断", "短いお打ち合わせで、最も早く投資回収できる業務を1〜2件特定。ご一緒しない場合でも、計画はお持ち帰りいただけます。"], ["2", "設計・構築", "AI・自動化ツール・必要なコードを実装し、既存の仕組みに組み込みます。"], ["3", "引き渡し・運用", "裏側で静かに稼働。所有権は御社に。希望に応じて継続サポートも。"]],
  pricing: "固定料金のプロジェクト、または月額顧問。多くの初回案件は数週間で元が取れます。",
  whoEyebrow: "選ばれる理由", whoH: "資料ではなく、実際に作って届けるスタジオです。",
  who: ["稼働中のAI SaaSと、十数件の本番自動化を運用しています。", "フルスタック：AI、自動化（n8n／API）、その上のWebアプリまで。", "English・日本語・Français で対応。御社の市場でも、海外でも。", "東京拠点・世界どこでもリモート対応。"],
  finalH: "いちばん面倒な「繰り返し作業」を教えてください。",
  finalSub: "自動化できるか、どれくらい削減できそうかを、無料でお答えします。",
  fName: "お名前", fEmail: "メールアドレス", fCompany: "会社名（任意）", fMsg: "自動化したい業務は？",
  fSend: "送信する", fSending: "送信中…", fOk: "ありがとうございます。1営業日以内にご返信します。",
  fErr: "送信できませんでした。hello@ojidigital.com まで直接ご連絡ください。", fAlt: "メールでも承ります：", fOpening: "メールアプリを開きます。そのまま送信してください。",
  foot: "OJI DIGITAL · ビーガン王子株式会社 · AI・業務自動化"
 },
 fr: {
  short: "FR", navtag: "IA & Automatisation", navcta: "Nous contacter", blog: "Blog", mailsubj: "Demande — automatisation",
  heroEyebrow: "Automatisation des processus par l'IA",
  h1: "Automatisez le travail qu'une machine devrait faire.",
  sub: "Nous concevons et développons des automatisations basées sur l'IA qui exécutent vos processus répétitifs — e-mails, facturation, documents, données, reporting — pour que votre équipe se consacre à ce qui fait vraiment grandir l'entreprise.",
  cta1: "Réserver un audit d'automatisation gratuit",
  trust: "Un studio IA &amp; automatisation basé à Tokyo, au service d'entreprises dans le monde entier.",
  whyEyebrow: "Pourquoi automatiser", whyH: "Le travail répétitif coûte cher, en silence.",
  why: [["clock", "Récupérez des heures chaque semaine", "Cessez de payer des gens compétents pour copier-coller et relancer les mêmes e-mails."], ["check", "Moins d'erreurs", "Un logiciel ne se fatigue pas, ne se déconcentre pas et n'oublie pas une étape."], ["bolt", "Disponible 24h/24", "Vos processus n'attendent pas les heures de bureau : leads, commandes et réponses traités aussitôt."], ["scale", "Grandir sans recruter", "Gérez 10× le volume avec l'équipe que vous avez déjà."]],
  svcEyebrow: "Ce que nous automatisons", svcH: "Si c'est répétitif et basé sur des règles, ça peut tourner tout seul.",
  svc: [["mail", "E-mails & boîte de réception", "Une IA qui lit, trie et rédige les réponses dans votre ton — envoyées ou en attente d'un clic."], ["receipt", "Facturation & comptabilité", "Saisie, génération et rapprochement des factures, sans aucune saisie manuelle."], ["doc", "Documents & signature électronique", "Devis, contrats et PDF scellés générés et envoyés automatiquement."], ["data", "Saisie & enrichissement de données", "Récupérez, nettoyez et enrichissez vos données entre vos outils."], ["chart", "Reporting & tableaux de bord", "Des chiffres à jour, assemblés pour vous — un rapport frais chaque matin."], ["link", "Connectez vos outils", "Faites enfin dialoguer les logiciels que vous payez déjà."]],
  caseEyebrow: "Réalisations", caseH: "Des automatisations que nous avons construites et exploitons en production.",
  caseSub: "De vrais systèmes — conçus, développés et en fonctionnement aujourd'hui : logiciel, opérations et missions clients.",
  cases: [
   { t: "Une boîte mail IA qui répond pour vous", d: "Un système d'IA (InboxOji) qui lit les e-mails entrants et rédige des réponses dans votre ton — keigo japonais compris — puis les envoie ou les met en attente d'un clic.", m: "Des heures/jour → minutes" },
   { t: "Facturation sans effort", d: "Un portail où les prestataires déposent un PDF ou génèrent une facture ; elle est lue, validée et transmise à la compta — personne ne ressaisit rien.", m: "0 saisie manuelle" },
   { t: "DocuSign, remplacé", d: "Un flux auto-hébergé envoi → signature → PDF scellé + certificat d'audit, envoyé automatiquement. Le même processus, sans frais par utilisateur.", m: "Signature : 0 frais/siège" },
   { t: "Enrichissement pour agence de talents", d: "Pour une agence : collez une liste de comptes d'influenceurs, chacun est enrichi automatiquement — abonnés, vues moyennes, audience, points de vigilance — dans une feuille mise en forme.", m: "Des heures → minutes par liste" }],
  roiEyebrow: "Calculateur de ROI", roiH: "Estimez ce que l'automatisation vous ferait gagner.",
  roiHours: "Heures par semaine sur la tâche", roiPeople: "Personnes concernées", roiCost: "Coût chargé / heure",
  roiTpl: "≈ {h} heures et {m} récupérés chaque année.", cur: "€", cost: 40,
  roiNote: "En supposant que l'automatisation supprime ~80 % du temps. Estimation indicative — pas un devis.",
  procEyebrow: "Comment ça marche", procH: "Simple, peu risqué, et le résultat vous appartient.",
  proc: [["1", "Audit d'automatisation gratuit", "Un court échange pour repérer les 1 à 2 processus au retour sur investissement le plus rapide. Vous repartez avec un plan, même sans collaboration."], ["2", "Conception & développement", "Nous construisons le tout — IA, outils d'automatisation, code sur mesure — et l'intégrons à vos systèmes existants."], ["3", "Remise & exploitation", "Ça tourne en arrière-plan. C'est à vous. Support continu en option."]],
  pricing: "Projets au forfait ou forfait mensuel. La plupart des premiers projets sont rentabilisés en quelques semaines.",
  whoEyebrow: "Pourquoi nous", whoH: "Un studio qui livre — pas un slide.",
  who: ["Nous exploitons un SaaS IA en production et une dizaine d'automatisations.", "Full-stack : l'IA, l'automatisation (n8n / API) et l'application web autour.", "Nous travaillons en English, 日本語 et Français — sur votre marché comme sur le nôtre.", "Basés à Tokyo ; à distance dans le monde entier."],
  finalH: "Dites-nous votre tâche répétitive la plus pénible.",
  finalSub: "Nous vous dirons — gratuitement — si elle est automatisable et ce qu'elle vous ferait gagner.",
  fName: "Votre nom", fEmail: "E-mail", fCompany: "Entreprise (facultatif)", fMsg: "Que souhaitez-vous automatiser ?",
  fSend: "Envoyer", fSending: "Envoi…", fOk: "Merci — nous répondons sous un jour ouvré.",
  fErr: "Échec de l'envoi. Écrivez-nous à hello@ojidigital.com.", fAlt: "Plutôt par e-mail ?", fOpening: "Ouverture de votre messagerie — il ne reste qu'à envoyer.",
  foot: "OJI DIGITAL · Vegan Oji Inc. · IA & automatisation des processus"
 }
};
const ICONS = {
 clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/>',
 check: '<circle cx="12" cy="12" r="8.5"/><path d="m8.5 12 2.3 2.3 4.7-4.8"/>',
 bolt: '<path d="M13 3 5.5 13H11l-1 8 8.5-11H13z"/>',
 scale: '<path d="M4 20V6m0 0 4 4M4 6 .5 10M20 20V10m0 0 3.5 4M20 10l-4 4"/><path d="M3.5 20h17"/>',
 mail: '<rect x="3.5" y="5.5" width="17" height="13" rx="2.3"/><path d="m4.2 7.2 7.8 5.4 7.8-5.4"/>',
 receipt: '<path d="M6 3.5h12v17l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3-2 1.3z"/><path d="M9 8h6M9 11.5h6M9 15h4"/>',
 doc: '<rect x="5.5" y="3.5" width="13" height="17" rx="2"/><path d="M8.5 8h7M8.5 11.5h7M8.5 15h4"/>',
 data: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
 chart: '<path d="M4 4v16h16"/><path d="M8 16v-4M12 16v-7M16 16v-9"/>',
 link: '<path d="M10 13.8a3.6 3.6 0 0 0 5.1 0l3-3a3.6 3.6 0 0 0-5.1-5.1l-1.4 1.4"/><path d="M14 10.2a3.6 3.6 0 0 0-5.1 0l-3 3a3.6 3.6 0 0 0 5.1 5.1l1.4-1.4"/>'
};
const ic = n => `<svg class="ico" viewBox="0 0 24 24">${ICONS[n] || ''}</svg>`;
let T = C.en;

function render(t) {
 T = t;
 const sec = (eyebrow, h, center = true) => `<div class="${center ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'} mb-10"><div class="eyebrow text-red mb-2">${eyebrow}</div><h2 class="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">${h}</h2></div>`;
 document.getElementById('page').innerHTML = `
 <section class="hero text-white">
   <div class="max-w-6xl mx-auto px-5 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
     <div>
       <div class="eyebrow mb-4" style="color:#ff9b97">${t.heroEyebrow}</div>
       <h1 class="text-4xl sm:text-[50px] font-extrabold leading-[1.06]">${t.h1}</h1>
       <p class="mt-6 text-lg text-white/80 leading-relaxed">${t.sub}</p>
       <div class="mt-9 flex flex-wrap gap-3"><a class="btn btn-red contact">${t.cta1} →</a></div>
       <p class="mt-6 text-[12.5px] text-white/55">${t.trust}</p>
     </div>
     <div class="hidden lg:block"><img src="/hero.webp" alt="" class="w-full rounded-3xl border border-white/10 shadow-2xl"></div>
   </div>
 </section>

 <section class="max-w-6xl mx-auto px-5 py-16 sm:py-20">
   ${sec(t.whyEyebrow, t.whyH)}
   <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
     ${t.why.map(w => `<div class="card p-5"><div class="w-10 h-10 rounded-xl bg-red-50 grid place-items-center mb-3">${ic(w[0])}</div><h3 class="font-bold text-navy">${w[1]}</h3><p class="text-sm text-muted mt-1.5 leading-relaxed">${w[2]}</p></div>`).join('')}
   </div>
 </section>

 <section class="bg-navy-50/60 border-y border-navy/5">
  <div class="max-w-6xl mx-auto px-5 py-16 sm:py-20">
   ${sec(t.svcEyebrow, t.svcH)}
   <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
     ${t.svc.map(s => `<div class="card p-5 flex gap-3.5"><div class="shrink-0">${ic(s[0])}</div><div><h3 class="font-bold text-navy">${s[1]}</h3><p class="text-sm text-muted mt-1 leading-relaxed">${s[2]}</p></div></div>`).join('')}
   </div>
  </div>
 </section>

 <section class="max-w-6xl mx-auto px-5 py-16 sm:py-20">
   ${sec(t.caseEyebrow, t.caseH)}
   <p class="text-center text-muted max-w-2xl mx-auto -mt-6 mb-10 leading-relaxed">${t.caseSub}</p>
   <div class="grid sm:grid-cols-2 gap-4">
     ${t.cases.map(c => `<div class="card p-6"><div class="flex items-start justify-between gap-3 mb-2"><h3 class="text-lg font-bold text-navy">${c.t}</h3><span class="metric">${c.m}</span></div><p class="text-sm text-muted leading-relaxed">${c.d}</p></div>`).join('')}
   </div>
 </section>

 <section class="bg-navy-50/60 border-y border-navy/5">
  <div class="max-w-3xl mx-auto px-5 py-16 sm:py-20">
   ${sec(t.roiEyebrow, t.roiH)}
   <div class="card p-6 sm:p-8">
     <div class="grid sm:grid-cols-3 gap-4 roi-field">
       <div><label>${t.roiHours}</label><input id="roiHours" type="number" min="0" value="10" oninput="calcROI()"></div>
       <div><label>${t.roiPeople}</label><input id="roiPeople" type="number" min="1" value="1" oninput="calcROI()"></div>
       <div><label>${t.roiCost} (${t.cur})</label><input id="roiCost" type="number" min="0" value="${t.cost}" oninput="calcROI()"></div>
     </div>
     <div class="mt-6 pt-6 border-t border-navy/10 roi-out" id="roiOut"></div>
     <p class="text-xs text-muted mt-3">${t.roiNote}</p>
   </div>
  </div>
 </section>

 <section class="max-w-5xl mx-auto px-5 py-16 sm:py-20">
   ${sec(t.procEyebrow, t.procH)}
   <div class="grid sm:grid-cols-3 gap-5">
     ${t.proc.map(p => `<div class="card p-6"><div class="step-n mb-4">${p[0]}</div><h3 class="font-bold text-navy text-lg">${p[1]}</h3><p class="text-sm text-muted mt-2 leading-relaxed">${p[2]}</p></div>`).join('')}
   </div>
   <p class="text-center text-sm text-navy/70 mt-8 font-medium">${t.pricing}</p>
 </section>

 <section id="contact" class="max-w-6xl mx-auto px-5 py-16 sm:py-20 scroll-mt-20">
   <div class="grid lg:grid-cols-2 gap-10 items-start">
     <div>${sec(t.whoEyebrow, t.whoH, false)}
       <ul class="space-y-3 mt-2">${t.who.map(w => `<li class="flex gap-3 text-navy/85"><svg class="ico shrink-0" style="width:20px;height:20px" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.3 2.3 4.7-4.8"/></svg><span>${w}</span></li>`).join('')}</ul>
     </div>
     <div class="card p-7 sm:p-8" style="background:linear-gradient(135deg,#1a2042,#2a3160);color:#fff">
       <h2 class="text-2xl font-extrabold leading-tight">${t.finalH}</h2>
       <p class="mt-3 text-white/80 leading-relaxed text-sm">${t.finalSub}</p>
       <form id="cform" onsubmit="return submitContact(event)" class="mt-6">
         <input type="text" name="hp" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
         <div class="cgrid">
           <div class="cfield"><label>${t.fName}</label><input name="name" required></div>
           <div class="cfield"><label>${t.fEmail}</label><input name="email" type="email" required></div>
         </div>
         <div class="cfield" style="margin-top:12px"><label>${t.fCompany}</label><input name="company"></div>
         <div class="cfield" style="margin-top:12px"><label>${t.fMsg}</label><textarea name="message" rows="3" required></textarea></div>
         <button class="btn btn-red w-full justify-center" style="margin-top:16px" type="submit" id="cbtn">${t.fSend} →</button>
         <p id="cmsg" class="text-sm mt-3" style="display:none"></p>
         <p class="text-xs text-white/55 mt-3">${t.fAlt} <a href="mailto:hello@ojidigital.com" class="underline" style="color:rgba(255,255,255,.78)">hello@ojidigital.com</a></p>
       </form>
     </div>
   </div>
 </section>

 <footer class="border-t border-navy/10 py-8 text-center text-xs text-muted">
   <img src="/logo.svg" alt="OJI DIGITAL" class="h-3.5 w-auto mx-auto opacity-60 mb-2" />${t.foot}
 </footer>`;

 document.querySelectorAll('[data-t="navtag"]').forEach(e => e.textContent = t.navtag);
 document.querySelectorAll('[data-t="navcta"]').forEach(e => e.textContent = t.navcta);
 document.querySelectorAll('[data-t="blog"]').forEach(e => e.textContent = t.blog);
 document.querySelectorAll('a.contact').forEach(a => a.setAttribute('href', '#contact'));
 const ll = document.getElementById('langlabel'); if (ll) ll.textContent = t.short;
 calcROI();
}
function calcROI() {
 const h = +(document.getElementById('roiHours') || {}).value || 0;
 const p = +(document.getElementById('roiPeople') || {}).value || 0;
 const c = +(document.getElementById('roiCost') || {}).value || 0;
 const hrs = Math.round(h * p * 52 * 0.8), money = Math.round(hrs * c);
 const out = document.getElementById('roiOut'); if (!out) return;
 out.innerHTML = T.roiTpl.replace('{h}', '<b>' + hrs.toLocaleString('en-US') + '</b>').replace('{m}', '<b>' + T.cur + money.toLocaleString('en-US') + '</b>');
}
async function submitContact(e) {
 e.preventDefault();
 const f = e.target, btn = document.getElementById('cbtn'), msg = document.getElementById('cmsg');
 const data = { name: f.name.value, email: f.email.value, company: f.company.value, message: f.message.value, hp: f.hp.value, lang: document.documentElement.lang || 'en' };
 if (data.hp) return false; // honeypot
 btn.disabled = true; btn.textContent = T.fSending;
 try {
  const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
  if (!r.ok) throw new Error('server unavailable');
  f.style.display = 'none'; msg.style.display = 'block'; msg.style.color = '#bff0d8'; msg.textContent = T.fOk;
 } catch (err) {
  // graceful fallback: open the visitor's email client, pre-filled to hello@
  const body = `${data.message}\n\n— ${data.name}${data.company ? ' (' + data.company + ')' : ''}\n${data.email}`;
  const mailto = 'mailto:hello@ojidigital.com?subject=' + encodeURIComponent('Automation enquiry — ' + data.name) + '&body=' + encodeURIComponent(body);
  window.location.href = mailto;
  btn.disabled = false; btn.textContent = T.fSend + ' →';
  msg.style.display = 'block'; msg.style.color = '#ffe2b0'; msg.textContent = T.fOpening;
 }
 return false;
}
function toggleLang(e) { e.stopPropagation(); document.getElementById('langwrap').classList.toggle('open'); }
document.addEventListener('click', () => { const w = document.getElementById('langwrap'); if (w) w.classList.remove('open'); });

const lang0 = ({ en: 'en', ja: 'ja', fr: 'fr' })[(document.documentElement.lang || 'en').slice(0, 2)] || 'en';
render(C[lang0]);
