// Set state of page
display = "all";

// Define toggle function and assign it to the three tabs
let toggleBoxesDisplayed = () => {
  let tabs = document.forms["displayTabs"].elements["toggleBoxes"];

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].onclick = function () {
      display = this.value;
      // Refresh page
      setDisplayState();
    };
  }
  return;
}

// When a tab is clicked, call toggleBoxesDisplayed() to determine which boxes are displayed
toggleBoxesDisplayed();

/* -------------------------------------------------- */

// Helper functions below
function setDisplayState() {
  switch (display) {
    case "all":
      displayAllBoxes();
      break;
    case "even":
      displayAllBoxes();
      removeOddBoxes();
      break;
    case "odd":
      displayAllBoxes();
      removeEvenBoxes();
      break;

    default:
      break;
  }
}

let boxes = document.querySelectorAll(".grid__item");

displayAllBoxes = () => {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.display = "block";
  }
}

removeEvenBoxes = () => {
  for (let i = 0; i < boxes.length; i++) {
    if (i % 2 === 1) {
      boxes[i].style.display = "none";
    }
  }
}

removeOddBoxes = () => {
  for (let i = 0; i < boxes.length; i++) {
    if (i % 2 === 0) {
      boxes[i].style.display = "none";
    }
  }
}

  