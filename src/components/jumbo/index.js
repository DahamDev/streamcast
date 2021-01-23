import React, { Component } from 'react';
import {Inner,Title,Pane,SubTitle,Image,Container} from './styles/jumbotron'

const Jumbotron = ({children, direction='row', ...restProps}) => {
    return ( 
        <Inner direction={direction}>
            {children}
        </Inner>
     );
}
 
export default Jumbotron;

Jumbotron.Title = ({children})=>{
    return <Title>{children}</Title>
}

Jumbotron.Pane = ({children})=>{
    return <Pane>{children}</Pane> 
}

Jumbotron.SubTitle =({children})=>{
    return <SubTitle >{children}</SubTitle>
}

Jumbotron.Image = ({children,source,... restProps})=>{
    return  <Image  src={source}></Image>
}

Jumbotron.Container=({children})=>{
    return <Container>{children}</Container>
}