import React, { Component, Fragment } from 'react';
import FooterContainer from '../containers/footer';
import JumboContainer from '../containers/jumbotron';
import FaqContainer from '../containers/faqs';
import HeaderContainer from '../containers/header';

const Home = () => {
    return (
        <Fragment>
          <HeaderContainer/>
          <JumboContainer/>
          <FaqContainer/>
          <FooterContainer/>
        </Fragment>
      );
}
 
export default Home;