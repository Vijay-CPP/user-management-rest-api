# User Management REST-API
This is a Node.js application for managing user information using a RESTful API. The application uses Express.js as the web framework and MongoDB as the database.
## Installation

    1. Clone the repository to your local machine.
    2. Install the required packages using npm:

```bash
  npm install
```
    3. Start the server using npm through nodemon

```bash
  npm run devStart
``` 


## API Reference

#### Get all users

```http
  GET /users
```
#### Get used by id

```http
  GET /users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

#### Add user

```http
  POST /users
```
```http
  raw json body with keys
    name (Required)
    email (Required)(Unique)
    password (len >= 8)
```

#### Update user
User will be updated with the matching Id

```http
  PUT /users/${id}
```
```http
  raw json body with keys
    name (Required)
    email (Required)(Unique)
    password (len >= 8)
```
#### Delete user

```http
  Delete /users/${id}
```
It will delete based on matching id.
