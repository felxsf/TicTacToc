const nivelEl = document.getElementById("nivel");
const temaEl = document.getElementById("tema");
const tableroEl = document.getElementById("tablero");
const mensajeEl = document.getElementById("mensaje");
const nuevoBtn = document.getElementById("nuevo");
const victoriasEl = document.getElementById("victorias");
const empatesEl = document.getElementById("empates");
const derrotasEl = document.getElementById("derrotas");

// Inicializar tema
const temaGuardado = localStorage.getItem("ttt-tema") || "moderno";
temaEl.value = temaGuardado;
aplicarTema(temaGuardado);

temaEl.addEventListener("change", (e) => {
  const t = e.target.value;
  aplicarTema(t);
  localStorage.setItem("ttt-tema", t);
});

function aplicarTema(t) {
  document.body.className = "";
  if (t !== "moderno") {
    document.body.classList.add(`theme-${t}`);
  }
}

let estado = nuevoEstado();
let bloqueado = false;
let marcador = { v: 0, e: 0, d: 0 };

crearTableroUI(tableroEl, onCeldaClick);
actualizarMensaje("Tu turno (X)");

nuevoBtn.addEventListener("click", reiniciar);
nivelEl.addEventListener("change", () => {});

function onCeldaClick(idx) {
  if (bloqueado) return;
  if (!turnoHumano(estado)) return;
  if (estado.tablero[idx]) return;
  estado = aplicarJugada(estado, idx);
  actualizarCeldaUI(tableroEl, idx, estado.tablero[idx]);
  verificarFinYOContinuar();
}

function verificarFinYOContinuar() {
  const fin = estadoFinal(estado);
  if (fin) {
    finalizarPartida(fin);
    return;
  }
  if (turnoIA(estado)) {
    bloqueado = true;
    setTimeout(() => {
      const jugada = elegirJugada(estado, nivelEl.value);
      estado = aplicarJugada(estado, jugada);
      actualizarCeldaUI(tableroEl, jugada, estado.tablero[jugada]);
      const fin2 = estadoFinal(estado);
      if (fin2) {
        finalizarPartida(fin2);
      } else {
        bloqueado = false;
        actualizarMensaje("Tu turno (X)");
      }
    }, 200);
  } else {
    actualizarMensaje("Tu turno (X)");
  }
}

function finalizarPartida(fin) {
  bloqueado = true;
  const g = ganador(estado);
  limpiarResaltados(tableroEl);
  if (g) {
    const linea = lineasGanadoras().find(l => l.every(i => estado.tablero[i] === g));
    if (linea) resaltarLinea(tableroEl, linea, g === "X" ? "win" : "lose");
  }
  if (g === "X") {
    marcador.v++;
    actualizarMensaje("¡Ganaste!");
  } else if (g === "O") {
    marcador.d++;
    actualizarMensaje("Perdiste");
  } else {
    marcador.e++;
    actualizarMensaje("Empate");
  }
  victoriasEl.textContent = String(marcador.v);
  empatesEl.textContent = String(marcador.e);
  derrotasEl.textContent = String(marcador.d);
  nuevoBtn.disabled = false;
}

function reiniciar() {
  estado = nuevoEstado();
  bloqueado = false;
  limpiarResaltados(tableroEl);
  for (let i = 0; i < 9; i++) actualizarCeldaUI(tableroEl, i, "");
  actualizarMensaje("Tu turno (X)");
  nuevoBtn.disabled = true;
  if (turnoIA(estado)) moverIAInicial();
}

function moverIAInicial() {
  bloqueado = true;
  setTimeout(() => {
    const jugada = elegirJugada(estado, nivelEl.value);
    estado = aplicarJugada(estado, jugada);
    actualizarCeldaUI(tableroEl, jugada, estado.tablero[jugada]);
    bloqueado = false;
    actualizarMensaje("Tu turno (X)");
  }, 200);
}

function actualizarMensaje(texto) {
  mensajeEl.textContent = texto;
}

