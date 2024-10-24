import Dessert from "./dessert";
export default class ListGenerator {
    constructor() {
        this.desserts = [];
    }
    dataFetch() {
        fetch('./assets/data/data.json')
            .then(response => response.json())
            .then(data => {
                this.desserts = data.map(dessertData => new Dessert(dessertData));
                this.renderDesserts()
            })
    }
    renderDesserts() {
        const menuList = document.querySelector('.menu')
        menuList.innerHTML = ``
        this.desserts.forEach(menuPosition => {
            menuList.appendChild(menuPosition.createMenuPosition())
        })
    }
}