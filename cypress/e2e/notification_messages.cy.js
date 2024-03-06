// notification_message.spec.js
describe('Notification Messages', () => {
    it('Should display notification message', () => {
        cy.visit('https://the-internet.herokuapp.com/notification_message');
        cy.contains('a', 'Click here').click();
        cy.get('#flash').should('exist');
    });
  });
  