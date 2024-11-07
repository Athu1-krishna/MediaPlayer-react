import React, {useState} from 'react'
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap'
import { saveVideoAPI } from '../Services/allAPI';


const Add = ({ setAddResponseFromHome }) => {
  const [invalidYoutubeLink, setInvalidYoutubeLink] =useState(false);
  const [show, setShow] = useState(false);
  const [videoDetails, setVideoDetails] = useState({
    caption: "", imgUrl: "", youTubeLink: ""
  })
  console.log(videoDetails);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractingEmbedLinkFromYoutubeLink = (userINputYoutubeLink) =>{
    // steps for creating embed link form youtube link
    if (userINputYoutubeLink.includes('https://www.youtube.com/watch?v=')){
      const videoId = userINputYoutubeLink.split("v=")[1].slice(0,11);
      setInvalidYoutubeLink(false);
      setVideoDetails({ ...videoDetails, youTubeLink: `https://www.youtube.com/embed/${videoId}`})


      
    }
    else{
      setInvalidYoutubeLink(true);
      setVideoDetails({...videoDetails, youTubeLink: ""})
    }
  }
  const handleUploadVideo = async () =>  {
    // object destructure : const  {key1, key2....} : object-name
    const {caption, imgUrl, youTubeLink} = videoDetails
    if(caption && imgUrl && youTubeLink){
      // Store video details permanently
      try{
        const result = await saveVideoAPI(videoDetails)
        console.log(result);
        if(result.status>=200 && result.status<300){
          // pass result to view component
          setAddResponseFromHome(result);
          alert("Video upload successfully!!!")
          handleClose()
        }else{
          console.log(result);
          
        }
        
      } catch(err){
          console.log(err);
          
      }
    }else{
      alert("Please fill the form completely")
    }
  }


  return (
    <>
    <div className="d-flex align-items-center">
      <h5>Upload New Video</h5>
      <button onClick={handleShow} className="btn btn-warning ms-3 rounded-circle fw-bolder fs-5">+</button>
    </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Uploading video details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-3">
            <FloatingLabel className='mt-2' controlId="floatingCaption" label="Caption">
              <Form.Control onChange={e=>setVideoDetails({...videoDetails, caption:e.target.value})} type="text" placeholder="Caption" />
            </FloatingLabel>
            <FloatingLabel className='mt-2' controlId="floatingUrl" label="Video Image URL">
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, imgUrl: e.target.value })} type="text" placeholder="Video Image URL" />
            </FloatingLabel>
            <FloatingLabel className='mt-2' controlId="floatingLink" label="Video Youtube Link">
              <Form.Control onChange={e=>extractingEmbedLinkFromYoutubeLink(e.target.value)} type="text" placeholder="Video Youtube Link" />
            </FloatingLabel>
            {
              invalidYoutubeLink && 
              <div className="text-danger fw-bolder mt-2">Invalid Youtube Link!!!</div>
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUploadVideo} className='btn btn-info' variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add