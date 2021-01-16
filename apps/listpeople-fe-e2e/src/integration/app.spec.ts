describe('listpeople-fe', () => {
  beforeEach(() => cy.visit('/'));

  it('should display a table', () => {
    cy.get('.list-group').children().should('have.length.greaterThan', 0);
  });

  it('should click on row and display right value', () => {
    cy.get('.list-group-item').first().click();

    cy.get('.card-title').contains('Antonin McGaherna');
  });
});
