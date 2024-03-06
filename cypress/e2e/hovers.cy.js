// hovers.spec.js
describe('Hovers', () => {
    it('Should display user information on hover', () => {
        cy.visit('https://the-internet.herokuapp.com/hovers');
        cy.get('.figure').eq(0).trigger('mouseover');
        cy.get('.figcaption').eq(0).should('contain.text', 'name: user1');
    });
  });