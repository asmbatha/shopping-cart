import Cart from './Cart.js'
import Product from './Product.js'

// Step 1: Add products to the shopping cart.
// Given:

// An empty shopping cart
// And a product, Dove Soap with a unit price of 39.99
// When:

// The user adds 5 Dove Soaps to the shopping cart
// Then:

// The shopping cart should contain 5 Dove Soaps each with a unit price of 39.99
// And the shopping cart’s total price should equal 199.95
describe('Add products to the shopping cart.', () => {
    const cart = new Cart()
    const soap = new Product({
        name: 'Dove Soap',
        price: 39.99
    });

    cart.addItem(soap, 5)

    test('The shopping cart should contain 5 Dove Soaps each with a unit price of 39.99', () => {
        const item = cart.getItem('Dove Soap')
        expect(item.quantity).toBe(5);
        expect(item.price).toBe(39.99);
    })

    test('The shopping cart\'s total price should equal 199.95', () => {
        expect(cart.total).toBe(199.95);
    })
})

// Step 2: Add additional products of the same type to the shopping cart.
// Given:

// An empty shopping cart
// And a product, Dove Soap with a unit price of 39.99
// When:

// The user adds 5 Dove Soaps to the shopping cart
// And then adds another 3 Dove Soaps to the shopping cart
// Then:

// The shopping cart should contain 8 Dove Soaps each with a unit price of 39.99
// And the shopping cart’s total price should equal 319.92
describe('Add additional products of the same type to the shopping cart.', () => {
    const cart = new Cart()
    const soap = new Product({
        name: 'Dove Soap',
        price: 39.99
    });

    cart.addItem(soap, 5)
    cart.addItem(soap, 3)

    test('The shopping cart should contain 8 Dove Soaps each with a unit price of 39.99', () => {
        const item = cart.getItem('Dove Soap')
        expect(item.quantity).toBe(8);
        expect(item.price).toBe(39.99);
    })

    test('The shopping cart\'s total price should equal 319.92', () => {
        expect(cart.total).toBe(319.92);
    })
})

// Step 3: Calculate the tax rate of the shopping cart with multiple items
// Given:

// An empty shopping cart
// And a product, Dove Soap with a unit price of 39.99
// And another product, Axe Deo with a unit price of 99.99
// And a sales tax rate of 12.5%
// When:

// The user adds 2 Dove Soaps to the shopping cart
// And then adds 2 Axe Deos to the shopping cart
// Then:

// The shopping cart should contain 2 Dove Soaps each with a unit price of 39.99
// And the shopping cart should contain 2 Axe Deos each with a unit price of 99.99
// And the total sales tax amount for the shopping cart should equal 35.00
// And the shopping cart’s total price should equal 314.96
describe('Calculate the tax rate of the shopping cart with multiple items', () => {
    const cart = new Cart()
    const soap = new Product({
        name: 'Dove Soap',
        price: 39.99,
        tax: .125
    });
    const deo = new Product({
        name: 'Axe Deo',
        price: 99.99,
        tax: .125
    });

    cart.addItem(soap, 2)
    cart.addItem(deo, 2)

    test('The shopping cart should contain 2 Dove Soaps each with a unit price of 39.99', () => {
        const item = cart.getItem('Dove Soap')
        expect(item.quantity).toBe(2);
        expect(item.price).toBe(39.99);
    })

    test('The shopping cart should contain 2 Axe Deos each with a unit price of 99.99', () => {
        const item = cart.getItem('Axe Deo')
        expect(item.quantity).toBe(2);
        expect(item.price).toBe(99.99);
    })

    test('The total sales tax amount for the shopping cart should equal 35.00', () => {
        expect(cart.tax).toBe(35.00);
    })

    test('And the shopping cart\'s total price should equal 314.96', () => {
        expect(cart.total).toBe(314.96);
    })
})
