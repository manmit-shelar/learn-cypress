/// <reference types="Cypress" />

/*
    On completion of this exercise, you can learn the following concepts.
        1. cy.get() = To query any WebElement, use the cy.get() command.
        2. cy.contains() = Find elements by their content using cy.contains()
        3. cy.within() = Find elements within a specific DOM element .within()
        4. cy.root() = Find the root DOM elementcy.root()
        5. Best Practices: Selecting elements
*/

describe('Querying Elements', function () {
    it('get() = Find elements using cy.get()', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/querying");

        //Find element by id
        cy.get('#query-btn').should('contain', 'Button');

        //Find element by class
        cy.get('.query-btn.btn.btn-primary').should('contain', 'Button');

        //Find element by parent - child path
        cy.get('#querying .well>button:first').should('contain', 'Button');

        //Find element by attribute
        cy.get('div[data-test-id="test-example"]').should('have.class', 'example');

        //Check value of an attribute by invoking attr() method
        cy.get('div[data-test-id="test-example"]').invoke('attr', 'data-test-id').should('equal', 'test-example');
        cy.get('div[class="example"]').invoke('attr', 'class').should('equal', 'example');

        //Chain assertions directly to the cy.get() using 'and'
        cy.get('div[data-test-id="test-example"]').should('have.attr', 'data-test-id', 'test-example').and('have.css', 'position', 'static')
    })

    it('contains() = Find elements by their content using cy.contains()', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/querying");

        //Find element by contains()
        cy.get('.query-list').contains('bananas').should('have.class', 'third');
        cy.get('.query-list').contains('apples').should('have.class', 'first');

        //passing a selector to contains will yield the selector containing the text
        cy.get('#querying').contains('ul', 'oranges').should('have.class', 'query-list')
        cy.get('.query-button').contains('Save Form').should('have.class', 'btn')
    })

    it('within() = Find elements within a specific DOM element .within()', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/querying");

        //Find element using within()
        cy.get('.query-form').within(() => {
            cy.get('input:first').should('have.attr', 'placeholder', 'Email')
            cy.get('input:last').should('have.attr', 'placeholder', 'Password')
        })
    })

    it('root() = Find the root DOM elementcy.root()', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/querying");

        // By default, root is the document
        cy.root().should('match', 'html')

        cy.get('.query-ul').within(() => {
            // In this within, the root is now the ul DOM element
            cy.root().should('have.class', 'query-ul')
        })
    })

    it('Best Practices: Selecting elements', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/querying");

        // Worst - too generic, no context
        //cy.get('button').click()

        // Bad. Coupled to styling. Highly subject to change.
        cy.get('.btn.btn-large').click()

        // Average. Coupled to the `name` attribute which has HTML semantics.
        cy.get('[name=submission]').click()

        // Better. But still coupled to styling or JS event listeners.
        cy.get('#main').click()

        // Slightly better. Uses an ID but also ensures the element has an ARIA role attribute
        cy.get('#main[role=button]').click()

        // Much better. But still coupled to text content that may change.
        cy.contains('Submit').click()

        // Best. Insulated from all changes.
        cy.get('[data-cy=submit]').click()
    })
})