// dynamic_controls.spec.js
describe('Dynamic Controls', () => {
    it('Should enable and disable controls', () => {
        cy.visit('https://the-internet.herokuapp.com/dynamic_controls');
        cy.contains('button', 'Enable').click();
        cy.get('#input-example input').should('not.be.disabled');
        cy.contains('button', 'Disable').click();
        cy.get('#input-example input').should('be.disabled');
    });
  });