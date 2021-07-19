import cx from "classnames";
const Contact = (params) => {
  const containerStyle = cx(
    "mt-10 | flex flex-col | justify-center items-center"
  )
  return (
    <>
    <h2 className="text-primary text-mono text-6xl font-semibold"><span className="text-gray-400">03</span> Contact</h2>
    
    <div className={containerStyle}>
      <h3 className="text-4xl text-center text-primary font-bold">And now?</h3>
      <p className="text-center px-36 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, natus. Dicta, deserunt amet! A, est. Facere dignissimos facilis neque ea, doloremque amet tempore laudantium sapiente eum voluptas molestias a commodi minima error iusto nesciunt, dicta placeat cum, nam autem illum.</p>
      <a href="#" className="button mt-5 text-primary">Start a project</a>
    </div>
  </>    
  )
}

export default Contact