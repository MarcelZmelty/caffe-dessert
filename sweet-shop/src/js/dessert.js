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
    element.classList.add('menu__position-box')
    element.innerHTML = `
        <div class="menu__img-box">
          <img src="${this.image.mobile}" 
          srcset="
          ${this.image.tablet} 800w, 
          ${this.image.desktop} 1200w" 
        sizes="(max-width: 900px) 800px, 1200px"
          alt="picture of item on the menu" class="menu__image">
          <div class="menu__button"><img src="./assets/images/icon-add-to-cart.svg" alt="shoppingcart icon"> Add to Cart</div>
        </div>
        <div class="menu__description">
          <p class="menu__category">${this.category}</p>
          <p class="menu__name">${this.name}</p>
          <p class="menu__price">$${(this.price).toFixed(2)}</p>
        </div>
        `
    return element
  }
}