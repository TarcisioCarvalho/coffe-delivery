import styled from "styled-components";


export const CardContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    //max-width:256px;
    height:310px;
    background-color:${({theme})=> theme.colors["base-card"]};
    position:relative;
    border-radius: 6px 36px;
   /*  padding-left:20px;
    padding-right:20px; */
    img{
        width:120px;
        height:120px;
        position:relative;
        top:-30px;
    }

    h3{
        padding:4px 8px;
        color:${({theme})=> theme.colors["yellow-dark"]};
        background-color:${({theme})=> theme.colors["yellow-light"]};
        border-radius:100px;
        font-size:${({theme})=> theme.textSizes["size-10px"]};
        font-family:${({theme})=> theme.fontsWeight.boldRoboto};
        margin-top:-8px;
    }

    h2{
        font-family:${({theme})=> theme.fonts.title};
        font-weight:${({theme})=> theme.fontsWeight.balooBold};
        font-size:${({theme})=> theme.textSizes["size-20px"]};
        color:${({theme})=> theme.colors["base-subtitle"]};
        margin-top:16px;
    }
    P{
        margin-top:8px;
        color:${({theme})=> theme.colors["base-label"]};
        font-size:${({theme})=> theme.textSizes["size-14px"]};
        text-align:center;
    }
    div{
        width:208px;
        
        width:100%;
        margin-top:36px;
        display:flex;
        align-items:center;
        //justify-content:space-evenly;
        justify-content:space-around;
        

        span{
            font-size:${({theme})=> theme.textSizes["size-14px"]};
            span{
                font-size:${({theme})=> theme.textSizes["size-24px"]};
                font-family:${({theme})=> theme.fonts.title};
                font-weight:${({theme})=> theme.fontsWeight.balooExtraBold};
            }
        }
        div{
            display:flex;
            align-items:center;
            gap:4px;
            padding:8px;
            border-radius:6px;
            background-color:${({theme})=> theme.colors["base-button"]};
            margin-top:0;
            width:76px;
            button{
                border:none;
                cursor: pointer;
                background-color:${({theme})=> theme.colors["base-button"]};
                color:${({theme})=> theme.colors["purple"]};

                &:hover{
                    color:${({theme})=> theme.colors["purple-dark"]};

                }
            }
        }

        button{
            display:flex;
            align-items:center;
            justify-content:center;
            padding:8px;
            border-radius:6px;
            background-color:${({theme})=> theme.colors["purple-dark"]};
            color:${({theme})=> theme.colors.white};
            cursor: pointer;
            
        }

        .buttonCart:hover{
            background-color:${({theme})=> theme.colors["purple"]
                };
            }

       
    }

    
`;