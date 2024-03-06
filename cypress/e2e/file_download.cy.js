// file_download.spec.js
describe('File Download', () => {
    it('Should download a file', () => {
        cy.visit('https://the-internet.herokuapp.com/download');
        cy.get('a').contains('some-file.txt').invoke('attr', 'href').then((href) => {
            cy.request(href).then((response) => {
                expect(response.status).to.eq(200);
            });
        });
    });
  });