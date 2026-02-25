let currentMode = 'sim', mioGrafico, snapshot = null;
let lastCalculatedLordo = 0; 

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
}

function triggerCalc() {
    if (currentMode === 'goal') eseguiCalcoloInverso();
    else calcola();
}

function toggleComparison() {
    const btn = document.getElementById('btnCompara');
    const deltaBadge = document.getElementById('compareDelta');
    if (!snapshot) {
        if (!mioGrafico) return;
        snapshot = { data: [...mioGrafico.data.datasets[0].data], finalValue: lastCalculatedLordo };
        btn.innerText = "🗑️ Rimuovi Confronto";
        btn.classList.add('active');
        deltaBadge.classList.remove('hidden');
    } else {
        snapshot = null;
        btn.innerText = "⚖️ Compara Scenari";
        btn.classList.remove('active');
        deltaBadge.classList.add('hidden');
    }
    calcola();
}

function eseguiCalcoloInverso() {
    const target = cleanNum('goalCifra');
    const anni = parseInt(document.getElementById('anni').value) || 1;
    const capIni = cleanNum('capitaleIniziale');
    const type = document.getElementById('goalType').value;
    const n = anni * 12;

    const vMeseInput = document.getElementById('versamentoMensile');
    const tAnnuoInput = document.getElementById('tassoAnnuo');

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
            let r = tBest / 12;
            let fv = capIni * Math.pow(1 + r, n) + (r === 0 ? m * n : m * ((Math.pow(1 + r, n) - 1) / r));
            if (fv < target) tMin = tBest; else tMax = tBest;
            tBest = (tMin + tMax) / 2;
        }
        tAnnuoInput.value = (tBest * 100).toFixed(2);
    }
    calcola();
}

function syncMix(stage, type) {
    const az = document.getElementById(stage + 'Az');
    const obb = document.getElementById(stage + 'Obb');
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
    document.getElementById('tasse').disabled = isLC;
}

function aggiungiVariazione() {
    const l = document.getElementById('listaVariazioni');
    const d = document.createElement('div');
    d.className = "var-row";
    d.innerHTML = `
        <input type="number" class="var-anno" placeholder="Anno">
        <input type="text" class="var-imp" placeholder="€/m" oninput="formatCurrency(this)">
        <button onclick="this.parentElement.remove()">✕</button>
    `;
    l.appendChild(d);
}

function calcola() {
    const capIni = cleanNum('capitaleIniziale');
    const versBase = cleanNum('versamentoMensile');
    const anni = parseInt(document.getElementById('anni').value) || 1;
    const tassoInfl = (parseFloat(document.getElementById('inflazione').value) || 0) / 100;
    const usaLC = document.getElementById('usaLifeCycle').checked && currentMode === 'sim';
    const usaStress = document.getElementById('usaStressTest').checked;
    const usaNetto = document.getElementById('usaTasse').checked;

    let variazioni = {};
    document.querySelectorAll('.var-row').forEach(row => {
        let a = parseInt(row.querySelector('.var-anno').value);
        let imp = parseFloat(row.querySelector('.var-imp').value.replace(/\./g, ""));
        if (!isNaN(a) && !isNaN(imp)) variazioni[a] = imp;
    });

    const tbody = document.querySelector("#tabellaRisultati tbody");
    const thead = document.querySelector("#tabellaRisultati thead");
    
    // HEADER: Colonna mix gestita inline in modo assoluto
    thead.innerHTML = `<tr>
        <th>Anno</th>
        ${usaLC ? '<th>Asset Mix</th>' : ''}
        <th>Versato</th>
        <th>Int. Semplice</th>
        <th>Cap. Lordo</th>
        ${snapshot ? '<th>Delta vs Confronto</th>' : ''}
        <th>Resa</th>
    </tr>`;
    
    tbody.innerHTML = "";

    let capLordo = capIni, totVersato = capIni, intSempliceAccum = 0;
    let capMax = capIni, capMin = capIni;
    let labels = ["T0"], dC = [capIni], dV = [capIni], dS = [capIni], dMax = [capIni], dMin = [capIni], annoSvolta = null;

    let aliquotaFinalePesata = 0;
    let currentVersMese = versBase; 

    for (let a = 1; a <= anni; a++) {
        let tAnnuo, mixStr, qAz;
        if (usaLC) {
            let sAz = (parseFloat(document.getElementById('startAz').value) || 0)/100;
            let eAz = (parseFloat(document.getElementById('endAz').value) || 0)/100;
            qAz = sAz + (eAz - sAz) * ((a-1)/(anni-1||1));
            tAnnuo = qAz * (parseFloat(document.getElementById('rendAzioni').value)/100) + (1-qAz) * (parseFloat(document.getElementById('rendObb').value)/100);
            mixStr = `<span style="background:var(--accent); color:white; padding:2px 6px; border-radius:6px; font-size:0.6rem;">${Math.round(qAz*100)}/${Math.round((1-qAz)*100)}</span>`;
            if (a === anni) aliquotaFinalePesata = (qAz * 0.26) + ((1-qAz) * 0.125);
        } else {
            tAnnuo = (parseFloat(document.getElementById('tassoAnnuo').value) || 0) / 100;
            aliquotaFinalePesata = (parseFloat(document.getElementById('tasse').value) || 0) / 100;
        }

        if (variazioni[a] !== undefined) currentVersMese = variazioni[a];

        let inizioCap = capLordo, vAnno = 0;
        for (let m = 1; m <= 12; m++) {
            capLordo = (capLordo * (1 + tAnnuo/12)) + currentVersMese;
            capMax = (capMax * (1 + (tAnnuo+0.04)/12)) + currentVersMese;
            capMin = (capMin * (1 + (tAnnuo-0.03)/12)) + currentVersMese;
            totVersato += currentVersMese; vAnno += currentVersMese;
            intSempliceAccum += (totVersato * (tAnnuo/12));
        }

        let resa = capLordo - inizioCap - vAnno;
        if(!annoSvolta && resa > vAnno) annoSvolta = a;
        
        labels.push("A"+a); dC.push(capLordo); dV.push(totVersato); dS.push(totVersato + intSempliceAccum); dMax.push(capMax); dMin.push(capMin);

        // DELTA CALCULATION
        let tdDeltaHTML = "";
        if (snapshot) {
            if (snapshot.data[a] !== undefined) {
                let diff = capLordo - snapshot.data[a];
                let diffStr = (diff >= 0 ? '+' : '') + Math.round(diff).toLocaleString('it-IT') + '€';
                let color = diff >= 0 ? 'var(--accent)' : '#ef4444';
                tdDeltaHTML = `<td style="color:${color}; font-weight:700;">${diffStr}</td>`;
            } else {
                tdDeltaHTML = `<td>-</td>`;
            }
        }

        // ROW: Colonna mix gestita inline in modo assoluto
        tbody.innerHTML += `<tr class="${annoSvolta === a ? 'svolta' : ''}">
            <td>Anno ${a}</td>
            ${usaLC ? `<td>${mixStr}</td>` : ''}
            <td>€${Math.round(totVersato).toLocaleString('it-IT')}</td>
            <td>€${Math.round(totVersato + intSempliceAccum).toLocaleString('it-IT')}</td>
            <td><strong>€${Math.round(capLordo).toLocaleString('it-IT')}</strong></td>
            ${snapshot ? tdDeltaHTML : ''}
            <td style="color:var(--accent)">+€${Math.round(resa).toLocaleString('it-IT')}</td>
        </tr>`;
    }

    // DELTA FINALE CALCULATION
    let tdDeltaFinalHTML = "";
    if (snapshot) {
        let diffF = capLordo - snapshot.finalValue;
        let diffStr = (diffF >= 0 ? '+' : '') + Math.round(diffF).toLocaleString('it-IT') + '€';
        let color = diffF >= 0 ? 'var(--accent)' : '#ef4444';
        tdDeltaFinalHTML = `<td style="color:${color}; font-weight:700;">${diffStr}</td>`;
    }

    // FOOTER: Il colspan e il delta si adattano in modo chirurgico
    document.getElementById('totaleTabella').innerHTML = `<tr>
        <td colspan="${usaLC ? 2 : 1}">RISULTATO FINALE</td>
        <td>€${Math.round(totVersato).toLocaleString('it-IT')}</td>
        <td>€${Math.round(totVersato + intSempliceAccum).toLocaleString('it-IT')}</td>
        <td><strong>€${Math.round(capLordo).toLocaleString('it-IT')}</strong></td>
        ${snapshot ? tdDeltaFinalHTML : ''}
        <td>-</td>
    </tr>`;

    lastCalculatedLordo = capLordo; 
    let plusvalenza = Math.max(0, capLordo - totVersato);
    let netto = usaNetto ? capLordo - (plusvalenza * aliquotaFinalePesata) : capLordo;
    let reale = netto / Math.pow(1 + tassoInfl, anni);

    document.getElementById("risultatoLordo").innerText = "€" + Math.round(capLordo).toLocaleString('it-IT');
    document.getElementById("risultatoNettoTasse").innerText = "€" + Math.round(netto).toLocaleString('it-IT');
    document.getElementById("risultatoNettoReale").innerText = "€" + Math.round(reale).toLocaleString('it-IT');
    document.getElementById("renditaFuoco").innerText = "€" + Math.round((reale * 0.04) / 12).toLocaleString('it-IT');
    
    const b = document.getElementById("puntoSvoltaBadge");
    b.innerText = annoSvolta ? `Punto di Svolta: Anno ${annoSvolta} ⭐` : "Punto di Svolta: --";
    b.style.background = annoSvolta ? 'var(--fire)' : '#94a3b8';

    if (snapshot) {
        let diff = capLordo - snapshot.finalValue;
        const deltaEl = document.getElementById('compareDelta');
        deltaEl.innerHTML = `Delta: <span style="color:${diff >= 0 ? 'var(--accent)' : '#ef4444'}">${diff >= 0 ? '+' : ''}${Math.round(diff).toLocaleString('it-IT')}€</span>`;
    }

    disegnaGrafico(labels, dC, dV, dS, dMax, dMin, usaStress);
}

function disegnaGrafico(l, c, v, s, mx, mn, stress) {
    const ctx = document.getElementById('graficoInteresse').getContext('2d');
    if (mioGrafico) mioGrafico.destroy();
    const isD = document.documentElement.getAttribute('data-theme') === 'dark';
    const textC = isD ? '#f8fafc' : '#0f172a';

    let datasets = [
        { label: 'Capitale Lordo', data: c, borderColor: '#10b981', borderWidth: 3, tension: 0.3, fill: false },
        { label: 'Totale Versato', data: v, borderColor: '#ef4444', borderWidth: 2, pointRadius: 0, fill: false },
        { label: 'Interesse Semplice', data: s, borderColor: '#3b82f6', borderWidth: 1.5, borderDash: [4,4], pointRadius: 0, fill: false }
    ];

    if (snapshot) {
        datasets.push({ label: 'Confronto', data: snapshot.data, borderColor: '#94a3b8', borderWidth: 2, borderDash: [10, 5], pointRadius: 0, fill: false });
    }

    if (stress) {
        datasets.push({ label: 'Stress Max (+4%)', data: mx, borderColor: 'transparent', backgroundColor: 'rgba(16,185,129,0.08)', fill: 0, pointRadius: 0 });
        datasets.push({ label: 'Stress Min (-3%)', data: mn, borderColor: 'transparent', backgroundColor: 'rgba(16,185,129,0.08)', fill: 0, pointRadius: 0 });
    }

    mioGrafico = new Chart(ctx, {
        type: 'line',
        data: { labels: l, datasets: datasets },
        options: { 
            responsive: true, maintainAspectRatio: false, 
            plugins: { legend: { labels: { color: textC, font: { weight: '600' } } } },
            scales: { 
                y: { ticks: { color: '#94a3b8' }, grid: { color: isD ? '#1e293b' : '#f1f5f9' } },
                x: { ticks: { color: '#94a3b8' } }
            }
        }
    });
}

document.getElementById('theme-checkbox').addEventListener('change', (e) => {
    document.documentElement.setAttribute('data-theme', e.target.checked ? 'dark' : 'light');
    document.getElementById('theme-label').innerText = e.target.checked ? "Dark Mode" : "Light Mode";
    triggerCalc();
});

window.onload = () => triggerCalc();