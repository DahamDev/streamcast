import   styled from 'styled-components/macro';

export const Container = styled.div`
    background-color:black;
    display:flex;
    flex-direction:column;
    margin-bottom:0.8rem;    
    `;
    

export const HeaderBox = styled.div`
    background-color:#383838;
    color:white;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding:0.25rem 1rem 0.25rem 1rem;
    margin-bottom: 1px;
    transition:1s;
    width:50vw;

    @media(max-width:1000px){
      width:80vw;
      padding:0rem 1rem 0rem 1rem;
  }
    
`;

export const HeaderText =styled.p`
    font-size:1em;
    
    
`;

export const DetailBox =styled.div`
    background-color:#383838;
    height:auto;
    padding:0.25rem 1rem 0.25rem 1rem;

    width:50vw;

    @media(max-width:1000px){
      width:80vw;
  }
    
    -webkit-animation: scale-in-ver-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: scale-in-ver-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    @-webkit-keyframes scale-in-ver-top {
        0% {
          -webkit-transform: scaleY(0);
                  transform: scaleY(0);
          -webkit-transform-origin: 100% 0%;
                  transform-origin: 100% 0%;
          opacity: 1;
        }
        100% {
          -webkit-transform: scaleY(1);
                  transform: scaleY(1);
          -webkit-transform-origin: 100% 0%;
                  transform-origin: 100% 0%;
          opacity: 1;
        }
      }
      @keyframes scale-in-ver-top {
        0% {
          -webkit-transform: scaleY(0);
                  transform: scaleY(0);
          -webkit-transform-origin: 100% 0%;
                  transform-origin: 100% 0%;
          opacity: 1;
        }
        100% {
          -webkit-transform: scaleY(1);
                  transform: scaleY(1);
          -webkit-transform-origin: 100% 0%;
                  transform-origin: 100% 0%;
          opacity: 1;
        }
      }
            ;
              
`;

export const ToggleButton = styled.div`
    background-color:#383838;
    border:none;
    color:white;
    font-size:2em;
    &:hover{
      cursor:pointer;
    }
    
`;



export const Details =styled.p`
    color:white;
    line-height:1.5rem;
    font-size:0.8em;

`;


export const AllContainer = styled.div`
    background-color:black;
    padding: 0 20rem 0 20rem;
    width:100hw;
    margin:0;
    padding-top:30px;
    display:flex;
    flex-direction:column;
    align-items:center;

    @media(max-width:1000px){
        padding:0 1rem 0 1rem;
    }
`;

export const  Header = styled.h1`
    color:white;
`;