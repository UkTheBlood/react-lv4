import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components';
import { getTodos, updateTodo } from '../api/todos';

function Detail() {

  const param = useParams();
  const [inputState, setInputState] = useState(false);

  const [inputChange, setInputChange] = useState();

  const { isLoading, isError, data } = useQuery("todos", getTodos);

  const queryClient = useQueryClient();

  const mutation = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("")
    },
  })


  const onChangeHandler = (e) => {
    setInputChange(e.target.value)
  }

  const toggle = () => {
    setInputState(!inputState)
  }


  if (isLoading === true) return

  // data를 foundData로 맞는 todo list 찾기
  const foundData = data.find((item) => {
    return String(item.id) === param.id
  })

  const onClickUpdateToggleHandler = (id, inputChange) => {
    setInputState(!inputState)
    updateTodo(id, inputChange)
    mutation.mutate("todos");
  }

  return (
    <>
      <StDivWrap>
        {
          inputState === false
            ?
            <>
              <Link to={'/works'}><StPBefore>이전으로</StPBefore></Link>
              <div>
                <h1>{foundData.title}</h1>
              </div>
              <StDivDesc>
                <p>{foundData.desc}</p>
              </StDivDesc>
              <div>
                <StButtonPatch onClick={toggle}>수정</StButtonPatch>
              </div>
            </>
            :
            <>
              <div>
                <h1>{foundData.title}</h1>
                <StInputPatch
                  value={inputChange || ""}
                  onChange={onChangeHandler}
                  maxLength="200"
                />
                <StButtonPatch onClick={() => {
                  onClickUpdateToggleHandler(
                    foundData.id, inputChange
                  )
                }}>저장</StButtonPatch>
              </div>
            </>
        }

      </StDivWrap>
    </>
  )
}

export default Detail

const StDivWrap = styled.div`
  margin: 20px;
`
const StPBefore = styled.p`
  font-size: 20px;
`
const StDivDesc = styled.div`
  height: 500px;
  margin: 30px;
  padding-left: 20px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.4);
`
const StButtonPatch = styled.button`
  margin: 30px;
  width: 30%;
  height: 40px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  & :hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`
const StDivPatch = styled.div`
  
`
const StInputPatch = styled.input`
  margin: 40px;
  width: 95%;
  height: 500px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.4);
`