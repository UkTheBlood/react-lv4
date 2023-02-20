import React from 'react'
import styled from 'styled-components';

function Work() {
    return (
        <>
            <StDivWrapper>
                <div>
                    <StPTitle>작성자</StPTitle>
                    <StInputWriterTitle
                        type="text"
                        placeholder='작성자 이름을 입력해주세요. (5자 이내)'
                        maxLength="5"
                        required
                    />
                </div>
                <div>
                    <StPTitle>제목</StPTitle>
                    <StInputWriterTitle
                        type="text"
                        placeholder='제목을 입력해주세요. (50자 이내)'
                        maxLength="50"
                        required
                    />
                </div>
                <div>
                    <StPTitle>내용</StPTitle>
                    <StInputDesc
                        type="text"
                        placeholder='내용을 입력해주세요. (200자 이내)'
                        maxLength="200"
                        required
                    />
                </div>

                <StBtn>추가하기</StBtn>
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