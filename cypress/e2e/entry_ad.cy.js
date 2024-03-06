// entry_ad.spec.js
describe('Entry Ad', () => {
    it('Should close entry ad', () => {
        cy.visit('https://the-internet.herokuapp.com/entry_ad');
        cy.contains('Close').click();
        cy.get('#modal').should('not.exist');
    });
  });