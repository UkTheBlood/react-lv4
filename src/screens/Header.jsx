import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
    return (
        <>
            <StDivSize>
                <Icon><Link to={"/"}>🏠</Link></Icon>
            </StDivSize>
        </>
    )
}
export default Header

const StDivSize = styled.div`
    margin: 10px;
    border: 1px solid gray;
`

const Icon = styled.p`
    font-size: 20px;
    margin-left: 20px;
`