/// <reference types="Cypress" />

/*
    On completion of this exercise, you can learn the following concepts.
        01. hash = To get the current URL hash, use the cy.hash() command.
        02. location = To get window.location, use the cy.location() command.
        03. url = To get the current URL, use the cy.url() command.
*/

describe('Location', function () {
    it('hash() = Get the current URL hash', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/location");

        cy.hash().should('be.empty')
    })

    it('location() = Get window.location', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/location");

        cy.location().should((location) => {
            expect(location.hash).to.be.empty
            expect(location.href).to.eq('https://example.cypress.io/commands/location')
            expect(location.host).to.eq('example.cypress.io')
            expect(location.hostname).to.eq('example.cypress.io')
            expect(location.origin).to.eq('https://example.cypress.io')
            expect(location.pathname).to.eq('/commands/location')
            expect(location.port).to.eq('')
            expect(location.protocol).to.eq('https:')
            expect(location.search).to.be.empty
        })
    })

    it('url() = Get the current URL', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/location");

        cy.url().should('eq', 'https://example.cypress.io/commands/location')
    })
})