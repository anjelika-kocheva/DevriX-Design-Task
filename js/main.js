function search(){
    let searchButton = document.querySelector(".header_search i");
    let searchBox = document.querySelector(".header_search");
    searchButton.addEventListener("click", event => {
        searchBox.classList.add("active");
    });
}
search();

function mobileMenu(){
    let menuButton = document.querySelector("#header .burger-menu");
    let menu = document.querySelector("#header .header_navigation");
    menuButton.addEventListener("click", event => {
        menu.classList.toggle("active");
        menuButton.classList.toggle("active");
    });
}
mobileMenu();