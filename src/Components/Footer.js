import React from 'react'
import {Container,Row,Col,Stack,Image,Nav,NavLink} from "react-bootstrap"

const Footer = () => {
  return (
    <div>
      <Container fluid>
        <Row className='bg-primary text-white'>
<Col>
<Stack>
    <h2>Mart</h2>
    
    <p>Sell on Mart,sell under Acceleretor,protect and build your brand/Global selling,Become an Affilliate,Advertise your products</p>
    </Stack></Col>
<Col>
<Nav className='flex-column fs-5'>
<h2>Let us help you</h2>
<NavLink href="#" className="text-white">carrers</NavLink>
<NavLink href="#" className="text-white">our stores</NavLink>
<NavLink href="#" className="text-white">our cares</NavLink>
<NavLink href="#" className="text-white">terms nd conditions</NavLink>
<NavLink href="#" className="text-white">privcy policy</NavLink>
</Nav>

</Col>
<Col>
<h2>Contact us</h2>
<p>pdm.bindu45@gmail.com</p>
<p>9704927966</p>
</Col>
        </Row>

      </Container>
    </div>
  )
}

export default Footer
