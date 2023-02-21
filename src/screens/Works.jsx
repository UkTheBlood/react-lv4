import { QueryClient, useMutation, useQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { deleteTodo, getTodos } from "../api/todos";


function Works() {
    const { isLoading, isError, data } = useQuery("todos", getTodos)

    const queryClient = useQueryClient();

    const mutation = useMutation(getTodos, {
        onSuccess: () => {
            queryClient.invalidateQueries("todos");
        },
    })

    const deleteTodoList = (id) => {
        deleteTodo(id)
        mutation.mutate("todos")
    }

    if (isLoading === true) {
        return <h1>로딩중입니다...</h1>
    }
    if (isError === true) {
        return <h1>오류가 발생하였습니다.</h1>
    }

    return (
        <StDivWrapper>
            <div>
                <StPTodo>내 할일!!</StPTodo>
            </div>
            <div>
                {
                    data.map((todo) => {
                        return (
                            <StDivList key={todo.id} >
                                <Link to={`/works/${todo.id}`} >

                                    <div>
                                        <StPTitle>{todo.title}</StPTitle>
                                        <StPWritter>작성자 : {todo.writer}</StPWritter>

                                    </div>
                                </Link>
                                <button onClick={() => deleteTodoList(todo.id)}>삭제</button>
                            </StDivList>
                        )
                    })
                }
            </div>
        </StDivWrapper>
    )
}

export default Works;

const StDivWrapper = styled.div`
    margin: 30px;
`
const StPTodo = styled.p`
    font-size: 40px;
`
const StDivList = styled.div`
    padding-left: 10px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    margin: 20px;
`
const StPTitle = styled.p`
    font-size: 22px;
    margin-bottom: 0px;
    font-weight: bold;
    color: black;
`
const StPWritter = styled.p`
    font-size: 12px;
    color: black;
`