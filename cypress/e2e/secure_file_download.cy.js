// secure_file_download.spec.js
describe('Secure File Download', () => {
    it('Should download a secure file', () => {
        cy.visit('https://the-internet.herokuapp.com/download_secure');
        cy.contains('a', 'file.pdf').invoke('removeAttr', 'target').click();
        cy.readFile('cypress/downloads/file.pdf').should('exist');
    });
  });