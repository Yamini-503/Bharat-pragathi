const wrap = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const iconClose = document.querySelector(".icon-close");

// Show registration form when clicking the register link
registerLink.addEventListener("click", () => {
  wrap.classList.add('active');
});

// Show login form when clicking the login link
loginLink.addEventListener("click", () => {
  wrap.classList.remove('active'); // Switch to login
});

// Close the popup when clicking the close icon
iconClose.addEventListener("click", () => {
  wrap.classList.remove('active'); // Close the popup
});

// Show the wrapper (popup) when clicking the login button
document.querySelector('.btnlogin').addEventListener('click', () => {
  wrap.classList.remove('active'); // Show login form
  wrap.classList.add('active-popup'); // Activate the popup
});
