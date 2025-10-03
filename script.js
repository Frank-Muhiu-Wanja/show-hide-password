const input = document.querySelector("input");
const eye = document.querySelector("#eye-icon");

eye.addEventListener("click", () => {
  //method 1

  //   if (input.type === "password") {
  //     input.type = "text";
  //   } else {
  //     input.type = "password";
  //   }

  //method 2
  input.type === "password" ? (input.type = "text") : (input.type = "password");
});
