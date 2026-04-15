/* =========================
   FINTECH WEBSITE JS
   SIP + HEALTH INSURANCE
========================= */

console.log("Fintech App Loaded 🚀");

/* =========================
   1. SMOOTH SCROLL
========================= */
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

/* =========================
   2. SIP CALCULATOR (REAL FORMULA)
   FV = P × [ ( (1+r)^n - 1 ) / r ] × (1+r)
========================= */

  let years = parseFloat(document.getElementById("sipYears")?.value || 0);
  
  const resultEl = document.getElementById("sipResult");
  if (!resultEl) return; // Not on this page
  
  if (!P || !annualRate || !years) {
    alert("Please fill all SIP fields");
    return;
  }

  let r = annualRate / 100 / 12;
  let n = years * 12;
  let fv = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
  resultEl.innerText = "Future Value: ₹ " + fv.toFixed(0);
}

function calculateSIPMutual() {
  // Mutual fund

/* =========================
   3. HEALTH INSURANCE CALCULATOR (SIMPLE LOGIC)
========================= */
function calculateHealthInsurance() {
  let age = parseFloat(document.getElementById("age").value);
  let cover = parseFloat(document.getElementById("cover").value);

  if (!age || !cover) {
    alert("Please enter age and cover amount");
    return;
  }

  // Basic premium logic (demo model)
  let baseRate = 0.02; // 2%
  let ageFactor = age > 40 ? 1.5 : 1;

  let premium = cover * baseRate * ageFactor;

  document.getElementById("healthResult").innerText =
    "Estimated Premium: ₹ " + premium.toFixed(0) + " / year";
}

/* =========================
   4. WHATSAPP AUTO MESSAGE
========================= */
function openWhatsApp(type) {
  let number = "919999999999"; // change your number

  let message = "";

  if (type === "sip") {
    message = "Hi, I want help with SIP investment.";
  } else if (type === "health") {
    message = "Hi, I want health insurance details.";
  } else {
    message = "Hi, I need financial advice.";
  }

  let url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

/* =========================
   5. BUTTON DEBUG
========================= */
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    console.log("Clicked:", btn.innerText);
  });
});
function calculateSIP() {
    let P = document.getElementById("monthly").value;
    let r = document.getElementById("rate").value / 100 / 12;
    let n = document.getElementById("time").value * 12;

    let futureValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);

    document.getElementById("result").innerHTML =
        "Future Value: ₹ " + Math.round(futureValue);
}
function calculateSIP() {
    let P = parseFloat(document.getElementById("monthly").value);
    let r = parseFloat(document.getElementById("rate").value) / 100 / 12;
    let n = parseFloat(document.getElementById("time").value) * 12;

    if (isNaN(P) || isNaN(r) || isNaN(n)) {
        document.getElementById("result").innerHTML = "Please enter all values!";
        return;
    }

    let futureValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);

    document.getElementById("result").innerHTML =
        "Future Value: ₹ " + Math.round(futureValue);
}
// SIP Calculator
function calculateSIP() {
    let amount = document.getElementById("sipAmount").value;
    let rate = document.getElementById("sipRate").value;
    let years = document.getElementById("sipYears").value;

    if (amount === "" || rate === "" || years === "") {
        document.getElementById("sipResult").innerText = "Please fill all fields";
        return;
    }

    let monthlyRate = rate / 100 / 12;
    let months = years * 12;

    let futureValue = amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);

    document.getElementById("sipResult").innerText =
        "Future Value: ₹ " + futureValue.toFixed(2);
}


// Health Insurance Calculator
function calculateHealthInsurance() {
    let age = document.getElementById("age").value;
    let cover = document.getElementById("cover").value;

    if (age === "" || cover === "") {
        document.getElementById("healthResult").innerText = "Please fill all fields";
        return;
    }

    let premium = (cover * 0.02) + (age * 50);

    document.getElementById("healthResult").innerText =
        "Estimated Premium: ₹ " + premium.toFixed(2);
}