import ContactImportantFragment from "./fragments/ContactImportantFragment"
import NoticeBoardFragment from "./fragments/NoticeBoardFragment"
import RegulationFragment from "./fragments/RegulationFragment"
import TermsAndConditionFragment from "./fragments/TermsAndConditionFragment"
import TimelineFragment from "./fragments/TimelineFragment"
import HeroFragment from "./fragments/HeroFragment"
import EclipseImage from "./assets/eclipse.png"

function App() {
  return (
    <>
      <img className="absolute" src={EclipseImage} alt="" />
      <HeroFragment />
      <ContactImportantFragment/>
      <NoticeBoardFragment/>
      <RegulationFragment />
      <TermsAndConditionFragment />
      <TimelineFragment />
    </>
  )
}

export default App
