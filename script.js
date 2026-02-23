let currentMode = 'sim', mioGrafico;

function switchMode(mode) {
    currentMode = mode;
    document.getElementById('btnModeSim').classList.toggle('active', mode === 'sim');
    document.getElementById('btnModeGoal').classList.toggle('active', mode === 'goal');
    document.getElementById('goalSection').classList.toggle('hidden', mode === 'sim');
    document.getElementById('extraSections').classList.toggle('hidden', mode === 'goal');
    
    const vMese = document.getElementById('versamentoMensile');
    const tAnnuo = document.getElementById('tassoAnnuo');
    vMese.classList.remove('computed-field');
    tAnnuo.classList.remove('computed-field');
    vMese.readOnly = false;
    tAnnuo.readOnly = false;
}

function triggerCalc() {
    if (currentMode === 'goal') eseguiCalcoloInverso();
    else calcola();
}

function eseguiCalcoloInverso() {
    const target = parseFloat(document.getElementById('goalCifra').value) || 0;
    const anni = parseInt(document.getElementById('anni').value) || 1;
    const capIni = parseFloat(document.getElementById('capitaleIniziale').value) || 0;
    const type = document.getElementById('goalType').value;
    const n = anni * 12;

    const vMese = document.getElementById('versamentoMensile');
    const tAnnuo = document.getElementById('tassoAnnuo');

    if (type === 'rate') {
        vMese.classList.add('computed-field');
        vMese.readOnly = true; tAnnuo.readOnly = false;
        const r = (parseFloat(tAnnuo.value) || 0) / 100 / 12;
        let rate = (r === 0) ? (target - capIni) / n : (target - capIni * Math.pow(1 + r, n)) / ((Math.pow(1 + r, n) - 1) / r);
        vMese.value = Math.max(0, Math.round(rate));
    } else {
        tAnnuo.classList.add('computed-field');
        tAnnuo.readOnly = true; vMese.readOnly = false;
        const m = parseFloat(vMese.value) || 0;
        let tMin = -0.1, tMax = 2.0, tBest = 0.05;
        for(let i=0; i<60; i++) {
            let r = tBest / 12;
            let fv = capIni * Math.pow(1 + r, n) + (r === 0 ? m * n : m * ((Math.pow(1 + r, n) - 1) / r));
            if (fv < target) tMin = tBest; else tMax = tBest;
            tBest = (tMin + tMax) / 2;
        }
        tAnnuo.value = (tBest * 100).toFixed(2);
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
    document.getElementById('tassoAnnuo').disabled = document.getElementById('usaLifeCycle').checked;
}

function aggiungiVariazione() {
    const l = document.getElementById('listaVariazioni');
    const d = document.createElement('div');
    d.className = "var-row";
    d.innerHTML = `
        <input type="number" class="var-anno" placeholder="Anno">
        <input type="number" class="var-imp" placeholder="€/m">
        <button onclick="this.parentElement.remove()" style="border:none; background:none; cursor:pointer; color:#ef4444; font-weight:bold; font-size:1.1rem;">✕</button>
    `;
    l.appendChild(d);
}

function calcola() {
    const capIni = parseFloat(document.getElementById('capitaleIniziale').value) || 0;
    const versIni = parseFloat(document.getElementById('versamentoMensile').value) || 0;
    const anni = parseInt(document.getElementById('anni').value) || 1;
    const tassoTasse = (parseFloat(document.getElementById('tasse').value) || 0) / 100;
    const tassoInfl = (parseFloat(document.getElementById('inflazione').value) || 0) / 100;
    const usaLC = document.getElementById('usaLifeCycle').checked && currentMode === 'sim';
    const usaStress = document.getElementById('usaStressTest').checked;
    const usaNetto = document.getElementById('usaTasse').checked;

    let variazioni = {};
    document.querySelectorAll('.var-row').forEach(row => {
        let a = parseInt(row.querySelector('.var-anno').value);
        let imp = parseFloat(row.querySelector('.var-imp').value);
        if (!isNaN(a) && !isNaN(imp)) variazioni[a] = imp;
    });

    const tbody = document.querySelector("#tabellaRisultati tbody");
    const thead = document.querySelector("#tabellaRisultati thead");
    thead.innerHTML = `<tr><th>Anno</th>${usaLC ? '<th>Asset Mix</th>' : ''}<th>Versato</th><th>Int. Semplice</th><th>Cap. Lordo</th><th>Resa</th></tr>`;
    tbody.innerHTML = "";

    let capLordo = capIni, totVersato = capIni, intSempliceAccum = 0;
    let capMax = capIni, capMin = capIni;
    let labels = ["T0"], dC = [capIni], dV = [capIni], dS = [capIni], dMax = [capIni], dMin = [capIni], annoSvolta = null;

    for (let a = 1; a <= anni; a++) {
        let tAnnuo, mixStr;
        if (usaLC) {
            let sAz = (parseFloat(document.getElementById('startAz').value) || 0)/100;
            let eAz = (parseFloat(document.getElementById('endAz').value) || 0)/100;
            let qAz = sAz + (eAz - sAz) * ((a-1)/(anni-1||1));
            tAnnuo = qAz * (parseFloat(document.getElementById('rendAzioni').value)/100) + (1-qAz) * (parseFloat(document.getElementById('rendObb').value)/100);
            mixStr = `<span class="asset-pill">${Math.round(qAz*100)}/${Math.round((1-qAz)*100)}</span>`;
        } else {
            tAnnuo = (parseFloat(document.getElementById('tassoAnnuo').value) || 0) / 100;
        }

        let vMese = variazioni[a] !== undefined ? variazioni[a] : versIni;
        let inizioCap = capLordo, vAnno = 0;

        for (let m = 1; m <= 12; m++) {
            capLordo = (capLordo * (1 + tAnnuo/12)) + vMese;
            capMax = (capMax * (1 + (tAnnuo+0.04)/12)) + vMese;
            capMin = (capMin * (1 + (tAnnuo-0.03)/12)) + vMese;
            totVersato += vMese; vAnno += vMese;
            intSempliceAccum += (totVersato * (tAnnuo/12));
        }

        let resa = capLordo - inizioCap - vAnno;
        if(!annoSvolta && resa > vAnno) annoSvolta = a;
        
        labels.push("A"+a); dC.push(capLordo); dV.push(totVersato); dS.push(totVersato + intSempliceAccum); dMax.push(capMax); dMin.push(capMin);

        tbody.innerHTML += `<tr class="${annoSvolta === a ? 'svolta' : ''}">
            <td>Anno ${a}</td>
            ${usaLC ? `<td>${mixStr}</td>` : ''}
            <td>€${Math.round(totVersato).toLocaleString()}</td>
            <td>€${Math.round(totVersato + intSempliceAccum).toLocaleString()}</td>
            <td><strong>€${Math.round(capLordo).toLocaleString()}</strong></td>
            <td style="color:var(--accent)">+€${Math.round(resa).toLocaleString()}</td>
        </tr>`;
    }

    document.getElementById('totaleTabella').innerHTML = `<tr><td colspan="${usaLC?2:1}">FINALE</td><td>€${Math.round(totVersato).toLocaleString()}</td><td>€${Math.round(totVersato+intSempliceAccum).toLocaleString()}</td><td>€${Math.round(capLordo).toLocaleString()}</td><td>-</td></tr>`;

    let netto = usaNetto ? capLordo - ((capLordo - totVersato) * tassoTasse) : capLordo;
    let reale = netto / Math.pow(1 + tassoInfl, anni);

    document.getElementById("risultatoLordo").innerText = "€" + Math.round(capLordo).toLocaleString();
    document.getElementById("risultatoNettoTasse").innerText = "€" + Math.round(netto).toLocaleString();
    document.getElementById("risultatoNettoReale").innerText = "€" + Math.round(reale).toLocaleString();
    document.getElementById("renditaFuoco").innerText = "€" + Math.round((reale * 0.04) / 12).toLocaleString();
    
    const b = document.getElementById("puntoSvoltaBadge");
    b.innerText = annoSvolta ? `Punto di Svolta: Anno ${annoSvolta} ⭐` : "Punto di Svolta: --";
    b.style.background = annoSvolta ? 'var(--fire)' : '#94a3b8';

    disegnaGrafico(labels, dC, dV, dS, dMax, dMin, usaStress, annoSvolta);
}

function disegnaGrafico(l, c, v, s, mx, mn, stress, svoltaX) {
    const ctx = document.getElementById('graficoInteresse').getContext('2d');
    if (mioGrafico) mioGrafico.destroy();
    const isD = document.documentElement.getAttribute('data-theme') === 'dark';
    const textC = isD ? '#f8fafc' : '#0f172a';

    const plugins = {
        legend: { position: 'top', labels: { color: textC, font: { weight: '600' }, usePointStyle: true } },
        tooltip: { 
            backgroundColor: isD ? '#1e293b' : '#ffffff', titleColor: textC, bodyColor: isD ? '#cbd5e1' : '#475569',
            borderColor: isD ? '#334155' : '#e2e8f0', borderWidth: 1, padding: 12, usePointStyle: true
        }
    };

    const svoltaPlugin = {
        id: 'svoltaLine',
        afterDraw: (chart) => {
            if (svoltaX && chart.scales.x) {
                const xPos = chart.scales.x.getPixelForValue(l[svoltaX]);
                const ctx = chart.ctx;
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(xPos, chart.chartArea.top);
                ctx.lineTo(xPos, chart.chartArea.bottom);
                ctx.lineWidth = 2;
                ctx.setLineDash([5, 5]);
                ctx.strokeStyle = '#f59e0b';
                ctx.stroke();
                ctx.restore();
            }
        }
    };

    mioGrafico = new Chart(ctx, {
        type: 'line',
        data: {
            labels: l,
            datasets: [
                { label: 'Capitale Lordo', data: c, borderColor: '#10b981', borderWidth: 3, tension: 0.3, fill: false },
                { label: 'Interesse Semplice', data: s, borderColor: '#3b82f6', borderWidth: 2, borderDash: [4,4], pointRadius: 0, fill: false },
                { label: 'Totale Versato', data: v, borderColor: isD ? '#64748b' : '#94a3b8', borderWidth: 2, pointRadius: 0, fill: false },
                ...(stress ? [
                    { label: 'Stress Max (+4%)', data: mx, borderColor: 'transparent', backgroundColor: 'rgba(16,185,129,0.08)', fill: 0, pointRadius:0 },
                    { label: 'Stress Min (-3%)', data: mn, borderColor: 'transparent', backgroundColor: 'rgba(16,185,129,0.08)', fill: 0, pointRadius:0 }
                ] : [])
            ]
        },
        options: { 
            responsive: true, maintainAspectRatio: false, 
            interaction: { mode: 'index', intersect: false },
            plugins: plugins,
            scales: { 
                y: { ticks: { color: '#94a3b8' }, grid: { color: isD ? '#1e293b' : '#f1f5f9' } },
                x: { ticks: { color: '#94a3b8' }, grid: { display: false } }
            }
        },
        plugins: [svoltaPlugin]
    });
}

document.getElementById('theme-checkbox').addEventListener('change', (e) => {
    document.documentElement.setAttribute('data-theme', e.target.checked ? 'dark' : 'light');
    document.getElementById('theme-label').innerText = e.target.checked ? "Dark Mode" : "Light Mode";
    triggerCalc();
});

window.onload = () => {
    switchMode('sim');
    triggerCalc(); // Caricamento iniziale
};