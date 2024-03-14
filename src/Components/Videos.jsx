import React,{useState,useEffect} from 'react'
import VideoCard from './VideoCard'
import { getVideo } from '../services/allApis'

function Videos(addStatus) {

  const [allVideos,setAllVideos]=useState([])
  const [delStatus,setDelStatus]=useState([])

  useEffect(()=>{
    getData()
  },[addStatus,delStatus])

  const getData=async()=>{
    const res=await getVideo()
    //console.log(res.data)
    setAllVideos(res.data)
    //console.log(allVideos)
  }

  return (
    <div className='bg-light row border border-3 border-dark p-3'>
      {
        allVideos?
        allVideos.map(item=>(
          <VideoCard video={item} setDelStatus={setDelStatus}/>
        ))
        :
        <h1>No Videos</h1>
      }
      
    </div>
  )
}

export default Videos
