import cx from "classnames"

const FixedNavigation = (props) =>{
  const navigationStyles = cx(
    "fixed bottom-2 | flex flex-col items-center | space-y-5",
    props.style
  )
  console.log(props)
  return (
    <div className={navigationStyles}>
      {props.children}      
      <div className="w-0.5 h-16 bg-black"></div>
    </div>
  )
}

export default FixedNavigation