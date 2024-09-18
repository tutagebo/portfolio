const targets = document.querySelectorAll(".pop-wraper");
window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    for (const target of targets) {
        const targetPos = target.getBoundingClientRect().top + scroll;
        if (scroll > targetPos - windowHeight) {
            target.classList.add("is-animated");
        }
    }
});

function onClickPopUp(index){
    const popupTargets = document.getElementById(index);
    popupTargets.classList.add("popup-visible");
    const bg = document.getElementById("popup-bg");
    bg.style.display = "block";
    return;
}

function popupClose(){
    const popups = document.getElementsByClassName("popup-window");
    for(const popup of popups){
        popup.classList.remove("popup-visible");
    }
    const bg = document.getElementById("popup-bg");
    bg.style.display = "none";
    return;
}
