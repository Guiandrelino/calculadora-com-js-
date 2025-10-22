const n1El = document.getElementById('n1');
const n2El = document.getElementById('n2');
const somaEl = document.getElementById('soma');
const subEl = document.getElementById('sub');
const mulEl = document.getElementById('mul');
const divEl = document.getElementById('div');
const btn = document.getElementById('calcBtn');

function formatNumber(v){
  if (v === null || v === undefined || Number.isNaN(v)) return '';
  // remove trailing zeros for whole numbers
  return Number.isFinite(v) ? (Number.isInteger(v) ? String(v) : String(parseFloat(v.toFixed(8)).replace(/\.0+$/,''))) : '';
}

function calculate(){
  const a = parseFloat(n1El.value);
  const b = parseFloat(n2El.value);

  if (!isFinite(a) && n1El.value.trim() !== '') return alert('N1 inválido');
  if (!isFinite(b) && n2El.value.trim() !== '') return alert('N2 inválido');

  const soma = (isFinite(a) ? a : 0) + (isFinite(b) ? b : 0);
  const sub = (isFinite(a) ? a : 0) - (isFinite(b) ? b : 0);
  const mul = (isFinite(a) ? a : 0) * (isFinite(b) ? b : 0);
  let div = '';
  if (isFinite(b) && b === 0){
    div = '∞ (divisão por 0)';
  } else if (isFinite(a) || isFinite(b)){
    div = (isFinite(a) ? a : 0) / (isFinite(b) ? b : 1);
  }

  somaEl.value = formatNumber(soma);
  subEl.value = formatNumber(sub);
  mulEl.value = formatNumber(mul);
  divEl.value = typeof div === 'string' ? div : formatNumber(div);
}

// calculate on button click
btn.addEventListener('click', (e) => {
  e.preventDefault();
  calculate();
});

// also calculate on Enter when focused in inputs
[n1El, n2El].forEach(el => {
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') calculate();
  });
});
