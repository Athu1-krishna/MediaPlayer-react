import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/hero.gif'
import feature1 from '../assets/feature1.jpeg'
import feature2 from '../assets/feature2.jpeg'
import feature3 from '../assets/feature3.jpeg'
import { Card } from 'react-bootstrap'

const Landing = () => {
  return (
    <div style={{paddingTop:'100px'}} className='container'>
      {/* landing */}
      <div  className="row align-items-center" style={{height:'80vh'}}>
        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:''}}>Media player app will allow user to add ro remove their uploaded videos  form youtube and also allow them to  arrange it in different categories by drag and drop.User can also have provision to manage their watch history as well. What are you waiting for, let start exploring out site!!!</p>
          <Link to={'/home'} className='btn btn-info'>Get Started</Link>
        </div>
        <div className="col">

        </div>
        <div className="col-lg-6">
          <img className='img-fluid ms-5' src={landingImg} alt="Landing image" />
        </div>
      </div>
      {/* features */}
      <div className="my-5">
        <h3 className="text-center">Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img  variant="top" src={feature1} />
              <Card.Body>
                <Card.Title>Managing Video</Card.Title>
                <Card.Text>
                 User can upload, view and remove the videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img  variant="top" src={feature2} />
              <Card.Body>
                <Card.Title>Categorise Videos</Card.Title>
                <Card.Text>
                 Users can categorise the videos by drag and drop feature.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img  variant="top" src={feature3} />
              <Card.Body>
                <Card.Title>Managing History</Card.Title>
                <Card.Text>
                 Users can manage the watch history of all videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          
        </div>
      </div>
      {/* youtube */}
      <div className="mt-5 row align-items-center border rounded p-5">
        <div className="col-lg-5">
          <h3 className="text-warning">Simple, Fast and Powerful</h3>
          <p style={{textAlign:'left'}}> <span className="fs-5 fw-bolder">Play Everything</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nesciunt reiciendis quod .</p>
          <p style={{textAlign:'justify'}}> <span className="fs-5 fw-bolder">Categorise Videos</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nesciunt reiciendis quod .</p>
          <p style={{textAlign:'justify'}}> <span className="fs-5 fw-bolder">Managing History</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nesciunt reiciendis quod .</p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/1B6DI_o-9G8?si=ycUm2vqPx99x04Ln" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing