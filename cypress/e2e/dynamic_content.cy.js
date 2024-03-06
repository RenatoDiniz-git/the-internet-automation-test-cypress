// dynamic_content.spec.js
describe('Dynamic Content', () => {
    it('Should load dynamic content', () => {
        cy.visit('https://the-internet.herokuapp.com/dynamic_content');
        cy.reload();
        cy.get('.row').should('have.length', 3);
    });
  });