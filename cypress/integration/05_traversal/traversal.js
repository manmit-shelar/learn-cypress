/// <reference types="Cypress" />

/*
    On completion of this exercise, you can learn the following concepts.
        01. children = To get children of DOM elements, use the .children() command.
        02. closest  = To get the closest ancestor DOM element, use the .closest() command.
        03. eq = To get a DOM element at a specific index, use the .eq() command.
        04. filter = To get DOM elements that match a specific selector, use the .filter() command.
        05. find = To get descendant DOM elements of the selector, use the .find() command.
        06. first = To get the first DOM element within elements, use the .first() command.
        07. last = To get the last DOM element within elements, use the .last() command.
        08. next = To get the next sibling DOM element within elements, use the .next() command.
        09. nextAll = To get all of the next sibling DOM elements within elements, use the .nextAll() command.
        10. nextUntil = To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.
        11. not = To remove DOM element(s) from the set of elements, use the .not() command. 
        12. parent = To get parent DOM element of elements, use the .parent() command.
        13. parents = To get parents DOM element of elements, use the .parents() command.
        14. parentsUntil = To get parents DOM element of elements until other element, use the .parentsUntil() command.
        15. prev = To get the previous sibling DOM element within elements, use the .prev() command.
        16. prevAll = To get all previous sibling DOM elements within elements, use the .prevAll() command.
        17. prevUntil = To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.
        18. siblings = To get all sibling DOM elements of elements, use the .siblings() command.
*/

describe('Traversing Elements', function () {
    it('children() = Child Element', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/traversal");

        //Trversing to child by children()
        cy.get('.traversal-breadcrumb').children('.active').should('contain', 'Data');
    })

    it('closest() = Closest Element', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/traversal");

        //Find closest element by closest()
        cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group');
    })

    it('eq() = Specific Index Element', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/traversal");

        //Find child element at a specific index
        cy.get('.traversal-list>li').eq(0).should('contain', 'tabby');
        cy.get('.traversal-list>li').eq(1).should('contain', 'siamese');
    })

    it('filter() = Match Specific Element', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/traversal");

        //Find child element with specific filter
        cy.get('.traversal-nav>li').filter('.active').should('contain', 'About');
    })

    it('find() = Get Child Elements', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/traversal");

        //Find child elements
        cy.get('.traversal-pagination').find('li').find('a').should('have.length', 7);
    })
    it('first() = Get the first DOM element within elements', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/traversal");

        //Find first child elements
        cy.get('.traversal-table td').first().should('contain', '1');
    })

    it('last() = Get the last DOM element within elements', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/traversal");

        //Find last child elements
        cy.get('.traversal-buttons .btn').last().should('contain', 'Submit');
    })

    it('next() = Get the next sibling DOM element within elements', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/traversal");

        //Find next sibling element
        cy.get('.traversal-ul').contains('apples').next().should('contain', 'oranges');
    })

    it('nextAll() = Get all of the next sibling DOM elements within elements', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/traversal");

        //Find all sibling elements
        cy.get('.traversal-next-all').contains('oranges').nextAll().should('have.length', 3);
    })

    it('not() = Remove DOM element(s) from the set of elements', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/traversal");

        //Remove child elements
        cy.get('.traversal-disabled .btn').not('[disabled]').should('not.contain', 'Disabled');
    })

    it('parent() = Get parent DOM element of elements', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/traversal");

        //Get immediate parent of the specified child elements
        cy.get('.traversal-mark').parent().should('contain', 'Morbi leo risus');
    })

    it('parents() = Get parents DOM element of elements', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/traversal");

        //Get parent of the specified child elements
        cy.get('.traversal-cite').parents().should('match', 'blockquote');
    })

    it('parentsUntil() = Get parents DOM element of elements until other element', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/traversal");

        //Get parent of the child elements until specified element is reached
        cy.get('.clothes-nav').find('.active').parentsUntil('.clothes-nav').should('have.length', 2);
    })

    it('prev() = Get the previous sibling DOM element within elements', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/traversal");

        //Find previous sibling
        cy.get('.birds').find('.active').prev().should('contain', 'Lorikeets');
    })

    it('prevAll() = Get all previous sibling DOM elements within elements', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/traversal");

        //Find all previous sibling
        cy.get('.fruits-list').find('.third').prevAll().should('have.length', 2);
    })

    it('prevUntil() = Get all previous sibling DOM elements within elements until other element', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/traversal");

        //Find all previous sibling until specified element
        cy.get('.foods-list').find('#nuts').prevUntil('#veggies').should('have.length', 3);
    })

    it('siblings() = Get all sibling DOM elements of elements', function () {
        //Open URL
        cy.visit("https://example.cypress.io/commands/traversal");

        //Find sibling elements
        cy.get('.traversal-pills .active').siblings().should('have.length', 2)
    })
})