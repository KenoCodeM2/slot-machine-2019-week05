let bankai = document.querySelector(".bankai");
let reel1 = document.querySelector(".reel1");
let reel2 = document.querySelector(".reel2");
let reel3 = document.querySelector(".reel3");
let reiryoku = document.querySelector(".reiryoku");
reiryoku.innerText = 10000;


document.querySelector(".minpower").addEventListener("click", minpower);
document.querySelector(".maxpower").addEventListener("click", maxpower);

const soulrepears = [
    "img/Aizen.avif",
    "img/Byakuya.jpg",
    "img/Ichigo.jpg",
    "img/Starrk.jpg",
    "img/Yoruichi.jpg"
];

// Function to handle the restarting the game and alert to notify
function restartGame() {
    alert("How can you continue with such low Spiritual Pressure? Restarting game...");
    location.reload();
}

// Function to check if spiritual pressure is zero and schedule restart
function checkAndRestart() {
    if (Number(reiryoku.innerText) <= 0) {
        setTimeout(restartGame, 3000); // 3-second delay
    }
}
function minpower() {
    if (reiryoku.innerText >= 50) {
        reiryoku.innerText = Number(reiryoku.innerText) - 50;

        // Use the array index for both displaying and comparing
        let reel1Index = Math.floor(Math.random() * soulrepears.length);
        let reel2Index = Math.floor(Math.random() * soulrepears.length);
        let reel3Index = Math.floor(Math.random() * soulrepears.length);

        // Update the images by setting the `src` attribute
        reel1.firstElementChild.src = soulrepears[reel1Index];
        reel2.firstElementChild.src = soulrepears[reel2Index];
        reel3.firstElementChild.src = soulrepears[reel3Index];

        // Compare the array indices for the win condition
        if (reel1Index === reel2Index && reel2Index === reel3Index) {
            bankai.innerText = "You Won This battle!"
            reiryoku.innerText = Number(reiryoku.innerText) + 500;

        } else {
            bankai.innerText = "Not today Soul reaper!"
        }
        checkAndRestart()
    } else {
        document.querySelector("h3").innerText = "How can you continue with such low  Spiritual Pressure?"
    }
}


function maxpower() {
    if (reiryoku.innerText >= 250) {
        reiryoku.innerText = Number(reiryoku.innerText) - 250;

        let reel1Index = Math.floor(Math.random() * soulrepears.length);
        let reel2Index = Math.floor(Math.random() * soulrepears.length);
        let reel3Index = Math.floor(Math.random() * soulrepears.length);

        reel1.firstElementChild.src = soulrepears[reel1Index];
        reel2.firstElementChild.src = soulrepears[reel2Index];
        reel3.firstElementChild.src = soulrepears[reel3Index];

        if (reel1Index === reel2Index && reel2Index === reel3Index) {
            bankai.innerText = "You Won This battle!"
            reiryoku.innerText = Number(reiryoku.innerText) + 15000;

        } else {
            bankai.innerText = "Not today Soul reaper!"
        }
        checkAndRestart()
    } else {
        document.querySelector("h3").innerText = "How can you continue with such low  Spiritual Pressure?"

    }
} 
