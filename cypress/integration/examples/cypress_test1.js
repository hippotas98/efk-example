
const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomString = (length) => {
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i=0; i<length; i++) 
        result += possible.charAt(getRandomInt(0, possible.length));
    return result
}

const productId = getRandomInt(1, 6);

const categoryId = getRandomInt(1, 3)

context('Cypress for em', () => {
    beforeEach(() => {
      cy.visit('http://localhost')
    })

    it('can add to carts', () => {
        
        cy.get(':nth-child(' + productId +  ')> .thumbnail > .product_wrapper > a > .product-title').click()
        cy.get("button").get(':nth-child(3) > .btn').click()
        cy.get("button").get('.btnAddToCart > .btn').click()
    })

    it('can search for products', () => {
        cy.get('#frm_search').type('pull')
        cy.get('#btn_search').click()
        cy.get('.product-title').click()
    })

    it('can click to another products of other categories', () => {
        cy.get('.col > ul > :nth-child(' + categoryId + ') > a').click()
    })

    it('can pay for products', () => {
        cy.get(':nth-child(' + productId + ') > .thumbnail > .product_wrapper > a > .product-title').click()
        cy.get("button").get(':nth-child(3) > .btn').click()
        cy.get("button").get('.btnAddToCart > .btn').click()
        cy.get('.menu-btn').click()
        cy.get('#cart > :nth-child(1) > :nth-child(1) > :nth-child(3) > :nth-child(2) > a').click()
        cy.get('#shipEmail').type(getRandomString(5))
        cy.get('#newCustomerPassword').type(getRandomString(5))
        cy.get('#createCustomerAccount').click()
        cy.get('#stripeButton').click()
    })
})
