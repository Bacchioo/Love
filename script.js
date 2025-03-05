// Data do início do namoro (coloque sua data)
const dataNamoro = new Date('2024-08-08'); // Exemplo: 1 de março de 2022

function atualizarContador() {
    const hoje = new Date();
    const diff = hoje - dataNamoro;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const segundos = Math.floor(diff / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    document.getElementById('contador').innerText = dias + " dias,  " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos juntos!";

    // const dataInicio = new Date(2022, 1, 14); // Insira a data do início do namoro aqui
    //const dataHoje = new Date();
    //const tempoPassado = dataHoje - dataInicio;

    
    //const dias = Math.floor(horas / 24);
}
setInterval(atualizarContador, 1000); // Atualiza a cada segundo

atualizarContador();

// Corações animados
const canvasCoracoes = document.getElementById('coracoes');
const ctxC = canvasCoracoes.getContext('2d');

canvasCoracoes.width = window.innerWidth;
canvasCoracoes.height = window.innerHeight;

let coracoes = [];

function criarCoracao() {
    return {
        x: Math.random() * canvasCoracoes.width,
        y: canvasCoracoes.height + Math.random() * 50,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.5
    };
}

function desenharCoracoes() {
    ctxC.clearRect(0, 0, canvasCoracoes.width, canvasCoracoes.height);
    
    for (let i = 0; i < coracoes.length; i++) {
        let c = coracoes[i];
        ctxC.globalAlpha = c.opacity;
        ctxC.fillStyle = "#ff4081";
        ctxC.beginPath();
        ctxC.arc(c.x, c.y, c.size, 0, Math.PI * 2);
        ctxC.fill();
        
        c.y -= c.speed;

        if (c.y < -c.size) {
            coracoes[i] = criarCoracao();
        }
    }
    
    requestAnimationFrame(desenharCoracoes);
}

for (let i = 0; i < 30; i++) {
    coracoes.push(criarCoracao());
}

desenharCoracoes();

// Slide de fotos
let indexSlide = 0;
const slides = document.querySelectorAll(".slider img");
const totalSlides = slides.length;

function mostrarSlide(index) {
    if (index >= totalSlides) {
        indexSlide = 0;
    } else if (index < 0) {
        indexSlide = totalSlides - 1;
    } else {
        indexSlide = index;
    }
    
    const deslocamento = -indexSlide * 100 + "%";
    document.querySelector(".slider").style.transform = "translateX(" + deslocamento + ")";
}

function mudarSlide(n) {
    mostrarSlide(indexSlide + n);
}

// Auto-slide a cada 3 segundos
setInterval(() => {
    mudarSlide(1);
}, 3000);

mostrarSlide(indexSlide);
