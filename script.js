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
  if (container3.style.display == "none") {
    container3.style.display = "block";
  } else {
    container3.style.display = "none";
  }
}
createTypeNoteBtn.addEventListener("click", typeNote);

checkIcon.addEventListener("click", createNote);

function createNote() {
  let noteText = document.querySelector("#note-text").value;

  if (noteText === "") {
    return (container2.innerHTML = "");
  } else {
    let node0 = document.createElement("div");
    let node1 = document.createElement("h1");

    node1.innerHTML = noteText;
    node1.className = "noteStyle";

    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.background = color();

    node0.appendChild(node1);
    container2.appendChild(node0);

    node0.addEventListener("mouseenter", () => {
      node1.style.transform = "scale(1.1)";
    });
    node0.addEventListener("mouseleave", () => {
      node1.style.transform = "scale(1)";
    });
    node0.addEventListener("dblclick", () => {
      node0.remove();
    });
  }

  document.querySelector("#note-text").value = "";
}

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
  if (i > random_color.length - 1) {
    i = 0;
  }
  return random_color[i++];
}
