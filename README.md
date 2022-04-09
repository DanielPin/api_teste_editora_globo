## Teste Técnico

Desenvolvido para a posição de desenvolvedor junior

Este repositório se trata da parte back-end da api.

Segue repositório do front-end: 

[FRONT-END](https://github.com/DanielPin/front_teste_editora_globo)

## Requisitos para execução

Ter o docker compose instalado

## Instalação

Executar o comando abaixo na pasta raiz do projeto, irá subir a api e o MongoDB:
```bash
docker-compose up --build
```

## Configuração MongoDB

[MongoDB](https://github.com/DanielPin/api_teste_editora_globo/blob/main/mongo.md)


## Acesso a api
Acessar o endpoint localhost:3000/login e fazer login para pegar o token e usar nas requisições:
```json
{
	"login": "admin",
	"password": "admin"
}
```

## Endpoints da api

[ENDPOINTS](https://github.com/DanielPin/api_teste_editora_globo/blob/main/endpoints.md)


<div style="display: inline_block"><br>
  <img align="center" alt="NestJs" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg">
  <img align="center" alt="TypeScript" height="30" width="40"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg">
  <img align="center" alt="Jest" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg">
  <img align="center" alt="MongoDB" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg">  
  <img align="center" alt="Docker" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg">
</div>
