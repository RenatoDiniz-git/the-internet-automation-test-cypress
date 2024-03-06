// key_presses.spec.js
describe('Key Presses', () => {
    it('Should display pressed key', () => {
        cy.visit('https://the-internet.herokuapp.com/key_presses');
        cy.get('body').type('A');
        cy.get('#result').should('contain.text', 'You entered: A');
    });
  });
  