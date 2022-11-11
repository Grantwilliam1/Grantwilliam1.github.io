let captcha = new Array();
var x = 1;
const output = document.querySelector('.output');

function createCaptcha() {
  const activeCaptcha = document.getElementById("captcha");
  for (q = 0; q < 6; q++) {
    if (q % 2 == 0) {
      captcha[q] = String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    } else {
      captcha[q] = Math.floor(Math.random() * 10 + 0);
    }
  }
  theCaptcha = captcha.join("");
  activeCaptcha.innerHTML = `${theCaptcha}`;
}

createCaptcha();

function validateCaptcha() {
    const errCaptcha = document.getElementById("errCaptcha");
    const reCaptcha = document.getElementById("reCaptcha");
    recaptcha = reCaptcha.value;
    let validateCaptcha = 0;
    for (var z = 0; z < 6; z++) {
      if (recaptcha.charAt(z) != captcha[z]) {
        validateCaptcha++;
      }
    }
    if (recaptcha == "") {
      errCaptcha.innerHTML = "Re-Captcha must be filled";
    } else if (validateCaptcha > 0 || recaptcha.length > 6) {
      errCaptcha.innerHTML = "Wrong captcha";
    } else {
      x += 1;
      document.getElementById('tracker').innerHTML = "Current Captcha: " + x + "/400";
      createCaptcha();
    }
    if (x === 4) {
      errCaptcha.innerHTML = "Done";
      function submit() {
        alert("You Have Sucessfully Inputed Your Number :D");
      }
      const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);
    }
}