import React,{useEffect,useState} from 'react'
import { deleteHistory, getHistory } from '../services/allApis'
import { toast } from 'react-toastify'

function History() {
  const [his,setHis]=useState([])
  const [delHis,setDelHis]=useState({})

  useEffect(()=>{
    getData()
  },[delHis])

  const getData=async()=>{
    const res=await getHistory()
    console.log(res.data)
    setHis(res.data)
    
  }
  const handleDelete=async(id)=>{
    const res=await deleteHistory(id)
    if(res.status>=200 && res.status<300){
      setDelHis(res)
        toast.success("History Deleted Successfully!!")
        
    }
    else{
      toast.error("History Deletion Failed")
    }
    
  }

  return (
    
    <>
    <div className='p-5'>
      <h1>Watch History</h1>
      <table className='table table-bodered'>
        <tr>
          <th>Caption</th>
          <th>Url</th>
          <th>Date & Time</th>
          <th></th>
        </tr>
        {
          his ?
          his.map(item =>(
            <tr>
              <td>{item.caption}</td>
              <td>{item.url}</td>
              <td>{item.datetime}</td>
              <td>
              <i className="fa-solid fa-trash text-dark" onClick={()=>{handleDelete(item.id)}}></i>
              </td>
            </tr>
          ))
          :
          <tr>
            <p className='text-danger'>No watch history!!</p>
          </tr>
        }
      </table>
    </div>
    
    </>

  )
}

export default History