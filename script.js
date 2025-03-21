document.addEventListener("DOMContentLoaded", function () {
     let banners = document.querySelectorAll(".banner");
    let prevButton = document.querySelector(".prev");
    let nextButton = document.querySelector(".next");
    let currentIndex = 0;

    function showBanner(index) {
        banners.forEach((banner, i) => {
            banner.style.display = i === index ? "block" : "none";
        });
    }

    document.querySelector(".prev").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + banners.length) % banners.length;
        showBanner(currentIndex);
    });

    document.querySelector(".next").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % banners.length;
        showBanner(currentIndex);
    });

    showBanner(currentIndex);

    window.openNav = openNav;
    window.closeNav = closeNav;
    window.toggleDropdown = toggleDropdown;
});

function openNav() {
    document.getElementById("mySidenav").style.right = "0";
    document.getElementById("overlay").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidenav").style.right = "-300px";
    document.getElementById("overlay").style.display = "none";
}

function toggleDropdown() {
    let dropdown = document.querySelector(".dropdown-content");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}
