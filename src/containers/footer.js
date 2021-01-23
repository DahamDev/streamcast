import React, { Component } from 'react';
import Footer from '../components/footer'

const FooterContainer = () => {
    return ( 

        <Footer>
            <Footer.Title>Questions?Contact us</Footer.Title>
            <Footer.Row>
                <Footer.Column><Footer.Text>FAQ</Footer.Text></Footer.Column>
                <Footer.Column><Footer.Text>Help Center</Footer.Text></Footer.Column>
                <Footer.Column><Footer.Text>Account</Footer.Text></Footer.Column>
                <Footer.Column><Footer.Text>Media Center</Footer.Text></Footer.Column>
            </Footer.Row>

            <Footer.Row>
                <Footer.Column><Footer.Text>Investor Relations</Footer.Text></Footer.Column>
                <Footer.Column><Footer.Text>Jobs</Footer.Text></Footer.Column>
                <Footer.Column><Footer.Text>Ways to watch</Footer.Text></Footer.Column>
                <Footer.Column><Footer.Text>Terms of Use</Footer.Text></Footer.Column>
            </Footer.Row>

            <Footer.Row>
                <Footer.Column><Footer.Text>Privacy</Footer.Text></Footer.Column>
                <Footer.Column><Footer.Text>Coookie Preference</Footer.Text></Footer.Column>
                <Footer.Column><Footer.Text>Corporate Information</Footer.Text></Footer.Column>
                <Footer.Column><Footer.Text>Contact us</Footer.Text></Footer.Column>
            </Footer.Row>

            <Footer.Row>
                <Footer.Column><Footer.Text>Speed Test</Footer.Text></Footer.Column>
                <Footer.Column><Footer.Text>Legal Notices</Footer.Text></Footer.Column>
                <Footer.Column><Footer.Text>Streaming Originals</Footer.Text></Footer.Column>
                <Footer.Column><Footer.Text>New Arrivals</Footer.Text></Footer.Column>
            </Footer.Row>
            <Footer.Title>Streaming Sri Lanka</Footer.Title>
         </Footer>
     );
}
 
export default FooterContainer;
