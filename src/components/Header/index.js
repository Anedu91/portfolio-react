import Hero from "../Hero"
import Navbar from "../Navbar"
import cx from "classnames"

const Header = () => {
  const headerStyles = cx(
    "h-screen | flex flex-col"
  )
  return(
    <header className={headerStyles}>
      <Navbar/>
      <Hero/>
    </header>
  )
}
export default Header;