import { Link } from "react-router-dom";
import styled from "styled-components";

function Home() {
    return (
        <div>
            <div>
                <StPTitle>무엇을 할까요?</StPTitle>
            </div>
            <StDivContentsBox>
                <Link to={"work/add"}>
                    <StPContensTitle>할 일 기록하기</StPContensTitle>
                </Link>
            </StDivContentsBox>
            <StDivContentsBox>
                <Link to={"/Works"}>
                    <StPContensTitle>TODO LIST</StPContensTitle>
                </Link>
            </StDivContentsBox>
        </div>
    )
}

export default Home;

const StPTitle = styled.p`
    margin: 50px 0px 0px 20px;
    font-size: 30px;
`

const StDivContentsBox = styled.div`
    margin: 30px;
    height: 100px;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: 10px;
    &:hover {
        box-shadow: 2px 2px lightgray;
    }
`
const StPContensTitle = styled.p`
    margin-left: 20px;
    line-height: 50px;
    font-size: 22px;
    color: black;
    text-decoration-line: none;
`