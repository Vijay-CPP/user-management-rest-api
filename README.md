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

```bash
  GET /users
```
![Screenshot_20230215_113858](https://user-images.githubusercontent.com/74971365/219116229-3bbf56c6-0a12-44d0-9bf1-31d7bb2b85d5.png)

#### Get used by id

```bash
  GET /users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

#### Add user

```bash
  POST /users
```
```bash
  raw json body with keys
    name (Required)
    email (Required)(Unique)
    password (len >= 8)
```

![Screenshot_20230215_113933](https://user-images.githubusercontent.com/74971365/219116292-8387f7c7-bae1-4c7a-bb1d-283c2092baa7.png)

#### Update user
User will be updated with the matching Id

```bash
  PUT /users/${id}
```
```bash
  raw json body with keys
    name (Required)
    email (Required)(Unique)
    password (len >= 8)
```
#### Delete user

```bash
  Delete /users/${id}
```
It will delete based on matching id.
