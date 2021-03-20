$(function(){
    $('.slider__items').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 2,
    });
    
    $('.facts__slider').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    });
});
function openCity(evt, cityName) {
var i, tabcontent, tabs__btn;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabs__btn = document.getElementsByClassName("tabs__btn");
    for (i = 0; i < tabs__btn.length; i++) {
        tabs__btn[i].className = tabs__btn[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "flex";
    document.getElementById(cityName).style.opacity = "100%";
    evt.currentTarget.className += " active";

    // cityName.onclick = function () {
    //     let start = Date.now();
    //     let timer = setInterval(function() {
    //     let timePassed = Date.now() - start;

    //     cityName.style.opacity = timePassed / 1 + '%';

    //     if (timePassed > 100) clearInterval(timer);

    //     }, 200);
    // }
    
    document.getElementById("defaultOpen").click();
    document.getElementById("defaultOpen").style.opacity = "100%";
}
