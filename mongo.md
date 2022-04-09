## MongoDB

Acessar o container do MongoDB:
```bash
docker exec -it mongo bash
```
Acessar o MongoDB com o seguinte comando:
```bash
mongo
```

Alterar usuario:
```bash
use admin

db.auth('root', passwordPrompt())
```

Criar o db teste_editora_globo:
```bash
use teste_editora_globo
```

Criar a coleção users:
```bash
db.createCollection("users")
```

Adicionar user:
```bash
db.users.insertOne({ login: "admin", password: "$2b$10$b3lxcXENZf04Y0LVkRREDuMNy6X2.ylsl/7/QbQnQ5OEHfB2tSXEG"})
```
