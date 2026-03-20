// 🔥 Banner Text Slider
const texts = [
  "We Provide ITES Enabled Services",
  "Hospital Management Information System",
  "School Automation System",
  "AI Voice Letter System"
];

let index = 0;
const slider = document.getElementById("sliderText");

setInterval(() => {
  slider.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % texts.length;
    slider.innerText = texts[index];
    slider.style.opacity = 1;
  }, 500);

}, 3000);


// 🔥 Scroll Animation
const boxes = document.querySelectorAll('.service-box');

window.addEventListener('scroll', () => {
  boxes.forEach(box => {
    const top = box.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      box.style.opacity = "1";
      box.style.transform = "translateY(0)";
    }
  });
});

// Initial hidden state
boxes.forEach(box => {
  box.style.opacity = "0";
  box.style.transform = "translateY(50px)";
  box.style.transition = "0.5s";
});// future AI tools code here