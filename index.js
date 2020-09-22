// Function open sidebar menu
function openMenu() {
  const menu = document.getElementById("popup");
  menu.classList.add("visible");

  const sidebar = document.getElementById("sidebar-menu");
  sidebar.classList.add("hidden");
}

const logo = document.getElementById("sidebar-menu-logo");
logo.addEventListener("click", openMenu);


// Function close sidebar menu
function closeMenu() {
  const menu = document.getElementById("popup");
  menu.classList.remove("visible");

  const sidebar = document.getElementById("sidebar-menu");
  sidebar.classList.remove("hidden");
}

const closeBtn = document.getElementById("popup-close");
closeBtn.addEventListener("click", closeMenu);