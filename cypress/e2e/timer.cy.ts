describe('Timer', () => { // Test Suite
  it('Shows 10 seconds within a custom command timeout of 11s specified for the whole TC', { defaultCommandTimeout: 11000 }, () => { // Test Case
    cy.visit('/') // baseUrl declared in ./cypress.config.ts
    cy.contains('.status__time', '00:10') // Get div element by attribute class="status__time" and check if it contains text '00:10' 
  })
  it('Shows 10 seconds within a custom command timeout of 10.5s specified on test step level', () => { // Test Case
    cy.visit('/') // baseUrl declared in ./cypress.config.ts
    cy.contains('.status__time', '00:10', { timeout: 10_500 }) // Get div element by attribute class="status__time" and check if it contains text '00:10'
  })
  it('Shows seconds from 0 to 9', () => { // Test Case
    cy.visit('/') // baseUrl declared in ./cypress.config.ts
    for (let i = 0; i < 10; i++) {
      cy.contains('.status__time', `00:0${i}`) // Iterate over the same div element having attribute class="status__time" and check if it contains relevant text
    }
  })
})