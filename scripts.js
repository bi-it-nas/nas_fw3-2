//Aufgabe 1

const aufgabe1 = document.getElementById("clickme-button");

aufgabe1.addEventListener("click", function() {
  alert('Du hast einen Kuss erhalten <3');
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

document.getElementById("Stimmungen").addEventListener('change', function() {
  const emotion = this.value;

  if (emotion === '1') {
    document.getElementById('Emotionszustand').textContent = "glücklich!";
  } else if (emotion === '3') {
    document.getElementById('Emotionszustand').textContent = "geärgert!";
  } else if (emotion === '4') {
    document.getElementById('Emotionszustand').textContent = "gelangweilt!";
  } else if (emotion === '2')  {
    document.getElementById("Emotionszustand").textContent = "traurig!"
  }
});
