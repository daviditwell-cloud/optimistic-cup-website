const countdown = document.getElementById("countdown");

const tournamentDate = new Date("December 19, 2026 08:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = tournamentDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
        countdown.innerHTML = "🏆 GEFA CUP HAS STARTED!";
        return;
    }

    countdown.innerHTML =
        `⏳ ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

updateCountdown();

setInterval(updateCountdown, 1000);
