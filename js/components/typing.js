let started = false;

export function initTyping() {
    const typing = document.querySelector("#typing");
    const startMessage = document.querySelector("#start-message");
    const text = "Welcome to My Portfolio";
    const heroDescripition = document.querySelector("#hero-description");
    const heroButton = document.querySelector("#hero-button");
    function startTyping() {
        if (started) return;
        started = true;
        startMessage.style.display = "none";
        let index = 0;
        function type() {
            if (index < text.length) { 
                typing.textContent += text[index];
                index++;
                setTimeout(type, 70);
            } else {
                setTimeout(() => {heroDescripition.classList.replace("hidden", "show");}, 500);
                setTimeout(() => {heroButton.classList.replace("hidden", "show");}, 2000);
            }
        }
        type();
    }
    window.addEventListener("pointerdown", startTyping);
    window.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            startTyping();
        }

    });
}