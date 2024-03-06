// dynamic_loading.spec.js
describe('Dynamic Loading', () => {
    it('Should load hidden element', () => {
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1');
        cy.contains('button', 'Start').click();
        cy.get('#finish').should('exist');
    });
  });