import Container from "../components/Container"
import SectionTitle from "../components/SectionTitle"
import ScheduleImage from "../assets/TIMELINE.png"

export default function TimelineFragment() {
  return (
    <section className="py-[3rem]">
      <Container>
        <SectionTitle className="text-[3rem]">Timeline</SectionTitle>
        <img src={ScheduleImage} alt="Schedule"/>
      </Container>
    </section>
  )
}
