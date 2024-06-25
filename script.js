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
    { name: "ele gosta", file: "sons/ele-g0sta.mp3" },
    { name: "vai da namoro", file: "sons/tmpht295_e2.mp3" },
    { name: "uiii", file: "sons/uiii_2vaCeXl.mp3" },
    { name: "dança gatinho", file: "sons/y2mate_rLgMJTu.mp3" },
    { name: "tomi", file: "sons/tomi.mp3" },
    { name: "uepaa", file: "sons/uepa-vai-dar-namoro-2022.mp3" },
    {
      name: "que isso meu filho",
      file: "sons/que-isso-meu-filho-calma-vai-dar-namoro.mp3",
    },
    { name: "iihhaaa", file: "sons/ihaaa-vai-dar-namoro.mp3" },
    { name: "ai mamae", file: "sons/aii-mamae.mp3" },
    { name: "rapaix", file: "sons/rapaz-vai-dar-namoro-2022.mp3" },
    { name: "cheega", file: "sons/ch3ga.mp3" },
    { name: "jeesus", file: "sons/jesus-vai-dar-namoro-2022.mp3" },
    { name: "pare!", file: "sons/pare-vai-dar-namoro-2022.mp3" },
    { name: "tao ta baum", file: "sons/tao-ta-bom-vai-dar-namoro.mp3" },
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

  // Verificar largura da tela e desativar align-items no body para dispositivos móveis
  function adjustBodyAlignment() {
    if (window.innerWidth < 768) {
      document.body.style.alignItems = "initial"; // Desativa o alinhamento vertical
    } else {
      document.body.style.alignItems = "center"; // Mantém o alinhamento vertical padrão
    }
  }

  // Chamada inicial para configurar o alinhamento
  adjustBodyAlignment();

  // Listener de evento de redimensionamento da janela para ajustar dinamicamente
  window.addEventListener("resize", adjustBodyAlignment);
});
