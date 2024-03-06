// nested_frames.spec.js
describe('Nested Frames', () => {
    it('Should interact with nested frames', () => {
        cy.visit('https://the-internet.herokuapp.com/nested_frames');
        cy.get('frame[name="frame-top"]').then(($frameTop) => {
            const $frameMiddle = $frameTop.contents().find('frame[name="frame-middle"]');
            const $frameBottom = $frameMiddle.contents().find('frame[name="frame-bottom"]');
            cy.wrap($frameBottom).should('contain.text', 'BOTTOM');
        });
    });
  });