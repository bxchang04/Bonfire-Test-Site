/*

Overview:

This script file dynamically assigns one event handler each of the three display tabs. It also handles styling for the tabs themselves.

 */

// Set state of page

display = "all";

// Define and apply onclick event handler to the three tabs

let toggleBoxesDisplayed = () => {
  
  let tabs = document.forms["displayTabs"].elements["toggleBoxes"];

  for (let i = 0; i < tabs.length; i++) {
    
    tabs[i].onclick = function () {
    
      display = this.value;
      // Filter buttons displayed
      setDisplayState();
      // Update styling for all three tabs
      updateTabStyling(tabs[i].parentNode);
    
    };
  }
  return;
}

// Define function to apply styling to the active tab

let buttons = document.querySelectorAll(".btn");

let updateTabStyling = (clickedTab) => {

  for (let i = 0; i < buttons.length; i++) {

    buttons[i].classList.remove('active');
    
    if (buttons[i] === clickedTab) {
      buttons[i].classList.add('active');
    }
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