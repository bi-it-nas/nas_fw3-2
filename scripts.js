//Aufgabe 1

const aufgabe1 = document.getElementById("clickme-button");

aufgabe1.addEventListener("click", function() {
  alert('Du wurdest geküsst <3');
});

// Aufgabe 2
const aufgabe2 = document.getElementById("date-button");

aufgabe2.addEventListener("click", function() {
  var currentDate = new Date();
  var dateString = currentDate.toString();
  
  let inputDate = document.getElementById('inputDate');
  let computedStyle = window.getComputedStyle(inputDate);
  
  // Check if the element is hidden by external CSS
  if (computedStyle.display === 'none') {
    inputDate.style.display = 'block';  // Make it visible
    console.log("The element was hidden and is now shown.");
  } 
  
  

  inputDate.value = dateString; // Set the value of the input field to the current date
});

//Aufgabe 3

const aufgabe3p = document.querySelectorAll('.aufgabe-3');
const reset = document.getElementById('reset');
const stimmungenSelect = document.getElementById('Stimmungen');
const emotionszustand = document.getElementById('Emotionszustand');

// Listen for change on the "Stimmungen" element
stimmungenSelect.addEventListener('change', function() {
  // Get the value of the selected option
  const emotion = this.value;

  // Show all elements with class 'aufgabe-3'
  aufgabe3p.forEach(function(element) {
    element.style.display = 'block';
  });

  // Set the text based on the emotion selected
  if (emotion === '1') {
    emotionszustand.textContent = "glücklich!";
  } else if (emotion === '3') {
    emotionszustand.textContent = "geärgert!";
  } else if (emotion === '4') {
    emotionszustand.textContent = "gelangweilt!";
  } else if (emotion === '2')  {
    emotionszustand.textContent = "traurig!";
  }
});

// Reset the form and hide elements when the reset button is clicked
reset.addEventListener("click", function(){
  // Reset the value of the "Stimmungen" select input
  stimmungenSelect.value = ''; 
  
  // Hide all elements with class 'aufgabe-3'
  aufgabe3p.forEach(function(element) {
    element.style.display = 'none';
  });

  // Optionally reset the Emotionszustand text
  emotionszustand.textContent = '';
});
