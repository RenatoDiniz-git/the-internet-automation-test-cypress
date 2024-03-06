// frames.spec.js
describe('Frames', () => {
    it('Should interact with frames', () => {
        cy.visit('https://the-internet.herokuapp.com/frames');
        cy.get('iframe').eq(0).then((iframe) => {
            const body = iframe.contents().find('body');
            cy.wrap(body).should('contain.text', 'Your content goes here.');
        });
    });
  });