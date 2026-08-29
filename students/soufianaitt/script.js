// ---------------------------------------------------------------------
// Footer year
// ---------------------------------------------------------------------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------------------------------------------------------------------
// Terminal typing effect (signature element)
// Types "whoami" then reveals a mock profile "output" line by line.
// ---------------------------------------------------------------------
const command = 'whoami';
const cmdEl = document.getElementById('typed-cmd');
const cursorEl = document.getElementById('cmd-cursor');
const outputEl = document.getElementById('typed-output');

const profileLines = [
  { k: 'name',    v: 'soufiane' },
  { k: 'track',   v: 'Learning C#' },
  { k: 'github',  v: '@soufianeaitt' },
];

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function typeCommand(text, el, speed, done){
  if (reduceMotion){
    el.textContent = text;
    done();
    return;
  }
  let i = 0;
  const timer = setInterval(() => {
    el.textContent = text.slice(0, i + 1);
    i++;
    if (i === text.length){
      clearInterval(timer);
      done();
    }
  }, speed);
}

function revealOutput(lines){
  cursorEl.style.display = 'none';

  if (reduceMotion){
    lines.forEach(line => appendLine(line));
    return;
  }

  let idx = 0;
  function next(){
    if (idx >= lines.length) return;
    appendLine(lines[idx]);
    idx++;
    setTimeout(next, 260);
  }
  setTimeout(next, 200);
}

function appendLine(line){
  const p = document.createElement('p');
  p.innerHTML = `<span class="k">${line.k}:</span> <span class="v">${line.v}</span>`;
  outputEl.appendChild(p);
}

typeCommand(command, cmdEl, 90, () => {
  revealOutput(profileLines);
});
