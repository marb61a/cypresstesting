describe("Ny First Test Suite", function(){
    it("My First Test Case", function(){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

        // Handling check boxes in Cypress
        cy.get('#checkBoxOption1');
    })
});
