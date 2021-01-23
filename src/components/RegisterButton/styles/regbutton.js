import styled from 'styled-components/macro'

export const Container = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    width:50rem;

    @media(max-width:800px){
        width: 20rem;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    margin-top:1.5rem;
`;

export const Input =  styled.input`
    border:none;
    height:60px;
    width:75%;
    outline:none;
    padding-left:1em;
    font-size:1em;

    @media(max-width:800px){
        height:50px;
        width:100%;
       
    }
    
`;

export const Button = styled.button`
    outline:none;
    border:none;
    color:white;
    background-color:#0ca5de;
    height:62px;
    width:25%;
    cursor:pointer;
    font-size:1.25em;
    transition:0.3s;
    &:hover{
        cursor:pointer;
        background-color:#05b9fc;
    }
    @media(max-width:800px){
        height:40px;
        width:50%;
        margin-top:5px;
        font-size:1em;
    }

`;


export const Text = styled.p`
text-align:center;
color:white;

`;