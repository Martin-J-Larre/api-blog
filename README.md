# Blog Api NodeJS
This a RESTful API with node for a blog. You can create an article with image, read any of articles, search for words and edit and delete articles.
You can check this API with Postman with all these endpoints below.

## Built with

- Design pattern MVC
- NodeJS (CommonJS)
- Express
- Cors
- Dotenv
- Multer
- Validator
- Mongo Atlas DB
- Mongoose

You can check this app with postman in a server running with all endpoints below.

## CRUD and Endpoints 

### Post
Create article:   
`https://api-blog-node.onrender.com/api/create`

Post image:   
`https://api-blog-node.onrender.com/api/upload-img/{ID-ARTICLE}`

- Example:      
`https://api-blog-node.onrender.com/api/article/63d5ed4cc9bf27ca0595edfd`

### Get
Get all articles:   
`https://api-blog-node.onrender.com/api/articles`

Get one articles:   
`https://api-blog-node.onrender.com/api/article/${ID:ARTICLE}`

- Example:      
`https://api-blog-node.onrender.com/api/article/63d5ed4cc9bf27ca0595edfd`

Get image:   
`https://api-blog-node.onrender.com/api/image/${FILENAME}`

- Example:      
`https://api-blog-node.onrender.com/api/image/article1675054861980newyork.jpg`

Get article by search with words:   
`https://api-blog-node.onrender.com/api/search/{ANYWORD}`

- Example:      
`https://api-blog-node.onrender.com/api/search/new`

### Put
Update one article by id:   
`https://api-blog-node.onrender.com/api/article/${ID-ARTICLE}`

- Example:      
`https://api-blog-node.onrender.com/api/article/63d5ed4cc9bf27ca0595edfd`

### Delete
Delete one article by id:   
`https://api-blog-node.onrender.com/api/article/${ID-ARTICLE}`

- Example:      
`https://api-blog-node.onrender.com/api/article/63d4b652f9797fe3e9d6e9ec`

- Body request example in JSON   

  `{
      "title": "Lorem lorem",
      "content": "Lorem lorem lorem lorem lorem, lorem lorem lorem",
      "image": *File png, jpg, jpeg or gif*
    }
  `


## Server runnig for check

- URL - [https://api-blog-node.onrender.com/](https://api-blog-node.onrender.com/)

