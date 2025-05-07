const cardElement = document.getElementById("card");

const suits = [
  { class: "spade", symbol: "♠" },
  { class: "club", symbol: "♣" },
  { class: "heart", symbol: "♥" },
  { class: "diamond", symbol: "♦" },
];

const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function generateCard() {
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];
  cardElement.className = `card ${randomSuit.class}`;
  cardElement.innerHTML = `
    <div class="card-content">
      <div class="top-left">${randomValue}${randomSuit.symbol}</div>
      <div style="font-size: 3em;">${randomValue}</div>
      <div class="bottom-right">${randomValue}${randomSuit.symbol}</div>
    </div>
  `;
}

function updateSize() {
  const width = document.getElementById("widthInput").value;
  const height = document.getElementById("heightInput").value;
  cardElement.style.width = `${width}px`;
  cardElement.style.height = `${height}px`;
}

window.onload = () => {
  generateCard();
  updateSize();
  setInterval(generateCard, 5000);
};