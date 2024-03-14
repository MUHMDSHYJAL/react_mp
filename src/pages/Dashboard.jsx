import React,{useState} from 'react'
import { Row,Col } from 'react-bootstrap'
import Addvidoes from '../Components/Addvidoes'
import Videos from '../Components/Videos'
import Categories from '../Components/Categories'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

function Dashboard() {
  const [addStatus,setAddStatus]=useState({})
  return (
    <>
    <div>
      <h3>Dashboard</h3>
      <Row className='p-5 shadow'>
        <Col sm='1' md='2'>
        <Addvidoes setAddStatus={setAddStatus}/>
        </Col>
        <Col sm='4' md='6'>
          <Videos addStatus={addStatus}/>
        </Col>
        <Col sm='2' md='4'>
          <Categories/>
        </Col>
      </Row>
    </div>
    <ToastContainer/>

    </>
  )
}

export default Dashboard