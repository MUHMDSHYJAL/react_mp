import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
        <div className='row p-5 shadow'>
          <div className='col d-flex flex-column justify-content-center'>
            <h1>Media Player 2K24</h1>
            <p>Explore media player for youtube video upload and managment. You can add and manage videos, catagories and even check</p>
            <div>
              <Link to={'/dash'} className='btn btn-success'>Explore</Link>
            </div>
          </div>
          <div className='col'>
            <img src="https://animesher.com/orig/2/211/2113/21133/animesher.com_music-old-school-90s-2113379.gif"
              className='img-fluid shadow' alt="img" />
          </div>
        </div>
        
      </div>

      <div className='mt-3 p-5'>
          <h2 className='text-center'>Features</h2>
          <div className='d-flex mt-2 flex-row justify-content-between'>

            <div className="card" style={{width: '18rem'}}>
              <img class="card-img-top" src="https://cdn.dribbble.com/users/652746/screenshots/1844317/upload_animation.gif" style={{height:'200px'}} alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Upload Videos</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

            <div className="card" style={{width: '18rem'}}>
              <img class="card-img-top" src="https://cdn.dribbble.com/users/1044993/screenshots/4647139/media/3aeb01af114ff757dee01edd95db7865.gif" style={{height:'200px'}} alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Watch Videos</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

            <div className="card" style={{width: '18rem'}}>
              <img class="card-img-top" src="https://i0.wp.com/codemyui.com/wp-content/uploads/2018/07/Play-Icon-to-Video-Animation-on-Click.gif?fit=880%2C400&ssl=1" style={{height:'200px'}} alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">View History</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

          </div>

        </div>
        <div className='mt-5 row p-5 d-flex justify-content-center flex-row align-items-center'>
          <div className="col">
            <h2>Simple, Fast & Secure</h2>
            <p style={{textAlign:"justify"}}>Media Player 2K24 is a platform for simple and faster youtube video uploading and management.
            Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <div className='col'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/oQX39Q3Lazs?si=1vJ2G6Xivkr-Imfp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
    </>
  )
}

export default Landing