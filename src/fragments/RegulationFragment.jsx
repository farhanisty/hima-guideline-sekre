import Container from "../components/Container"
import SectionTitle from "../components/SectionTitle"
import Accordion from "../components/Accordion.jsx"

export default function RegulationFragment() {
  return (
    <div className="py-[3rem]">
      <Container>
        <SectionTitle className="text-[2rem]">Regulations</SectionTitle>
        <div className="mt-5">
            <Accordion>
              <Accordion.Item className="bg-secondary text-white rounded font-semibold" value="data-1">
                <Accordion.Trigger>Pengajuan Dokumen</Accordion.Trigger>
                <Accordion.Body>hello worldkj</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="bg-secondary text-white rounded font-semibold" value="data-2">
                <Accordion.Trigger>Pengajuan Dokumen</Accordion.Trigger>
                <Accordion.Body>hello worldkj</Accordion.Body>
              </Accordion.Item>
            </Accordion>
        </div>
      </Container>
    </div>
  )
}
