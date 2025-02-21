

```markdown
# IIT-B Backend

This is a backend application for managing a library system. It includes routes for authentication, user management, book management, and history tracking.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/iit-b-backend.git
   ```
2. Navigate to the project directory:
   ```sh
   cd iit-b-backend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory and add the following:
   ```env
   PORT=4800
   MONGO_URI=your_mongo_uri
   JWT_SECRET=your_jwt_secret
   ```

### Running the Application

To start the application, run:
```sh
npm start
```

To start the application in development mode with nodemon, run:
```sh
npm run dev
```

## API Endpoints

### Authentication

#### Signup
- **URL:** `/api/auth/signup`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "username": "exampleUser",
    "password": "examplePassword",
    "role": "Member"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User created successfully"
  }
  ```

#### Login
- **URL:** `/api/auth/login`
- Method**:** `POST`
- **Body:**
  ```json
  {
    "username": "exampleUser",
    "password": "examplePassword"
  }
  ```
- **Response:**
  ```json
  {
    "token": "jwt_token"
  }
  ```

### Users

#### Get All Members
- **URL:** `/api/users`
- **Method:** `GET`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Response:**
  ```json
  [
    {
      "_id": "user_id",
      "username": "exampleUser",
      "role": "Member",
      "isActive": true
    }
  ]
  ```

#### Update Member
- **URL:** `/api/users/:id`
- **Method:** `PUT`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Body:**
  ```json
  {
    "username": "updatedUser"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Member updated successfully",
    "member": {
      "_id": "user_id",
      "username": "updatedUser",
      "role": "Member",
      "isActive": true
    }
  }
  ```

#### Delete Member
- **URL:** `/api/users/:id`
- **Method:** `DELETE`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Deleted successfully"
  }
  ```

#### Get Member History
- **URL:** `/api/users/:id/history`
- **Method:** `GET`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Response:**
  ```json
  [
    {
      "_id": "history_id",
      "user": "user_id",
      "book": {
        "_id": "book_id",
        "title": "exampleBook"
      },
      "action": "Borrowed",
      "date": "2023-10-01T00:00:00.000Z"
    }
  ]
  ```

#### Delete Own Account
- **URL:** `/api/users/me`
- **Method:** `DELETE`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Account deleted successfully"
  }
  ```

### Books

#### Get All Books
- **URL:** `/api/books`
- **Method:** `GET`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Response:**
  ```json
  [
    {
      "_id": "book_id",
      "title": "exampleBook",
      "author": "exampleAuthor",
      "status": "Available",
      "borrowedBy": null
    }
  ]
  ```

#### Add Book
- **URL:** `/api/books`
- **Method:** `POST`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Body:**
  ```json
  {
    "title": "newBook",
    "author": "newAuthor"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Book added successfully"
  }
  ```

#### Update Book
- **URL:** `/api/books/:id`
- **Method:** `PUT`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Body:**
  ```json
  {
    "title": "updatedBook"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Book updated successfully",
    "book": {
      "_id": "book_id",
      "title": "updatedBook",
      "author": "exampleAuthor",
      "status": "Available",
      "borrowedBy": null
    }
  }
  ```

#### Delete Book
- **URL:** `/api/books/:id`
- **Method:** `DELETE`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Book deleted successfully"
  }
  ```

#### Borrow Book
- **URL:** `/api/books/:id/borrow`
- **Method:** `POST`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Book borrowed successfully"
  }
  ```

#### Return Book
- **URL:** `/api/books/:id/return`
- **Method:** `POST`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Book returned successfully"
  }
  ```

### History

#### Get History
- **URL:** `/api/history`
- **Method:** `GET`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Response:**
  ```json
  [
    {
      "_id": "history_id",
      "user": {
        "_id": "user_id",
        "username": "exampleUser"
      },
      "book": {
        "_id": "book_id",
        "title": "exampleBook"
      },
      "action": "Borrowed",
      "date": "2023-10-01T00:00:00.000Z"
    }
  ]
  ```

## License

This project is licensed under the MIT License.
```

Save this content in a file named `README.md` in the root directory of your project.
Save this content in a file named `README.md` in the root directory of your project.

Deepeshnama: write the above response in readme.md file in  txt

GitHub Copilot: Here is the content for your README.md file in plain text format:

```plaintext
# IIT-B Backend

This is a backend application for managing a library system. It includes routes for authentication, user management, book management, and history tracking.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/iit-b-backend.git
   ```
2. Navigate to the project directory:
   ```sh
   cd iit-b-backend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory and add the following:
   ```env
   PORT=4800
   MONGO_URI=your_mongo_uri
   JWT_SECRET=your_jwt_secret
   ```

### Running the Application

To start the application, run:
```sh
npm start
```

To start the application in development mode with nodemon, run:
```sh
npm run dev
```

## API Endpoints

### Authentication

#### Signup
- **URL:** `/api/auth/signup`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "username": "exampleUser",
    "password": "examplePassword",
    "role": "Member"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User created successfully"
  }
  ```

#### Login
- **URL:** `/api/auth/login`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "username": "exampleUser",
    "password": "examplePassword"
  }
  ```
- **Response:**
  ```json
  {
    "token": "jwt_token"
  }
  ```

### Users

#### Get All Members
- **URL:** `/api/users`
- **Method:** `GET`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Response:**
  ```json
  [
    {
      "_id": "user_id",
      "username": "exampleUser",
      "role": "Member",
      "isActive": true
    }
  ]
  ```

#### Update Member
- **URL:** `/api/users/:id`
- **Method:** `PUT`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Body:**
  ```json
  {
    "username": "updatedUser"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Member updated successfully",
    "member": {
      "_id": "user_id",
      "username": "updatedUser",
      "role": "Member",
      "isActive": true
    }
  }
  ```

#### Delete Member
- **URL:** `/api/users/:id`
- **Method:** `DELETE`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Deleted successfully"
  }
  ```

#### Get Member History
- **URL:** `/api/users/:id/history`
- **Method:** `GET`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Response:**
  ```json
  [
    {
      "_id": "history_id",
      "user": "user_id",
      "book": {
        "_id": "book_id",
        "title": "exampleBook"
      },
      "action": "Borrowed",
      "date": "2023-10-01T00:00:00.000Z"
    }
  ]
  ```

#### Delete Own Account
- **URL:** `/api/users/me`
- **Method:** `DELETE`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Account deleted successfully"
  }
  ```

### Books

#### Get All Books
- **URL:** `/api/books`
- **Method:** `GET`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Response:**
  ```json
  [
    {
      "_id": "book_id",
      "title": "exampleBook",
      "author": "exampleAuthor",
      "status": "Available",
      "borrowedBy": null
    }
  ]
  ```

#### Add Book
- **URL:** `/api/books`
- **Method:** `POST`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Body:**
  ```json
  {
    "title": "newBook",
    "author": "newAuthor"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Book added successfully"
  }
  ```

#### Update Book
- **URL:** `/api/books/:id`
- **Method:** `PUT`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Body:**
  ```json
  {
    "title": "updatedBook"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Book updated successfully",
    "book": {
      "_id": "book_id",
      "title": "updatedBook",
      "author": "exampleAuthor",
      "status": "Available",
      "borrowedBy": null
    }
  }
  ```

#### Delete Book
- **URL:** `/api/books/:id`
- **Method:** `DELETE`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Book deleted successfully"
  }
  ```

#### Borrow Book
- **URL:** `/api/books/:id/borrow`
- **Method:** `POST`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Book borrowed successfully"
  }
  ```

#### Return Book
- **URL:** `/api/books/:id/return`
- **Method:** `POST`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Book returned successfully"
  }
  ```

### History

#### Get History
- **URL:** `/api/history`
- **Method:** `GET`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Response:**
  ```json
  [
    {
      "_id": "history_id",
      "user": {
        "_id": "user_id",
        "username": "exampleUser"
      },
      "book": {
        "_id": "book_id",
        "title": "exampleBook"
      },
      "action": "Borrowed",
      "date": "2023-10-01T00:00:00.000Z"
    }
  ]
  ```

## License

This project is licensed under the MIT License.
```

Save this content in a file named `README.md` in the root directory of your project.
Save this content in a file named `README.md` in the root directory of your project.