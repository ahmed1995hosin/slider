// eng ahmed hosin
// array of src images for each element i
var arraySrc = [
  "img/1_New1.jpg",
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/testimonial-2.jpg",
  "img/testimonial-4.jpg",
];
(function () {
  var box = "";
  for (var i = 0; i < arraySrc.length; i++) {
    box += `<div class="col-lg-4 col-md-6 ">
    <div class="slide__card position-relative rounded-2 overflow-hidden">
      <img src="${arraySrc[i]}" class="w-100" alt="" />
      <div class="layout position-absolute start-0 w-100 h-100 p-4">
        <div class="slide__caption position-absolute">
          <h4>ahmed hosin developer</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Quas, deleniti.
          </p>
        </div>
      </div>
    </div>
  </div>`;
  }
  document.getElementById("row").innerHTML = box;
})();
// lets start
var listLayout = Array.from(document.querySelectorAll(".slide__card .layout"));
var listImages = document.querySelectorAll(".slide__card img");
var popUp = document.querySelector(".popup");
var popUpImg = document.querySelector(".popup__img");
var closeBtn = document.querySelector("#closeBtn");
let gloableIndex;
console.log(listLayout);
for (var i = 0; i < listImages.length; i++) {
  listLayout[i].addEventListener("click", function (e) {
    // console.log(listLayout.includes(e.target));
    gloableIndex = listLayout.indexOf(e.target);
    var imgSrc = e.target.previousElementSibling.getAttribute("src");
    popUpImg.style.backgroundImage = `url(${imgSrc})`;
    popUp.classList.remove("d-none");
  });
}

// console.log(listmages);
// listLayout.forEach(function (image, index) {
//   image.addEventListener("click", function (e) {
//     e.stopPropagation();
//     console.log("layout");
//   });
// });
// function close popup
function closeBtnF() {
  popUp.classList.add("d-none");
}
closeBtn.addEventListener("click", function (e) {
  closeBtnF();
  e.stopPropagation();
});
document.addEventListener("click", function (e) {
  console.log(e.target.classList);
  if (e.target.classList.contains("row")) {
    e.stopPropagation();
    closeBtnF();
  }
});
// next arrow
document
  .querySelector(".popup__img .fa-arrow-left")
  .addEventListener("click", function () {
    perviousNextFun(-1);
  });
// previous arrow
document
  .querySelector(".popup__img .fa-arrow-right")
  .addEventListener("click", function () {
    perviousNextFun(1);
  });

// keydown event

document.body.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key == "Escape") {
    closeBtnF();
  } else if (e.key == "ArrowRight") {
    perviousNextFun(1);
  } else if (e.key == "ArrowLeft") {
    perviousNextFun(-1);
  }
});
// function pervious
function perviousNextFun(step) {
  gloableIndex += step;
  if (gloableIndex >= listLayout.length) gloableIndex = 0;

  if (gloableIndex < 0) gloableIndex = listLayout.length - 1;
  var imgSrc =
    listLayout[gloableIndex].previousElementSibling.getAttribute("src");
  popUpImg.style.backgroundImage = `url(${imgSrc})`;
}
