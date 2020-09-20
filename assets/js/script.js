//refactor all to arrow functions and ES6

// Set display mode to all
display = "all";

// get list of radio buttons with name 'toggleBoxDisplay'
let tb = document.forms['displayTabs'].elements['toggleBoxes']; // uses id
// query selector to get all boxes
let b = document.querySelectorAll(".grid__item");

// loop through list
for (let i=0, len=tb.length; i<len; i++) {
    tb[i].onclick = function() { // assign onclick handler function to each
        // put clicked radio button's value in total field
        display = this.value; // using this.display doesn't work
        toggleDisplay();
    };
}

//switch case for 3 buttons for 3 states
  //global variable? or local?

//1 show all
function toggleDisplay() {
  if (display === "all") {
    displayAllBoxes();
  } 
  else if (display === "even") {
    displayAllBoxes();
    removeOddBoxes();
  }
  else if (display === "odd") {
    displayAllBoxes();
    removeEvenBoxes();
  }
}

function displayAllBoxes(){
  for (let i = 0, len = b.length; i < len; i++) {
    // bug here
    b[i].style.display = "grid";
  }
}

function removeEvenBoxes(){
  for (let i = 0, len = b.length; i < len; i++) {
    // hide all odd values
    if (i % 2 === 1) {
      b[i].style.display = "none";
    }
  }
}

function removeOddBoxes(){
  for (let i = 0, len = b.length; i < len; i++) {
    // hide all odd values
    if (i % 2 === 0) {
      b[i].style.display = "none";
    }
  }
}

  