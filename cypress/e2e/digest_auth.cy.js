// digest_auth.spec.js
describe('Digest Authentication', () => {
    it('Should authenticate with valid credentials', () => {
        cy.request({
            method: 'GET',
            url: 'https://the-internet.herokuapp.com/digest_auth',
            auth: {
                username: 'admin',
                password: 'admin',
            },
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.contain('Congratulations! You must have the proper credentials.');
        });
    });
  });