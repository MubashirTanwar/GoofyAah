

function alpha(letter) {
    switch (letter) {
        case "w":
            var aaugh = new Audio("sounds/aaugh.mp3");
            aaugh.play();
            break;
        case "a":
            var danger = new Audio("sounds/danger.mp3");
            danger.play();
            break;
        case "s":
            var eh_eh_ehh = new Audio("sounds/eh-eh-ehh.mp3");
            eh_eh_ehh.play();
            break;
        case "d":
            var fart = new Audio("sounds/fart.mp3");
            fart.play();
            break;
        case "f":
            var huh = new Audio("sounds/huh.mp3");
            huh.play();
            break;
        case "g":
            var omg = new Audio("sounds/omg.mp3");
            omg.play();
            break;
        case "h":
            var piano_riff = new Audio("sounds/piano-riff.mp3");
            piano_riff.play();
            break;
        case "j":
            var quandale = new Audio("sounds/quandale.mp3");
            quandale.play();
            break;
        case "k":
            var raar = new Audio("sounds/raar.mp3");
            raar.play();
            break;
        case "l":
            var samsung = new Audio("sounds/samsung.mp3");
            samsung.play();
            break;
        case "n":
            var vine_boom = new Audio("sounds/vine-boom.mp3");
            vine_boom.play();
            break;
        case "m":
            var violin_screech = new Audio("sounds/violin-screech.mp3");
            violin_screech.play();
            break;
        default:
            console.log(letter);
            break;
    }
}
document.addEventListener("keydown", function(keyPressed){
    alpha(keyPressed.key);
    buttonAnimation(keyPressed.key);
});
function buttonAnimation(char)
{
    var activeButton = document.querySelector("."+char);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 700);
}

var keys = document.querySelectorAll(".tap").length;
for(var i = 0; i<keys; i++)
{
    document.querySelectorAll(".tap")[i].addEventListener("click", function (){
        var innerText = this.innerHTML;
        alpha(innerText);
        buttonAnimation(innerText);
    });
}
// var backgrounds = [
//     "url(background/backdrop.webp)",
//     "url(background/goof-1.png)",
//     "url(background/goof-2.png)",
//     "url(background/goof-3.jpg)",
//     "url(background/goof-4.jpg)"
//   ];
  
//   var randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
//   document.body.style.backgroundImage = randomBg;
// console.log(randomBg)
  

var videoOn = false;
var videoElement = document.getElementById("video");
var stream = null;
var randomBg = null;

var backgrounds = [
  "url(background/backdrop.webp)",
  "url(background/goof-1.png)",
  "url(background/goof-2.png)",
  "url(background/goof-3.jpg)",
  "url(background/goof-4.jpg)"
];

function setBackground(bgUrl) {
  document.body.style.backgroundImage = bgUrl;
}

function startCamera() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(mediaStream) {
      stream = mediaStream;
      videoElement.srcObject = stream;
      videoElement.style.display = "block";
      setBackground("none");
      videoOn = true;
    })
    .catch(function(error) {
      console.error("Could not access webcam: " + error);
    });
}

function stopCamera() {
  stream.getTracks().forEach(function(track) {
    track.stop();
  });
  videoElement.srcObject = null;
  videoElement.style.display = "none";
  setBackground(randomBg);
  videoOn = false;
}
// document.getElementById("camera-toggle").querySelector("i").style.color = "#ff0000";

document.getElementById("camera-toggle").addEventListener("click", function() {
  if (videoOn) {
    stopCamera();
    document.getElementById("camera-toggle").classList.add("active");
    document.getElementById("camera-toggle").querySelector("i").classList.remove("fa-video");
    document.getElementById("camera-toggle").querySelector("i").classList.add("fa-video-slash");
    document.getElementById("camera-toggle").querySelector("i").style.color = "#fff";
  } else {
    startCamera();
    document.getElementById("camera-toggle").classList.remove("active");
    document.getElementById("camera-toggle").querySelector("i").classList.remove("fa-video-slash");
    document.getElementById("camera-toggle").querySelector("i").classList.add("fa-video");
    document.getElementById("camera-toggle").querySelector("i").style.color = "#00ff00";
  }
});

randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
setBackground(randomBg);
