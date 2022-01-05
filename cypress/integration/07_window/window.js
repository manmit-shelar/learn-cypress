/// <reference types="Cypress" />

/*
    On completion of this exercise, you can learn the following concepts.
        01. window = To get the global window object, use the cy.window() command.
        02. document  = To get the document object, use the cy.document() command.
        03. title = To get the title, use the cy.title() command.
*/

describe('Window Elements', function () {
    it('window() = Get the global window object', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/window");

        cy.window().should('have.property', 'top');
    })

    it('document() = Get the document object', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/window");

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
    })
    
    it('title() = Get the window title', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/window");

        cy.title().should('include', 'Kitchen Sink');
    })
})