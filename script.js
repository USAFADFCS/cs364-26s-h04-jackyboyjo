// FILE: script.js

// complete the TODO comments

// Get references to page elements
const button = document.getElementById("makeSmoothie");
const outputDiv = document.getElementById("output");

button.addEventListener("click", function() {
    makeSmoothieWithPromises();
});

// Helper function to display messages on the page
function showMessage(message) {
  const p = document.createElement("p");
  p.textContent = message;
  outputDiv.appendChild(p);
}

// Helper function that returns a Promise that resolves after a delay
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* =========================
   PART 1 — PROMISE FUNCTIONS
========================= */

// Step 1: Get ingredients
function getIngredients() {
  return new Promise((resolve, reject) => {
    showMessage("Gathering ingredients...");
    wait(2000).then(() => resolve(showMessage("Ingredients ready")));
  });
}

// Step 2: Blend smoothie
function blendSmoothie() {
  return new Promise((resolve, reject) => {
    wait(500).then(() => showMessage("Blending Smoothie..."));
    wait(2000).then(() => {
      if ((Math.floor(Math.random() * 10) + 1) % 3 == 0){
        reject("Blender Broke :(");
      } else {
        resolve(showMessage("Smoothie Blended"));
      }
    })
  })
}

// Step 3: Pour smoothie
function pourSmoothie() {
  return new Promise((resolve, reject) => {
    wait(500).then(() => showMessage("Pouring into cup..."));
    wait(1000).then(() => resolve(showMessage("Smoothie is Ready!")));
  });
}

/* =========================
   PART 2 — PROMISE CHAIN VERSION
========================= */

function makeSmoothieWithPromises() {
  outputDiv.innerHTML = ""; // Clear previous messages

  // TODO: Chain the steps in order using .then()
  getIngredients()
     .then(blendSmoothie)
     .then(pourSmoothie)
     .catch(error => showMessage(error))
}

/* =========================
   PART 3 — ASYNC/AWAIT VERSION
========================= */

async function makeSmoothieAsync() {
  outputDiv.innerHTML = ""; // Clear previous messages
    try {
      await getIngredients();
      
      await blendSmoothie();
      
      await pourSmoothie();

    } catch (error) {
      showMessage(error);
    }
}
