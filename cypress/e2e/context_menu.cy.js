// context_menu.spec.js
describe('Context Menu', () => {
    it('Should display context menu', () => {
        cy.visit('https://the-internet.herokuapp.com/context_menu');
        cy.get('#hot-spot').rightclick();
        cy.get('.context-menu-list').should('be.visible');
    });
  });