document.querySelector(".mobile-menu").addEventListener('click', function() {
    if (document.querySelector(".active-mobile-menu"))
        document.querySelector("nav").querySelector("ul").classList.remove("active-mobile-menu");
    else
        document.querySelector("nav").querySelector("ul").classList.add("active-mobile-menu");
});

document.querySelector("body").addEventListener('click', function(event) {
    desabilitarMenu(event);
});

document.querySelector("body").addEventListener('touchmove', function(event) {
    console.log("oi");
    desabilitarMenu(event);
});

document.querySelector(".flag-brasil").addEventListener('click', function() {
    var urlAtual = window.location.href;
    var novaUrl = "";

    if(window.location.href.includes("/en/"))
        novaUrl = urlAtual.replace("/en/", "/pt/");
    else
        novaUrl = urlAtual.replace("/jp/", "/pt/");

    window.location.href = novaUrl;
});

document.querySelector(".flag-eua").addEventListener('click', function() {
    var urlAtual = window.location.href;
    var novaUrl = "";

    if(window.location.href.includes("/jp/"))
        novaUrl = urlAtual.replace("/jp/", "/en/");
    else
        novaUrl = urlAtual.replace("/pt/", "/en/");

    window.location.href = novaUrl;
});

document.querySelector(".flag-japao").addEventListener('click', function() {
    var urlAtual = window.location.href;
    var novaUrl = "";

    if(window.location.href.includes("/pt/"))
        novaUrl = urlAtual.replace("/pt/", "/jp/");
    else
        novaUrl = urlAtual.replace("/en/", "/jp/");

    window.location.href = novaUrl;
});

function desabilitarMenu(event) {
    // click no ícone
    if (event.target.classList.contains("mobile-menu"))
        return;

    if (event.target.tagName === 'LI')
        return;

    if (event.target.classList.contains("line1"))
        return;

    if (event.target.classList.contains("line2"))
        return;

    if (event.target.classList.contains("line3"))
        return;

    if (event.target.classList.contains("active-mobile-menu"))
        return;

    if (document.querySelector(".active-mobile-menu"))
        document.querySelector("nav").querySelector("ul").classList.remove("active-mobile-menu");
}