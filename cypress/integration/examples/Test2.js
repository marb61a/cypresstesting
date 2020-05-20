describe("Ny First Test Suite", function(){
    it("My First Test Case", function(){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

        // Handling check boxes in Cypress
        // When checking behaviour of checkbox use 'be'
        // When checking values then use have, then uncheck
        // the box when finished
        cy.get('#checkBoxOption1')
            .check()
            .should('be.checked')
            .and('have.value', 'option1')
        
        // There is an opposite method for be which is
        // not be so that if a box is not checked is should 'not be' 
        cy.get('#checkBoxOption1')
            .uncheck()
            .should('not.be.checked')
        
        // Check multiple checkboxes
        cy.get('input[type="checkbox"]')
            .check(['option2', 'option3'])

        
        // Dropdowns
        // There are 2 different types of dropdown, the first type is
        // Static dropdowns 
        
    })
});
