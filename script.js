// tsParticles Config
tsParticles.load("tsparticles", {
  fpsLimit: 60,
  background: { color: "#0d0d0d" },
  interactivity: {
    detectsOn: "canvas",
    events: { resize: true },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 4
      }
    }
  },
  particles: {
    color: { value: "#ffffff" },
    links: {
      color: "random",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1
    },
    move: {
      collisions: true,
      direction: "none",
      enable: true,
      out_mode: "bounce",
      random: false,
      speed: 2,
      straight: false
    },
    number: { density: { enable: true, value_area: 800 }, value: 300 },
    opacity: {
      animation: { enable: true, minimumValue: 0.1, speed: 1, sync: false },
      random: true,
      value: 0.5
    },
    shape: { type: "square" },
    size: {
      animation: { enable: true, minimumValue: 2, speed: 1, sync: false },
      random: { enable: true, minimumValue: 2 },
      value: 4
    }
  },
  detectRetina: true
});

// Typewriter Effect
const words = ["It's Me K", "Piyungkun"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 80;
const waitBeforeDelete = 1000;
const waitBeforeTypeNext = 500;

function type() {
  const typewriter = document.getElementById("typewriter");
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typewriter.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentWord.length) {
      setTimeout(() => { isDeleting = true; type(); }, waitBeforeDelete);
      return;
    }
  } else {
    typewriter.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, waitBeforeTypeNext);
      return;
    }
  }

  setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
}


type();
