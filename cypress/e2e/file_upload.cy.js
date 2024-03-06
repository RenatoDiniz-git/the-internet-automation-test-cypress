// file_upload.spec.js
describe('File Upload', () => {
    it('Should upload a file', () => {
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('input[type="file"]').attachFile('example.txt');
        cy.get('#file-submit').click();
        cy.contains('Uploaded!').should('exist');
    });
  });