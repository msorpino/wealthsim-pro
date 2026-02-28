// =========================================
// DIZIONARIO TRADUZIONI (WealthSimPro)
// =========================================
const translations = {
    it: {
        pageTitle: "WealthSimPro - Strategic Planner",
        themeLight: "Light Mode",
        themeDark: "Dark Mode",
        modeSim: "Proiezione",
        modeGoal: "Obiettivo",
        goalTitle: "🎯 Simulazione Obiettivo",
        goalDesc: "Imposta un traguardo finanziario e lascia che il simulatore calcoli lo sforzo necessario per raggiungerlo.",
        goalTarget: "Capitale Target Finale (€)",
        goalParam: "Parametro da calcolare",
        goalOptRate: "Versamento Mensile Necessario",
        goalOptYield: "Rendimento Annuo Necessario",
        baseTitle: "⚙️ Parametri Base",
        baseDesc: "Le fondamenta del tuo piano di accumulo.",
        labelCapIni: "Capitale Iniziale (€)",
        labelAnni: "Anni Totali",
        labelVers: "Versamento Mensile (€)",
        labelRend: "Rendimento %",
        btnUpdate: "🔄 Aggiorna Simulazione",
        advTitle: "🚀 Strategia Avanzata",
        advDesc: "Modella il portafoglio su asset reali (Azioni/Obbligazioni).",
        lcLabel: "Ciclo di Vita",
        labelRendAz: "Resa Az %",
        labelRendObb: "Resa Obb %",
        advMix: "Asset Mix (Inizio ➔ Fine)",
        labelAzStart: "Az % Start",
        labelObbStart: "Obb % Start",
        labelAzEnd: "Az % Fine",
        labelObbEnd: "Obb % Fine",
        varTitle: "📈 Variazioni",
        varDesc: "Inserisci l'anno e il nuovo importo mensile (rimarrà attivo da quell'anno in poi).",
        taxTitle: "🏦 Fisco e Inflazione",
        taxDesc: "Passa dal valore nominale a quello reale (potere d'acquisto).",
        labelTax: "Tasse %",
        labelInf: "Inflazione %",
        checkTax: "Simula Tassazione Netta",
        checkStress: "Monte Carlo Stress Test",
        pdfTitle: "WealthSimPro - Report Strategico",
        infoTitle: "📊 Benvenuto in WealthSimPro",
        infoDesc: "Questo strumento ti permette di visualizzare la crescita del tuo patrimonio nel tempo. Puoi simulare <strong>piani di accumulo (PAC)</strong>, gestire il rischio con il <strong>Ciclo di Vita</strong> e vedere come <strong>tasse e inflazione</strong> impattano sulla tua ricchezza reale futura.",
        statGross: "Lordo Finale",
        statNet: "Netto Tassato",
        statReal: "Valore Reale",
        statRealDesc: "Potere d'acquisto effettivo",
        statRent: "Rendita Mensile",
        statRentDesc: "Prelievo sicuro (4%)",
        ttSvolta: "✨ <strong>Il Punto di Svolta:</strong> Questo è il momento magico in cui i rendimenti generati dai tuoi soldi superano i tuoi versamenti mensili. Da qui in poi, il capitale lavora più duramente di te!",
        btnCompare: "⚖️ Compara Scenari",
        btnPdf: "📥 Scarica Report PDF",
        footerRights: "© 2026 WealthSimPro. Tutti i diritti riservati.",
        footerDisclaimer: "<strong>Disclaimer:</strong> Il simulatore ha scopo puramente illustrativo e non costituisce consulenza finanziaria. I rendimenti passati non sono garanzia di quelli futuri.",
        // Stringhe dinamiche JS
        tableYear: "Anno",
        tableMix: "Asset Mix",
        tableVers: "Versato",
        tableIntSemp: "Int. Semplice",
        tableCapLordo: "Cap. Lordo",
        tableDelta: "Delta",
        tableResa: "Resa",
        tableTotal: "TOTALE",
        chartGross: "Capitale Lordo",
        chartVers: "Totale Versato",
        chartIntSemp: "Interesse Semplice",
        chartCompare: "Confronto",
        chartStressMax: "Stress Max (+4%)",
        chartStressMin: "Stress Min (-3%)",
        svoltaBadge: "Punto di Svolta: Anno",
        pdfWait: "⏳ Generazione...",
        pdfBtnOrig: "📥 Scarica Report PDF",
        tooltipRend: "Il tasso di crescita medio annuo atteso. Esempio: 7% è una media storica azionaria.",
        tooltipGoal: "Scegli se vuoi scoprire quanto versare ogni mese o che rendimento cercare per arrivare al target.",
        tooltipLC: "Riduce il rischio (Azioni) man mano che ti avvicini alla fine, proteggendo i profitti.",
        tooltipTax: "In Italia: 26% su azioni/ETF, 12.5% su Titoli di Stato.",
        tooltipInf: "L'aumento dei prezzi che erode il valore dei soldi. Storicamente intorno al 2%.",
        tooltipStress: "Simula scenari di mercato pessimisti (-3%) e ottimisti (+4%) per darti un range di sicurezza."
    },
    en: {
        pageTitle: "WealthSimPro - Strategic Planner",
        themeLight: "Light Mode",
        themeDark: "Dark Mode",
        modeSim: "Projection",
        modeGoal: "Goal",
        goalTitle: "🎯 Goal Simulation",
        goalDesc: "Set a financial target and let the simulator calculate the effort needed to reach it.",
        goalTarget: "Target Capital (€)",
        goalParam: "Parameter to calculate",
        goalOptRate: "Required Monthly Contribution",
        goalOptYield: "Required Annual Return",
        baseTitle: "⚙️ Base Parameters",
        baseDesc: "The foundations of your accumulation plan.",
        labelCapIni: "Initial Capital (€)",
        labelAnni: "Total Years",
        labelVers: "Monthly Contribution (€)",
        labelRend: "Return %",
        btnUpdate: "🔄 Update Simulation",
        advTitle: "🚀 Advanced Strategy",
        advDesc: "Model your portfolio on real assets (Stocks/Bonds).",
        lcLabel: "Life Cycle",
        labelRendAz: "Stock Yield %",
        labelRendObb: "Bond Yield %",
        advMix: "Asset Mix (Start ➔ End)",
        labelAzStart: "Stock % Start",
        labelObbStart: "Bond % Start",
        labelAzEnd: "Stock % End",
        labelObbEnd: "Bond % End",
        varTitle: "📈 Variations",
        varDesc: "Enter the year and the new monthly amount (active from that year onwards).",
        taxTitle: "🏦 Taxes & Inflation",
        taxDesc: "Switch from nominal value to real value (purchasing power).",
        labelTax: "Taxes %",
        labelInf: "Inflation %",
        checkTax: "Simulate Net Taxation",
        checkStress: "Monte Carlo Stress Test",
        pdfTitle: "WealthSimPro - Strategic Report",
        infoTitle: "📊 Welcome to WealthSimPro",
        infoDesc: "This tool allows you to visualize your wealth growth over time. Simulate <strong>SIP/PAC plans</strong>, manage risk with <strong>Life Cycle</strong>, and see how <strong>taxes and inflation</strong> impact your future real wealth.",
        statGross: "Final Gross",
        statNet: "After-Tax Net",
        statReal: "Real Value",
        statRealDesc: "Effective purchasing power",
        statRent: "Monthly Income",
        statRentDesc: "Safe withdrawal (4%)",
        ttSvolta: "✨ <strong>The Turning Point:</strong> The magic moment when returns generated by your money exceed your monthly contributions. From here on, your capital works harder than you!",
        btnCompare: "⚖️ Compare Scenarios",
        btnPdf: "📥 Download PDF Report",
        footerRights: "© 2026 WealthSimPro. All rights reserved.",
        footerDisclaimer: "<strong>Disclaimer:</strong> The simulator is for illustrative purposes only and does not constitute financial advice. Past performance is no guarantee of future results.",
        tableYear: "Year",
        tableMix: "Asset Mix",
        tableVers: "Invested",
        tableIntSemp: "Simple Int.",
        tableCapLordo: "Gross Cap.",
        tableDelta: "Delta",
        tableResa: "Yield",
        tableTotal: "TOTAL",
        chartGross: "Gross Capital",
        chartVers: "Total Invested",
        chartIntSemp: "Simple Interest",
        chartCompare: "Comparison",
        chartStressMax: "Stress Max (+4%)",
        chartStressMin: "Stress Min (-3%)",
        svoltaBadge: "Turning Point: Year",
        pdfWait: "⏳ Generating...",
        pdfBtnOrig: "📥 Download PDF Report",
        tooltipRend: "Expected average annual growth rate. Example: 7% is a historical stock average.",
        tooltipGoal: "Choose if you want to discover how much to contribute monthly or what return to seek to reach the target.",
        tooltipLC: "Reduces risk (Stocks) as you approach the end, protecting profits.",
        tooltipTax: "In Italy: 26% on stocks/ETFs, 12.5% on Government Bonds.",
        tooltipInf: "The increase in prices that erodes the value of money. Historically around 2%.",
        tooltipStress: "Simulates pessimistic (-3%) and optimistic (+4%) market scenarios to give you a safety range."
    }
};

// =========================================
// LOGICA APPLICATIVO
// =========================================

let currentMode = 'sim', mioGrafico, snapshot = null;
let lastCalculatedLordo = 0; 
let currentLang = localStorage.getItem('wealthSimLang') || 'it';

// Funzione cambio lingua
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('wealthSimLang', lang);
    document.getElementById('languageSelector').value = lang;

    // Traduzione elementi data-translate
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Traduzione Tooltip
    document.querySelectorAll('[data-translate-tooltip]').forEach(el => {
        const key = el.getAttribute('data-translate-tooltip');
        if (translations[lang][key]) {
            el.setAttribute('data-tooltip', translations[lang][key]);
        }
    });

    // Titolo pagina
    document.title = translations[lang].pageTitle;
    
    triggerCalc();
}

function formatCurrency(input) {
    let value = input.value.replace(/\D/g, "");
    if (value === "") { input.value = ""; return; }
    input.value = parseInt(value).toLocaleString('it-IT');
}

function cleanNum(id) {
    let el = document.getElementById(id);
    if (!el) return 0;
    return parseFloat(el.value.replace(/\./g, "")) || 0;
}

function switchMode(mode) {
    currentMode = mode;
    document.getElementById('btnModeSim').classList.toggle('active', mode === 'sim');
    document.getElementById('btnModeGoal').classList.toggle('active', mode === 'goal');
    document.getElementById('goalSection').classList.toggle('hidden', mode === 'sim');
    document.getElementById('extraSections').classList.toggle('hidden', mode === 'goal');
    triggerCalc();
}

function triggerCalc() {
    if (currentMode === 'goal') eseguiCalcoloInverso();
    else calcola();
}

function downloadPDF() {
    const element = document.getElementById('report-area');
    const btn = document.getElementById('btnDownloadPDF');
    const lang = currentLang;
    
    btn.innerText = translations[lang].pdfWait;
    updateReportSummary(); 
    
    element.classList.add('is-generating-pdf');
    
    const opt = {
        margin: [0.3, 0.3],
        filename: 'WealthSimPro_Strategic_Report.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false, letterRendering: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().set(opt).from(element).save().then(() => {
        element.classList.remove('is-generating-pdf');
        btn.innerText = translations[lang].pdfBtnOrig;
    });
}

function updateReportSummary() {
    const grid = document.getElementById('pdf-summary-grid');
    const varsList = document.getElementById('pdf-variations-list');
    const lang = currentLang;
    const t = translations[lang];
    
    const isLC = document.getElementById('usaLifeCycle').checked;
    const rend = isLC ? t.lcLabel : document.getElementById('tassoAnnuo').value + "%";
    
    let summaryHTML = `
        <div><strong>💰 ${t.labelCapIni}:</strong> €${document.getElementById('capitaleIniziale').value}</div>
        <div><strong>📅 ${t.labelAnni}:</strong> ${document.getElementById('anni').value}</div>
        <div><strong>💵 ${t.labelVers}:</strong> €${document.getElementById('versamentoMensile').value}/mese</div>
        <div><strong>📈 ${t.labelRend}:</strong> ${rend}</div>
        <div><strong>💸 ${t.labelInf}:</strong> ${document.getElementById('inflazione').value}%</div>
        <div><strong>🏛️ ${t.labelTax}:</strong> ${document.getElementById('tasse').value}%</div>
    `;

    if (isLC) {
        summaryHTML += `
            <div style="grid-column: span 3; border-top: 1px dashed #ccc; margin-top: 5px; padding-top: 5px;">
                <strong>🚀 ${t.lcLabel}:</strong> 
                Start (${document.getElementById('startAz').value}% Az / ${document.getElementById('startObb').value}% Obb) ➔ 
                End (${document.getElementById('endAz').value}% Az / ${document.getElementById('endObb').value}% Obb)
            </div>
        `;
    }

    grid.innerHTML = summaryHTML;

    let vText = "";
    document.querySelectorAll('.var-row').forEach(row => {
        let a = row.querySelector('.var-anno').value;
        let imp = row.querySelector('.var-imp').value;
        if(a && imp) vText += `<li>Anno ${a}: incremento a <strong>€${imp}/mese</strong></li>`;
    });
    varsList.innerHTML = vText ? `<strong style="display:block; margin-bottom:5px;">📈 ${t.varTitle}:</strong><ul style="margin:0; padding-left:20px;">${vText}</ul>` : "";
}

function toggleComparison() {
    const btn = document.getElementById('btnCompara');
    const deltaBadge = document.getElementById('compareDelta');
    if (!snapshot) {
        if (!mioGrafico) return;
        snapshot = { data: [...mioGrafico.data.datasets[0].data], finalValue: lastCalculatedLordo };
        btn.innerText = (currentLang === 'it' ? "🗑️ Rimuovi Confronto" : "🗑️ Remove Comparison");
        btn.classList.add('active');
        deltaBadge.classList.remove('hidden');
    } else {
        snapshot = null;
        btn.innerText = translations[currentLang].btnCompare;
        btn.classList.remove('active');
        deltaBadge.classList.add('hidden');
    }
    calcola();
}

function eseguiCalcoloInverso() {
    const target = cleanNum('goalCifra'), anni = parseInt(document.getElementById('anni').value) || 1;
    const capIni = cleanNum('capitaleIniziale'), type = document.getElementById('goalType').value, n = anni * 12;
    const vMeseInput = document.getElementById('versamentoMensile'), tAnnuoInput = document.getElementById('tassoAnnuo');
    if (type === 'rate') {
        vMeseInput.classList.add('computed-field');
        const r = (parseFloat(tAnnuoInput.value) || 0) / 100 / 12;
        let rate = (r === 0) ? (target - capIni) / n : (target - capIni * Math.pow(1 + r, n)) / ((Math.pow(1 + r, n) - 1) / r);
        vMeseInput.value = Math.max(0, Math.round(rate)).toLocaleString('it-IT');
    } else {
        tAnnuoInput.classList.add('computed-field');
        const m = cleanNum('versamentoMensile');
        let tMin = -0.1, tMax = 2.0, tBest = 0.05;
        for(let i=0; i<60; i++) {
            let r = tBest / 12, fv = capIni * Math.pow(1 + r, n) + (r === 0 ? m * n : m * ((Math.pow(1 + r, n) - 1) / r));
            if (fv < target) tMin = tBest; else tMax = tBest;
            tBest = (tMin + tMax) / 2;
        }
        tAnnuoInput.value = (tBest * 100).toFixed(2);
    }
    calcola();
}

function syncMix(stage, type) {
    const az = document.getElementById(stage + 'Az'), obb = document.getElementById(stage + 'Obb');
    if (type === 'az') obb.value = 100 - (parseInt(az.value) || 0);
    else az.value = 100 - (parseInt(obb.value) || 0);
}

function toggleAdvanced() {
    const c = document.getElementById('advanced-content');
    c.classList.toggle('hidden');
    document.getElementById('advanced-icon').innerText = c.classList.contains('hidden') ? '▼' : '▲';
}

function toggleLifeCycleUI() {
    const isLC = document.getElementById('usaLifeCycle').checked;
    document.getElementById('tassoAnnuo').disabled = isLC;
}

function aggiungiVariazione() {
    const l = document.getElementById('listaVariazioni'), d = document.createElement('div');
    d.className = "var-row";
    d.innerHTML = `
        <input type="number" class="var-anno" placeholder="Anno">
        <input type="text" class="var-imp" placeholder="€/m" oninput="formatCurrency(this)">
        <button onclick="this.parentElement.remove(); triggerCalc();">✕</button>`;
    l.appendChild(d);
}

function calcola() {
    const lang = currentLang;
    const t = translations[lang];
    const capIni = cleanNum('capitaleIniziale'), versBase = cleanNum('versamentoMensile'), anni = parseInt(document.getElementById('anni').value) || 1;
    const tassoInfl = (parseFloat(document.getElementById('inflazione').value) || 0) / 100;
    const usaLC = document.getElementById('usaLifeCycle').checked && currentMode === 'sim', usaStress = document.getElementById('usaStressTest').checked, usaNetto = document.getElementById('usaTasse').checked;
    
    let variazioni = {};
    document.querySelectorAll('.var-row').forEach(row => {
        let a = parseInt(row.querySelector('.var-anno').value), imp = parseFloat(row.querySelector('.var-imp').value.replace(/\./g, ""));
        if (!isNaN(a) && !isNaN(imp)) variazioni[a] = imp;
    });

    const tbody = document.querySelector("#tabellaRisultati tbody"), thead = document.querySelector("#tabellaRisultati thead"), tfoot = document.getElementById("totaleTabella");
    
    // Intestazioni Tabella Tradotte
    thead.innerHTML = `<tr><th>${t.tableYear}</th>${usaLC ? `<th>${t.tableMix}</th>` : ''}<th>${t.tableVers}</th><th>${t.tableIntSemp}</th><th>${t.tableCapLordo}</th>${snapshot ? `<th>${t.tableDelta}</th>` : ''}<th>${t.tableResa}</th></tr>`;
    tbody.innerHTML = "";

    let capLordo = capIni, totVersato = capIni, intSempliceAccum = 0, labels = ["T0"], dC = [capIni], dV = [capIni], dS = [capIni], dMax = [capIni], dMin = [capIni], annoSvolta = null;
    let capMax = capIni, capMin = capIni, currentVersMese = versBase, sommaAliquoteAnnue = 0;

    for (let a = 1; a <= anni; a++) {
        let tAnnuo, qAz, aliquotaAnnoCorrente;
        if (usaLC) {
            let sAz = (parseFloat(document.getElementById('startAz').value) || 0)/100;                
            let eAz = (parseFloat(document.getElementById('endAz').value) || 0)/100;
            qAz = sAz + (eAz - sAz) * ((a-1)/(anni-1||1));
            tAnnuo = qAz * (parseFloat(document.getElementById('rendAzioni').value)/100) + (1-qAz) * (parseFloat(document.getElementById('rendObb').value)/100);                
            aliquotaAnnoCorrente = (qAz * 0.26) + ((1-qAz) * 0.125);
        } else {
            tAnnuo = (parseFloat(document.getElementById('tassoAnnuo').value) || 0) / 100;                
            aliquotaAnnoCorrente = (parseFloat(document.getElementById('tasse').value) || 0) / 100;
        }
        
        sommaAliquoteAnnue += aliquotaAnnoCorrente;
        if (variazioni[a] !== undefined) currentVersMese = variazioni[a];                
        let inizioCapAnno = capLordo, vAnno = 0;                
        for (let m = 1; m <= 12; m++) {                
            capLordo = (capLordo * (1 + tAnnuo/12)) + currentVersMese;                
            capMax = (capMax * (1 + (tAnnuo+0.04)/12)) + currentVersMese;                
            capMin = (capMin * (1 + (tAnnuo-0.03)/12)) + currentVersMese;                
            totVersato += currentVersMese; vAnno += currentVersMese;                
            intSempliceAccum += (totVersato * (tAnnuo/12));                
        }                
        let resa = capLordo - inizioCapAnno - vAnno;                
        if(!annoSvolta && resa > vAnno) annoSvolta = a;

        labels.push("A"+a); dC.push(capLordo); dV.push(totVersato); dS.push(totVersato + intSempliceAccum); dMax.push(capMax); dMin.push(capMin);
        
        let tdDeltaHTML = "";
        if (snapshot && snapshot.data[a] !== undefined) {
            let diff = capLordo - snapshot.data[a];
            tdDeltaHTML = `<td style="color:${diff >= 0 ? 'var(--accent)' : '#ef4444'}; font-weight:700;">${diff >= 0 ? '+' : ''}${Math.round(diff).toLocaleString('it-IT')}€</td>`;
        } else if (snapshot) tdDeltaHTML = "<td>-</td>";

        tbody.innerHTML += `<tr class="${annoSvolta === a ? 'svolta' : ''}"><td>${t.tableYear} ${a}</td>${usaLC ? `<td>${Math.round(qAz*100)}/${Math.round((1-qAz)*100)}</td>` : ''}<td>€${Math.round(totVersato).toLocaleString('it-IT')}</td><td>€${Math.round(totVersato + intSempliceAccum).toLocaleString('it-IT')}</td><td><strong>€${Math.round(capLordo).toLocaleString('it-IT')}</strong></td>${snapshot ? tdDeltaHTML : ''}<td style="color:var(--accent)">+€${Math.round(resa).toLocaleString('it-IT')}</td></tr>`;
    }

    tfoot.innerHTML = `<tr><td>${t.tableTotal}</td>${usaLC ? '<td>-</td>' : ''}<td>€${Math.round(totVersato).toLocaleString('it-IT')}</td><td>€${Math.round(totVersato + intSempliceAccum).toLocaleString('it-IT')}</td><td>€${Math.round(capLordo).toLocaleString('it-IT')}</td>${snapshot ? '<td>-</td>' : ''}<td>-</td></tr>`;

    lastCalculatedLordo = capLordo;                
    let plusvalenzaTotale = Math.max(0, capLordo - totVersato);                
    let aliquotaMediaGenerale = sommaAliquoteAnnue / anni;                
    let tasseFinali = plusvalenzaTotale * aliquotaMediaGenerale;                
    let netto = usaNetto ? capLordo - tasseFinali : capLordo;
    let reale = netto / Math.pow(1 + tassoInfl, anni);                
    
    document.getElementById("risultatoLordo").innerText = "€" + Math.round(capLordo).toLocaleString('it-IT');
    document.getElementById("risultatoNettoTasse").innerText = "€" + Math.round(netto).toLocaleString('it-IT');
    document.getElementById("risultatoNettoReale").innerText = "€" + Math.round(reale).toLocaleString('it-IT');
    document.getElementById("renditaFuoco").innerText = "€" + Math.round((reale * 0.04) / 12).toLocaleString('it-IT');
    
    const b = document.getElementById("puntoSvoltaBadge");
    b.innerText = annoSvolta ? `${t.svoltaBadge} ${annoSvolta} ⭐` : `${t.svoltaBadge} --`;
    b.style.background = annoSvolta ? 'var(--fire)' : '#94a3b8';
    
    if (snapshot) {
        let diff = capLordo - snapshot.finalValue;
        document.getElementById('compareDelta').innerHTML = `Delta: <span style="color:${diff >= 0 ? 'var(--accent)' : '#ef4444'}">${diff >= 0 ? '+' : ''}${Math.round(diff).toLocaleString('it-IT')}€</span>`;
    }
    disegnaGrafico(labels, dC, dV, dS, dMax, dMin, usaStress, annoSvolta);
}

function disegnaGrafico(l, c, v, s, mx, mn, stress, annoSvolta) {
    const ctx = document.getElementById('graficoInteresse').getContext('2d');
    if (mioGrafico) mioGrafico.destroy();
    const isD = document.documentElement.getAttribute('data-theme') === 'dark', textC = isD ? '#f8fafc' : '#0f172a';
    const t = translations[currentLang];

    let datasets = [
        { label: t.chartGross, data: c, borderColor: '#10b981', borderWidth: 3, tension: 0.3, fill: false },
        { label: t.chartVers, data: v, borderColor: '#ef4444', borderWidth: 2, pointRadius: 0, fill: false },
        { label: t.chartIntSemp, data: s, borderColor: '#3b82f6', borderWidth: 1.5, borderDash: [4,4], pointRadius: 0, fill: false }
    ];
    if (snapshot) datasets.push({ label: t.chartCompare, data: snapshot.data, borderColor: '#94a3b8', borderWidth: 2, borderDash: [10, 5], pointRadius: 0, fill: false });
    if (stress) {
        datasets.push({ label: t.chartStressMax, data: mx, borderColor: 'transparent', backgroundColor: 'rgba(16,185,129,0.08)', fill: 0, pointRadius: 0 });
        datasets.push({ label: t.chartStressMin, data: mn, borderColor: 'transparent', backgroundColor: 'rgba(16,185,129,0.08)', fill: 0, pointRadius: 0 });
    }
    
    mioGrafico = new Chart(ctx, {
        type: 'line', data: { labels: l, datasets: datasets },
        options: { 
            responsive: true, 
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false }, 
            scales: { 
                y: { 
                    ticks: { color: '#94a3b8', callback: (val) => '€' + val.toLocaleString('it-IT') }, 
                    grid: { color: isD ? '#1e293b' : '#e2e8f0' } 
                }, 
                x: { ticks: { color: '#94a3b8' }, grid: { display: false } } 
            }, 
            plugins: { 
                legend: { labels: { color: textC, font: { weight: '600' } } },
                tooltip: { 
                    backgroundColor: isD ? '#0f172a' : '#fff', 
                    titleColor: isD ? '#fff' : '#0f172a', 
                    bodyColor: isD ? '#94a3b8' : '#64748b', 
                    borderColor: '#e2e8f0', 
                    borderWidth: 1,
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) label += ': ';
                            if (context.parsed.y !== null) label += '€' + Math.round(context.parsed.y).toLocaleString('it-IT');
                            return label;
                        }
                    }
                }
            } 
        },
        plugins: [{
            id: 'verticalLine',
            afterDraw: chart => {
                if (annoSvolta) {
                    const ctx = chart.ctx;
                    const x = chart.scales.x.getPixelForValue("A" + annoSvolta);
                    const topY = chart.scales.y.top;
                    const bottomY = chart.scales.y.bottom;
                    ctx.save();
                    ctx.beginPath();
                    ctx.moveTo(x, topY);
                    ctx.lineTo(x, bottomY);
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = '#f59e0b';
                    ctx.setLineDash([6, 4]);
                    ctx.stroke();
                    ctx.restore();
                }
            }
        }]
    });
}

// Event Listeners
document.getElementById('theme-checkbox').addEventListener('change', (e) => {
    const isDark = e.target.checked;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    document.getElementById('theme-label').innerText = isDark ? translations[currentLang].themeDark : translations[currentLang].themeLight;
    triggerCalc();
});

document.getElementById('languageSelector').addEventListener('change', (e) => {
    setLanguage(e.target.value);
});

window.onload = () => {
    setLanguage(currentLang);
};