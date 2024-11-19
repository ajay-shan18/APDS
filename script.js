const validUsername = "NPHH333555492647";
const validPassword = "APDS@2004";

const items = [
  { name: "Rice", price: 20 },
  { name: "Sugar", price: 40 },
  { name: "PalmOil", price: 75 },
  { name: "wheat", price: 25 },
  { name: "Dhal", price: 70 },
  { name: "Kerosine", price: 30 }
];

let totalAmount = 0;

function hideAllPages() {
  document.querySelectorAll(".home-container, .ration-container, .bill-container, .info-page").forEach(page => {
    page.style.display = "none";
  });
}

function goToHome() {
  hideAllPages();
  document.getElementById("home-page").style.display = "block";
}

function goToContact() {
  hideAllPages();
  document.getElementById("contact-page").style.display = "block";
}

function goToAbout() {
  hideAllPages();
  document.getElementById("about-page").style.display = "block";
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === validUsername && password === validPassword) {
    hideAllPages();
    document.getElementById("ration-page").style.display = "block";
    loadItems();
  } else {
    alert("Invalid Credentials");
  }
}

function loadItems() {
  const container = document.getElementById("items-container");
  container.innerHTML = "";
  items.forEach((item, index) => {
    const box = document.createElement("div");
    box.className = "item-box";
    box.innerHTML = `
      <h3>${item.name}</h3>
      <p>Price: ₹${item.price}</p>
      <input type="number" id="quantity-${index}" min="0" placeholder="Qty">
    `;
    container.appendChild(box);
  });
}

function generateBill() {
  totalAmount = 0;
  const billItems = document.getElementById("bill-items");
  billItems.innerHTML = "";

  items.forEach((item, index) => {
    const qty = parseInt(document.getElementById(`quantity-${index}`).value) || 0;
    if (qty > 0) {
      const cost = qty * item.price;
      totalAmount += cost;
      billItems.innerHTML += `<p>${item.name}: ${qty} kg x ₹${item.price} = ₹${cost}</p>`;
    }
  });

  document.getElementById("bill-username").textContent = validUsername;
  document.getElementById("bill-total").textContent = totalAmount;

  hideAllPages();
  document.getElementById("bill-page").style.display = "block";
}
