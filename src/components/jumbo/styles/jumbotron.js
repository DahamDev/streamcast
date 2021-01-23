import styled from 'styled-components/macro'

export const Container =styled.div`
    display:flex;
    flex-direction:column;
    width:100hw;
    height:100%;
    background-color:black;
    padding:0 5rem 0 5rem;
    padding-top:3rem;
    

    @media(max-width:1000px){
        padding:1rem;
         }


`;

export const Inner = styled.div`
    display:flex;
    flex-direction:${({direction})=>direction};
    width:100%
    height:1rem;
    color:white;
    background-color:black;
    @media(max-width:1000px){
        flex-direction:column;
         }
    
`;

export const Title =styled.h1`
    font-size:3em;
    @media(max-width:1000px){
        font-size:2em;
         }
`;

export const SubTitle =styled.h2`
font-size:1.5em;
@media(max-width:1000px){
    font-size:1em;
     }
`;

export const Pane =styled.div`
    width:50%;
    @media(max-width:1000px){
        width:100%;
        text-align:center;
              }
        
    
`;

export const Image = styled.img`
    width:450px;
    height:300px;
    object-fit: contain;
    padding:1rem;
    transition:0.5s;
   
    @media(max-width:800px){
        width:250px;
        height:150px;
    }
`;

