// challenging_dom.spec.js
describe('Challenging DOM', () => {
    it('Should interact with challenging elements', () => {
        cy.visit('https://the-internet.herokuapp.com/challenging_dom');
        cy.get('input[id="47c17b20-be1d-013c-f1b3-3668700aa958"]').click();
        cy.get('.button.alert').should('have.length', 10);
    });
  });