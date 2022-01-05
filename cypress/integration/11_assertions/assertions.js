/// <reference types="Cypress" />

/*
    On completion of this exercise, you can learn the following concepts.
        01. Implicit Assertions
            01. should = To make an assertion about the current subject, use the .should() command.
            02. and = To chain multiple assertions together, use the .and() command.
        02. Explicit Assertions
            01. expect = To make a BDD assertion about a specified subject, use expect.
            02. assert = To make a TDD assertion about a specified subject, use assert.
*/

describe('Assertions', function () {
    it('should() = Make an assertion about the current subjecty', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/assertions");

        cy.get('.assertion-table')
            .find('tbody tr:last').should('have.class', 'success')
            .find('td')
            .first()
            // checking the text of the  element in various ways
            .should('have.text', 'Column content')
            .should('contain', 'Column content')
            .should('have.html', 'Column content')
            // chai-jquery uses "is()" to check if element matches selector
            .should('match', 'td')
            // to match text content against a regular expression, first need to invoke jQuery method text() and then match using regular expression
            .invoke('text')
            .should('match', /column content/i);

        // a better way to check element's text content against a regular expression is to use "cy.contains" https://on.cypress.io/contains
        cy.get('.assertion-table')
            .find('tbody tr:last')
            // finds first  element with text content matching regular expression
            .contains('td', /column content/i)
            .should('be.visible');
    })

    it('and() = Chain multiple assertions together', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/assertions");

        cy.get('.assertions-link')
            .should('have.class', 'active')
            .and('have.attr', 'href')
            .and('include', 'cypress.io');
    })

    it('expect() = Make a BDD assertion about a specified subject', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/assertions");

        expect(true).to.be.true
        const o = { foo: 'bar' }
        expect(o).to.equal(o)
        expect(o).to.deep.equal({ foo: 'bar' })
        // matching text using regular expression
        expect('FooBar').to.match(/bar$/i)
    })

    it('assert() = Make a TDD assertion about a specified subject', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/assertions");

        const person = {
            name: 'Joe',
            age: 20,
        }
        assert.isObject(person, 'value is object')
    })
})