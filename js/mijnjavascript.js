console.info('Het bestand is geladen.')

var itemsInCart = 0;

function addToCart () {
    itemsInCart++;
    console.info('Product in winkelwagen:' + itemsInCart);
    document.getElementById('cartCount').innerHTML = itemsInCart;   
}

function removeFromCart () {
    if (itemsInCart > 0) {
        itemsInCart--;
    }
    else {
        window.alert ("De winkelkar is leeg.")
    }
}    
function deleteFromCart () {
    itemsInCart = 0;
}
