document.addEventListener("DOMContentLoaded", () => {
  const padContainer = document.getElementById("pad-container");
  const stopAllButton = document.getElementById("stop-all");
  const masterVolumeControl = document.getElementById("master-volume");
  const volumeValueDisplay = document.getElementById("volume-value");

  const sounds = [
    { name: "aoo potencia", file: "sons/aooo-potencia.mp3" },
    { name: "musica sexo", file: "sons/careless_whispers.mp3" },
    { name: "cavalo", file: "sons/cavalo-rodrigo-faro.mp3" },
    { name: "demaixx", file: "sons/demaixxx.mp3" },
    { name: "ele gosta", file: "sons/tmpd9mca4be.mp3" },
    { name: "vai da namoro", file: "sons/tmpht295_e2.mp3" },
    { name: "uiii", file: "sons/uiii_2vaCeXl.mp3" },
    { name: "dança gatinho", file: "sons/y2mate_rLgMJTu.mp3" },
  ];

  let audioElements = [];

  // Criar elementos de áudio e botões
  sounds.forEach((sound, index) => {
    const audio = new Audio(sound.file);
    audio.volume = masterVolumeControl.value; // Definir volume inicial
    audioElements.push(audio);

    const button = document.createElement("button");
    button.className = "pad";
    button.innerText = `💖 ${sound.name}`;
    button.dataset.sound = `sound${index + 1}`;

    button.addEventListener("click", () => {
      audio.currentTime = 0;
      audio.play();
    });

    padContainer.appendChild(button);
  });

  // Evento para controlar o volume geral
  masterVolumeControl.addEventListener("input", () => {
    const volumeValue = Math.round(masterVolumeControl.value * 100);
    volumeValueDisplay.textContent = volumeValue;

    audioElements.forEach((audio) => {
      audio.volume = masterVolumeControl.value;
    });
  });

  // Evento para parar todos os sons
  stopAllButton.addEventListener("click", () => {
    audioElements.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
  });
});
