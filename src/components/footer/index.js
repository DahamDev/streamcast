import React, { Children, Component } from 'react';
import {Container,Title,Row,Column,Text} from './styles/footer'

const Footer = ({children, ... restProps}) => {
    return ( 
        <Container>
            {children}
        </Container>
     );
}
 
export default Footer;

Footer.Title = ({children})=>{
    return <Title>{children}</Title>
}

Footer.Column = ({children}) =>{
    return <Column>{children}</Column>
} 

Footer.Row = ({children})=>{
    return <Row>{children}</Row>
}

Footer.Text = ({children})=>{
    return <Text>{children}</Text>
}