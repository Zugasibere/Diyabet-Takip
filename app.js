// Tarih gösterimi
document.getElementById("date").textContent = new Date().toLocaleDateString("tr-TR", {
  weekday: "long", year: "numeric", month: "long", day: "numeric"
});

// Günlük karbonhidrat hedefi
let carbGoal = 150;
let carbTotal = 0;
let meals = [];

// Öğün ekleme (örnek)
function addMeal(name, grams, carbs) {
  meals.push({ name, grams, carbs });
  carbTotal += carbs;
  updateDashboard();
}

// Dashboard güncelleme
function updateDashboard() {
  document.getElementById("carbTotal").textContent = carbTotal;
  document.getElementById("carbGoal").textContent = carbGoal;
  document.getElementById("carbRemaining").textContent = carbGoal - carbTotal;
  document.getElementById("mealCount").textContent = meals.length;

  const mealSection = document.querySelector(".meals");
  mealSection.innerHTML = "<h3>Bugünün Öğünleri</h3>";
  meals.forEach(m => {
    mealSection.innerHTML += `<p>${m.name} - ${m.carbs}g KH</p>`;
  });
}

// Örnek kullanım
// addMeal("Süt", 200, 10);
