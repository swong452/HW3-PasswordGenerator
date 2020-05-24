// Assignment Code
// generated a DOC obj that its element id starts with #generate
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
// Event Listener; wait and listen for the event 'click'
// once user clicked, it will respond by calling funciton 'writePassword'
generateBtn.addEventListener("click", writePassword);

// ============== KEY FUNCTION =========================


// Generate password possible string
function passwordCombo (upper, lower, digit, special) {
  var pwcombo = '';
  
  // 4 x sets of password 
  var pw_upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
  var pw_lower = 'abcdefghijklmnopqrstuvwxyz'; 
  var pw_digit = '0123456789'; 
  var pw_special = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'; 
  var userchoice = false;


  if (upper == true) {
    pwcombo += pw_upper;
    userchoice = true;
    //console.log("Ok Upper case should be added. pwcombo is: " + pwcombo);
  }
  
  if (lower == true) {
    pwcombo += pw_lower;
    userchoice = true;
    //console.log("Ok Lower case should be added. pwcombo is: " + pwcombo);
  }
  
  if (digit == true) {
    pwcombo += pw_digit;
    userchoice = true;
    //console.log("Ok Numeric should be added. pwcombo is: " + pwcombo);
  }
    
  if (special == true) {
    pwcombo += pw_special;
    userchoice = true;
    //console.log("Ok Special Chara should be added. pwcombo is: " + pwcombo);
  }
  

  return pwcombo;
}

function validatelen () {
 len = 0;

  while (len < 8 || len > 128) {
    var len = prompt ("How long would you like your password length to be ? ");
    if (len < 8 || len > 128) {
      alert("Sorry password length must be between 8 to 128.");
    }
  }
  return len;
} 

function validateupper () {
  var upper = confirm ("Would you want your generated password to include upper case ? ")
  return upper;
}

function validatelower () {
  var lower = confirm ("Would you want your generated password to include Lower case ? ")
  return lower;
}

function validatedigit () {
  var digit = confirm ("Would you want your generated password to include Numeric ? ")
  return digit;
}

function validatespecial () {
  var special = confirm ("Would you want your generated password to include Special ? ")
  return special;
}


// Generate a random password base on user input criteria
function generatePassword () {

  var upper = false;
  var lower = false;
  var digit = false;
  var special = false;

  var len = validatelen();

  while (upper == false && lower == false && digit == false && special == false) {
    var upper = validateupper();
    var lower = validatelower();
    var digit = validatedigit();
    var special = validatespecial();

    if (upper == false && lower == false && digit == false && special == false) {
      alert ("At least once type of password character type needs to be choosen OK")
    }

  }


  // Initialize password to null
  var pass = ''; 

  // the final pw possible combo depends on user criteria
  var pwcombo = passwordCombo(upper, lower, digit, special);
  //console.log("pwcombo is: " + pwcombo);

  //math.random to generate a # within this range
  for (i=0; i < len; i++) {
    pwpos = Math.floor(Math.random() * pwcombo.length + 1);
    pass += pwcombo.charAt(pwpos);
  }
  return pass;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();  // gen new pwd

  // Initiate an object passwordText from id=password
  var passwordText = document.querySelector("#password");

  // Update/set the content of id "password" element, 
  // to the generated password. 
  passwordText.value = password;

}

