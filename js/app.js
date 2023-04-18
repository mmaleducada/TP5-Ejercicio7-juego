const opciones = ['piedra', 'papel', 'tijera'];

const btnPiedra = document.getElementById('piedra');
const btnPapel = document.getElementById('papel');
const btnTijera = document.getElementById('tijera');

const jugadaPc = document.getElementById('jugada-pc');
const resultadoElemento = document.getElementById('resultado');

const btnJugarNuevo = document.getElementById('jugar-nuevo');
const opcionesJuego = [btnPiedra, btnPapel, btnTijera];

function obtenerJugadaAleatoria() {
    const indice = Math.floor(Math.random() * opciones.length);
    return opciones[indice];
}

function mostrarJugadaPc() {
    const jugada = obtenerJugadaAleatoria();
    jugadaPc.textContent = jugada;
    return jugada;
}

function determinarGanador(jugadaUsuario, jugadaPc) {
    if (jugadaUsuario === 'piedra') {
        switch (jugadaPc) {
            case 'piedra':
                return 'Empate';
            case 'papel':
                return 'Perdiste';
            case 'tijera':
                return 'Ganaste';
        }
    } else if (jugadaUsuario === 'papel') {
        switch (jugadaPc) {
            case 'piedra':
                return 'Ganaste';
            case 'papel':
                return 'Empate';
            case 'tijera':
                return 'Perdiste';
        }
    } else if (jugadaUsuario === 'tijera') {
        switch (jugadaPc) {
            case 'piedra':
                return 'Perdiste';
            case 'papel':
                return 'Ganaste';
            case 'tijera':
                return 'Empate';
        }
    }
}

function mostrarResultado(resultado) {
    resultadoElemento.textContent = resultado;
}

function deshabilitarOpciones() {
    opcionesJuego.forEach((opcion) => {
        opcion.disabled = true;
    });
}

function habilitarJugarNuevo() {
    btnJugarNuevo.disabled = false;
}

function reiniciarJuego() {
    opcionesJuego.forEach((opcion) => {
        opcion.disabled = false;
    });
    jugadaPc.textContent = '-';
    resultadoElemento.textContent = '-';
    btnJugarNuevo.disabled = true;
}

function jugar(jugadaUsuario) {
    const jugadaPc = mostrarJugadaPc();
    const resultado = determinarGanador(jugadaUsuario, jugadaPc);
    mostrarResultado(resultado);
    deshabilitarOpciones();
    habilitarJugarNuevo();
}

opcionesJuego.forEach((opcion) => {
    opcion.addEventListener('click', () => {
        jugar(opcion.id);
    });
});

btnJugarNuevo.addEventListener('click', () => {
    reiniciarJuego();
});
