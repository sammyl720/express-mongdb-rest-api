### Express & MongoDB REST API

With JWT Authentication and Encryped Password

#### Routes
``` / ```: A basic landing route

``` /signup ```: This routes expects an email and password in it's json body. The email should be one that is not associated with an account yet. The password should meet these requirements
1. minimum eight characters
2.  at least one upper case English letter
3. one lower case English letter
4.  one number
5.  one special character

``` /login ``` : This routes expects an email and password in it's json body. The email should be one that is associated with an account. The password should be the same password as used for signup

The login and signup routes return a token which is needed to access all subsequent routes. METHOD: `POST`

``` /user ```: This routes provides the current user's basic data

``` /user/:id ```: This routes provides the basic data of the requested user id

``` /user/posts```: This routes provides all the posts of the current user.

``` /user/posts/:postId ```: This routes provides the post of requested post id

