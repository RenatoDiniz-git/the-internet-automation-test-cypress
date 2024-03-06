// checkboxes.spec.js
describe('Checkboxes', () => {
    it('Should toggle checkboxes', () => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes');
        cy.get('input[type="checkbox"]').check().should('be.checked');
        cy.get('input[type="checkbox"]').uncheck().should('not.be.checked');
    });
  });