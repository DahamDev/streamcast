import React, { Component, useState, createContext, useContext} from 'react';
import {Container, HeaderBox,HeaderText,ToggleButton, DetailBox, Details, AllContainer, Header} from './styles/faqs'

const ToggleContext = createContext();

const Faqs = ({children}) => {
  const [state, setState]=useState(false);
  return ( 

    <ToggleContext.Provider value={{state, setState}}>
        <Container>
            {children}
        </Container>
    </ToggleContext.Provider>
 
     );
}
 
export default Faqs;

Faqs.HeaderBox =({children})=>{
    return <HeaderBox>{children}</HeaderBox>
}
Faqs.HeaderText =({children})=>{

    return <HeaderText>{children}</HeaderText>
}


Faqs.DetailBox= function DetailBx ({children}) {

    const {state} = useContext(ToggleContext)

     return( state ? <DetailBox>{children}</DetailBox> :null);
}

Faqs.ToggleButton = function ToggleBut ({children,... restProps}){
    
    const {state, setState}= useContext(ToggleContext);
    return <ToggleButton onClick={()=>setState(state=>!state)}>{children}</ToggleButton>
}


Faqs.Details =({children})=>{
    return <Details>{children}</Details>
}

Faqs.AllContainer =({children})=>{
    return <AllContainer>{children}</AllContainer>
}

Faqs.Header = ({children})=>{
    return <Header>{children}</Header>
}