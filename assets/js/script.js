// Set state of displayTabs
display = "all";

// Get list of radio buttons with name 'toggleBoxDisplay'
let tb = document.forms['displayTabs'].elements['toggleBoxes'];
// Query selector to get all boxes
let b = document.querySelectorAll(".grid__item");

// Loop through all three displayTabs
for (let i=0, len=tb.length; i<len; i++) {
  // Assign onclick handler function to each -- !!! can this be converted to an arrow function?
  tb[i].onclick = function(){
    // Put clicked radio button's value in total field
    display = this.value;
    // Toggle boxes displayed based on the state the display variable
    toggleDisplay();
  };
}

// Display boxes by state of display variable
function toggleDisplay() {
  switch(display){
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
  }
}

displayAllBoxes = () => {
  for (let i = 0, len = b.length; i < len; i++) {
    // bug here
    b[i].style.display = "grid";
  }
}

removeEvenBoxes = () => {
  for (let i = 0, len = b.length; i < len; i++) {
    if (i % 2 === 1) {
      b[i].style.display = "none";
    }
  }
}

removeOddBoxes = () => {
  for (let i = 0, len = b.length; i < len; i++) {
    if (i % 2 === 0) {
      b[i].style.display = "none";
    }
  }
}

  