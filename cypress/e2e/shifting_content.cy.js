// shifting_content.spec.js
describe('Shifting Content', () => {
    it('Should interact with shifting content', () => {
        cy.visit('https://the-internet.herokuapp.com/shifting_content');
        cy.get('.example').should('contain.text', 'Example 1: Left');
    });
  });