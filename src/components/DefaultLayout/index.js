
import Header from "../Header"
import FixedNavigation from "../FixedNavigation"
import Social from "../Social"
import ScrollDown from "../ScrollDown"
import About from "../About"
const DefaultLayout = ({children}) => {

  return (
    <>
      <Header/>
      {children}
      <FixedNavigation style="left-4">
        <Social />
      </FixedNavigation>      
      <FixedNavigation style="right-4">
        <ScrollDown />
      </FixedNavigation>
      <About/>
    </>
  )
}

export default DefaultLayout;

