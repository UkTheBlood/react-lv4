import React from 'react'
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components';
import { getTodos } from '../api/todos';

function Detail() {

  const param = useParams();

  const { isLoading, isError, data } = useQuery("todos", getTodos)


  if (isLoading === true) return

  const foundData = data.find((item) => {
    return String(item.id) === param.id
  })

  return (
    <>
      <StDivWrap>

        <Link to={'/works'}><StPBefore>이전으로</StPBefore></Link>

        <div>
          <h1>{foundData.title}</h1>
        </div>
        <StDivDesc>
          <p>{foundData.desc}</p>
        </StDivDesc>
        <div>
          <StButtonPatch>수정</StButtonPatch>
        </div>
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