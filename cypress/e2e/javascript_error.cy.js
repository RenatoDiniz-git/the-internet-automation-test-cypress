// javascript_error.spec.js
describe('JavaScript Error', () => {
    it('Should cause JavaScript error', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_error');
        cy.on('uncaught:exception', (err) => {
            expect(err.message).to.include('randomFunction is not defined');
            return false;
        });
        cy.visit('/javascript_error');
    });
  });