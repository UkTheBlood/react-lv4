import React, { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query';
import styled from 'styled-components';
import { addTodo } from '../api/todos';

function Work() {
    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const handleWritter = (e) => {
        setWriter(e.target.value)
    }
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleDesc = (e) => {
        setDesc(e.target.value)
    }

    // 리액트 쿼리
    const queryClient = useQueryClient();
    const mutation = useMutation(addTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries("")
            console.log("성공")
        }
    })

    // 추가 버튼
    const addButton = () => {
        if (writer !== "" && title !== "" && desc !== "") {
            const newTodo = {
                writer,
                title,
                desc,
                id: Math.random()
            }
            alert(`
                추가되었습니다!
                작성자 : ${writer}
                제목 : ${title}
            `)


            setWriter("")
            setTitle("")
            setDesc("")
            mutation.mutate(newTodo);
        } else {
            alert("input을 모두 입력해주세요")
        }
    }

    return (
        <>
            <StDivWrapper>
                <div>
                    <StPTitle>작성자</StPTitle>
                    <StInputWriterTitle
                        onChange={handleWritter}
                        type="text"
                        value={writer}
                        placeholder='작성자 이름을 입력해주세요. (5자 이내)'
                        maxLength="5"
                        required
                    />
                </div>
                <div>
                    <StPTitle>제목</StPTitle>
                    <StInputWriterTitle
                        onChange={handleTitle}
                        type="text"
                        value={title}
                        placeholder='제목을 입력해주세요. (50자 이내)'
                        maxLength="50"
                        required
                    />
                </div>
                <div>
                    <StPTitle>내용</StPTitle>
                    <StInputDesc
                        onChange={handleDesc}
                        type="text"
                        value={desc}
                        placeholder='내용을 입력해주세요. (200자 이내)'
                        maxLength="200"
                        required
                    />
                </div>

                <StBtn onClick={addButton}>추가하기</StBtn>
            </StDivWrapper>
        </>
    )
}

export default Work;

const StDivWrapper = styled.div`
    margin: 30px;
    height: 700px;
`
const StPTitle = styled.p`
    font-size: 22px;
    font-weight: bold;
`
const StInputWriterTitle = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    font-size: 13px;
`
const StInputDesc = styled.input`
    width: 100%;
    height: 400px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    font-size: 13px;
    vertical-align: top;
`
const StBtn = styled.button`
margin-top: 30px;
    width: 100%;
    height: 40px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.15);
`