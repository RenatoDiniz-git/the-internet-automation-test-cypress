// disappearing_elements.spec.js
describe('Disappearing Elements', () => {
    it('Should detect disappearing elements', () => {
        cy.visit('https://the-internet.herokuapp.com/disappearing_elements');
        cy.reload();
        cy.get('ul').find('li').should('have.length', 5);
    });
  });