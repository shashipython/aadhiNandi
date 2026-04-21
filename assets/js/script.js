/* =========================
   FINTECH WEBSITE JS
   SIP + HEALTH INSURANCE
========================= */

console.log("Fintech App Loaded");

/* =========================
   1. SMOOTH SCROLL
========================= */
document.querySelectorAll("a[href^='#']").forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetSelector = link.getAttribute("href");

        if (!targetSelector || targetSelector === "#") {
            return;
        }

        const target = document.querySelector(targetSelector);

        if (target) {
            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

/* =========================
   2. SIP CALCULATOR
========================= */
function calculateSIP() {
    const amountInput = document.getElementById("sipAmount") || document.getElementById("monthly");
    const rateInput = document.getElementById("sipRate") || document.getElementById("rate");
    const yearsInput = document.getElementById("sipYears") || document.getElementById("time");
    const resultEl = document.getElementById("sipResult") || document.getElementById("result");

    if (!amountInput || !rateInput || !yearsInput || !resultEl) {
        return;
    }

    const amount = parseFloat(amountInput.value);
    const annualRate = parseFloat(rateInput.value);
    const years = parseFloat(yearsInput.value);

    if (!amount || !annualRate || !years) {
        resultEl.textContent = "Please fill all fields";
        return;
    }

    const monthlyRate = annualRate / 100 / 12;
    const months = years * 12;
    const futureValue = amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);

    resultEl.textContent = "Future Value: Rs. " + futureValue.toFixed(2);
}

function calculateSIPMutual() {
    calculateSIP();
}

/* =========================
   3. HEALTH INSURANCE CALCULATOR
========================= */
function calculateHealthInsurance() {
    const ageInput = document.getElementById("age");
    const coverInput = document.getElementById("cover");
    const resultEl = document.getElementById("healthResult");

    if (!ageInput || !coverInput || !resultEl) {
        return;
    }

    const age = parseFloat(ageInput.value);
    const cover = parseFloat(coverInput.value);

    if (!age || !cover) {
        resultEl.textContent = "Please fill all fields";
        return;
    }

    const premium = cover * 0.02 + age * 50;
    resultEl.textContent = "Estimated Premium: Rs. " + premium.toFixed(2);
}

/* =========================
   4. WHATSAPP AUTO MESSAGE
========================= */
function openWhatsApp(type) {
    const number = "919999999999";
    let message = "Hi, I need financial advice.";

    if (type === "sip") {
        message = "Hi, I want help with SIP investment.";
    } else if (type === "health") {
        message = "Hi, I want health insurance details.";
    }

    const url = "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}

/* =========================
   5. BUTTON DEBUG
========================= */
document.querySelectorAll(".btn").forEach(function (button) {
    button.addEventListener("click", function () {
        console.log("Clicked:", button.innerText);
    });
});
