/// <reference types="Cypress" />

/*
    On completion of this exercise, you can learn the following concepts.
        01. go = To go back or forward in the browser's history, use the cy.go() command.
        02. reload = To reload the page, use the cy.reload() command.
        03. visit = To visit a remote page, use the cy.visit() command.
*/

describe('Location', function () {
    it('go() = Go back or forward in the browsers history', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/navigation");

        cy.location('pathname').should('include', 'navigation')

        cy.go('back')
        cy.location('pathname').should('not.include', 'navigation')

        cy.go('forward')
        cy.location('pathname').should('include', 'navigation')

        // clicking back
        cy.go(-1)
        cy.location('pathname').should('not.include', 'navigation')

        // clicking forward
        cy.go(1)
        cy.location('pathname').should('include', 'navigation')
    })

    it('reload() = Reload the page', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/navigation");

        cy.reload()

        // reload the page without using the cache
        cy.reload(true)
    })

    it('visit() = Visit a remote page', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/navigation");

        cy.visit('https://example.cypress.io/commands/navigation', {
            timeout: 50000, // increase total time for the visit to resolve
        })
    })
})