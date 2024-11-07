import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div style={{height:"300px"}} className='mt-5 container w-100'>
      <hr />
      <div className="d-flex justify-content-between">
        {/* intro */}
        <div style={{width:"400px"}}>
          <h5><i className='fa-solid fa-music me-2'></i>Media Player</h5>
          <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
          <p>Code licensed Media player, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
        {/* links */}
        <div className="d-flex flex-column">
          <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:'none', color:'white'}}>Home Page</Link>
          <Link to={'/history'} style={{textDecoration:'none', color:'white'}}>History Page</Link>
        </div>
        {/* guides */}
        <div className="d-flex flex-column">
          <h5>Guides</h5>
          <a href="https://react.dev/" style={{textDecoration:'none', color:"white"}} target='_blind'>React</a>
          <a href="https://reactrouter.com/en/main" style={{textDecoration:'none', color:"white"}} target='_blind'>React Router</a>
          <a href="https://react-bootstrap.netlify.app/" style={{textDecoration:'none', color:"white"}} target='_blind'>React Bootstrap</a>
        </div>
        {/* contacts */}
        <div className="d-flex flex-column">
          <h5>Contact</h5>
          <div className="d-flex">
            <input placeholder='Enter your Email' type="text" className="form-control me-2" />
            <button className="btn btn-info"><i className='fa-solid fa-arrow-right'></i></button>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'><i className='fa-brands fa-twitter'></i></a>
            <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'><i className='fa-brands fa-instagram'></i></a>
            <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'><i className='fa-brands fa-facebook'></i></a>
            <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'><i className='fa-brands fa-linkedin'></i></a>
            <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'><i className='fa-brands fa-github'></i></a>
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center mt-3">Copyright &copy; Athul Krishna, Media Player App. Build with React</p>
    </div>
  )
}

export default Footer