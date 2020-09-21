// Set state of displayTabs
display = "all";

// Get list of radio buttons with name 'toggleBoxDisplay'
let toggleBoxes = document.forms['displayTabs'].elements['toggleBoxes']; 
// Query selector to get all boxes
let gridItems = document.querySelectorAll(".grid__item");

// Loop through all three displayTabs
for (let i = 0; i < toggleBoxes.length; i++) { 
  toggleBoxes[i].onclick = function() {
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
      
    default: 
      break;
  }
}

displayAllBoxes = () => {
  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].style.display = "block";
  }
}

removeEvenBoxes = () => {
  for (let i = 0; i < gridItems.length; i++) {
    if (i % 2 === 1) {
      gridItems[i].style.display = "none";
    }
  }
}

removeOddBoxes = () => {
  for (let i = 0; i < gridItems.length; i++) {
    if (i % 2 === 0) {
      gridItems[i].style.display = "none";
    }
  }
}

  