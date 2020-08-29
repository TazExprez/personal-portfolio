var openMenuBtn = document.getElementsByClassName("open-menu-icon");
var closeMenuBtn = document.getElementsByClassName("close-menu-icon");
var bodyElement = document.getElementsByTagName("body");
var openedMenu = document.getElementById("opened-menu");

var clickedOpenMenuBtn = function () {
  openedMenu.classList.toggle("active");

  bodyElement[0].classList.toggle("active");

  openMenuBtn[0].style.opacity = 0;
};

var clickedCloseMenuBtn = function () {
  openedMenu.classList.toggle("active");

  bodyElement[0].classList.toggle("active");

  openMenuBtn[0].style.opacity = 1;
};

openMenuBtn[0].addEventListener("click", clickedOpenMenuBtn);
closeMenuBtn[0].addEventListener("click", clickedCloseMenuBtn);
document.querySelectorAll(".opened-menu-btn").forEach((mobilePageLinkBtn) => {
  mobilePageLinkBtn.addEventListener("click", clickedCloseMenuBtn);
});
