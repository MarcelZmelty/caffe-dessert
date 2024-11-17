export default class Dessert {
  constructor(data) {
    this.id = data.id;
    this.image = data.image;
    this.name = data.name;
    this.category = data.category;
    this.price = data.price;
    this.amount = 0
  }
  createMenuPosition() {
    const element = document.createElement('div')
    element.classList.add('menu__position-box')
    element.innerHTML = `
        <div class="menu__img-box">
            <img 
    src="${this.image.mobile}" 
    srcset="
      ${this.image.mobile} 480w, 
      ${this.image.tablet} 800w, 
      ${this.image.desktop} 1200w" 
    sizes="(max-width: 600px) 480px, 
           (max-width: 900px) 800px, 
           1200px"
    alt="Picture of item on the menu" 
    class="menu__image">
          <div class="menu__button"><img src="./assets/images/icon-add-to-cart.svg" alt="shoppingcart icon"> Add to Cart</div>
        </div>
        <div class="menu__description">
          <p class="menu__category">${this.category}</p>
          <p class="menu__name">${this.name}</p>
          <p class="menu__price">$${(this.price).toFixed(2)}</p>
        </div>`;
    const cartElement = document.querySelector('.cart')
    const button = element.querySelector('.menu__button');
    button.addEventListener('click', () => {
      this.addToCart(cartElement)
    })

    return element
  }

  addToCart(cartElement) {
    const existingCartItem = Array.from(cartElement.querySelectorAll('.cart__position')).find(cart => cart.querySelector('h3').innerText === this.name)
    if (existingCartItem) {
      this.amount++
      this.updateCartItem(existingCartItem)
    } else {
      this.amount = 1
      this.createCartItem(cartElement)
      this.hideDefault(cartElement)
    }
  }

  createCartItem(cartElement) {
    const newCartElement = document.createElement('div')
    newCartElement.classList.add('cart__position')
    newCartElement.id = this.name.toLowerCase().replace(/ /g, "-")
    newCartElement.innerHTML = `
        <h3 class="cart__item-name">${this.name}</h3>
        <div class="cart__item-description">
          <p class="cart__item-amount">${this.amount}x</p>
          <p class="cart__item-price">$${(this.price).toFixed(2)}</p>
          <p class="cart__item-price-sum">$${(this.amount * this.price).toFixed(2)}</p>
        </div>
        <button class="cart__delete-button"><img class="cart__delete-button-img" src="./assets/images/icon-remove-item.svg" alt="deleting button"></button>
    `
    const cartElementButton = newCartElement.querySelector('.cart__delete-button')
    cartElementButton.addEventListener('click', () => {
      cartElement.removeChild(newCartElement)
      this.hideDefault(cartElement)
    })
    cartElement.appendChild(newCartElement)
  }

  updateCartItem(cartItem) {
    const refreshItemAmount = cartItem.querySelector('.cart__item-amount')
    const refreshItemPriceSum = cartItem.querySelector('.cart__item-price-sum')
    refreshItemAmount.innerText = this.amount + 'x'
    refreshItemPriceSum.innerText = '$' + (this.amount * this.price).toFixed(2);
    return
  }

  hideDefault(cartElement) {
    const cartDefault = cartElement.querySelector('.cart__default-view')
    if (cartElement.children.length === 2) {
      cartDefault.style.display = 'block'
    } else {
      cartDefault.style.display = 'none'
    }
  }
}