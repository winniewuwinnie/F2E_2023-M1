// // timer
// const d = document.querySelector(".d");
// const h = document.querySelector(".h");
// const m = document.querySelector(".m");
// const s = document.querySelector(".s");
// setInterval(function () {
//   let nowTime = new Date();
//   let endTime = new Date("2024-01-13T09:00:00.000+08:00"); // "西元年-月-日T時:分:秒.毫秒 時區(+/-)"
//   let offsetTime = (endTime - nowTime) / 1000; //以秒為單位
//   let sec = parseInt(offsetTime % 60); //秒
//   let min = parseInt(offsetTime / 60) % 60; //分
//   let hr= parseInt((offsetTime / 60 / 60) % 24); //時
//   let day = parseInt(offsetTime / 24 / 60 / 60); //日
//   // console.log(day,hr,min,sec);
//   if (endTime > nowTime) {
//     if (sec < 10) {
//       sec = "0" + sec;
//     }
//     s.textContent = sec;
//     h.textContent = hr;
//     m.textContent = min;
//     d.textContent = day;
//   }
// }, 1000);


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

//issues card change
const issuesCardBtnList = document.querySelector(".list");
const issuesCardBtn = document.querySelectorAll(".item");
const issuesCard = document.querySelectorAll(".card");
issuesCardBtnList.addEventListener("click", function (e) {
issuesCardBtn.forEach(function (btn, btnIndex) {
    let targetBtn = e.target;
    btn.classList.remove("active");
    targetBtn.classList.add("active");

    issuesCard.forEach(function (card, cardIndex) {
      if (targetBtn.textContent === card.dataset.cnt) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    })
  })
})