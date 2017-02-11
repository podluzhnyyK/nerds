 var link = document.querySelector(".btn-mail");
 var popup = document.querySelector(".mail-box");
 var close = popup.querySelector(".modal-content-close");
 var login = popup.querySelector("[name=message]");
 var mail = popup.querySelector("[name=e-mail]");
 var form = popup.querySelector("form");
 var storage = localStorage.getItem("login");
 link.addEventListener("click", function (event) {
     event.preventDefault();
     popup.classList.add("mail-box-show");
     if (storage) {
         login.value = storage;
         password.focus();
     } else {
         login.focus();
     }
 });
 close.addEventListener("click", function (event) {
     event.preventDefault();
     popup.classList.remove("mail-box-show");
     popup.classList.remove("modal-error");
 });
 form.addEventListener("submit", function (event) {
     if (!login.value || !mail.value) {
         event.preventDefault();
     } else {
         localStorage.setItem("login", login.value);
     }
 });
 window.addEventListener("keydown", function (event) {
     if (event.keyCode === 27) {
         if (popup.classList.contains("mail-box-show")) {
             popup.classList.remove("mail-box-show");
             popup.classList.remove("modal-error");
         }
     }
 });
