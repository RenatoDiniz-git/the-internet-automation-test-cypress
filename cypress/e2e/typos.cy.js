// typos.spec.js
describe('Typos', () => {
    it('Should detect typos', () => {
        cy.visit('https://the-internet.herokuapp.com/typos');
        cy.get('p').should('contain.text', 'This paragraph contains a few');
    });
  });