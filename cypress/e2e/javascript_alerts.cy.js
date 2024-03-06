// javascript_alerts.spec.js
describe('JavaScript Alerts', () => {
    it('Should handle alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.contains('button', 'Click for JS Alert').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am a JS Alert');
        });
    });
  
    it('Should handle confirm', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.contains('button', 'Click for JS Confirm').click();
        cy.on('window:confirm', () => true);
        cy.get('#result').should('contain.text', 'You clicked: Ok');
    });
  
    it('Should handle prompt', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.contains('button', 'Click for JS Prompt').click();
        cy.on('window:prompt', () => 'Test prompt response');
        cy.get('#result').should('contain.text', 'You entered: Test prompt response');
    });
  });