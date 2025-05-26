const wrap = document.querySelector(".wrapper");
    const loginLink = document.querySelector(".login-link");
    const registerLink = document.querySelector(".register-link");
    const btnPopup = document.querySelector(".nav-link-btn");
    const iconClose = document.querySelector(".icon-close");

  
    registerLink.addEventListener("click", () => {
      wrap.classList.add('active');
    });
  
    loginLink.addEventListener("click", () => {
      wrap.classList.remove('active');
    
    });
    btnPopup.addEventListener("click", () => {
        wrap.classList.add('active-popup');
      });
      iconClose.addEventListener("click", () => {
        wrap.classList.remove('active-popup');
      });