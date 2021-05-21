
const ExperiencePanel = (props) =>{
  
  return(
    <div className="space-y-6">
    <h2 className="text-4xl text-primary font-bold">This is the knowledge detail from {props.detail}</h2>
    <h3 className="text-2xl font-bold text-gray-700">Subtitle</h3>
    <ul className="space-y-4">
      <li>In charge of developing a Django-based web interface, with over 30 screens, plus responsive design and all the backend interactions, including the integration with Wagtail as a CMS.</li>
      <li>The end product was a flawless, bug-free interface with easy-to-maintain code.</li>
      <li>Ealico's product is now more competitive and user-friendly, which has increased customer satisfaction. </li>
      <li>Plus, I was in charge of developing their main website from start to finish.</li>
    </ul>
    <ul className="flex space-x-4 ">
      <li>Jinja templates</li>
      <li>Scss & BEM</li>
      <li>Webpack</li>
      <li>Vanilla Js</li>
      <li>Django</li>
      <li>Postgress</li>
      <li>Wagtail</li>
    </ul>
    


    <button onClick={() => props.upState('')}> go back</button>
    </div>
  )
}

export default ExperiencePanel;