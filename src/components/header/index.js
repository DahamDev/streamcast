import React, { Component } from 'react';
import {Container, Topcontainer,Logo, Button, Title, Subtitle,Bodycontainer} from './styles/header';


const Header = ({children, url}) => {
    return ( 
        <Container url={url}>{children}</Container>
     );
}
 
export default Header;

Header.TopContainer =({children})=>{

   return <Topcontainer>{children}</Topcontainer>
}

Header.BodyContainer =({children})=>{

    return <Bodycontainer>{children}</Bodycontainer>
}

Header.Logo =({children, source})=>{
   return <Logo src={source}></Logo>
}

Header.SignIn =({children})=>{
   return  <Button>{children}</Button>
}

Header.Title =({children})=>{
   return  <Title>{children}</Title>
}

Header.SubTitle=({children})=>{
    return <Subtitle>{children}</Subtitle>
}