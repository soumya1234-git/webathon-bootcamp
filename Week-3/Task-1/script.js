let lights = document.querySelectorAll(".light");
let currentIndex = 0;
let autoMode = false;
let interval;

const lightSequence = [
    { index: 0, duration: 5000 }, // Red for 5s
    { index: 1, duration: 2000 }, // Yellow for 2s
    { index: 2, duration: 4000 }, // Green for 4s
];

function updateLights() {
    lights.forEach(light => light.classList.remove("active"));
    lights[currentIndex].classList.add("active");
}

function nextLight() {
    if (currentIndex === 1) {
        // Blinking yellow before green
        let blinkCount = 4;
        let blinkInterval = setInterval(() => {
            lights[1].classList.toggle("active");
            blinkCount--;
            if (blinkCount <= 0) {
                clearInterval(blinkInterval);
                currentIndex = (currentIndex + 1) % lights.length;
                updateLights();
            }
        }, 500);
        return;
    }
    currentIndex = (currentIndex + 1) % lights.length;
    updateLights();
}

// Button click event
document.getElementById("next-btn").addEventListener("click", nextLight);

// Auto Mode
document.getElementById("auto-toggle").addEventListener("click", () => {
    autoMode = !autoMode;
    document.getElementById("auto-toggle").innerText = autoMode ? "Stop Auto" : "Auto Mode";

    if (autoMode) {
        let cycle = () => {
            let { duration } = lightSequence[currentIndex];
            nextLight();
            interval = setTimeout(cycle, duration);
        };
        cycle();
    } else {
        clearTimeout(interval);
    }
});

// Initial light setup
updateLights();
