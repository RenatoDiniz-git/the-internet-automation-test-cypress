// inputs.spec.js
describe('Inputs', () => {
    it('Should accept text input', () => {
        cy.visit('https://the-internet.herokuapp.com/inputs');
        cy.get('input[type="number"]').type('123');
        cy.get('input[type="number"]').should('have.value', '123');
    });
  });