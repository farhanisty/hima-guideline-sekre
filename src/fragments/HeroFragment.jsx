import Container from "../components/Container"
import SectionTitle from "../components/SectionTitle"
import BoardItem from "../components/BoardItem"

export default function HeroFragment() {
  return (
    <section className="py-[2rem]">
      <Container>
        <div className="p-8 h-full w-full bg-white-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100 rounded-2xl">
          <div className="flex justify-between items-center">
          <h1 className="md:text-[5rem] font-bold">GUIDELINE <br/>SEKRETARIS<br/> GELORA HARMONI 2025/2026</h1>
          <img src="/logo-kabinet.png" width="150" alt="" />
          </div>
        </div>
      </Container>
    </section>
  )
}
