import cx from "classnames";


const Stack = () => {
  const itemStyle = cx(
    "px-2 py-1 border border-current text-green-700"
  )
  return (
    
    <ul className="flex space-x-4 ">
      <li className={itemStyle}>Jinja templates</li>
      <li className={itemStyle}>Scss & BEM</li>
      <li className={itemStyle}>Webpack</li>
      <li className={itemStyle}>Vanilla Js</li>
      <li className={itemStyle}>Django</li>
      <li className={itemStyle}>Postgress</li>
      <li className={itemStyle}>Wagtail</li>
    </ul>

  )
}

export default Stack;