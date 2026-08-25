/* ==========================================================================
   FreshCan — cart.js
   Carrinho de compras simples, persistido no navegador do cliente,
   com finalização de pedido via WhatsApp.
   ========================================================================== */

const CART_KEY = "freshcan_cart_v1";

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveCart(cart) {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) { /* ignore */ }
}

let cart = loadCart(); // { productId: qty }

function findProduct(id) {
  return (window.PRODUCTS || []).find((p) => p.id === id);
}

function cartEntries() {
  return Object.entries(cart)
    .map(([id, qty]) => ({ product: findProduct(id), qty }))
    .filter((e) => e.product && e.qty > 0);
}

function cartTotal() {
  return cartEntries().reduce((sum, e) => sum + e.product.price * e.qty, 0);
}

function cartCount() {
  return cartEntries().reduce((sum, e) => sum + e.qty, 0);
}

function addToCart(id, qty = 1) {
  cart[id] = (cart[id] || 0) + qty;
  saveCart(cart);
  renderCart();
  openCart();
}

function setQty(id, qty) {
  if (qty <= 0) { delete cart[id]; }
  else { cart[id] = qty; }
  saveCart(cart);
  renderCart();
}

function removeFromCart(id) {
  delete cart[id];
  saveCart(cart);
  renderCart();
}

/* --------------------------------------------------------------------- */
/* Drawer UI                                                              */
/* --------------------------------------------------------------------- */
function ensureCartDOM() {
  if (document.querySelector(".cart-overlay")) return;

  const overlay = document.createElement("div");
  overlay.className = "cart-overlay";

  const drawer = document.createElement("aside");
  drawer.className = "cart-drawer";
  drawer.innerHTML = `
    <div class="cart-header">
      <h3>Seu pedido</h3>
      <button class="cart-close" aria-label="Fechar carrinho">✕</button>
    </div>
    <div class="cart-items"></div>
    <div class="cart-footer">
      <div class="cart-total">
        <span>Total</span>
        <strong class="cart-total-value">R$ 0,00</strong>
      </div>
      <button class="btn btn-coral btn-block cart-checkout">Finalizar pelo WhatsApp</button>
      <p class="cart-note">Você será direcionado ao WhatsApp da loja para confirmar entrega ou retirada e forma de pagamento.</p>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.appendChild(drawer);

  overlay.addEventListener("click", closeCart);
  drawer.querySelector(".cart-close").addEventListener("click", closeCart);
  drawer.querySelector(".cart-checkout").addEventListener("click", checkoutWhatsApp);
}

function openCart() {
  ensureCartDOM();
  document.querySelector(".cart-overlay").classList.add("is-open");
  document.querySelector(".cart-drawer").classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.querySelector(".cart-overlay")?.classList.remove("is-open");
  document.querySelector(".cart-drawer")?.classList.remove("is-open");
  document.body.style.overflow = "";
}

function renderCart() {
  ensureCartDOM();
  const entries = cartEntries();
  const itemsBox = document.querySelector(".cart-items");
  const totalBox = document.querySelector(".cart-total-value");
  const badges = document.querySelectorAll(".cart-count");

  const count = cartCount();
  badges.forEach((b) => {
    b.textContent = count;
    b.hidden = count === 0;
  });

  if (!entries.length) {
    itemsBox.innerHTML = `
      <div class="cart-empty">
        <div class="ico">🛍️</div>
        <p>Seu carrinho está vazio.<br>Escolha algo fresquinho no cardápio.</p>
      </div>`;
  } else {
    itemsBox.innerHTML = entries
      .map(
        ({ product, qty }) => `
      <div class="cart-item" data-id="${product.id}">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="cart-item-info">
          <h5>${product.name}</h5>
          <div class="cart-item-price">${window.FreshCan.formatBRL(product.price)}</div>
          <div class="qty-control">
            <button class="qty-minus" aria-label="Diminuir quantidade">−</button>
            <span>${qty}</span>
            <button class="qty-plus" aria-label="Aumentar quantidade">+</button>
          </div>
        </div>
        <button class="cart-item-remove">Remover</button>
      </div>`
      )
      .join("");

    itemsBox.querySelectorAll(".cart-item").forEach((el) => {
      const id = el.dataset.id;
      el.querySelector(".qty-plus").addEventListener("click", () => setQty(id, (cart[id] || 0) + 1));
      el.querySelector(".qty-minus").addEventListener("click", () => setQty(id, (cart[id] || 0) - 1));
      el.querySelector(".cart-item-remove").addEventListener("click", () => removeFromCart(id));
    });
  }

  totalBox.textContent = window.FreshCan.formatBRL(cartTotal());
}

function checkoutWhatsApp() {
  const entries = cartEntries();
  if (!entries.length) return;

  let msg = "Olá, FreshCan! 👋 Quero fazer o seguinte pedido:\n\n";
  entries.forEach(({ product, qty }) => {
    msg += `• ${qty}x ${product.name} — ${window.FreshCan.formatBRL(product.price * qty)}\n`;
  });
  msg += `\nTotal: ${window.FreshCan.formatBRL(cartTotal())}`;
  msg += "\n\nPor favor, me confirme a forma de entrega/retirada e o pagamento. Obrigado!";

  window.open(window.FreshCan.buildWhatsAppLink(msg), "_blank");
}

/* --------------------------------------------------------------------- */
/* Ligação com os botões "+" espalhados pelo site                        */
/* --------------------------------------------------------------------- */
function bindAddButtons(root = document) {
  root.querySelectorAll("[data-add-to-cart]").forEach((btn) => {
    btn.addEventListener("click", () => addToCart(btn.dataset.addToCart));
  });
}

function bindCartOpeners() {
  document.querySelectorAll(".cart-btn").forEach((btn) => btn.addEventListener("click", openCart));
}

window.FreshCan = window.FreshCan || {};
Object.assign(window.FreshCan, { addToCart, renderCart, bindAddButtons });

document.addEventListener("DOMContentLoaded", () => {
  ensureCartDOM();
  renderCart();
  bindCartOpeners();
  bindAddButtons();
});
