describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/') // baseUrl declared in ./cypress.config.ts
    cy.contains('.status__time', '00:03') // Get div element by attribute class="status__time" and check if it contains text '00:03'
    cy.get('.game__cell--filled').should('have.length', 45) // Get div element by attribute class="game__cell game__cell--filled" and check if there 45 such prefilled cells by default within Sudoku board in "Easy" mode
  })
})