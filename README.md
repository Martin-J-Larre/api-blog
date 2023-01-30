# Blog Api NodeJS

### Built with

- NodeJS (CommonJS)
- Express
- Cors
- Dotenv
- Multer
- Validator
- Mongo Atlas DB
- Mongoose

### CRUD and Endpoints 

#### Post
> Create article:   
`http://localhost:4000/api/create`

> Post image:   
`http://localhost:4000/api/upload-img/{ID-ARTICLE}`

>- Example:      
`http://localhost:4000/api/article/63d5ed4cc9bf27ca0595edfd`

#### Get
> Get all articles:   
`http://localhost:4000/api/articles`

> Get one articles:   
`http://localhost:4000/api/article/${ID:ARTICLE}`

>- Example:      
`http://localhost:4000/api/article/63d5ed4cc9bf27ca0595edfd`

> Get image:   
`http://localhost:4000/api/image/${FILENAME}`

>- Example:      
`http://localhost:4000/api/article/63d5ed4cc9bf27ca0595edfd`

> Get article by search with words:   
`http://localhost:4000/api/search/{ANYWORD}`

>- Example:      
`http://localhost:4000/api/search/new`

#### Put
> Update one article by id:   
`http://localhost:4000/api/article/${ID-ARTICLE}`

>- Example:      
`http://localhost:4000/api/article/63d5ed4cc9bf27ca0595edfd`

#### Delete
> Delete one article by id:   
`http://localhost:4000/api/article/${ID-ARTICLE}`

>- Example:      
`http://localhost:4000/api/article/63d4b652f9797fe3e9d6e9ec`


## Server for check

- URL - [Add your name here](https://www.your-site.com)

