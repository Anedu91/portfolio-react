import cx from "classnames"






const ExperienceList = (props)=>{
  function handleClick(){

  }
  const buttonStyle = cx(
    "uppercase focus:outline-none"
  )
return (
  <ul className="text-mono space-y-3">
    {props.list.map((item,index) => {
      return <li key={index}><button className={buttonStyle} onClick={() => props.upState(item)}><span className="text-2xl font-bold text-primary">&#x23a8;</span>{item}</button></li>
    })}
  </ul>
)
}

export default ExperienceList