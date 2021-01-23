import React, { Component } from 'react';
import Header from '../components/header';
import RegButton from '../components/RegisterButton';
const HeaderContainer = () => {
    return ( 

        <Header url={process.env.PUBLIC_URL+"/images/misc/home-bg.jpg"}>
            <Header.TopContainer>
                <Header.Logo source="/images/logos/logo.png"></Header.Logo>
                <Header.SignIn>Sign In</Header.SignIn>
            </Header.TopContainer>

            <Header.BodyContainer>
                <Header.Title>Unlimited movies, TV shows, and more.</Header.Title>
                <Header.SubTitle>Watch anywhere. Cancel anytime.</Header.SubTitle>

                <RegButton>
                    <RegButton.Input placeholder="Email address"></RegButton.Input>
                    <RegButton.Button>GET STARTED</RegButton.Button>
                </RegButton>
                <RegButton.Text>Ready to watch? Enter your email to create or restart your membership.</RegButton.Text>
            </Header.BodyContainer>
            

        </Header>
     );
}
 
export default HeaderContainer;