// event date change
// const prev = document.querySelector(".prev");
// const next = document.querySelector(".next");
// const nums = document.querySelectorAll(".num");
// const line = document.querySelector(".line");

// let currentNum = 1;

// function init() {
//   update();
// }
// init();

// prev.addEventListener("click", function (e) {
//   if (currentNum > 1) {
//     currentNum--;
//     line.style.width = (parseInt(line.style.width) - 33) + "%";
//   } else if (currentNum <= 1) {
//     currentNum = 1;
//   }
//   update();
// })

// next.addEventListener("click", function (e) {
//   if (currentNum < nums.length) {
//     line.style.width = currentNum * 33 + "%";
//     currentNum++;
//   } else if (currentNum >= nums.length) {
//     currentNum = nums.length;
//   }
//   update();
// })

// function update() {
//   if (currentNum === 1) {
//     prev.disabled = true;
//   } else if (currentNum === nums.length) {
//     next.disabled = true;
//   } else {
//     prev.disabled = false;
//     next.disabled = false;
//   }

//   nums.forEach(function (item, index) {
//     if (currentNum > index) {
//       item.classList.add("active")
//     } else {
//       item.classList.remove("active")
//     }
//   })
// }