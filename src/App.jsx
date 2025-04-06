import ContactImportantFragment from "./fragments/ContactImportantFragment"
import NoticeBoardFragment from "./fragments/NoticeBoardFragment"
import RegulationFragment from "./fragments/RegulationFragment"
import TermsAndConditionFragment from "./fragments/TermsAndConditionFragment"
import TimelineFragment from "./fragments/TimelineFragment"
import HeroFragment from "./fragments/HeroFragment"
import WarningFragment from "./fragments/WarningFragment"
import EclipseImage from "./assets/eclipse.png"

function App() {
  return (
    <div className="relative overflow-hidden">
      <img className="absolute" src={EclipseImage} alt="" />
      <HeroFragment />
      <ContactImportantFragment/>
      <NoticeBoardFragment/>
      <RegulationFragment />
      <TermsAndConditionFragment />
      <TimelineFragment />
      <WarningFragment />
      <div className="absolute bg-red-200 w-[200%] bottom-[-50px] h-[480px] left-[-50px] rotate-[-5deg]" style={{
        zIndex: -1,
        background: "linear-gradient(var(--secondary), var(--primary))"
      }}></div>
    </div>
  )
}

export default App
