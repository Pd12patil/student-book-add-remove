const emojis = [
  "😀","😂","😍","😎","🤔","😢",
  "🎉","🚀","🌟","❤️","👍","👋",
  "🥳","🎂","🐶","🐱","🍕","🍣",
  "🏖️","🌈","🌍","✨","🔥","🦄",
  "🤖","💡","🎶","🏆","🚴‍♂️","💪",
  "🌻","🐶","🐱","🐭","🐹","🐰",
  "🦊","🐻","🐼","🐨","🐯","🦁",
  "🐮","🐷","🐸","🐵","🐔","🐧",
  "🐦","🐤","🦉","🐺","🦄","🐝",
  "🐞","🦋","🐢","🐍","🦓","🦒",
  "🐘","🦏","🐫","🦙","🐟","🐙",
  "🦐","🦀","🐚","👨‍⚕️","🤠","🧑‍🦰"
];

function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

const student = ["Pratik", "Krushna", "Siddhart", "Abhishek", "Aniket"];

function loadStudent() {
  const studentContainer = document.getElementById("student-container");

  studentContainer.innerHTML = "";

  for (let i = 0; i < student.length; i++) {
    studentContainer.innerHTML += `<div class="student-card"> ${getRandomEmoji()} ${
      i + 1
    } ${student[i]} </div>`;
  }
}
loadStudent();

function addStudent() {
  const studentInput = document.getElementById("student-name");
  student.push(studentInput.value);
  studentInput.value = "";
  loadStudent();
}

function removeStudent() {
  const studentInput = document.getElementById("student-name");
  const studentIndex = student.indexOf(studentInput.value);
  studentInput.value = "";
  student.splice(studentIndex, 1);
  loadStudent();
}
