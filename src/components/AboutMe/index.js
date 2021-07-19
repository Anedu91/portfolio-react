import aboutPhoto from "./about.jpg";
const AboutMe = () => {
  return(
    <div className="grid grid-cols-2 gap-32 | items-center">
      <article className="space-y-3 text-right">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ad omnis magni exercitationem dolores libero doloremque doloribus laborum, rem eos nam deleniti dolorum fuga architecto reiciendis laudantium, odit possimus! Fuga?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta porro praesentium doloremque dicta totam ipsa ipsam dignissimos molestiae quia sed. Nostrum vitae earum asperiores neque.</p>
        </article>
        <figure className="relative">
          <img className="max-w-full" src={aboutPhoto} alt="Angel portrait" />
          <div className="absolute -top-1/4 -left-1/4  -z-1 | w-full h-full | border-8 border-primary"></div>
        </figure> 
    </div>
  )
}

export default AboutMe