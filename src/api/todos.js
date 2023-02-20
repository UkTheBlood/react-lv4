import axios from "axios"


const getTodos = async () => {
    const response = await axios.get("http://localhost:4002/todos");
    return response.data;
}

export { getTodos };