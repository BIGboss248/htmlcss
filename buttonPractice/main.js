function buttonToggle() {
  let buttonElement = document.querySelector(".mainButton");
  if (buttonElement.innerHTML === "Finish") {
    buttonElement.innerHTML = "Finished";
    buttonElement.classList.add("finishedButton");
    buttonElement.classList.remove("finishButton");
  } else {
    buttonElement.innerHTML = "Finish";
    buttonElement.classList.add("finishButton");
    buttonElement.classList.remove("finishedButton");
  }
}
