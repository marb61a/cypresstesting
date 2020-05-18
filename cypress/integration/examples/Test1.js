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
        
        // Parent - Child chaining
        cy.get('.products')
            .find('.product')
            .should('have.length', 4);
        
        // Finding the ADD TO CART button on a specific element
        // in this case the 3rd element as the count will begin 
        // from 0 up
        cy.get('.products')
            .find('.product')
            .eq(2)
            .contains('ADD TO CART')   
            .click()              
    });
});
