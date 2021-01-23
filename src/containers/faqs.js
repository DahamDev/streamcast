import React, { Component } from 'react';
import FaqData from '../fixtures/faqs.json'
import Faqs from '../components/faqs'
import RegButton from '../components/RegisterButton';
const FaqContainer = () => {
    return ( 
        <Faqs.AllContainer>
         <Faqs.Header>Frequently Asked Question</Faqs.Header>
         {FaqData.map(data=>{

            return(
                <Faqs key={data.id}>
                <Faqs.HeaderBox>
                    <Faqs.HeaderText>{data.header}</Faqs.HeaderText>
                    <Faqs.ToggleButton >+</Faqs.ToggleButton>
                </Faqs.HeaderBox>

                <Faqs.DetailBox >
                    <Faqs.Details>
                        {data.body}
                    </Faqs.Details>
                </Faqs.DetailBox>
            </Faqs>
            )

         })}

        <RegButton>
            <RegButton.Input placeholder="Email address"></RegButton.Input>
            <RegButton.Button>GET STARTED</RegButton.Button>
        </RegButton>
        <RegButton.Text>Ready to watch? Enter your email to create or restart your membership.</RegButton.Text>
        </Faqs.AllContainer>

);
 
}
 
export default FaqContainer;

