import { useState } from "react"
import { Modal } from "../organism/Modal"
import { FaHeart, FaComment } from 'react-icons/fa'; 



export const Interaction = ({ src, quantity, commentsData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    window.scrollTo(0, 0)
  };

  return (
    <>
      {src === "like" ? (
        <button>
        
        <FaHeart /> 
        <small>{quantity}</small>
      </button>
      ) : (
        <>
          <button onClick={handleShow}>
         
            <FaComment /> 
            <small>{quantity}</small>
          </button>
          <Modal show={show} handleClose={handleClose} commentsData={commentsData} />
        </>
      )}
    </>
  )
}