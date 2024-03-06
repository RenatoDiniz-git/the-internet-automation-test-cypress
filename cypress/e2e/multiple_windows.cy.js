// multiple_windows.spec.js
describe('Multiple Windows', () => {
    it('Should open new window', () => {
        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.contains('Click Here').click();
        cy.window().then((win) => {
            cy.wrap(win).its('location.pathname').should('eq', '/windows/new');
        });
    });
  });