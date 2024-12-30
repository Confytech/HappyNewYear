const greeting = document.getElementById("greeting");
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function showGreeting() {
    greeting.style.display = "block";
    greeting.textContent = "🎉 Happy New Year 2025! 🎉";
    fireworks();
}

function fireworks() {
    const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFF033", "#33FFF5"];
    setInterval(() => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 50 + 20;
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
    }, 100);
}

setTimeout(showGreeting, 1000); // Simulate 1-second delay for demo purposes
