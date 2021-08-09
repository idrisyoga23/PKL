import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction};
    justify-content: ${({justify}) => justify};
    align-items: ${({alignItems}) => alignItems};
    flex-wrap: ${({wrap}) => wrap};
    width: 100%;
    // height: 100%;
`
export const Header = styled.div`
    img{
        width: 90px;
        height: 90px;
        margin-left:10px;
        margin-top:-40px;
        margin-bottom:10px;
    }
`
