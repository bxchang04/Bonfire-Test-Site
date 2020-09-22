/*

Overview:

This script file contains the logic for each of the 3 display tabs used to toggle which boxes are displayed. This logic also dynamically adjusts the styling of each tab based on whether they are active or not.

 */

// Set state of page
display = "all";

// Define toggle function and assign it to the three tabs
let toggleBoxesDisplayed = () => {
  let tabs = document.forms["displayTabs"].elements["toggleBoxes"];


  for (let i = 0; i < tabs.length; i++) {
    tabs[i].onclick = function () {
      display = this.value;
      // Filter buttons displayed
      setDisplayState();
      // Update styling for all three tabs
      updateTabStyling(tabs[i]);
    };
  }
  return;
}

// Define function to update all tabs' styling each time any tab is clicked
let buttons = document.querySelectorAll(".btn");

let updateTabStyling = (clickedTab) => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
    if (buttons[i] === clickedTab)
      console.log("current tab: ", buttons[i], "clicked tab: ", clickedTab);
      buttons[i].classList.add('active');
  }
};

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

let boxes = document.querySelectorAll(".box");

let displayAllBoxes = () => {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.display = "block";
  }
}

let removeEvenBoxes = () => {
  for (let i = 0; i < boxes.length; i++) {
    if (i % 2 === 1) {
      boxes[i].style.display = "none";
    }
  }
};

let removeOddBoxes = () => {
  for (let i = 0; i < boxes.length; i++) {
    if (i % 2 === 0) {
      boxes[i].style.display = "none";
    }
  }
};