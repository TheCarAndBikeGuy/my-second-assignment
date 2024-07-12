const mainimage = document.querySelector(".mainimage");

let currentIndex = 0;
const images = [
  { src: "images/ocean.jpg", alt: "Nice Ocean" }, // 0
  { src: "images/blue.jpg", alt: "Very Blue Sea" }, // 1
  { src: "images/beach.jpg", alt: "Beautiful Old Caravan" }, // 2
  { src: "images/town.jpg", alt: "Peacful Town" }, // 3
];

// Next Image
const next = document.getElementById("next");
function nextImage() {
  currentIndex++;
  if (currentIndex > images.length) {
    currentIndex = 0;
  }
  mainimage.src = images[currentIndex].src;
}

next.addEventListener("click", nextImage);

// Previous Image
const previous = document.getElementById("previous");
function previousImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 3;
  }
  // check if index is too low and set current index to the highest number it can be
  mainimage.src = images[currentIndex].src;
}

previous.addEventListener("click", previousImage);

// Thumbnails

const thumbnails = document.getElementById("thumbnails");

for (let i = 0; i < images.length; i++) {
  let img = document.createElement("img");
  img.setAttribute("src", images[i].src);
  img.setAttribute("alt", images[i].alt);
  thumbnails.appendChild(img);
  img.addEventListener("click", function (change) {
    mainimage.src = img.src;
    currentIndex = i;
  });
}

// Get Info About time tag
const audio = document.querySelector("audio");

audio.addEventListener("timeupdate", function () {
  console.log(video.audio);
});

// Play Button
const playBtn = document.getElementById("play");

playBtn.addEventListener("click", function () {
  audio.play();
});

// Pause Button

const pauseBtn = document.getElementById("pause");

pauseBtn.addEventListener("click", function () {
  audio.pause();
});

// Stop Button

const stopBtn = document.getElementById("stop");

stopBtn.addEventListener("click", function () {
  audio.pause();
  audio.currentTime = 0;
});

// Volume Bar

const volumeBtn = document.getElementById("volume");

volumeBtn.addEventListener("change", function (event) {
  audio.volume = event.target.value;
});

// Mute Button

const muteBtn = document.getElementById("mute");
muteBtn.addEventListener("click", function () {
  audio.muted = true;
});

// Unmute Button

const unmuteBtn = document.getElementById("unmute");
unmuteBtn.addEventListener("click", function () {
  audio.muted = false;
});

// Back
const backBtn = document.getElementById("back");

backBtn.addEventListener("click", function () {
  audio.currentTime -= 5;
});

// Forward

const forwardBtn = document.getElementById("forward");

forwardBtn.addEventListener("click", function () {
  audio.currentTime += 5;
});
