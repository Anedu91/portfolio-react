
import Header from "../Header"
import FixedNavigation from "../FixedNavigation"
import Social from "../Social"

import About from "../About"
import Portfolio from "../Portfolio"
import Section from "../Section"
import Contact from "../Contact"
const DefaultLayout = ({children}) => {

  return (
    <div className="space-y-32 pb-32">
      <Header/>
      {children}
      <FixedNavigation style="left-4">
        <Social />
      </FixedNavigation>
      <Section>
        <About/>
      </Section>
      <Section>
        <Portfolio/>
      </Section>
      <Section>
        <Contact/>
      </Section>
    </div>
  )
}

export default DefaultLayout;

