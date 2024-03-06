// horizontal_slider.spec.js
describe('Horizontal Slider', () => {
    it('Should slide to the right', () => {
        cy.visit('https://the-internet.herokuapp.com/horizontal_slider');
        cy.get('input[type="range"]').invoke('val', 4).trigger('input');
        cy.get('#range').should('have.text', '4');
    });
  });