import { roundHalfUp } from "./helper.js"
export default class Cart {
    items = {}
    #total = 0
    #tax = 0
    #totalItems = 0

    addItem(item, quantity = 1) {
        const product = this.getItem(item.name)

        product.price = item.price
        product.quantity += quantity

        this.#total += item.price * quantity

        this.#tax += item.tax * quantity

        this.#totalItems += quantity
    }

    getItem(name) {
        if (!this.items[name]) {
            this.items[name] = {
                name,
                price: 0,
                quantity: 0
            }
        }

        return this.items[name]
    }

    get totalItems() {
        return this.#totalItems
    }

    get tax() {
        return roundHalfUp(this.#tax, 2)
    }

    get total() {
        return roundHalfUp(this.#total + this.tax, 2)
    }
}

