import cx from "classnames"
const ScrollDown = () => {
  const linkStyle = cx(
    "text-primary text-bold text-lg  tracking-wider leading-loose text-mono | transform rotate-90 -translate-y-full "
  )
  return (
    <a href="" className={linkStyle}> (Scroll down)</a>
  )
}

export default ScrollDown;