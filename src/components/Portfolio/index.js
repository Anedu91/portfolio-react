import Carousel from "../Carousel"
import {Link} from "react-router-dom"
import {CarouselData} from "../../api/CarouselData"

const Portfolio = () => {
  return (
    <>
      <h2 className="text-primary text-mono text-6xl font-semibold"><span className="text-gray-400">02</span> Portfolio</h2>
      <div className="grid grid-cols-2 items-center gap-5 | mt-10 ">
        <Carousel slides={CarouselData}/>
        <div className="flex flex-col items-start">
          <h3>Projects shared</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure expedita corporis qui cupiditate est veritatis ullam non at dolorem ipsum magnam hic, deserunt eius sapiente aperiam adipisci dolorum voluptatem sed.</p>
          <Link className="button mt-5 text-primary" to="/projects">See More</Link>

        </div>
      </div>
    </>
  )
}

export default Portfolio;