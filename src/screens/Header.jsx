import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
    return (
        <>
            <StDivSize>
                <Icon><Link to={"/"}>🏠</Link> 모두의 투두 리스트</Icon>
            </StDivSize>
        </>
    )
}
export default Header

const StDivSize = styled.div`
    border: 1px solid rgba(0, 0, 0, .15);
`

const Icon = styled.p`
    font-size: 20px;
    margin-left: 20px;
`