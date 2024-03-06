// exit_intent.spec.js
describe('Exit Intent', () => {
    it('Should display exit intent modal', () => {
        cy.visit('https://the-internet.herokuapp.com/exit_intent');
        cy.get('#input-example').trigger('mouseover');
        cy.get('.modal').should('be.visible');
    });
  });