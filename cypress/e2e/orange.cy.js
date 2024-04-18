beforeEach(() => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
});


describe('Página de Login', () => {
  it('Validar login correto', () => {
  // Preencha os campos de login com credenciais corretas

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type('admin123')
    botaoLogin()

    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
    .should('be.visible')
  })

  it('Teste de Login Inválido', () => {
    // Preencha os campos de login com credenciais incorretas

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type('Adminm')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type('admin1234')
    botaoLogin()
    cy.get('.oxd-alert-content').should('contain.text', 'Invalid credentials')
  });

  it('Validar campo obrigatorio vazio', () => {
    // Campos de login com credenciais vazias
    
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .clear()
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .clear()
    botaoLogin()
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('be.visible')
  });

  
})

//botão de click em função para evitar repetição no código
function botaoLogin (){
  cy.get('.oxd-button').click()
}