const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
menuBtn.addEventListener("click", () => {
    sideMenu.style.display = "block";
})

closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
})

themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");
    
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})



document.addEventListener("DOMContentLoaded", () => {
    const sidebarItems = document.querySelectorAll("aside .sidebar-item");

    sidebarItems.forEach(item => {
        item.addEventListener("click", () => {
            // Remove active class from all items
            sidebarItems.forEach(i => i.classList.remove("active"));
            // Add active class to the clicked item
            item.classList.add("active");
        });
    });
});