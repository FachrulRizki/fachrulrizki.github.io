// Init AOS
AOS.init({ duration: 1000, once: true });

// Typing effect
const words = ["Web Developer", "Machine Learning Enthusiast", "Tech Explorer"];
let i = 0,
  j = 0,
  currentWord = "",
  isDeleting = false;

function type() {
  currentWord = words[i];
  document.getElementById("typing").textContent = currentWord.substring(0, j);

  if (!isDeleting && j < currentWord.length) {
    j++;
    setTimeout(type, 100);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % words.length;
    setTimeout(type, 1000);
  }
}
type();