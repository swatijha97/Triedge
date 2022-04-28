var sortByRadios = document.querySelectorAll(".custom-control-input");
var sortByRadios = document.querySelectorAll(".custom-control-input");
var sortByDropdown = document.querySelector(".sortby .dropdown-toggle .text");
var text;
Array.from(sortByRadios).forEach(function (radio) {
  radio.addEventListener("click", function (e) {
    text = e.target.parentElement.querySelector(
      ".custom-control-label"
    ).textContent;
    sortByDropdown.textContent = text;
  });
});
