const mobileBtn = document.querySelector("#mobileBtn");
const mobileSidebar = document.querySelector("#mobileSidebar");

mobileBtn.addEventListener("click", () => { 
    mobileSidebar.classList.toggle("mobile-sidebar--open");
});

