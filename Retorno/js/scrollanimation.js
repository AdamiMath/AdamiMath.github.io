const target = document.querySelectorAll('[data-anime]');
const header = document.getElementById('bottom');
const animationClass = "animate";

function animeScroll(){
    const windowTop = window.pageYOffset + 500;
    target.forEach(function(element){
        if((windowTop)  > element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
        

    })
}

window.addEventListener('scroll', function(){
    animeScroll();
})





