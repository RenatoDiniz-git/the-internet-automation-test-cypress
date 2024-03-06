// shadow_dom.spec.js
describe('Shadow DOM', () => {
    it('Should interact with shadow DOM', () => {
        cy.visit('https://the-internet.herokuapp.com/shadowdom');
        cy.get('#content').shadow().find('span').should('contain.text', 'Open');
    });
  });