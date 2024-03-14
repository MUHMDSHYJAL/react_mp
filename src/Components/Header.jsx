import React from "react"
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
function Header() {
  return(
    <div>
      <Navbar className="bg-body-tertiary"> 
        <Container>
          <Navbar.Brand href="#home">
          <i class="fa-solid fa-upload fa-beat-fade fa-xl me-3" style={{color:'black'}}></i>
          {''}
            Media Player
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header