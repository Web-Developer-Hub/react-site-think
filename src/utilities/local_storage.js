//set to data add local storage...
const addToDb = (id) => {
    const exists = getDb()
    let shopping_cart = {};

    if (!exists) {
        shopping_cart[id] = 1;
    }
    else {
        shopping_cart = JSON.parse(exists);
        if (shopping_cart[id]) {
            const newCount = shopping_cart[id] + 1;
            shopping_cart[id] = newCount
        }
        else {
            shopping_cart[id] = 1;
        }
    }
    updateDb(shopping_cart)
}

const getDb = () => localStorage.getItem('Shopping_Cart')
const updateDb = (cart) => {
    localStorage.setItem('Shopping_Cart', JSON.stringify(cart));
}

const removeFromDb = (id) => {
    const exists = getDb()
    if (!exists) {

    }
    else {
        const shopping_card = JSON.parse(exists);
        delete shopping_card[id];
        updateDb(shopping_card);
    }
}

export { addToDb, removeFromDb as deleteFromDb }