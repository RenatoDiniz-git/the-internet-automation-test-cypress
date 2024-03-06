// form_authentication.spec.js
describe('Form Authentication', () => {
    it('Should authenticate with valid credentials', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('button').contains('Login').click();
        cy.get('.flash.success').should('contain.text', 'You logged into a secure area!');
    });
  
    it('Should display error with invalid credentials', () => {
        cy.visit('/login');
        cy.get('#username').type('invalid');
        cy.get('#password').type('credentials');
        cy.get('button').contains('Login').click();
        cy.get('.flash.error').should('contain.text', 'Your username is invalid!');
    });
  });