function calculateAge() {
  var birthdateInput = document.getElementById('birthdate').value;
  
  if (birthdateInput === "") {
    alert("Please enter a valid birthdate.");
    return;
  }

  var birthdate = new Date(birthdateInput);
  var today = new Date();

  var ageYears = today.getFullYear() - birthdate.getFullYear();
  var monthDiff = today.getMonth() - birthdate.getMonth();
  var dayDiff = today.getDate() - birthdate.getDate();

  if (dayDiff < 0) {
    monthDiff--;
    dayDiff += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (monthDiff < 0) {
    ageYears--;
    monthDiff += 12;
  }

  var ageString = ageYears + " years";
  
  if (monthDiff > 0) {
    ageString += ", " + monthDiff + " months";
  }

  if (dayDiff > 0) {
    ageString += ", " + dayDiff + " days";
  }

  document.getElementById('result').innerText = "You are " + ageString + " old.";
}
