const navToggler = document.querySelector(".nav-toggler");
const bar1 = document.querySelector(".bar-1");
const bar2 = document.querySelector(".bar-2");
const bar3 = document.querySelector(".bar-3");
const menu = document.querySelector(".menu");

navToggler.addEventListener("click", () => {
    menu.classList.toggle("active");
    bar1.classList.toggle("active");
    bar2.classList.toggle("active");
    bar3.classList.toggle("active");
})
