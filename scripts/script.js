const signInForm = document.forms["signInForm"];
const emailTelError = signInForm.querySelector("#emailTelError");
const passwordError = signInForm.querySelector("#passwordError");
const restoreButton = signInForm.querySelector("#restore");
const signUpButton = signInForm.querySelector("#signUp");

const openModalButton = document.querySelector("#openModalButton");
const modalContainer = document.querySelector("#modalContainer");
const modalCloseButton = modalContainer.querySelector("#closeButton");

const loadingContainer = document.querySelector("#loadingContainer");

const submitForm = async (event) => {
  event.preventDefault();

  const formData = new FormData(signInForm);

  if (
    formData.get("emailTel").trim() === "" ||
    formData.get("password").trim() === ""
  ) {
    emailTelError.innerText = "This field is required";
    passwordError.innerText = "This field is required";
    return;
  }
  emailTelError.innerText = "";
  passwordError.innerText = "";

  try {
    toggleLoading();
    await signIn(formData);
  } catch (error) {
    console.error("Sign in was unsuccessful");
  } finally {
    toggleLoading();
  }
};

const signIn = async (data) => {
  return await fetch("/api/signIn/", {
    method: "POST",
    headers: { "Content-Type": "multipart/form-data" },
    body: data,
  });
};

const toggleLoading = () => {
  toggleDisplay(loadingContainer);
};

const restore = (event) => {
  event.preventDefault();

  // Restore logic
};

const signUp = (event) => {
  event.preventDefault();

  // Sign up logic
};

const toggleModalDialog = () => {
  toggleDisplay(modalContainer);
};

const toggleDisplay = (element, value = "flex") => {
  const currentDisplay = element.style.display;
  element.style.display =
    currentDisplay === "none" || !currentDisplay ? value : "none";
};

signInForm.addEventListener("submit", submitForm);
restoreButton.addEventListener("click", restore);
signUpButton.addEventListener("click", signUp);
openModalButton.addEventListener("click", toggleModalDialog);
modalCloseButton.addEventListener("click", toggleModalDialog);
