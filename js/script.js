  const products = [
    {
      name: "Atreyapuram Pootharekulu",
      image: "images/my-images/Atreyapuram-pootharekulu.jpg",
      description: "Pootharekulu is one of the most famous Andhra sweets, made with rice flour and jaggery.",
      date: "September 26, 2024",
      author: "Admin"
    },
    {
      name: "Product 2",
      image: "images/image_2.jpg",
      description: "Product 2 Description",
      date: "September 25, 2024",
      author: "Admin"
    }
  ];

  // Function to add product to recent blog section
  function addToRecentBlog(product) {
    // Get the recent blog section
    const recentBlogSection = document.getElementById("recent-blog-section");

    // Create blog entry HTML dynamically
    const blogEntry = `
      <div class="block-21 mb-4 d-flex">
        <a class="blog-img mr-4" style="background-image: url('${product.image}');"></a>
        <div class="text">
          <h3 class="heading-1"><a href="#">${product.name}</a></h3>
          <p>${product.description}</p>
          <div class="meta">
            <div><a href="#"><span class="icon-calendar"></span> ${product.date}</a></div>
            <div><a href="#"><span class="icon-person"></span> ${product.author}</a></div>
          </div>
        </div>
      </div>
    `;

    // Add new blog entry to the recent blog section
    recentBlogSection.innerHTML += blogEntry;
  }

  // Example usage: Add the first product to the recent blog
  addToRecentBlog(products[0]);


  // form popup message contact
  $(document).ready(function() {
    $('#contactForm').on('submit', function(e) {
      e.preventDefault(); // Prevent the default form submission

      // Optionally, you can add validation here

      // Show the modal
      $('#submitModal').modal('show');

      // Reset the form fields
      $(this).trigger('reset');
    });
  });







  /////////////////////////////////////////////////////
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
  
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

