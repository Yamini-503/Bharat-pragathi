// Get the cart count display element
const cartCountDisplay = document.getElementById('cart-count');

// Get the cart items storage element
const cartItemsStorage = document.getElementById('cart-items');

// Initialize the cart items array
let cartItems = [];

// Function to update the cart count display
function updateCartCount() {
  cartCountDisplay.textContent = cartItems.length;
}

// Function to add an item to the cart
function addToCart(event) {
  event.preventDefault();

  // Get the product ID, name, and price from the link element
  const productId = event.target.dataset.productId;
  const productName = event.target.dataset.productName;
  const productPrice = event.target.dataset.productPrice;

  // Create a new cart item object
  const cartItem = {
    id: productId,
    name: productName,
    price: productPrice,
  };

  // Add the cart item to the cart items array
  cartItems.push(cartItem);

  // Update the cart count display
  updateCartCount();

  // Update the cart items storage element
  const cartItemHTML = `
    <div class="cart-item">
      <span>${cartItem.name}</span>
      <span>$${cartItem.price}</span>
    </div>
  `;
  cartItemsStorage.insertAdjacentHTML('beforeend', cartItemHTML);
}

// Add event listener to the buy now link
document.querySelectorAll('.buy-now').forEach((link) => {
  link.addEventListener('click', addToCart);
});