import React from "react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className='bg-light w-100 d-flex flex-column justify-content-center'>
      <div className='row p-5'>
        <div className='col'>
          <h4>Media Player 2K24</h4>
          <p style={{ textAlign: 'justify' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged.</p>

        </div>
        <div className='col'>
          <h4>Links</h4>
          <Link to={'/'}>Landing</Link><br />
          <Link to={'/dash'}>Dashboard</Link><br />
          <Link to={'/his'}>History</Link>
        </div>
        <div className="col">
          <h4>Reference</h4>
          <a href="https://react.dev/" target='_blank'>React</a><br />
          <a href="https://getbootstrap.com/" target='_blank'>Bootstrap</a><br />
          <a href="https://react-bootstrap.netlify.app/" target='_blank'>React-Bootstrap</a>
        </div>
      </div>
      <div className='text-center'>
        <p> &copy; Media Player 2K24</p>
      </div>
    </div>
  )
}

export default Footer