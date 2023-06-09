const letters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]", ",","|",":",";","<",">",".","?","/",
];


function renderPasswords() {
  document.getElementById("password1").textContent = generatePassword();
  document.getElementById("password2").textContent = generatePassword();
}

function generatePassword() {
  let includeSymbols = document.getElementById("symbolsCheck").checked;
  let includeNumbers = document.getElementById("numbersCheck").checked;
  let chosenCharacters = letters;

  if (includeSymbols) {
    chosenCharacters = chosenCharacters.concat(symbols);
  }

  if (includeNumbers) {
    chosenCharacters = chosenCharacters.concat(numbers);
  }

  let password = "";
  let passwordLengthChoice = document.getElementById("passwordLength").value;
  for (let i = 0; i < passwordLengthChoice; i++) {
    let randomIndex = Math.floor(Math.random() * chosenCharacters.length);
    password += chosenCharacters[randomIndex];
  }

  return password;
}

function updatePasswordLength() {
  let passwordLengthChoice = document.getElementById("passwordLength").value;
  document.getElementById("passwordLengthLabel").textContent =
    "Password length: " + passwordLengthChoice + " characters";
}

function copyPassword(event) {
  navigator.clipboard.writeText(event.target.innerText);

  document.getElementById("passwordCopiedAlert").classList.toggle("hide");
  setTimeout(() => {
    document.getElementById("passwordCopiedAlert").classList.toggle("hide");
  }, 1500);
}

function toggleLight(e) {
  document.getElementById("container").classList.toggle("light");
  e.target.innerText = e.target.innerText === "☀️" ? "🌙" : "☀️";
}
