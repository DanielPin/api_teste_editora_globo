## Endpoints

Cadastrar novo usuário

Método: POST

URL: localhost:3000/user

Body: login, password

Exemplo de cadastro:
```json
{
	"login": "fulano",
	"password": "Fulano1234"
}
```

##

Cadastrar noticia

Método: POST

URL: localhost:3000/noticias

Body: titulo, descricao, dataDePublicacao

Exemplo de cadastro:
```json
{
 "titulo":"noticia teste endpoint",
	"descricao":"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
	"dataDePublicacao": "09/04/2022"
}
```
##

Listar todas as noticias

Método: GET

URL: localhost:3000/noticias

Exemplo de retorno:
```json
[
	{
		"_id": "6251a44b4173c3ea9309a0ed",
		"titulo": "noticia teste endpoint",
		"descricao": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
		"dataDePublicacao": "09/04/2022",
		"__v": 0
	}
]
```
##

Listar noticia especifica

Método: GET

URL: localhost:3000/noticias/6251a44b4173c3ea9309a0ed

Parametro: _id

Exemplo de retorno:
```json
{
	"_id": "6251a44b4173c3ea9309a0ed",
	"titulo": "noticia teste endpoint",
	"descricao": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
	"dataDePublicacao": "09/04/2022",
	"__v": 0
}
```
##

Atualizar noticia

Método: PUT

URL: localhost:3000/noticias/6251a44b4173c3ea9309a0ed

Parametro: _id

Body: titulo, descricao, dataDePublicacao

Exemplo de retorno:
```json
{
	"_id": "6251a44b4173c3ea9309a0ed",
	"titulo": "noticia teste endpoint atualizado",
	"descricao": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
	"dataDePublicacao": "09/04/2022",
	"__v": 0
}
```
##

Deletar noticia

Método: DELETE

URL: localhost:3000/noticias/6251a44b4173c3ea9309a0ed

Parametro: _id

Exemplo de retorno:
```json
{
	"acknowledged": true,
	"deletedCount": 1
}
```
