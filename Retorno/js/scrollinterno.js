const menuLinks = document.querySelectorAll('.lista-menu a[href^="#"]');

function getDistanceFromTheTop(element){
    const id = element.getAttribute("href");
    document.querySelector(id).offsetTop;

}

function nativeScroll(getDistanceFromTheTop){
    window.scroll({
        top: getDistanceFromTheTop,
        behavior: "smooth",  
    });
}

function scrollToSection(event){
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
    nativeScroll(distanceFromTheTop);
}

menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
})