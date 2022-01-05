/*
    On completion of this exercise, you can learn the following concepts.
        1. Handle promise with then function
        2. Handle promise with async and await
*/

describe('Promise handling -', function () {

    it('Handle promise with then function', function () {

        //Open URL
        cy.visit('https://example.cypress.io');

        //Handle promise with then function
        cy.get(':nth-child(3) > .container > .row > #utilities > h2').then(function (sectionText) {
            cy.log("Section Text : " + sectionText.text());
        });

        //Assert Result
        cy.get(':nth-child(3) > .container > .row > #utilities > h2').should('have.text','Commands')
    })

    it('Handle promise with async and await', async () => {

        //Open URL
        cy.visit('https://example.cypress.io');

        //Promise handled with async and await
        let sectionText = await cy.get(':nth-child(3) > .container > .row > #utilities > h2').invoke('text');
        await cy.log(sectionText);
    })
})