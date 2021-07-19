import cx from "classnames";

const ProjectTabs = () => {
  const buttonStyle = cx (
    "text-xl border border-black p-3"
  )
  return (
    <ul className="flex space-x-6 justify-center | mt-10">
      <li>
        <button className={buttonStyle}>All</button>
      </li>
      <li>
        <button className={buttonStyle}>Javascript</button>
      </li>
      <li>
        <button className={buttonStyle}>Personal</button>
      </li>
      <li>
        <button className={buttonStyle}>React</button>
      </li>
    </ul>
  )
}

export default ProjectTabs