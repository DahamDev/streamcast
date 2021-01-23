import  styled from 'styled-components/macro';

export const Container = styled.div`

    background-color:black;
    display:flex;
    flex-direction:column;
    background-image:url(${props=>props.url});
    height:100vh;
    border-bottom:solid #6a6a6a 4px;

   
    

`;

export const Topcontainer =styled.div`
    padding:1rem;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:start;
`;
export const Logo=styled.img`

    width:250px;
    @media(max-width:1000px){
        width:150px;
    }

`;
export const Button=styled.button`
    border:none;
    outline:none;
    color:white;
    background-color:#0ca5de;
    padding: 0.5rem 0.75rem 0.5rem 0.75rem;
    border-radius:5px;
    font-size:1em;
    transition:0.3s;
    &:hover{
        cursor:pointer;
        background-color:#05b9fc;
    }
    
`;
export const Title=styled.h1`
    color:white;
    font-size:3.125em;
    width:50%;
    text-align:center;
    margin:0;
    @media(max-width:1000px){
        font-size:2em;
        width:100%;
    }
`;
export const Subtitle=styled.h2`
    color:white;
    @media(max-width:1000px){
        font-size:1em;
       
    }
    `;
export const Bodycontainer=styled.div`

    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:7rem;

`;
