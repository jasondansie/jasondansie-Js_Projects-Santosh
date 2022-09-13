// TODO: when the user clicks on '#menu-sidebar' => toggle the class 'show' on '#app-sidebar'

sideBarButton = document.querySelector("#app-sidebar");

appSidebar = document.querySelector("#app-sidebar");

openSideBar = () => {
    console.log("it's open");
    appSidebar.classList.toggle("show");
}

sideBarButton.addEventListener("click", openSideBar);

/* short hand way to do it

document.querySelector("#app-sidebar").addEventListener("click", () => {
    document.querySelector("#app-sidebar").toggle("show");
})


*/
