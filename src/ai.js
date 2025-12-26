function elegirJugada(estado, nivel) {
  if (nivel === "facil") return jugadaFacil(estado);
  if (nivel === "medio") return jugadaMedia(estado);
  return jugadaDificil(estado);
}

function jugadaFacil(estado) {
  const libres = posicionesLibres(estado.tablero);
  return libres[Math.floor(Math.random() * libres.length)];
}

function jugadaMedia(estado) {
  const t = estado.tablero;
  for (const i of posicionesLibres(t)) {
    const sim = t.slice();
    sim[i] = "O";
    if (victoriaDe(sim, "O")) return i;
  }
  for (const i of posicionesLibres(t)) {
    const sim = t.slice();
    sim[i] = "X";
    if (victoriaDe(sim, "X")) return i;
  }
  if (!t[4]) return 4;
  const corners = [0, 2, 6, 8].filter(i => !t[i]);
  if (corners.length) return corners[Math.floor(Math.random() * corners.length)];
  const libres = posicionesLibres(t);
  return libres[Math.floor(Math.random() * libres.length)];
}

function victoriaDe(tablero, p) {
  for (const l of lineasGanadoras()) {
    const [a, b, c] = l;
    if (tablero[a] === p && tablero[b] === p && tablero[c] === p) return true;
  }
  return false;
}

function jugadaDificil(estado) {
  const t = estado.tablero;
  let mejor = -Infinity;
  let mejorIdx = posicionesLibres(t)[0];
  for (const i of posicionesLibres(t)) {
    const sim = t.slice();
    sim[i] = "O";
    const puntaje = minimax(sim, false, -Infinity, Infinity);
    if (puntaje > mejor) {
      mejor = puntaje;
      mejorIdx = i;
    }
  }
  return mejorIdx;
}

function minimax(tablero, esTurnoIA, alfa, beta) {
  const g = ganador({ tablero });
  if (g === "O") return 1;
  if (g === "X") return -1;
  if (posicionesLibres(tablero).length === 0) return 0;
  if (esTurnoIA) {
    let mejor = -Infinity;
    for (const i of posicionesLibres(tablero)) {
      const sim = tablero.slice();
      sim[i] = "O";
      const puntaje = minimax(sim, false, alfa, beta);
      mejor = Math.max(mejor, puntaje);
      alfa = Math.max(alfa, puntaje);
      if (beta <= alfa) break;
    }
    return mejor;
  } else {
    let peor = Infinity;
    for (const i of posicionesLibres(tablero)) {
      const sim = tablero.slice();
      sim[i] = "X";
      const puntaje = minimax(sim, true, alfa, beta);
      peor = Math.min(peor, puntaje);
      beta = Math.min(beta, puntaje);
      if (beta <= alfa) break;
    }
    return peor;
  }
}

