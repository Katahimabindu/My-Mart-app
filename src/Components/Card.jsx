import React,{Component} from 'react';
import Card from 'react-bootstrap/Card';
import car from './Images/car-icon.png'
import payment from './Images/payment-icon.png'
import sec from './Images/sec-payment-icon.png'
import headphone from './Images/headphone-icon.png'
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/20px10" /> */}
        <Card.Body>
          <Card.Title><img src={car}/></Card.Title>
          <Card.Text>
            Lorem ipsum dolor, sit amet 
          </Card.Text>
        </Card.Body>
    
      </Card>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
          <Card.Title><img src={payment}/></Card.Title>
          <Card.Text>
          Lorem ipsum dolor, sit amet 
          </Card.Text>
        </Card.Body>
    
      </Card>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
          <Card.Title><img src={sec}/></Card.Title>
          <Card.Text>
          Lorem ipsum dolor, sit amet 
          </Card.Text>
        </Card.Body>
        
    
      </Card>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
          <Card.Title><img src={headphone}/></Card.Title>
          <Card.Text>
          Lorem ipsum dolor, sit amet 
          </Card.Text>
        
        </Card.Body>
        
    
      </Card>

    </CardGroup>
  );
}

export default GroupExample;