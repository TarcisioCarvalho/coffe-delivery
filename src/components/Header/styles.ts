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
        border-radius:6px;


        span{
            color:${({theme})=> theme.colors["purple-dark"]};
            font-size:${({theme})=> theme.textSizes["size-14px"]};
            line-height:130%;
        }
    }
    display:flex;
    align-items:center;
    gap:12px;
    a{
        display:flex;
        padding:.5rem;
        background-color:rgba(241, 233, 201, 1);
        border-radius:6px;
        color:${({theme})=> theme.colors["yellow-dark"]};
        position:relative;
        cursor: pointer;
        transition: 0.3s;
        &:hover{
            color:${({theme})=> theme.colors["yellow-light"]};
            background-color:${({theme})=> theme.colors["yellow-dark"]};
        }
        div{
           
            font-size:${({theme})=> theme.textSizes["size-12px"]};
            font-weight:${({theme})=> theme.fontsWeight.boldRoboto};
            width:20px;
            height:20px;
            border-radius:50%;
            color:${({theme})=> theme.colors.white};
            background-color:${({theme})=> theme.colors["yellow-dark"]};
            display:flex;
            align-items:center;
            justify-content:center;
            position:absolute;
            top:-10px;
            right:-10px;
        }
    }
 }
`;