// forgot_password.spec.js
describe('Forgot Password', () => {
    it('Should request password reset', () => {
        cy.visit('https://the-internet.herokuapp.com/forgot_password');
        cy.get('#email').type('example@example.com');
        cy.contains('Retrieve password').click();
        cy.get('#content').should('contain.text', 'Your e-mail\'s been sent!');
    });
  });