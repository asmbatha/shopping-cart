export default class Cart {
    items = {}
    #total = 0
    #totalItems = 0

    #taxRate = 0

    constructor(tax = 0) {
        this.#taxRate = tax
    }

    addItem(item, quantity = 1) {
        const product = this.getItem(item.name)

        product.price = item.price
        product.quantity += quantity

        this.#total += (item.price * quantity)

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

    get total() {
        return roundHalfUp(this.#total + this.tax, 2)
    }

    // All totals should be rounded up to 2 decimal places, i.e. 0.565 should result in 0.57 but 0.5649 should result in 0.56
    get tax() {
        return roundHalfUp(this.#total * this.#taxRate, 2);
    }
}

function roundHalfUp(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
