// redirect_link.spec.js
describe('Redirect Link', () => {
    it('Should redirect to proper page', () => {
        cy.visit('https://the-internet.herokuapp.com/redirector');
        cy.contains('a', 'here').click();
        cy.url().should('include', '/status_codes');
    });
  });