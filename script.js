let container2 = document.querySelector(".container2");
let container3 = document.querySelector(".container3");
let checkIcon = document.querySelector(".check-icon");
let XIcon = document.querySelector(".Xcheck-icon");
const createTypeNoteBtn = document.querySelector(".btn-success");

let i = 0;

XIcon.addEventListener("click", () => {
  typeNote();
});

function typeNote() {
  console.log("hi");
  if (container3.style.display == "none") {
    container3.style.display = "block";
  } else {
    container3.style.display = "none";
  }
}
createTypeNoteBtn.addEventListener("click", typeNote);

// function createNote() {}

function margin() {
  let random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];
  return random_margin[Math.floor(Math.random() * random_margin.length)];
}

function rotate() {
  let random_rotate = [
    "rotate(3deg)",
    "rotate(1deg)",
    "rotate(-1deg)",
    "rotate(-3deg)",
    "rotate(-5deg)",
    "rotate(-10deg)",
  ];
  return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}

function color() {
  let random_color = [
    "#c2ff3d",
    "#F7C04A",
    "#F9DBBB",
    "#3A1078",
    "#FF5F9E",
    "#A75D5D",
  ];
  if (i > random_color - 1) {
    i = 0;
  }
  return random_color[i++];
}
