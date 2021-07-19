
import cx from "classnames";
import ExperienceList from "../ExperienceList";
import { useState } from "react";
import AboutMe from "../AboutMe";
import ExperiencePanel from "../ExperiencePanel";
const knowledgeList = ['NeuralTrend', 'Ealico', 'Contractor'];



const About = () => {
  const containerStyle = cx(
    "mt-10 | grid grid-cols-3 gap-32 | items-center"
  )

  const [knowledgeClick, setKnowledgeClick] = useState('ealico');
  
  return(
    <>
      <h2 className="text-primary text-mono text-6xl font-semibold"><span className="text-gray-400">01</span> About me</h2>
      
      <div className={containerStyle}>
        <div className="col-span-2">
          {knowledgeClick ? <ExperiencePanel detail={knowledgeClick} upState={setKnowledgeClick}/> : <AboutMe/>}
          
                 
        </div>
        <ExperienceList list={knowledgeList} upState={setKnowledgeClick}/>

      </div>
    </>    
  )
}

export default About