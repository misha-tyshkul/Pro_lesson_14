const mainFormInput = document.getElementById("name");
const mainContainer = document.getElementsByClassName("container")[0];

mainFormInput.addEventListener("focus", function (e) {
  mainContainer.classList.add("show");
});

mainFormInput.addEventListener("blur", function (e) {
  mainContainer.classList.remove("show");
});
