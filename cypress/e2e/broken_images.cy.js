// broken_images.spec.js
describe('Broken Images', () => {
    it('Should detect broken images', () => {
        cy.visit('https://the-internet.herokuapp.com/broken_images');
        cy.get('img').each(($el) => {
            cy.request($el.attr('src')).its('status').should('eq', 200);
        });
    });
  });