import Container from "../components/Container"
import SectionTitle from "../components/SectionTitle"

export default function RegulationFragment() {
  return (
    <div className="py-[3rem]">
      <Container>
        <SectionTitle className="text-[2rem]">Regulations</SectionTitle>
        <ul className="flex flex-col gap-5 mt-5">
          <li className="w-full bg-secondary text-white p-3 rounded font-semibold">Pengajuan Dokumen</li>
          <li className="w-full bg-secondary text-white p-3 rounded font-semibold">Pengajuan Dokumen</li>
        </ul>
      </Container>
    </div>
  )
}
