const botao = document.getElementById("botaoEntrar");
const titulo = document.querySelector(".titulo");
const video = document.querySelector(".fundo video");

botao.addEventListener("click", () => {

    // 🔵 1. Zoom no vídeo
    video.classList.add("zoom");

    // 🔵 2. Título desaparece
    titulo.classList.add("desaparecer");

    // 🔵 3. Botão desaparece
    botao.classList.add("desaparecer");

    // 🔵 4. Redirecionar após a animação (1.5s)
    setTimeout(() => {
        window.location.href = "sistema-solar.html";  
    }, 1500); // 1,5 segundos
});
