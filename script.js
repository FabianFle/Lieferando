let menus = ['Margherita Pizza', 'Salami Pizza', 'Hawei Pizza', 'Döner Pizza'];
let menuTexts = ['', 'mit Salami', 'mit Ananas und Schinken', 'mit Dönerfleich, Zwiebeln und Joghurtsoße',];
let menuPrices = ['7', '8.20', '8.40', '9'];

let baskets = [];
let basketTexts = [];
let basketPrices = [];
let basketAmounts = [];

let deliveryCosts = 2.50;
let subTotals = 0;
let basketSumme = 0;


/*######################################################################################################*/
/*######################################################################################################*/

/*Rendert die menüs*/

function render() {
    let myMenu = document.getElementById('myMenu');
    myMenu.innerHTML = '';
    for (let i = 0; i < menus.length; i++) {
        const menu = menus[i];
        const menuText = menuTexts[i];
        const menuPrice = menuPrices[i];
        myMenu.innerHTML += /*html*/`
        <div class="menuSettings"><div class="spaceBetween"><img src="img/plus.png" class="plusIcon" onclick="addMenu(${i})">
                    <h3>${menus[i]}</h3></div>
                    <p>${menuTexts[i]}</p>
                    <span class="spanMenu">${menuPrices[i]}€</span>
                    </div>
            `;
    }
    renderBasket();
}

/*######################################################################################################*/
/*######################################################################################################*/

/*Rendert den Warenkorp*/

function renderBasket() {
    let basketMenu = document.getElementById('basketMenu');
    basketMenu.innerHTML = '';
    for (let j = 0; j < baskets.length; j++) {
        const basket = baskets[j];
        const basketText = basketTexts[j];
        const basketPrive = basketPrices[j];
        basketMenu.innerHTML += /*html*/`
            <div class="basketDiv">
                <span class="basketAmounts">${basketAmounts[j]}x</span>
                <span class="basketMenuName">${baskets[j]}</span>
                <span class="basketMenuDiscription">${basketTexts[j]}</span>
                <span class="basketMenuPrive">${basketPrices[j]}€</span>
                <img src="img/müll.png" onclick="deletBasketMenu(${j})" class="deletMenu">
            </div>
        `
    }
    calculateThePrice();
    basketMenuRendern();
}


/*######################################################################################################*/
/*######################################################################################################*/

/*Rendert die Endsumme vom Warenkorp*/

function renderBasketSumme() {
    let basketMenu = document.getElementById('basketMenu');
    basketMenu.innerHTML += /*html*/`
    <div class="basketSummeDiv">
                <span class="basketSummeText"><span class="margin"><b>Zwischensumme:</b></span> ${subTotals.toFixed(2)}€</span>
                <span class="basketSeparator">--------------------------</span>
                <span class="basketSummeDeliveryCosts"><span class="margin"><b>Lieferkosten</b></span> ${deliveryCosts.toFixed(2)}€</span>
                <span class="basketSeparator">--------------------------</span>
                <span class="basketSumme"> <span class="margin"><b>Summe:</b></span> ${basketSumme.toFixed(2)}€</span>
    </div>
    `;
    renderBasketButton()
}


/*######################################################################################################*/
/*######################################################################################################*/

/*Rendert den Bezahlbutton*/

function renderBasketButton() {
    let basketMenu = document.getElementById('basketMenu');
    basketMenu.innerHTML += /*html*/ `
    <div class="basketPayButtonDiv">
        <button onclick="basketPayButton()" class="payButtonInBasket">
            Bezahlen
        </button>
    </div>
    `;
}

function basketPayButton() {
    alert("Deine Bestellung ist eingegangen");

    document.getElementById('basketMenu').innerHTML = "";

}

/*######################################################################################################*/
/*######################################################################################################*/

/*Rendert den hinweiß das nix im warenkopr ist, wenn auch nix drine ist.*/

function basketMenuRendern() {
    cart.innerHTML = '';
    if (baskets.length == 0) {
        document.getElementById('cart');
        cart.innerHTML += /*html*/`
    <span> Ich bin noch Leer, komm und füge ein Menu hinzu.</span>
    <img src="img/warenkorb.png" class="basketImg">
    `
    } else {
        renderBasketSumme()
    }
}


/*######################################################################################################*/
/*######################################################################################################*/

/*Berechnet die Preise im Warenkorp*/

function calculateThePrice() {
    subTotals = 0;
    for (let j = 0; j < basketPrices.length; j++) {
        subTotals = subTotals + basketAmounts[j] * basketPrices[j];
    }
    basketSumme = subTotals + deliveryCosts;
}


/*######################################################################################################*/
/*######################################################################################################*/

/*Menüs in den Warenkorp hinzufügen*/

function addMenu(menuIndex) {
    baskets.push(menus[menuIndex]);
    basketTexts.push(menuTexts[menuIndex]);
    basketPrices.push(menuPrices[menuIndex]);
    basketAmounts.push(1);

    renderBasket();
}


/*######################################################################################################*/
/*######################################################################################################*/

/*Löschen von Menüs im Warenkorp*/

function deletBasketMenu(j) {
    baskets.splice(j, 1);
    basketTexts.splice(j, 1);
    basketPrices.splice(j, 1);
    basketAmounts.splice(j, 1);

    renderBasket();
}


/*######################################################################################################*/
/*######################################################################################################*/

/*Warenkorp in Responsiv ansicht, verbergen und sichbar machen*/

function responsiveBasket() {
    var element = document.getElementById("d-noneResponsive");
    element.classList.remove("shoppingCartDNone");
}

function responsiveBasketRemove() {
    var element = document.getElementById("d-noneResponsive");
    element.classList.add("shoppingCartDNone");
}

/*######################################################################################################*/
/*######################################################################################################*/


/*DarkMode einschalten und ausschalten*/

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


/*######################################################################################################*/
/*######################################################################################################*/

/* Hinweiße bei bestimmten Icons / buttons */

function comingSoon() {
    alert(" Kommt Bald! ")
}

function inProgressBeta() {
    alert(" In Bearbeitung (Beta)")
}


/*######################################################################################################*/
/*######################################################################################################*/

/* ######## Nette kleine Funktionen ######## */

/* Like Button ändern (Gelikt / nicht gelikt) */

function changeImage(tag) {
 tag.src = (String(tag.src).match(/noLike\.png$/) ? "img/like.png" : "img/noLike.png");
}

/*######################################################################################################*/


