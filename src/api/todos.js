import axios from "axios"

const getTodos = async () => {
    const response = await axios.get("http://localhost:4002/todos");
    return response.data;
}
const addTodo = async (newTodo) => {
    await axios.post("http://localhost:4002/todos", newTodo)
}

export { getTodos, addTodo };