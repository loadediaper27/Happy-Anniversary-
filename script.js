// Messages shown on the loading screen

const messages = [
    "Loading...",
    "Isnt this cool...",
    "Almost there...",
    "Meow"
];

const loadingMessage = document.getElementById("loading-message");
const progress = document.getElementById("progress");
const loadingScreen = document.getElementById("loading-screen");
const letterPage = document.getElementById("letter-page");

// Start the progress bar
progress.style.transition = "width 4s linear";
progress.style.width = "100%";

// Change the loading message
let current = 0;

const messageInterval = setInterval(() => {

    current++;

    if (current < messages.length) {
        loadingMessage.textContent = messages[current];
    }

}, 1000);

// After 4 seconds...
setTimeout(() => {

    clearInterval(messageInterval);

    // Fade out loading screen
    loadingScreen.style.opacity = "0";

    // Reveal the letter
    letterPage.style.opacity = "1";

    // Remove loading screen after fade
    setTimeout(() => {

        loadingScreen.style.display = "none";

    }, 1000);

}, 4000);
