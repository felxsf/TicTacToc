# TicTacToc - Mundos Pixelados

Un juego de Tic Tac Toe (Tres en Raya) moderno y adaptable, desarrollado con tecnologías web puras (HTML, CSS, JS). Cuenta con múltiples niveles de dificultad, temas visuales inmersivos ("Mundos") y un diseño completamente responsive.

**Created by Ferasf**

## Características

### 🎮 Modos de Juego
- **Fácil:** IA aleatoria, ideal para niños o partidas rápidas sin estrés.
- **Medio:** IA con lógica básica de bloqueo y victoria inmediata.
- **Difícil:** IA imbatible basada en el algoritmo Minimax con poda alfa-beta.

### 🌍 Mundos (Temas Visuales)
El juego cuenta con un sistema de temas dinámico que cambia completamente la apariencia, colores y fondos:
- **Moderno:** Diseño limpio, minimalista y oscuro (Dark Mode).
- **Neon City:** Estilo Cyberpunk con brillos de neón y contrastes altos.
- **Retro Bit:** Inspirado en la Gameboy clásica (verdes monocromáticos).
- **Galaxy 8-Bit:** Fondo espacial pixelado con colores cósmicos.
- **Pixel Forest:** Tonos naturales y orgánicos en estilo 4-bit.
- **Candy World:** Colores pastel y patrones dulces.

### 📱 Diseño Adaptable (Responsive)
- Interfaz "Mobile First" optimizada para pantallas táctiles.
- Controles ergonómicos y tableros que aprovechan el espacio disponible.
- Animaciones fluidas de entrada y victoria.

## Instalación y Uso

1. **Clonar o descargar** el repositorio.
2. Abrir el archivo `index.html` en cualquier navegador web moderno.
   - *Nota:* No requiere instalación de dependencias ni servidores backend.

## Estructura del Proyecto

- `index.html`: Estructura semántica y contenedor de la aplicación.
- `styles.css`: Todos los estilos, variables CSS para los temas y media queries.
- `src/`:
  - `main.js`: Punto de entrada, manejo del DOM y selección de temas.
  - `game.js`: Lógica central del juego (reglas, turnos, detección de victoria).
  - `ai.js`: Implementación de la inteligencia artificial.
  - `ui.js`: Funciones de renderizado y animaciones.

## Tecnologías

- **HTML5:** Semántico y accesible.
- **CSS3:** Variables (Custom Properties), Flexbox, Grid, Animaciones y Gradientes CSS para los fondos (sin imágenes externas).
- **JavaScript (ES6+):** Lógica modular y limpia.

---
*Este proyecto es una demostración de capacidades de desarrollo web frontend, diseño UI/UX y algoritmos de juegos.*
