// jquery_ui_menus.spec.js
describe('JQuery UI Menus', () => {
    it('Should interact with menu items', () => {
        cy.visit('https://the-internet.herokuapp.com/jqueryui/menu');
        cy.get('#ui-id-3').trigger('mouseover');
        cy.get('#ui-id-4').should('be.visible');
    });
  });