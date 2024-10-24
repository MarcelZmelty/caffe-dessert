export default class Dessert {
    constructor(data) {
        this.id = data.id;
        this.image = data.image;
        this.name = data.name;
        this.category = data.category;
        this.price = data.price;
    }
    createMenuPosition() {
        const element = document.createElement('div')
        element.classList.add('menu-position')
        element.innerHTML = `
        <div class="menu-position__img-box">
          <img src="${this.image.desktop}" alt="picture of item on the menu" class="menu-position__image">
        </div>
        <button class="menu-position__button"><img src="./assets/images/icon-add-to-cart.svg" alt="shoppingcart icon"> Add to Cart</button>
        <div class="menu-position__description">
          <p class="menu-position__category">${this.category}</p>
          <p class="menu-position__name">${this.name}</p>
          <p class="menu-position__price">$${this.price}</p>
        </div>
        `
        return element
    }
}