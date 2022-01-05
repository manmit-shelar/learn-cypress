/*
    On completion of this exercise, you can learn the following concepts.
        1. Query for an element
        2. Click an element
        3. Assert an element
*/

describe('Test Suite name - ', () => {
    it('Testcase name', () => {
        //Open URL
        cy.visit('https://example.cypress.io')

        //Query for an element
        cy.contains('type')

        //Click an element
        cy.contains('type').click();

        //Assertion
        cy.url().should('include', '/commands/actions')
    })
})