function nuevoEstado() {
  return { tablero: Array(9).fill(""), turno: "X" };
}

function aplicarJugada(estado, idx) {
  const t = estado.tablero.slice();
  t[idx] = estado.turno;
  return { tablero: t, turno: estado.turno === "X" ? "O" : "X" };
}

function turnoHumano(estado) {
  return estado.turno === "X";
}

function turnoIA(estado) {
  return estado.turno === "O";
}

function estadoFinal(estado) {
  const g = ganador(estado);
  if (g) return true;
  if (estado.tablero.every(x => x)) return true;
  return false;
}

function ganador(estado) {
  for (const l of lineasGanadoras()) {
    const [a, b, c] = l;
    const v = estado.tablero[a];
    if (v && v === estado.tablero[b] && v === estado.tablero[c]) return v;
  }
  return "";
}

function lineasGanadoras() {
  return [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
}

function posicionesLibres(tablero) {
  const libres = [];
  for (let i = 0; i < 9; i++) if (!tablero[i]) libres.push(i);
  return libres;
}

