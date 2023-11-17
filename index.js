const allFormInputs = document.querySelectorAll("input");
const submitButton = document.querySelector(".form-section__submit-button");

// listen for click on submit button
submitButton.addEventListener("click", (e) => {
  // check all form inputs to see if any are empty
  allFormInputs.forEach((input) => {
    // check all inputs. Display error message and add bg image for any inputs that are empty.
    if (input.value == "") {
      displayError(input);
    }

    // clear all error messages when user types something in an input field
    input.addEventListener("keydown", () => {
      input.nextElementSibling.classList.add("d-none");
      input.style.backgroundImage = "none";
    });

    // check email is valid
    if (input.type == "email") {
      const userEntry = input.value;
      if (
        !userEntry.includes("@") ||
        userEntry.startsWith("@") ||
        userEntry.endsWith("@") ||
        !userEntry.includes(".") ||
        userEntry.startsWith(".") ||
        userEntry.endsWith(".")
      ) {
        displayError(input);
      }
    }
  });
  e.preventDefault();
});

// display error function
function displayError(input) {
  input.style.borderColor = "red";
  input.nextElementSibling.classList.remove("d-none");
  input.style.backgroundImage = "url(./images/icon-error.svg)";
  input.style.backgroundRepeat = "no-repeat";
  input.style.backgroundPosition = "95% 50%";
}
