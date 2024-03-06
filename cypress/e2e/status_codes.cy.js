// status_codes.spec.js
describe('Status Codes', () => {
    it('Should display correct status code', () => {
        cy.visit('https://the-internet.herokuapp.com/status_codes');
        cy.contains('a', '200').click();
        cy.get('h3').should('contain.text', '200');
    });
  });