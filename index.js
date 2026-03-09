//Get the length of how much buttons
let numberOfDrums = document.querySelectorAll(".drum").length;

//It loops through everytime user clicks button

for (let i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", pressMe);
}


function pressMe() {

    //We getting the button the use clicked with the keyword this
    let buttonClicked = this.innerHTML;

    //adding css style clickeed
    this.classList.add("pressed");

    //Timer to remove after clicking
    setTimeout(()=> {
        this.classList.remove("pressed");
    },100);
 
    //For every letter that is clicked it should play its targeted sound
    switch (buttonClicked) {
        case "w":
            let sound1 = new Audio("sounds/tom-1.mp3");
            sound1.play();
            break;

        case "a":
            let sound2 = new Audio("sounds/tom-2.mp3");
            sound2.play();
            break;

        case "s":
            let sound3 = new Audio("sounds/tom-3.mp3");
            sound3.play();
            break;

        case "d":
            let sound4 = new Audio("sounds/tom-4.mp3");
            sound4.play();
            break;

        case "j":
            let sound5 = new Audio("sounds/snare.mp3");
            sound5.play();
            break;

        case "k":
            let sound6 = new Audio("sounds/kick-bass.mp3");
            sound6.play();
            break;

        case "l":
            let sound7 = new Audio("sounds/crash.mp3");
            sound7.play();
            break;

        default:
            console.log("Error playing sound");
            break;
    }
}




// Date for footer
const date = new Date();
const year = date.getFullYear();
document.getElementById("current-year").textContent = year;