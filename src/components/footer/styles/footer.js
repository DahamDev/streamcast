import  styled  from 'styled-components/macro';


export const Container = styled.div`

    display:flex;
    flex-direction:column;
    padding:3rem;
    background-color:black;
    border-top:#9c9c9c solid 2px;


`;

export const Title = styled.h1`
    font-size:1em;
    color:#bdbdbd;
    @media(max-width:1000px){
        font-size:0.5em;
    }

`;
export const Row = styled.div`
    display:flex;
    flex-direction:row;
`;
export const Column = styled.div`
    width:25%;
`;
export const Text = styled.p`
    color:#bdbdbd;
    @media(max-width:1000px){
        font-size:0.5em;
    }
`;

