import { roundHalfUp } from "./helper.js"
export default class Product {
    #tax = 0

    constructor({ name, price, tax = 0 }) {
        this.name = name
        this.price = price
        this.#tax = tax
    }

    get tax() {
        return roundHalfUp(this.price * this.#tax, 2);
    }
}
