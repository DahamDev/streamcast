import React, { Component } from 'react';
import Jumbotron from '../components/jumbo'
import JumboData from '../fixtures/jumbo'


const JumboContainer = () => {
    return ( 

  
    <Jumbotron.Container>

    {JumboData.map(data=>(
      <Jumbotron key={data.id} direction={data.direction}>

        <Jumbotron.Pane>

          <Jumbotron.Title>{data.title}</Jumbotron.Title>
          <Jumbotron.SubTitle>{data.subTitle}</Jumbotron.SubTitle>

        </Jumbotron.Pane>
        <Jumbotron.Pane>
          <Jumbotron.Image source={data.image}></Jumbotron.Image>
        </Jumbotron.Pane>

      </Jumbotron>
    ))}

  </Jumbotron.Container>
     );
}
 
export default JumboContainer;