import cx from "classnames";

const Hero = () => {
  const heroStyles = cx(
    "px-16 | flex-1 | flex flex-col justify-center"
  )
  return(
    <section className={heroStyles}>
      <article className="pl-40 | font-mono">
        <h1 className="text-primary | text-6xl font-bold">Hi I'm Angel</h1>
        <h2 className="text-6xl">web developer</h2>
        <p className="text-lg tracking-wide">Front End Developer</p>
      <button className="button text-primary | mt-5">Contact me!</button>
      </article>
    </section>
  )
}

export default Hero;