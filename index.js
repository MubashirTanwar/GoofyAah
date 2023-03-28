

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
var backgrounds = [
    "url(background/backdrop.webp)",
    "url(background/goof-1.png)",
    "url(background/goof-2.png)",
    "url(background/good-3.png)",
    "url(background/goof-4.png)"
  ];
  
var randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
document.body.style.backgroundImage = randomBg;

navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(stream) {
        var video = document.getElementById('video-background');
        video.srcObject = stream;
      })
      .catch(function(error) {
        console.log('Unable to access the webcam: ' + error.message);
      });