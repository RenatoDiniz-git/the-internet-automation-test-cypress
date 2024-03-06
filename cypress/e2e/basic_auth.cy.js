// basic_auth.spec.js
describe('Basic Authentication', () => {
    it('Should authenticate with valid credentials', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth: {
                username: 'admin',
                password: 'admin',
            },
        });
        cy.get('p').should('contain.text', 'Congratulations! You must have the proper credentials.');
    });
  });