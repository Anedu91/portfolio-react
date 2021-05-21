import {SiFiverr} from 'react-icons/si'
import {FiGithub,FiTwitter,FiLinkedin} from 'react-icons/fi'
import cx from "classnames"
const Social = (props) => {
  const linkStyle = cx(
    "text-primary"
  )
const iconStyle = cx(
  "text-current text-2xl"
)
  return (
    
    
      <ul className="space-y-3">
        <li>
          <a href="" className={linkStyle}>
            <FiGithub className={iconStyle}/>
          </a>
        </li>
        <li>
          <a href="" className={linkStyle}>
            <FiTwitter className={iconStyle}/>
          </a>
        </li>
        <li>
          <a href="" className={linkStyle}>
            <FiLinkedin className={iconStyle}/>
          </a>
        </li>
        <li>
          <a href="" className={linkStyle}>
            <SiFiverr className={iconStyle}/>
          </a>
        </li>
      </ul>
      
    
  )
}

export default Social