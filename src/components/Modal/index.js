
import {useCallback, useEffect, useRef } from "react";
import {VscClose} from "react-icons/vsc"
import photo from "./carousel.jpg";


const Modal = ({showModal, setShowModal}) => {

  const modalRef = useRef()

 const closeModal = e => {
   if (modalRef.current === e.target){
     setShowModal(false)
   }
 }
 const keyPress = useCallback(e => {
   if(e.key === 'Escape' && showModal){
     setShowModal(false)
   }
 }, [showModal,setShowModal])

 useEffect(() => {
   document.addEventListener('keydown', keyPress)
   
   return () => document.removeEventListener('keydown', keyPress)
 }, [keyPress])
  return(
    <>
    {showModal ? 
    (
      <div className="fixed w-full h-full top-0 left-0 | flex justify-center items-center | bg-modal" ref={modalRef} onClick={closeModal}>
        
          <div className="relative | bg-white | w-2/3 h-1/2 rounded-lg overflow-hidden | grid grid-cols-2 gap-5">
            <div className="">
              <img src={photo} alt="" />
            </div>
            <div className="">
            <h1>This is the modal</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eos maxime repudiandae totam asperiores omnis veniam obcaecati assumenda repellat modi?</p>
            </div>
            <button className="absolute right-3 top-3" onClick={() => setShowModal(!showModal)}>
              <VscClose/>
            </button>
          </div>

        
      </div>
    ) : null }
    </>
  
  )
}

export default Modal;