[JAVASCRIPT__BADGE]: https://img.shields.io/badge/Javascript-000?style=for-the-badge&logo=javascript
[EXPRESS__BADGE]: https://img.shields.io/badge/express-005CFE?style=for-the-badge&logo=express
[NODE_BADGE]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[SQLITE_BADGE]: https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white



<h1 align="center" style="font-weight: bold;">🍚 Food Explorer 🍚</h1>

![express][EXPRESS__BADGE]
![javascript][JAVASCRIPT__BADGE]
![node][NODE_BADGE]
![sqlite][SQLITE_BADGE]



<p align="center">
 <a href="#about">Sobre</a> • 
 <a href="#started">Decolando</a> • 
  <a href="#colab">Colaboradores</a> •
 <a href="#contribute">Contribua</a>
</p>

<p align="center">
  <b>O Food Explorer é uma incrível aplicação web que simula um cardápio interativo de um restaurante fictício. Foi criado para proporcionar uma experiência envolvente e informativa aos usuários, tornando a exploração dos pratos, bebidas e opções do menu algo interativo e visualmente atraente. Com o Food Explorer, você pode navegar pelos pratos de maneira fácil, conferir imagens apetitosas, ler descrições detalhadas e obter informações completas sobre cada item, criando assim uma experiência gastronômica virtual única. Explore, descubra e mergulhe nesse mundo de sabores com o Food Explorer...</b>
</p>


<h2 id="about">📌 Tecnologias</h2>

- [**bcryptjs**](https://www.npmjs.com/package/bcryptjs)
- [**body-parser**](https://www.npmjs.com/package/body-parser)
- [**cors**](https://www.npmjs.com/package/cors)
- [**express**](https://www.npmjs.com/package/express)
- [**express-async-errors**](https://www.npmjs.com/package/express-async-errors)
- [**jsonwebtoken**](https://www.npmjs.com/package/jsonwebtoken)
- [**knex**](https://www.npmjs.com/package/knex)
- [**multer**](https://www.npmjs.com/package/multer)
- [**sqlite**](https://www.npmjs.com/package/sqlite)



<h2 id="started">🚀 Decolando</h2>

<h3>Requisitos</h3>

Para rodar o projeto, você irá precisar:

- [NodeJS](https://nodejs.org/en) - Versão 17 ou superior
- [NPM](https://www.npmjs.com/)


<h3>Intalação </h3>

Clone o projeto usando o comando: 
```bash
gh repo clone vhraposo/foodexplorer_api
```

Em seguida rode o comando: 

```bash
cd foodexplorer_api
npm install ou yarn install
``````

Rode as migrates: 

```bash
npm run migrate ou yarn migrate
``````

<h2 id="routes">🗺️ Rotas</h2>

### /user

create
```json
{
  "name": "Jhon Doe",
  "email": "jhondoe@gmail.com",
  "password": "123456"
}
```

#### está rota precisa do token
update
```json
{
  "name":"Jhon Doe",
  "email": "jhondoe@gmail.com",
  "password":"1234567",
}
```

show
```json
retorno da API
{
  "name": "Jhon Doe",
  "email": "jhondoe@gmail.com",
  "avatar": "https://github.com/vhraposo.png",
}
```

### /dishes
#### todas as rotas menos o index precisam do token

create
```json
{
  "name": "Negroni",
  "description": "Um coquetel clássico e amargo, feito com gim, Campari e vermute doce.",
  "price": 35.00,
  "image": "https://www.guiadrinks.com.br/wp-content/uploads/2020/08/Negroni-768x512.jpg",
  "category": "Bebidas",
  "ingredients": ["Gim", "Campari", "Vermute doce"],
}
```

index | retorna todos os pratos
```json
retorno da API
{
  "id": 1,
  "name": "Negroni",
  "description": "Um coquetel clássico e amargo, feito com gim, Campari e vermute doce.",
  "price": 35.00,
  "image": "https://www.guiadrinks.com.br/wp-content/uploads/2020/08/Negroni-768x512.jpg",
  "category": "Bebidas",
  "ingredients": ["Gim", "Campari", "Vermute doce"],
}
```

update | nessa e nas proximas rotas é necessario passar o id do prato como por exemplo **json dishes/1**
```json
{
  "name": "Negroni 2.0",
  "description": "Um coquetel clássico e amargo, feito com gim, Campari e vermute doce.",
  "price": 55.00,
  "image": "https://www.guiadrinks.com.br/wp-content/uploads/2020/08/Negroni-768x512.jpg",
  "category": "Bebidas",
  "ingredients": ["Gim", "Campari", "Vermute doce, framboesa"],
}
```

show | nessa e nas proximas rotas é necessario passar o id do prato como por exemplo **json dishes/1**
Retorna o prato específico, baseado no ID

```json
retorno da API
{
	"id": 1,
	"name": "Mousse de Maracujá",
	"description": "Cremosa mousse de maracujá com base de biscoito.",
	"price": 12.99,
	"category": "Sobremesas",
	"image": "https://static.itdg.com.br/images/1200-675/19903f5fde8b603c472469725008fd1f/shutterstock-1907121220.jpg",
	"created_at": "2024-02-16 18:44:59",
	"updated_at": "2024-02-16 18:44:59",
	"ingredients": [
		{
			"id": 4,
			"dish_id": 1,
			"name": "Biscoito maizena"
		},
		{
			"id": 3,
			"dish_id": 1,
			"name": "Creme de leite"
		},
		{
			"id": 2,
			"dish_id": 1,
			"name": "Leite condensado"
		},
		{
			"id": 1,
			"dish_id": 1,
			"name": "Suco de maracujá"
		}
	]
}
```

delete
```json
/dishes/id
exemplo: /dishes/1

```
### session

create
```json
{
  "email": "jhondoe@gmail.com",
  "password": "123"
}
```


<h2 id="colab">🤝 Colaboradores</h2>

Um agradecimento especial a todas as pessoas que contribuíram para este projeto.
<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/vhraposo" width="100px;" alt="Victor Raposo Profile Picture"/><br>
        <sub>
          <b>Victor Raposo</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<h2 id="contribute">📫 Contribua </h2>

Você pode contribuir com o projeto também!!

1. `gh repo clone vhraposo/foodexplorer_web`
2. `git checkout -b feature/NAME`
3. Siga o padrão de commits.
4. Abra um Pull Request explicando o problema resolvido ou recurso realizado, se existir, anexe screenshot das modificações visuais e aguarde a revisão!

<h3>Documentações que podem te ajudar nisso</h3>

[📝 Como criar um pull request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request)

[💾 Padrão de commits](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)

<h2>📄 Licença <h2>

<h4>O app **Food Explorer** é distribuída sob a licença MIT. Isso significa que você pode usar, modificar e distribuir o código desta API livremente, desde que inclua a declaração de direitos autorais e a licença MIT em qualquer cópia ou parte dela.</h4>