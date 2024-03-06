// floating_menu.spec.js
describe('Floating Menu', () => {
    it('Should display floating menu', () => {
        cy.visit('https://the-internet.herokuapp.com/floating_menu');
        cy.get('#menu').scrollIntoView().should('be.visible');
    });
  });