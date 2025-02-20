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
    
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis</p>
    </Stack></Col>
<Col>
<Nav className='flex-column fs-5'>
About us
<br></br>
<br></br>
<NavLink href="#" className="text-white">carrers</NavLink>
<NavLink href="#" className="text-white">ourstores</NavLink>
<NavLink href="#" className="text-white">ourcares</NavLink>
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
