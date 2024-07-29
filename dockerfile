# Use a imagem base do Cypress
FROM cypress/included:13.13.1

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos do projeto para o container
COPY . .

# Instale as dependências
RUN npm install

# Defina o comando padrão para rodar os testes
CMD ["npx", "cypress", "run"]
