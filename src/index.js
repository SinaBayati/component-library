import "./styles.css";

const dropDownBtns = document.querySelectorAll(".drop-down button");
const dropDownUls = document.querySelectorAll(".drop-down ul");

const dropHandler = function dropDownHandler(event){
  event.currentTarget
    .parentElement
    .querySelector("ul")
    .classList
    .toggle("active");
};

dropDownBtns.forEach(btn => {
  btn.addEventListener("click",dropHandler);
});