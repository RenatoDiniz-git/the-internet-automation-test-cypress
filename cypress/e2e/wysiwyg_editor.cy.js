// wysiwyg_editor.spec.js
describe('WYSIWYG Editor', () => {
    it('Should edit content in WYSIWYG editor', () => {
        cy.visit('https://the-internet.herokuapp.com/tinymce');
        cy.get('iframe').then(($iframe) => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).clear().type('Hello, World!');
        });
    });
  });