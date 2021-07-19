import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import { useState } from "react"

const Carousel = ({slides}) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if(!Array.isArray(slides)||slides.length <= 0){
    return null;
  }
  
  return(
    <section className="relative | flex justify-center items-center | overflow-hidden">
      <div className="absolute top-0 bottom-0 right-3 | cursor-pointer | flex items-center | bg-primary hover:bg-blue-600 | px-3" onClick={nextSlide}>
      <FaArrowAltCircleRight className="text-white text-4xl"  />
      </div>
      <div className="absolute top-0 bottom-0 left-3 | cursor-pointer | flex items-center | bg-primary hover:bg-blue-600 | px-3" onClick={prevSlide}>
      <FaArrowAltCircleLeft className="text-white text-4xl"  />
      </div>

      {
        slides.map((slider,index) => {
          return (
            index === current && (
             
              <img src={slider.image} alt="project image" key={index}/>
            
            )
            
          )
        })
      }    
    </section>
  )
}

export default Carousel