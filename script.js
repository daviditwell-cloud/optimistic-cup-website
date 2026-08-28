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

// GEFA Cup Registration - Step 1

const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {

    registrationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const formData = new FormData(registrationForm);

        const registrationData = {
            academyName: formData.get("academyName"),
            coachName: formData.get("coachName"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            ageCategory: formData.get("ageCategory"),
            players: formData.get("players"),
            additionalInfo: formData.get("additionalInfo")
        };

        localStorage.setItem(
            "gefaRegistration",
            JSON.stringify(registrationData)
        );

        window.location.href = "review-registration.html";

    });

}
