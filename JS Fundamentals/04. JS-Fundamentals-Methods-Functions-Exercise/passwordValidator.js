function passwordValidator(password) {
  let firstValidation = lengthValidator(password);
  let secondValidation = lettersAndDigitsValidator(password);
  let thirdValidation = containsAtLeast2DigitsValidator(password);

  if (!firstValidation) {
    console.log("Password must be between 6 and 10 characters");
  }

  if (!secondValidation) {
    console.log("Password must consist only of letters and digits");
  }

  if (!thirdValidation) {
    console.log("Password must have at least 2 digits");
  }

  if (firstValidation && secondValidation && thirdValidation) {
    console.log("Password is valid");
  }

  function lengthValidator(password) {
    let isValid = false;

    if (password.length >= 6 && password.length <= 10) {
      isValid = true;
    }

    return isValid;
  }

  function lettersAndDigitsValidator(password) {
    let isValid = true;

    for (let i = 0; i < password.length; i++) {
      let code = password.charCodeAt(i);
      if (
        (code >= 48 && code <= 57) ||
        (code >= 65 && code <= 90) ||
        (code >= 97 && code <= 122)
      ) {
      } else {
        isValid = false;
        break;
      }
    }

    return isValid;
  }

  function containsAtLeast2DigitsValidator(password) {
    let isValid = false;

    let digits = 0;

    for (let i = 0; i < password.length; i++) {
      if (password[i] >= 0) {
        digits++;
      }

      if (digits === 2) {
        isValid = true;
        break;
      }
    }
    return isValid;
  }
}

passwordValidator("MyPass123");
