
# Desafio SHARENERGY

Esse projeto é destinado para um Desafio do processo seletivo SHARENERGY 2023/01

O Desafio consiste em construir uma aplicação web (frontend e backend) capaz de realizar a comunicação com APIs distintas, além de um CRUD.


## 💻 Tecnologias e dependencias utilizadas no projeto

**Front-end:** 
- react; 
- typeScript; 
- radixUI;
- axios; 
- styled-components;
- jwt-decode;
- react-router-dom;
- react-icons

**Back-end:** 
- node;
- typeScript 
- express; 
- mongoDB; 
- mongoose;
- jsonwebtoken
- bcrypt;
- express-async-errors;
- helmet;
- cors


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`JWT_SECRET`


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Natanael-de-Paulo/desafio-sharenergy-2023-01.git
```

**Backend**

Entre no diretório do projeto

```bash
  cd backend
```

Instale as dependências

```bash
  npm install
```

Gerar imagem do mongoDB

```bash
  docker compose up -d
```

Inicie o servidor

```bash
  npm run start
```


**Frontend**

Entre no diretório do projeto

```bash
  cd frontend
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```


## 📃 Documentação da API

**Security**

#### Logar usuário

```http
  POST /v1/security/login
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `JWT_SECRET` | `string` | **Obrigatório**. A chave da sua API |

| Dados   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email ou user` | `string` | **Obrigatório**.|
| `password` | `string` | **Obrigatório**.|



####  Registrar novo usuário

```http
  POST /v1/security/register
```

| Dados   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório**.|
| `user` | `string` | **Obrigatório**.|
| `password` | `string` | **Obrigatório**.|



**Random List User Generator**

#### Retorna uma lista de usuários da api RandomUserGenerator

```http
  GET /v1/users
```


**Client**

#### Listar clientes

```http
  GET /v1/client
```

#### Criar cliente

```http
  POST /v1/create
```

| Dados   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório**.|
| `cpf` | `string` | **Obrigatório**.|
| `name` | `string` | **Obrigatório**.|
| `address` | `object` | **Opcional**.|




#### Listar um cliente

```http
  GET /v1/client/{client_id}
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `client_id` | `string` | ID do cliente a ser listado.|


#### Deletar um cliente

```http
  DELETE /v1/client/{client_id}
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `client_id` | `string` | ID do cliente a ser deletado.|


#### Atualizar um cliente

```http
  DELETE /v1/client/{client_id}
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `client_id` | `string` | ID do cliente a ser atualizado.|



## 📃 Documentação

[Documentação](https://link-da-documentação)



## ⚙ Funcionalidades

[x] Autenticação de usuário com Token JWT;

[x] Login de usuário;

[x] Cadastro de usuário;

[-] Realização de logins automáticos, sem a necessidade de digitar nome de usuário e senha após o primeiro acesso;

[-] Campo de pesquisa de usuário;

[x] Todas as funcionalidades de um CRUD(create, read, update e delete) relacionadas ao schema de cliente.



## Desenvolvido por

<div>
  <img src="https://avatars.githubusercontent.com/u/93483868?v=4" width="48" height="48">
  Natanael de Paulo
</div>
  
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/natanael-de-paulo/)
[![github](https://img.shields.io/badge/github-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Natanael-de-Paulo)


## Status do projeto

Em desenvolvimento...


