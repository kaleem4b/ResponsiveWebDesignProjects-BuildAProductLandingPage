const emailTextBox = document.querySelector("#email");

window.addEventListener("click", function (e) {
  console.log(e.target.id);

  if (e.target.id === "email") {
    emailTextBox.style.borderBottom = "2px solid var(--logo-color)";
  } else {
    emailTextBox.style.borderBottom = "2px solid black";
  }
});
