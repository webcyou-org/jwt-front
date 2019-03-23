# JWT（JSON Web Tokens） Certification Authorization FrontEnd - Nuxt

### What are JSON Web Tokens?

[JWT](http://jwt.io/)

## FrontEnd Framework List

- [Nuxt.js](https://github.com/webcyou-org/jwt-front)

and more...

## Select FrontEnd Framework

- Nuxt.js

For detailed explanation on how things work, checkout Nuxt.js docs.

## Build Setup

**Local Server Develop**

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev:local

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

**Server Framework Develop**

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3333
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

- FrontEnd Local Host: localhost:3333
- Server Local Host: localhost:3000

## Use npm Package

AuthModule Package

- [@nuxtjs/auth](https://github.com/nuxt-community/auth-module)


## API EndPoints

**Host**

http://localhost:3000 or http://localhost:3333

**EndPoints**

| url | method | details |
|---|---|---|
| /api/v1/user_token  | POST | Create Access Token (User Login) |
| /api/v1/users  | POST | Create new account |
| /api/v1/users | DELETE | User Logout |
| /api/v1/users | GET | Login User Show |


### Default User

| name | email | password |
|---|---|---|
| daisuke.takayama | test@user.com | test123 |


## Author

**Daisuke Takayama**
* [@webcyou](https://twitter.com/webcyou)
* [@panicdragon](https://twitter.com/panicdragon)
* <https://github.com/webcyou>
* <https://github.com/webcyou-org>
* <https://github.com/panicdragon>
* <http://www.webcyou.com/>

## License

Copyright (c) 2019 Daisuke Takayama
Released under the [MIT license](http://opensource.org/licenses/mit-license.php)
