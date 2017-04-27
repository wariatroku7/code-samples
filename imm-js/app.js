$(document).ready(function() {

//DEFAULTOWE USTAWIENIE POZYCJI STRONY NA SAMĄ GÓRĘ
//$('html,body').scrollTop(0);

//IMPLEMENTACJA KARUZELI Z OPINIAMI
$("#owl-demo").owlCarousel({
    navigation: true, // Show next and prev buttons
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    autoPlay: 6000,
    rewindSpeed: 300
});

//IMPLEMENTACJA KARUZELI Z OFERTAMI PRACY NA ZAKŁADCE KARIERA
$("#owl-demo2").owlCarousel({
    center: true,
    items: 3, //3 items above 1000px browser width
    loop: true,
    itemsDesktop: [1000, 3], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 2], // betweem 900px and 601px
    itemsTablet: [600, 1], //2 items between 600 and 0
    itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
    navigation: true, // Show next and prev buttons
    slideSpeed: 300,
    paginationSpeed: 400,
    autoPlay: 6000,
    rewindSpeed: 300
});

//IMPLEMENTACJA KARUZELI FILTRUJĄCEJ ARTYKUŁY
$("#owl-demo3").owlCarousel({
    items: 4, //10 items above 1000px browser width
    itemsDesktop: [1000, 3], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 2], // betweem 900px and 601px
    itemsTablet: [600, 1], //2 items between 600 and 0
    itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
    navigation: true, // Show next and prev buttons
    slideSpeed: 300,
    paginationSpeed: 400,
    rewindSpeed: 300
});

//OBLICZANIE WYSOKOSCI OPINII KLIENTÓW
var opinions = []; //stworzenie pustego arraya na wszystkie elementy z opiniami klientów
$(".opinions2 .find").each(function() {
    opinions.push($(this).height()) //wypychamy wysyokość każdego elementu z opiniami do arraya
});
var largest = Math.max.apply(Math, opinions) + "px"; //stworzenie zmiennej, która weźmie największą wartość z arraya
var myElements = document.querySelectorAll('.opinions2 .item');
for (var i = 0; i < myElements.length; i++) {
    myElements[i].style.height = largest; //przypisanie zmiennej largest jako height wszystkich elementów z opiniami
};

//IMPLEMENTACJA PRZYCISKU NA STRONIE DO PODJEŻDŻANIA Z POWROTEM DO GÓRY STRONY I DO POWROTU DO GŁÓWNEJ
var amountScrolled = 300; //zmienna okreslająca długość scrolla

$(window).scroll(function() { //funkcja odpowiadająca za przyciski w dolnych rogach ekranu
    if ($(window).scrollTop() > amountScrolled) {
        $('a.back-to-top').fadeIn('slow'); //pokazywanie się przycisku
        $('a.back-to-home').fadeIn('slow'); //pokazywanie się przycisku
    } else {
        $('a.back-to-top').fadeOut('slow'); //znikanie przycisku
        $('a.back-to-home').fadeOut('slow'); //znikanie przycisku
    }
});
$('a.back-to-top').click(function() { //funkcja po kliknięciu w przycisk w prawym dolnym rogu ekranu
    $('html, body').animate({ //animacja po kliknięciu w przycisk
        scrollTop: 0
    }, 500);
    return false;
});

//ZAPISYWANIE ADRESU E-MAIL W LOCAL STORAGE I PRZEKAZYWANIE GO DO FORMULARZA REJESTRACYJNEGO

var form = document.getElementsByClassName("call-to-action"); //zmienna zawierająca wszystkie elementy CTA
var send = document.getElementsByClassName("confirm-email"); //zmienna zawierająca wszystkie buttony w CTA
var email = document.getElementsByClassName("set-email"); //zmienna zawierająca wszystkie inputy do wprowadzenia maila w CTA
for (var i = 0, l = form.length; i < l; i++) { //pętla po wszystkich CTA na danej stronie
    (function(i) {
        var mail = email[i]; //zmienna pomocnicza zawierająca i-tą pozycję inputu w arrayu
        var subpage = send[i]; ///zmienna pomocnicza zawierająca i-tą pozycję buttona w arrayu
        subpage.addEventListener("click", function() { //funkcja wykonująca się po kliknięciu w button w CTA
            localStorage.setItem("email", mail.value); //zapisywanie wartości maila wpisanego do inputa w CTA
            localStorage.setItem("subpage", subpage.name); //zapisywanie miejsca w którym użytkownik kliknął w CTA
        });
    })(i);
};

});
