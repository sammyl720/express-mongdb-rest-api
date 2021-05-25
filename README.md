### Express & MongoDB REST API

With JWT Authentication and Encryped Password

#### Routes
```GET / ```: A basic landing route

```POST /signup ```: This routes expects an email and password in it's json body. The email should be one that is not associated with an account yet. The password should meet these requirements
1. minimum eight characters
2.  at least one upper case English letter
3. one lower case English letter
4.  one number
5.  one special character

```POST /login ``` : This routes expects an email and password in it's json body. The email should be one that is associated with an account. The password should be the same password as used for signup

The login and signup routes return a token which is needed to access all subsequent routes

```GET /user ```: This routes provides the current user's basic data

```GET /user/:id ```: This routes provides the basic data of the requested user id

```POST /user/posts```: Create a new post. This route expects a text field in it's json body. 
```GET /user/posts```: This route provides all the posts of the current user.

```GET /user/posts/:postId ```: This route provides the post of requested post id

Requirements

Enviroment variables
1. JWT_SECRET
2. MONGO_DB