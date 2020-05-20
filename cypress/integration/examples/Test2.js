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
        // Static dropdowns which is called this because the available
        // options in the dropdown are fixed. A dynamic dropdown on the 
        // otherhand will have options based on an input
        // Statcic Dropdowm
        cy.get('select')
            .select('option2')
            .should('have.value', 'option2')

        // Dynamic dropdowns
        // These can be a lot more tricky than static dropdows
        // This will type the 3 characters into the input box
        cy.get('#autocomplete')
            .type('ind')
        
        cy.get('.ui-menu-item div')
            .each(($el, index, $list) => {
                // After entering the 'ind' characters if India appears then choose it
                // JS will use triple equals to check equality
                if($el.text() === 'India'){
                    $el.click();
                }
            })

    })
});
