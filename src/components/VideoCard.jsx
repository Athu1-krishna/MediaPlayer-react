import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { removeVideoAPI, saveHistoryAPI } from '../Services/allAPI';

const VideoCard = ({ displayData, setDeleteVideoResponseFromVideoCard, insideCategory }) => {
  
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = async () => {
    // display modal
    setShow(true);
    // store history in json 
    const {caption, youTubeLink} = displayData;
    const sysDateTime = new Date();
    console.log(sysDateTime.toLocaleString('en-US', { timeZoneName: 'short' }));
    
    const timeStamp = sysDateTime.toLocaleString('en-US', {timeZoneName:'short'});
    const historyDetails = {caption, youTubeLink, timeStamp};
    try{
      await saveHistoryAPI(historyDetails);
    }
    catch(err){
      console.log(err);
      
    }
    
  }

  const removeVideo = async (id) =>{
    try{
      const result = removeVideoAPI(id);
      setDeleteVideoResponseFromVideoCard(result);
    }
    catch(err){
      console.log(err);
      
    }

  }
  // drag start
  const videoCardDragStarted = (e, dragVideoDetails) => {
    console.log(`Inside videocarddragstarted videoid : ${dragVideoDetails?.id}`);
    // share data using event drag start
    e.dataTransfer.setData("videoDetails", JSON.stringify(dragVideoDetails));
  }
  return (
    <div>
      <Card draggable={true} onDragStart={e => videoCardDragStarted(e, displayData)} style={{ height: '250px' }}>
        <Card.Img onClick={handleShow} variant="top" height={'150px'} src={displayData?.imgUrl} />
        <Card.Body>
          <Card.Text className='d-flex justify-content-between'>
            <p>{displayData?.caption}</p>
            {!insideCategory && <button  onClick={()=>removeVideo(displayData?.id)} className="btn">
              <i className="fa-solid fa-trash text-danger"></i>
            </button>}
          </Card.Text>
        </Card.Body>
      </Card>
      <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="315" src={`${displayData?.youTubeLink}?autoplay=1`} title="Caption" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        </Modal.Body>
        
      </Modal>
    </div>

  )
}

export default VideoCard