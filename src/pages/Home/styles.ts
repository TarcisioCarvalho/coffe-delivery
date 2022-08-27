import styled, { css } from "styled-components";


interface HomeContainerProps{
    variant:'base-text' | 'purple' | 'yellow' | 'yellow-dark';
}


export const HomeContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:1rem;

    img{
        margin-top:1rem;
        width:95%;
    }

    h1{
        font-family:${({theme})=> theme.fonts.title};
        font-weight:${({theme})=> theme.fontsWeight.balooExtraBold};
        color:${({theme})=> theme.colors["base-title"]};
        font-size:${({theme})=> theme.textSizes["size-48px"]};
        text-align:center;
        width:100%;
    }

    p{
        margin-top:1rem;
        color:${({theme})=> theme.colors["base-subtitle"]};
        font-size:${({theme})=> theme.textSizes["size-20px"]};
        text-align:center;
        width:100%;
    }
    ul{
        list-style:none;
        margin-top:1rem;
        display:flex;
        flex-direction:column;
        align-items:left;
        gap:1rem;
        width:100%;
        
    }

    li{
        display:flex;
        align-items:center;
        gap: 0.75rem;
        span{
            display:flex;
            align-items:center;
            justify-content:center;
          
            width:2rem;
            height:2rem;
            border-radius:50%;
            
        }
    }
    
    h4{
        font-family:${({theme})=> theme.fonts.title};
        font-size:${({theme})=> theme.textSizes["size-32px"]};
        font-weight:${({theme})=> theme.fontsWeight.balooExtraBold};
        text-align:left;
        width:100%;
    }
    
`;

export const SpanContainer = styled.span<HomeContainerProps>`
    background-color:${(props)=> props.theme.colors[props.variant]};
    color:${({theme})=> theme.colors.white};
`;