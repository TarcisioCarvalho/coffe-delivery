import styled from "styled-components";


interface IconContainerProps{
   colorIcon: 'purple'|'yellow'|'yellow-dark';
}

export const SuccessContainer = styled.div`

    display:flex;
    flex-direction:column;
    align-items:center;
    gap:2rem;
    
    div:first-child{
        display:flex;
        flex-direction:column;
        gap: 0.25rem;
        h2 {
            color:${({theme})=> theme.colors["yellow-dark"]};
            font-family:${({theme})=> theme.fonts.title};
            font-size:${({theme})=> theme.textSizes["size-32px"]};
            font-weight:${({theme})=> theme.fontsWeight.balooExtraBold};
        }
        p:first-child{
            color:${({theme})=> theme.colors["base-subtitle"]};
            font-size:${({theme})=> theme.textSizes["size-20px"]};
        }
        ul {
            border:1px solid #8047F8;
          /*   border-image: linear-gradient(to left, #DBAC2C, #8047F8);
            border-image-slice:1; */
            border-radius:6px 36px;
          /*   border:double 1px transparent;
            background-image:linear-gradient(white,white),
            linear-gradient(90deg, #DBAC2C, #8047F8);
            background-origin:border-box;
            background-clip:content-box,border-box; */
            
            padding:2rem;
            margin-top:2rem;
            display:flex;
            flex-direction:column ;
            gap:2rem;
            li {
                span {
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    min-width:2rem;
                    min-height:2rem;
                    max-width:2rem;
                    max-height:2rem;
                    border-radius:50%;
                    color:white;
                }
               
           
                display:flex;
                align-items:top;
                gap: 0.75rem;
            }
            li:nth-child(2){
                div {
                    p:nth-child(2){
                       
                        font-weight:${({theme})=> theme.fontsWeight.boldRoboto};
                    }
                }
              }
              li:nth-child(3){
                div {
                    p:nth-child(2){
                       
                        font-weight:${({theme})=> theme.fontsWeight.boldRoboto};
                    }
                }
              }
        }
    }
    img {
        width:100%;
    }
    @media only screen and (min-width: 1150px) {
     flex-direction:row;
    }
`;

export const IconContainer = styled.span<IconContainerProps>`
    background-color:${(props)=> props.theme.colors[props.colorIcon] };

`;