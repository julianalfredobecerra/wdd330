import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];

  const listEl = document.querySelector(".product-list");
  const footerEl = document.querySelector(".cart-footer");
  const totalEl = footerEl.querySelector(".cart-total");

  if (cartItems.length === 0) {
    listEl.innerHTML = `<li class="cart-empty">Your cart is empty.</li>`;
    footerEl.classList.add("hide");
    return;
  }

  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  listEl.innerHTML = htmlItems.join("");

  const total = cartItems
    .reduce((sum, item) => sum + parseFloat(item.FinalPrice), 0)
    .toFixed(2);

  footerEl.classList.remove("hide");
  totalEl.textContent = `Total: $${total}`;
}

function cartItemTemplate(item) {
  return `
    <li class="cart-card divider">
      <a href="#" class="cart-card__image">
        <img src="${item.Image}" alt="${item.Name}" />
      </a>
      <a href="#"><h2 class="card__name">${item.Name}</h2></a>
      <p class="cart-card__color">${item.Colors[0].ColorName}</p>
      <p class="cart-card__quantity">qty: 1</p>
      <p class="cart-card__price">$${item.FinalPrice}</p>
    </li>`;
}

renderCartContents();
