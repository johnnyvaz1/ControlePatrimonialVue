# Backend Sistema Gerente

# instalação
npm i

# iniciar 
npm start


#comandos
- para matar todos processos node
killall node



# Passos para criação de nova tabela e recurso na API 
1 - criar tabela no banco de dados:
knex migrate: make contato

2 - alterar o arquivo gerado na pasta migrations

3 - Criar o arquivo na pasta API com os métodos básicos 
(save, get, getById, remove)

4 - Alterar o arquivo routes.js


