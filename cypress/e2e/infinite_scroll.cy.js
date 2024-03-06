// infinite_scroll.spec.js
describe('Infinite Scroll', () => {
    it('Should scroll down', () => {
        cy.visit('https://the-internet.herokuapp.com/infinite_scroll');
        cy.get('.jscroll-inner').scrollTo('bottom');
        cy.get('.jscroll-added').should('exist');
    });
  });