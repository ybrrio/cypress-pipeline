describe('Visita site da Sauter', () => {
  it('Validar título do site', () => {
    cy.visit('https://www.youtube.com/')
    cy.title().should('eq', 'YouTube')
  })
  
})