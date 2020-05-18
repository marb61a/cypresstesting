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
            .should('have.length', 4)
    });
});
