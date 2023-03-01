# Projeto Store Manager!

Aqui você vai encontrar os detalhes do desenvolvimento do projeto Store Manager a partir deste repositório.
Este e um projeto 
<br />
<details>
<summary><strong>👨‍💻 O que foi desenvolvido</strong></summary>
<br />
Desenolvi a minha primeira API utilizando a arquitetura MSC (model-service-controller)!

A API construída é um sistema de gerenciamento de vendas no formato dropshipping em que e possível criar, visualizar, deletar e atualizar produtos e vendas. Utilizei o banco de dados MySQL para a gestão de dados. Além disso, a API e RESTful.

- A pessoa usuária, independente de cadastro, deve conseguir:

  - Adicionar, ler, deletar e atualizar produtos;
  - Enviar vendas para o sistema e essas vendas devem validar se o produto em questão existe;
  - Ler, deletar e atualizar vendas.

<br />

- Para todos os endpoints:

  - Caso o recurso não seja encontrado, aconteça um erro ou haja dados inválidos na requisição, a API deve retornar o status HTTP adequado com o body `{ message: <mensagem de erro> }`;
  - Os endpoints sempre retornam uma resposta, havendo sucesso nas operações ou não;
  - Os endpoints sempre retornam os códigos de status corretos _(recurso criado, erro de validação, autorização, etc)_.
  - Usei os verbos HTTP adequados para cada operação;
  - Agrupei e padronizei as URL em cada recurso;

</details>
<br />

<details>
<summary><strong>🗓 Data de Entrega</strong></summary>

- Este foi um projeto individual
- Foram `5` dias de projeto

</details>
<br />

<details>
<summary><strong>📥 Instalação</strong></summary>
  
1. Clone o repositório

- `git clone git@github.com:lucascbb/store-manager.git`;

- Entre na pasta do repositório que você acabou de clonar:
  - `cd store-manager`

2. Instale as dependências [**Caso existam**]

- `npm install`

</details>
<br />

<details>
<summary><strong>🧑‍💻 Scripts prontos</strong></summary>

- Criar o banco de dados e gerar as tabelas:

```sh
  npm run migration
```

- Limpar e popular o banco de dados:

```sh
  npm run seed
```

- Iniciar o servidor Node:

```sh
  npm start
```

- Iniciar o servidor Node com nodemon:

```sh
  npm run debug
```

- Executar os testes avaliativos da Trybe:

```sh
  npm test
```

- Executar os testes de unidade escritos por você:

```sh
  npm run test:mocha
```

- Executar o linter:

```sh
  npm run lint
```
</details>
</details>

<br />

# Requisitos Do Projeto:

## 01 - Crie endpoints para listar produtos

## 02 - Desenvolva testes que cubram no mínimo 5% das camadas da sua aplicação

## 03 - Crie endpoint para cadastrar produtos

## 04 - Crie validações para produtos

## 05 - Desenvolva testes que cubram no mínimo 10% das camadas da sua aplicação

## 06 - Crie endpoint para validar e cadastrar vendas

## 07 - Desenvolva testes que cubram no mínimo 15% das camadas da sua aplicação

## 08 - Crie endpoints para listar vendas

## 09 - Desenvolva testes que cubram no mínimo 20% das camadas da sua aplicação

## 10 - Crie endpoint para atualizar um produto

## 11 - Desenvolva testes que cubram no mínimo 25% das camadas da sua aplicação

## 12 - Crie endpoint para deletar um produto

## 13 - Desenvolva testes que cubram no mínimo 30% das camadas da sua aplicação

## 14 - Crie endpoint para deletar uma venda

## 15 - Desenvolva testes que cubram no mínimo 35% das camadas da sua aplicação

## 16 - Crie endpoint para atualizar uma venda

## 17 - Desenvolva testes que cubram no mínimo 40% das camadas da sua aplicação

## 18 - Crie endpoint products/search?q=searchTerm

## 19 - Desenvolva testes que cubram no mínimo 50% das camadas da sua aplicação

## 20 - Desenvolva testes que cubram no mínimo 60% das camadas da sua aplicação
<br>

</details>
