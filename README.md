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


