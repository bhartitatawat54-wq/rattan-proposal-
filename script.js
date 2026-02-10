function moveNo() {
    const noBtn = document.getElementById("noBtn");
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function sayYes() {
    document.getElementById("answer").innerText =
        "Ruko… itni bhi kya jaldi hai 😌 I’m always yours ❤️";
}
