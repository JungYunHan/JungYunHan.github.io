const images = [
  "0.jpeg",
  "1.jpg",
  "2.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url("img/${chosenImage}")`;

document.body.style.backgroundSize = "cover";
