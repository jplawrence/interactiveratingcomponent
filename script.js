var button = document.getElementById("submit-btn");
var ratingSection = document.getElementById("rating");
var rating = document.getElementById("star-rating");


var li1 = document.getElementById("rate-1");
var li2 = document.getElementById("rate-2");
var li3 = document.getElementById("rate-3");
var li4 = document.getElementById("rate-4");
var li5 = document.getElementById("rate-5");

let ratingNum = [4]

function changeColor1() {
  li1.style.background = "hsl(214, 19%, 47%)";
  ratingNum[0] = li1.innerHTML;
}
function changeColor2() {
    li2.style.background = "hsl(214, 19%, 47%)";
    ratingNum[0] = li2.innerHTML;
}
  function changeColor3() {
    li3.style.background = "hsl(214, 19%, 47%)";
    ratingNum[0] = li3.innerHTML;
  }
  function changeColor4() {
    li4.style.background = "hsl(214, 19%, 47%)";
    ratingNum[0] = li4.innerHTML;
  }
  function changeColor5() {
    li5.style.background = "hsl(214, 19%, 47%)";
    ratingNum[0] = li5.innerHTML;
  }


button.addEventListener("click", function revealCard() {
    ratingSection.style.display = "none";
    rating.innerHTML = ratingNum[0];
})
