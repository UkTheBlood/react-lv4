import axios from "axios"

const getTodos = async () => {
    const response = await axios.get("http://localhost:4002/todos");
    return response.data;
}
const addTodo = async (newTodo) => {
    await axios.post("http://localhost:4002/todos", newTodo)
}
const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:4002/todos/${id}`)
}


export { getTodos, addTodo, deleteTodo };