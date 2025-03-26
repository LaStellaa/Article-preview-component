"use strict";

// const regularStateFooter = document.querySelector(".personal-details");
// const activeStateFooter = document.querySelector(".share-section");
// const regularStateBtn = document.getElementById("main-btn");
// // const activeStateBtn = document.getElementById("share-btn");
// const button = document.querySelectorAll("button");

// regularStateBtn.addEventListener("click", () => {
//   if (regularStateFooter.style.display === "flex") {
//     activeStateFooter.style.display = "flex";
//     regularStateFooter.style.display = "none";
//   } else {
//     activeStateFooter.style.display = "none";
//     regularStateFooter.style.display = "flex";
//   }
// });

"use strict";

// const regularStateFooter = document.querySelector(".personal-details");
// const activeStateFooter = document.querySelector(".share-section");
// const regularStateBtn = document.getElementById("main-btn");
// const shareIcon = document.getElementById("share-icon");

// regularStateBtn.addEventListener("click", () => {
//   if (regularStateFooter.style.display === "flex") {
//     activeStateFooter.style.display = "flex";
//     regularStateFooter.style.display = "none";
//     shareIcon.classList.add("active"); // Change SVG color
//   } else {
//     activeStateFooter.style.display = "none";
//     regularStateFooter.style.display = "flex";
//     shareIcon.classList.remove("active"); // Revert SVG color
//   }
// });

"use strict";

const regularStateFooter = document.querySelector(".personal-details");
const activeStateFooter = document.querySelector(".share-section");
const regularStateBtn = document.getElementById("main-btn");
const shareIcon = document.getElementById("share-icon");

// To handle active state and mobile behavior
regularStateBtn.addEventListener("click", () => {
  // Toggle button active state
  regularStateBtn.classList.toggle("active");

  // Check if the button is active (clicked)
  if (regularStateBtn.classList.contains("active")) {
    // Mobile behavior: On active, bring share section above footer
    activeStateFooter.style.display = "flex";
    activeStateFooter.style.zIndex = "10"; // Bring share section on top
    regularStateFooter.style.zIndex = "1"; // Push footer to the back

    // Change the SVG icon color when active
    shareIcon.style.fill = "white";
  } else {
    // Reset active state
    activeStateFooter.style.display = "none";
    activeStateFooter.style.zIndex = "0"; // Reset z-index
    regularStateFooter.style.zIndex = "5"; // Reset footer z-index

    // Reset the SVG icon color
    shareIcon.style.fill = "initial";
  }
});
