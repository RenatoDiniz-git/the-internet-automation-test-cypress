// large_deep_dom.spec.js
describe('Large & Deep DOM', () => {
    it('Should scroll to element', () => {
        cy.visit('https://the-internet.herokuapp.com/large');
        cy.get('#large-tree').scrollIntoView();
        cy.get('#large-tree').should('be.visible');
    });
  });
  