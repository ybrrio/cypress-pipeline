describe('Site da Sauter Digital', () => {
  it('Validar título do site', () => {
    cy.visit('https://sauter.digital/')
    cy.title().should('eq', 'Sauter: Estratégias digitais | Soluções Inovadoras')
  })
})