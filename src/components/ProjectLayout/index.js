import { useState } from "react";
import { useHistory } from "react-router";
import Modal from "../Modal"
import Project from "../Project"
import ProjectTabs from "../ProjectTabs"
import {TiArrowBackOutline} from 'react-icons/ti'


const ProjectLayout = () => {
  const [showModal, setShowModal] = useState(false)
  const history = useHistory()
 const goReturn = () =>{
   history.goBack()
 }
  return(
    <>
    <div className="pt-32 px-32 | relative">
      <h1 className="text-center text-6xl font-bold font-mono">Projects</h1>
      <ProjectTabs/>
      <div className="mt-10 grid gap-5 grid-cols-3">
        <Project actualState={showModal} upState={setShowModal}/>
        <Project actualState={showModal} upState={setShowModal}/>
        <Project actualState={showModal} upState={setShowModal}/>
        <Project actualState={showModal} upState={setShowModal}/>
      </div>
      <button className='fixed top-5 right-5' onClick={goReturn}><TiArrowBackOutline className='text-4xl'/></button>
    </div>
    <Modal showModal={showModal} setShowModal={setShowModal}/>    
    </>
    )
}
export default ProjectLayout