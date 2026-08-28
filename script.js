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

// GEFA Cup Registration - Step 2 Review

const savedRegistration = localStorage.getItem("gefaRegistration");

if (savedRegistration) {

    const registrationData = JSON.parse(savedRegistration);

    const reviewAcademyName = document.getElementById("reviewAcademyName");
    const reviewCoachName = document.getElementById("reviewCoachName");
    const reviewPhone = document.getElementById("reviewPhone");
    const reviewEmail = document.getElementById("reviewEmail");
    const reviewAgeCategory = document.getElementById("reviewAgeCategory");
    const reviewPlayers = document.getElementById("reviewPlayers");

    if (reviewAcademyName) {
        reviewAcademyName.textContent = registrationData.academyName;
    }

    if (reviewCoachName) {
        reviewCoachName.textContent = registrationData.coachName;
    }

    if (reviewPhone) {
        reviewPhone.textContent = registrationData.phone;
    }

    if (reviewEmail) {
        reviewEmail.textContent = registrationData.email;
    }

    if (reviewAgeCategory) {
        reviewAgeCategory.textContent = registrationData.ageCategory;
    }

    if (reviewPlayers) {
        reviewPlayers.textContent = registrationData.players;
    }

}
