import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'
import { Link } from 'react-router-dom'

const Home = () => {
  // state lifting 
  const [addResponseFromHome, setAddResponseFromHome] = useState("");
  const [deleteResponseFromCategory, setDeleteResponseFromCategory] = useState("");
  const [deleteResponseFromView, setDeleteResponseFromView] = useState("")
  return (
    <div style={{paddingTop:'100px'}}>
      <div className="container mb-5 d-flex justify-content-between">
        <Add setAddResponseFromHome={setAddResponseFromHome}/>
        <Link to={'/history'} className='bg-info text-white font-bold rounded' style={{textDecoration:"none", display:"flex", justifyContent:"center", alignItems:"center", padding:''}}>Watch History</Link>
      </div>
      <div className="container-fluid row my-5">
        <div className="col-lg-6">
          <h3>All videos</h3>
          <View addResponseFromHome={addResponseFromHome} deleteResponseFromCategory={deleteResponseFromCategory} setDeleteResponseFromView={setDeleteResponseFromView} />
        </div>
        <div className="col-lg-6">
          <Category setDeleteResponseFromCategory={setDeleteResponseFromCategory} deleteResponseFromView={deleteResponseFromView}/>
        </div>
      </div>
    </div>
  )
}

export default Home