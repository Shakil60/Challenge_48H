// ══════════════════════════════════════
//  DATA
// ══════════════════════════════════════
const SUSPECTS = [
  {
    id:'#SUS-001', nom:'Volkov, Dmitri', prenom:'Dmitri', age:38, nationalite:'Russe', sexe:'Homme',
    profession:'Consultant IT', cicatrice:true,
    tags:['Russe','38 ans','Homme','Consultant IT','Cicatrice front'],
    bg:'#B8B2AA', c1:'#8C8680', c2:'#7C7672',
    alibi:'Affirme être dans sa chambre d\'hôtel à l\'heure du crime.',
    guilty: true,
    explanation:'Dmitri Volkov était l\'ex-associé commercial de la victime. De nationalité russe, homme, entre 30 et 40 ans, porteur d\'une cicatrice sur le front, sans alibi solide — tous les indices le désignent. Il avait accès à l\'appartement et un mobile clair : récupérer les données volées.'
  },
  {
    id:'#SUS-002', nom:'Bernard, Claire', prenom:'Claire', age:45, nationalite:'Française', sexe:'Femme',
    profession:'Avocate', cicatrice:false,
    tags:['Française','45 ans','Femme','Avocate'],
    bg:'#C0BAB0', c1:'#9E9890', c2:'#8E887E',
    alibi:'Dîner confirmé avec trois collègues.',
    guilty:false
  },
  {
    id:'#SUS-003', nom:'Karim, Farid', prenom:'Farid', age:29, nationalite:'Algérien', sexe:'Homme',
    profession:'Livreur', cicatrice:false,
    tags:['Algérien','29 ans','Homme','Livreur'],
    bg:'#BAB4AC', c1:'#8A847C', c2:'#7A746C',
    alibi:'Tournée de livraison. GPS non activé.',
    guilty:false
  },
  {
    id:'#SUS-004', nom:'Lehmann, Petra', prenom:'Petra', age:52, nationalite:'Allemande', sexe:'Femme',
    profession:'Directrice financière', cicatrice:false,
    tags:['Allemande','52 ans','Femme','Dir. Financière'],
    bg:'#C8C4BC', c1:'#A8A49A', c2:'#989490',
    alibi:'Conférence à Berlin. Confirmé par 4 témoins.',
    guilty:false
  },
  {
    id:'#SUS-005', nom:'Nguyen, Bao', prenom:'Bao', age:34, nationalite:'Vietnamien', sexe:'Homme',
    profession:'Développeur', cicatrice:false,
    tags:['Vietnamien','34 ans','Homme','Développeur'],
    bg:'#B2AEA6', c1:'#8C8680', c2:'#7C7872',
    alibi:'Chez lui, pas de témoin.',
    guilty:false
  },
  {
    id:'#SUS-006', nom:'Moretti, Sofia', prenom:'Sofia', age:41, nationalite:'Italienne', sexe:'Femme',
    profession:'Journaliste', cicatrice:false,
    tags:['Italienne','41 ans','Femme','Journaliste'],
    bg:'#BEB8AE', c1:'#9A9490', c2:'#8A8480',
    alibi:'Reportage à distance. Mail envoyé à 22h50.',
    guilty:false
  }
];
 
const CLUES = [
  {
    id:0, text:'Le suspect est de <strong>nationalité russe</strong> selon les relevés de contrôle aux frontières.',
    icon:'🛂', eliminates: s => s.nationalite !== 'Russe',
    label:'Nationalité confirmée'
  },
  {
    id:1, text:'Des empreintes partielles au sol indiquent que l\'auteur est un <strong>homme</strong>.',
    icon:'👣', eliminates: s => s.sexe !== 'Homme',
    label:'Empreintes — genre masculin'
  },
  {
    id:2, text:'La caméra de l\'immeuble a capturé une silhouette. L\'individu a <strong>entre 30 et 45 ans</strong> selon l\'analyse morphologique.',
    icon:'📷', eliminates: s => s.age < 30 || s.age > 45,
    label:'Analyse morphologique'
  },
  {
    id:3, text:'Un témoin a aperçu l\'individu dans le couloir. Il portait une <strong>cicatrice visible sur le front</strong>.',
    icon:'👁', eliminates: s => !s.cicatrice,
    label:'Description témoin'
  },
  {
    id:4, text:'La victime avait un rendez-vous noté « <strong>ex-associé</strong> » dans son agenda pour ce soir-là.',
    icon:'📅', eliminates: s => s.profession !== 'Consultant IT',
    label:'Agenda de la victime'
  }
];
 
// ══════════════════════════════════════
//  STATE
// ══════════════════════════════════════
let state = {
  eliminated: [],
  unlockedClues: [],
  foundZones: []
};
 
// ══════════════════════════════════════
//  RENDER
// ══════════════════════════════════════
function renderSuspects() {
  const grid = document.getElementById('suspects-grid');
  const remaining = SUSPECTS.filter(s => !state.eliminated.includes(s.id));
  grid.innerHTML = SUSPECTS.map(s => {
    const elim = state.eliminated.includes(s.id);
    const isLast = remaining.length === 1 && !elim;
    return `
    <div class="s-card ${elim?'eliminated':''} ${isLast?'suspect-final':''}" id="card-${s.id.replace('#','')}">
      <div class="sc-photo" style="background:${s.bg};">
        <svg width="170" height="200" viewBox="0 0 170 200" fill="none">
          <circle cx="85" cy="72" r="37" fill="${s.c1}"/>
          <ellipse cx="85" cy="178" rx="64" ry="52" fill="${s.c2}"/>
          ${s.cicatrice ? '<line x1="72" y1="58" x2="82" y2="68" stroke="rgba(0,0,0,0.3)" stroke-width="2.5" stroke-linecap="round"/>' : ''}
        </svg>
        <div class="sc-photo-id">${s.id}</div>
        <div class="sc-ribbon rb-${s.guilty?'red':'amber'}">${s.guilty?'Suspect':'Observé'}</div>
      </div>
      <div class="sc-info">
        <div class="sc-name">${s.nom}</div>
        <div class="sc-role">${s.profession} · ${s.age} ans</div>
        <div class="sc-tags">${s.tags.map(t=>`<span class="sc-tag ${t.includes('cicatrice')||t.includes('Cicatrice')?'tag-scar':'tag-nat'}">${t}</span>`).join('')}</div>
        ${!elim ? `<button class="sc-btn ${isLast?'confirmer':''}" onclick="clickSuspect('${s.id}')">
          ${isLast ? '⚑ Désigner le coupable' : 'Innocenter'}
        </button>` : ''}
      </div>
    </div>`;
  }).join('');
}
 
function renderClues() {
  const list = document.getElementById('clues-list');
  list.innerHTML = CLUES.map((c,i) => {
    const unlocked = state.unlockedClues.includes(c.id);
    const used = state.eliminated.some(id => {
      const s = SUSPECTS.find(x=>x.id===id);
      return s && c.eliminates(s);
    });
    return `
    <div class="clue-item ${unlocked?'unlocked':''} ${used&&unlocked?'used':''}" id="clue-${c.id}">
      ${!unlocked ? `<div class="clue-unlock-hint">🔍 Indice non découvert</div>` : ''}
      <span class="clue-num">INDICE ${String(i+1).padStart(2,'0')}</span>
      ${c.icon} ${unlocked ? c.text : ''}
    </div>`;
  }).join('');
}
 
function updateProgress() {
  const total = CLUES.length;
  const found = state.unlockedClues.length;
  const remaining = SUSPECTS.filter(s => !state.eliminated.includes(s.id)).length;
  const pct = Math.round((found/total)*60 + ((SUSPECTS.length - remaining)/(SUSPECTS.length-1))*40);
  document.getElementById('pb-fill').style.width = Math.min(pct,100) + '%';
  document.getElementById('pb-clues').textContent = `${found} / ${total} indices`;
  document.getElementById('pb-suspects').textContent = `${remaining} suspect${remaining>1?'s':''}`;
}
 
// ══════════════════════════════════════
//  ACTIONS
// ══════════════════════════════════════
function revealClue(id) {
  if (state.unlockedClues.includes(id)) return;
  if (state.foundZones.includes(id)) return;
 
  state.unlockedClues.push(id);
  state.foundZones.push(id);
 
  const hz = document.getElementById('hz-' + id);
  if (hz) { hz.classList.add('found'); hz.innerHTML = '✓'; hz.onclick = null; }
 
  const clue = CLUES[id];
  showToast(`Indice découvert : ${clue.label}`);
 
  renderClues();
  updateProgress();
  checkAutoEliminate(id);
}
 
function checkAutoEliminate(clueId) {
  const clue = CLUES[clueId];
  const toElim = SUSPECTS.filter(s => !state.eliminated.includes(s.id) && clue.eliminates(s));
  if (toElim.length > 0) {
    setTimeout(() => {
      showToast(`Cet indice élimine ${toElim.length} suspect(s) — vérifiez les fiches !`);
    }, 1200);
  }
}
 
function clickSuspect(id) {
  const s = SUSPECTS.find(x => x.id === id);
  const remaining = SUSPECTS.filter(x => !state.eliminated.includes(x.id));
 
  if (remaining.length === 1) {
    // Accusation finale
    showModal('⚑', 'Désigner le coupable', `Vous êtes sur le point de désigner <strong>${s.nom}</strong> comme coupable de l'affaire Mironova. Cette action est irréversible.`,
      [{label:'Annuler', action:'closeModal()'},{label:'Confirmer l\'accusation', cls:'danger', action:`accuseFinal('${id}')`}]);
    return;
  }
 
  // Vérifie qu'un indice le contredit
  const contradicts = CLUES.filter(c => state.unlockedClues.includes(c.id) && c.eliminates(s));
  if (contradicts.length === 0 && state.unlockedClues.length > 0) {
    showModal('⚠️', 'Attention', `Aucun indice découvert ne contredit encore <strong>${s.nom}</strong>. Cherchez d'autres preuves avant d'innocenter.`,
      [{label:'Continuer l\'enquête', action:'closeModal()'}]);
    return;
  }
 
  const reasons = contradicts.map(c => `• ${c.label}`).join('<br>');
  showModal('🔎', `Innocenter ${s.nom} ?`, `Les éléments suivants contredisent sa culpabilité :<br><br>${reasons || 'Vous prenez une décision sans preuve.'}`,
    [{label:'Annuler', action:'closeModal()'},{label:'Innocenter', cls:'danger', action:`innocenter('${id}')`}]);
}
 
function innocenter(id) {
  closeModal();
  state.eliminated.push(id);
  const s = SUSPECTS.find(x => x.id === id);
  showToast(`${s.nom} a été innocenté`);
  renderSuspects();
  renderClues();
  updateProgress();
 
  const remaining = SUSPECTS.filter(x => !state.eliminated.includes(x.id));
  if (remaining.length === 1) {
    setTimeout(() => showToast('⚑ Un seul suspect restant — désignez le coupable !'), 1200);
  }
}
 
function accuseFinal(id) {
  closeModal();
  const s = SUSPECTS.find(x => x.id === id);
  if (s.guilty) {
    setTimeout(() => showVictory(s), 400);
  } else {
    showModal('✗', 'Mauvaise accusation', `<strong>${s.nom}</strong> n'est pas le coupable. Reprenez l'enquête depuis le début.`,
      [{label:'Recommencer', action:'restartGame()'}]);
  }
}
 
function showVictory(s) {
  document.getElementById('v-name').textContent = s.nom.toUpperCase();
  document.getElementById('v-role').textContent = s.profession + ' · ' + s.age + ' ans · ' + s.nationalite;
  document.getElementById('v-explanation').textContent = s.explanation;
  const ph = document.getElementById('v-photo');
  ph.style.background = s.bg;
  ph.innerHTML = `<svg width="80" height="107" viewBox="0 0 80 107" fill="none">
    <circle cx="40" cy="36" r="20" fill="${s.c1}"/>
    <ellipse cx="40" cy="95" rx="34" ry="28" fill="${s.c2}"/>
    <line x1="32" y1="28" x2="39" y2="35" stroke="rgba(0,0,0,0.3)" stroke-width="2" stroke-linecap="round"/>
  </svg>`;
  setScreen('screen-victory');
}
 
// ══════════════════════════════════════
//  UTILS
// ══════════════════════════════════════
function setScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
}
 
function startGame() {
  state = {eliminated:[], unlockedClues:[], foundZones:[]};
  renderSuspects();
  renderClues();
  updateProgress();
  setScreen('screen-game');
}
 
function restartGame() {
  closeModal();
  startGame();
}
 
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}
 
let modalAction = null;
function showModal(icon, title, text, btns) {
  document.getElementById('modal-icon').innerHTML = icon;
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-text').innerHTML = text;
  document.getElementById('modal-btns').innerHTML = btns.map(b =>
    `<button class="modal-btn ${b.cls||''}" onclick="${b.action}">${b.label}</button>`
  ).join('');
  document.getElementById('modal-overlay').classList.add('show');
}
 
function closeModal(e) {
  if (!e || e.target === document.getElementById('modal-overlay')) {
    document.getElementById('modal-overlay').classList.remove('show');
  }
}
 
function showHelp() {
  showModal('💡','Comment jouer',
    '① Cliquez sur les <span style="color:var(--red)">● 🔍</span> dans les documents pour révéler des indices cachés.<br><br>② Lisez chaque indice — il contredit les caractéristiques de certains suspects.<br><br>③ Cliquez <strong>Innocenter</strong> sur les suspects contredits par les preuves.<br><br>④ Quand il ne reste plus qu\'un suspect — désignez le coupable !',
    [{label:'Compris', action:'closeModal()'}]);
}