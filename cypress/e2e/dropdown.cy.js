// dropdown.spec.js
describe('Dropdown', () => {
    it('Should select options from dropdown', () => {
        cy.visit('https://the-internet.herokuapp.com/dropdown');
        cy.get('select').select('Option 1').should('have.value', '1');
        cy.get('select').select('Option 2').should('have.value', '2');
    });
  });