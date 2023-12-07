const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  //   console.log(form);
  const email = form.elements.email.value;
  //   console.log(email);
  const password = form.elements.password.value;
  //   console.log(password);

  if (email === "" || password === "") {
    alert("Please fill in all the fields!");
  }

  const objectValue = {
    email,
    password,
  };

  console.log(objectValue);
  form.reset();
}
