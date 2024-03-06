// sortable_data_tables.spec.js
describe('Sortable Data Tables', () => {
    it('Should sort table columns', () => {
        cy.visit('https://the-internet.herokuapp.com/tables');
        cy.get('th').contains('First Name').click();
        cy.get('tr').eq(2).should('contain.text', 'Frank');
    });
  });