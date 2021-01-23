import React, { Component } from 'react';
import {Container, Input , Button, Text} from './styles/regbutton';

const RegButton = ({children}) => {
    return ( 

        <Container>
            {children}
        </Container>
     );
}
 
export default RegButton

RegButton.Input = ({... restProps}) =>{
    return <Input {... restProps}></Input>
}

RegButton.Button = ({children, ... restProps})=>{
    return <Button {...restProps}>{children}</Button>
}

RegButton.Text = ({children})=>{
    return <Text>{children}</Text>
}