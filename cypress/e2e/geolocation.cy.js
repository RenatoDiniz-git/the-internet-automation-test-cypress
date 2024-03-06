// geolocation.spec.js
describe('Geolocation', () => {
    it('Should get geolocation', () => {
        cy.visit('https://the-internet.herokuapp.com/geolocation');
        cy.contains('button', 'Where am I?').click();
        cy.get('#result').should('contain.text', 'Latitude: 37.7749\nLongitude: -122.4194');
    });
  });