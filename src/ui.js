function crearTableroUI(container, onClick) {
  container.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    const c = document.createElement("button");
    c.className = "cell";
    c.dataset.idx = String(i);
    c.addEventListener("click", () => onClick(i));
    container.appendChild(c);
  }
}

function actualizarCeldaUI(container, idx, valor) {
  const c = container.querySelector(`[data-idx="${idx}"]`);
  if (!c) return;
  
  if (!valor) {
    c.innerHTML = "";
    return;
  }

  // Si ya tiene el valor, no hacemos nada para no reiniciar animación innecesariamente
  if (c.textContent === valor) return;

  const span = document.createElement("span");
  span.className = valor.toLowerCase(); // "x" o "o"
  span.textContent = valor;
  c.innerHTML = "";
  c.appendChild(span);
}

function resaltarLinea(container, linea, tipo) {
  for (const i of linea) {
    const c = container.querySelector(`[data-idx="${i}"]`);
    if (c) c.classList.add(tipo);
  }
}

function limpiarResaltados(container) {
  container.querySelectorAll(".cell").forEach(c => {
    c.classList.remove("win");
    c.classList.remove("lose");
  });
}

