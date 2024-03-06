// drag_and_drop.spec.js
describe('Drag and Drop', () => {
    it('Should drag and drop elements', () => {
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop');
        cy.get('#column-a').drag('#column-b');
        cy.get('#column-b').should('have.text', 'A');
        cy.get('#column-a').should('have.text', 'B');
    });
  });