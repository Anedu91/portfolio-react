import photo from "./carousel.jpg";
import styles from "./project.module.css";
import cx from "classnames";
import { update } from "@react-spring/core";
const Project = (props) => {
  // Styles
const overlayStyle = cx(
  "absolute w-full h-full",
  styles.overlay,
  "flex flex-col justify-center items-center space-y-5 text-white"
)
const containerStyle = cx(
  "group relative overflow-hidden",
  styles.container
)




  return (
    <>
    <div className={containerStyle}>      
      <div className={overlayStyle}>
        <h3 className="text-2xl ">Title</h3>
        <button className="button" onClick={() => props.upState(!props.actualState)}>View More</button>
      </div>
      <figure>
        <img src={photo} alt=""  />
      </figure>
    </div>
    </>
  )
}

export default Project;