// ------------button darhad ug soligdon-------------
// const change = document.getElementById("text");
// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   change.textContent = "soligdloo";
// });

// ---input ruu ug biceed button darhad output deer haragdana---
// const input = document.getElementById("nameInput");
// const btn = document.getElementById("showBtn");
// const output = document.getElementById("output");

// btn.addEventListener("click", () => {
//   output.textContent = input.value;
// });

// ---button darhad toog 1-eer nemegduulne---
// const count = document.getElementById("count");
// const btn = document.getElementById("plusBtn");

// btn.addEventListener("click", () => {
//   let current = Number(count.textContent);
//   current++;
//   count.textContent = current;
// });

// ---neg tovc darhad textiig nuuh, dahin darahad gargah---
// const msg = document.getElementById("msg");
// const btn = document.getElementById("toggleBtn");

// btn.addEventListener("click", () => {
//   if (msg.style.display === "none") {
//     msg.style.display = "block";
//   } else {
//     msg.style.display = "none";
//   }
// });

// ---inputed ungu biceed, tovc darahad textiin ungu uurciluh---
// const color = document.getElementById("colorInput");
// const btn = document.getElementById("applyBtn");
// const demo = document.getElementById("demoText");

// btn.addEventListener("click", () => {
//   //   if (color.value === "red") {
//   //     demo.style.color = "red";
//   //   } else {
//   //     demo.style.color = "blue";
//   //   }
//   demo.style.color = color.value;
// });

// ---Checkbox чеклэдэг үед текстийг нуух / тайлах---
// const hide = document.getElementById("hideCheckbox");
// const target = document.getElementById("targetText");

// hide.addEventListener("change", () => {
//   if (checkbox.checked === "none") {
//     checkbox.checked = "block";
//   }
// });

// ---Нэг div дээр дарахад → хэмжээ нь 2 дахин том болох.---
// const box = document.getElementById("box");

// box.addEventListener("click", () => {
//   let odoo = parseInt(box.style.width);
//   let odoo1 = parseInt(box.style.height);
//   let shine = odoo + 50;
//   let shine1 = odoo1 + 50;
//   box.style.height = shine1 + "px";
//   box.style.width = shine + "px";
// });

// ---Box дээр дарахад өнгө random болго---
// const box = document.getElementById("box");

// box.addEventListener("click", () => {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   const randomColor = `rgb(${r}, ${g}, ${b})`;
//   box.style.background = randomColor;
// });

// ---box jijig bol tomruul tom bol jijigruul---
// const box = document.getElementById("box");

// box.addEventListener("click", () => {
//   if (box.offsetWidth <= 150) {
//     box.style.width = "300px";
//   } else {
//     box.style.width = "150px";
//   }
//   if (box.offsetHeight <= 150) {
//     box.style.height = "300px";
//   } else {
//     box.style.height = "150px";
//   }
// });

// ---Box дээр дарахад өргөн ба өндөр нь random утгатай болго---
const box = document.getElementById("box");

box.addEventListener("click", () => {
  let randomWidth = Math.floor(Math.random() * 301) + 100;
  let randomHeight = Math.floor(Math.random() * 301) + 100;
  box.style.width = randomWidth + "px";
  box.style.height = randomHeight + "px";
});
