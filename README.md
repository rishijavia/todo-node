# todo-node
REST API for a Todo app using Node. *(This is just an API)**

The app uses MongoDB. See config/config.js file to associate your DB credentials.

On creating or logging a user a `x-auth` token will be returned in header that can be used to create other requests to view, create, update and delete Todos. `x-auth` token should be sent as a header property to do those tasks. Log out route will delete that `x-auth` token.

**To get the app**

```
git clone https://github.com/rishijavia/todo-node.git
cd todo-node
npm install
```

**To run the app**

```
node server/server.js
```

**To run the tests**

```
npm test
```

**Routes**

1. *Creating a User:*

  url: `POST /users`

  JSON body:
  ```
  {
    "email":"example@example.com"
    "password":"abc123!"
  }
  ```

2. *Logging in*

  url: `POST /users/login`

  JSON body:
  ```
  {
    "email":"example@example.com"
    "password":"abc123!"
  }
  ```
3. *Logging out*

  url: `DELETE /users/me/token`

  header:
  ```
  {
    'x-auth' : <auth token>
  }
  ```

4. *Profile*

  url: `GET /users/me`

  header:
  ```
  {
    'x-auth' : <auth token>
  }
  ```

5. *Get all Todos*

  url: `GET /todos`

  header:
  ```
  {
    'x-auth' : <auth token>
  }
  ```

6. *Get Todo by id*

  url: `GET /todos/:id`

  header:
  ```
  {
    'x-auth' : <auth token>
  }
  ```

7. *Create a Todo*

  url: `POST /todos`

  JSON body:
  ```
  {
    "text" : "Text for my Todo" //mandatory field
    "completed" : true/false //optional field, defaults to false
  }
  ```

  header:
  ```
  {
    'x-auth' : <auth token>
  }
  ```

8. *Update a Todo*

  url: `PATCH /todos/:id`

  JSON body:
  ```
  {
    "text" : "Text for my Todo" //mandatory field
    "completed" : true/false //optional field, defaults to false
  }
  ```

  header:
  ```
  {
    'x-auth' : <auth token>
  }
  ```

9. *Delete a Todo*

  url: `DELETE /todos/:id`

  header:
  ```
  {
    'x-auth' : <auth token>
  }
  ```

**Schema**

- User
  - email
    - String
    - required
    - unique
    - min length - 1
  - password
    - String
    - required
    - min length - 6
  - tokens
    - Access
      - String
      - required
    - Token
      - String
      - required

- Todo
  - text
    - String
    - required
    - min length - 1
  - completed
    - Boolean
    - default: false
  - completedAt
    - Number
    - null
  - _creator
    - ObjectId
    - required
