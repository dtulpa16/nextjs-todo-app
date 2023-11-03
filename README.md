# Next.js 14 Server Actions Tutorial - To-Do App

## Getting Started

1. **Create a Next.js App Using this repo as an example**
   ```bash
   npx create-next-app@latest todo-app --use-npm --example "https://github.com/dtulpa16/nextjs-todo-app"
   
2. **After installation, open the project in your code editor and navigate to todo-app.**
   ```bash
   cd todo-app

2. **Run the Next.js server**
   ```bash
   npm run dev

## API Endpoints

### Get All Todos

- **Endpoint:** `http://localhost:3000/api/todos`
- **Method:** `GET`
- **Response:** Array of To-Dos

### Create a New Product

- **Endpoint:** `http://localhost:3000/api/todos`
- **Method:** `POST`
- **Body:**
```json
{
  "task": "To-Do Task",
  "dueDate": "2023-01-01",
}
```
- **Response:** `Task added successfully!`

## Making Requests

- **Example POST Request:**
```javascript
const toDo = {
  "task": "To-Do Task",
  "dueDate": "2023-01-01"
};
// Option 1: Using fetch
fetch('http://localhost:3000/api/todos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(toDo)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

// Option 2: Using axios
await axios.post("http://localhost:3000/api/todos", toDo)
```
