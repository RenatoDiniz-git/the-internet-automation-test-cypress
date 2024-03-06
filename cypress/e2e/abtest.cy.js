// abtest.spec.js
describe('A/B Testing', () => {
    it('Should display correct heading', () => {
        cy.visit('https://the-internet.herokuapp.com/abtest');
        cy.get('h3').should('have.text', 'A/B Test Variation 1')
    });
  
    it('Should display correct content', () => {
        cy.visit('https://the-internet.herokuapp.com/abtest');
        cy.get('p').should('contain.text', 'Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).');
    });
  });