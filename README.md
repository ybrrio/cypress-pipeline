# sauter-uversity

# Atividade Prática:
Configuração de Pipeline de Testes com GitHub Actions e Cypress
# Objetivo
Ensinar aos participantes como configurar uma pipeline de testes automatizados utilizando GitHub Actions e Cypress.

# Pré-requisitos
Conhecimento básico de JavaScript e Node.js.
Conta no GitHub.
Conhecimento básico de Git.
# Materiais Necessários
Computador com acesso à internet.
Um repositório GitHub para cada participante ou grupo.
VS Code. 

# Passo a Passo da Atividade
# Passo 1: Configuração do Projeto
Criar um Repositório no GitHub chamado cypress-pipeline-demo.

# Clonar o Repositório
utilize o seguinte comando no seu terminal git clone https://github.com/<username>/cypress-pipeline-demo.git

# Inicializar o Projeto Node.js

No diretório do repositório clonado, inicialize um novo projeto Node.js:
utilize o seguinte comando: npm init -y

# Instalar Cypress
Instale o Cypress como uma dependência de desenvolvimento:
utilize o seguinte comando: npm install cypress --save-dev

# Adicionar Scripts no package.json
Adicione os scripts para abrir e rodar o Cypress no arquivo package.json:
"scripts": {
  "cypress:open": "cypress open",
  "cypress:run": "cypress run"
}

# Passo 2: Criar Estrutura de Testes
Inicializar Cypress
Abra o Cypress para gerar a estrutura básica:
npx cypress open

# Adicionar um Teste de Exemplo
Crie um arquivo de teste de exemplo em cypress/integration/sample_spec.js com o seguinte conteúdo:
describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com')
  })
})

# Passo 3: Configuração do GitHub Actions
- Criar Diretório de Workflows
  No repositório, crie o diretório .github/workflows.
- Adicionar Arquivo de Workflow
  Crie um arquivo chamado cypress.yml dentro de .github/workflows com o seguinte conteúdo:

name: Cypress Tests

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  cypress-run:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'

    - name: Install dependencies
      run: npm install

    - name: Run Cypress tests
      run: npx cypress run
      env:
        CI: true
        
#Passo 4: Testar a Configuração
Fazer Commit e Push
Agora faça o commit e push das mudanças no terminal:

git add .
git commit -m "aidicionando GitHub Actions workflow"
git push origin main

# Verificar o Workflow no GitHub
Agora vá até a aba "Actions" no repositório GitHub para verificar se o workflow foi acionado e se os testes estão sendo executados.
