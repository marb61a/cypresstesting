describe("Ny First Test Suite", function(){
    it("My First Test Case", function(){
        cy.visit("https://www.rahulshettyacademy.com/seleniumPractise/#/");

        // CYpress only supports CSS locators
        cy.get('.search-keyword').type('ca');

        // Waiting to give page elements a chance to load
        cy.wait(2000)

        // The Get in Cypress acts like the findElement method in Selenium
        // Some elements may exist with the same name but be invisible, this
        // will throw off counts and asserts thus failing tests
        cy.get('.product:visible')
            .should('have.length', 4);

        // Cypress allows the use of aliasing through use of the word as
        // the element aliased will then be reffered to by its alias through
        // the tests
        cy.get('.products').as('productLocator')
        
        // Parent - Child chaining
        cy.get('.productLocator')
            .find('.product')
            .should('have.length', 4);
        
        // Finding the ADD TO CART button on a specific element
        // in this case the 3rd element as the count will begin 
        // from 0 up
        // The below query is the same as cy.get(':nth-child(3) > .product-action > button').click() 
        cy.get('.productLocator')
            .find('.product')
            .eq(2)
            .contains('ADD TO CART')   
            .click()
        
        // Getting a product from the list of product
        // $el is a JQuery wrapper
        cy.get('.productLocator')
            .find('.product')
            .each(($el, index, $list) => {
                // Grabs the text on a specific element
                const vegText = $el.find('h4.product-name').text()

                if(vegText.includes('Cashews')){
                    $el.find('button').click()
                }
            });
        
        // Cypress is asynchronous by  nature unlike Selenium
        cy.get('.brand')
            .then(function(logoelement) {
                cy.log(logoelement.text())
            })
        
        const logo = cy.get('.brand')

    });
});
