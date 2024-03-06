// add_remove_elements.spec.js
describe('Add/Remove Elements', () => {
    it('Should add and remove elements', () => {
        cy.visit('https://the-internet.herokuapp.com/add_remove_elements/');
        cy.get('button').contains('Add Element').click();
        cy.get('.added-manually').should('exist');
        cy.get('button').contains('Delete').click();
        cy.get('.added-manually').should('not.exist');
    });
  });