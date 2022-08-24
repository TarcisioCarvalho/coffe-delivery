import styled from "styled-components";



export const HeaderContainer = styled.header`
    padding-top:2rem;
    padding-bottom:2rem;
    display:flex;
    align-items:center;
    justify-content:space-between;



 nav{
    div{
        padding: 0.5rem;
        font-size:${({theme})=> theme.textSizes["size-14px"]};
        background-color:rgba(235, 229, 249, 1);
        color:${({theme})=> theme.colors["purple-dark"]};
        color:rgba(75, 41, 149, 1);
        line-height:130%;
        height:100%;
        display:flex;
        align-items:center;
        gap:4px;
    }
    display:flex;
    align-items:center;
    gap:12px;
    a{
        padding:.5rem;
        background-color:rgba(241, 233, 201, 1);
        
        color:${({theme})=> theme.colors["yellow-dark"]};
        cursor: pointer;
    }
 }
`;