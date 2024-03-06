// slow_resources.spec.js
describe('Slow Resources', () => {
    it('Should wait for slow resource', () => {
        cy.visit('https://the-internet.herokuapp.com/slow');
        cy.contains('a', 'Click here').click();
        cy.get('#loading').should('exist');
        cy.get('#loaded').should('exist');
    });
  });