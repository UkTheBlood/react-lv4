import axios from "axios"

// 조회
const getTodos = async () => {
    const response = await axios.get("http://localhost:4002/todos");
    return response.data;
}

// 추가
const addTodo = async (newTodo) => {
    await axios.post("http://localhost:4002/todos", newTodo)
}

// 삭제
const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:4002/todos/${id}`)
}

// 수정
const updateTodo = async({id, inputChange}) => {
    console.log(inputChange)
    await axios.patch(`http://localhost:4002/todos/${id}`, {
        desc: inputChange
    })
}

export { getTodos, addTodo, deleteTodo, updateTodo };