import Container from "../components/Container"
import SectionTitle from "../components/SectionTitle"

export default function TermsAndConditionFragment() {
  return (
    <section className="py-[3rem]"  style={{
      background: "rgba(60, 79, 130, .07)",
    }}>
      <Container>
        <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-0 justify-between items-center">
          <ul className="flex flex-col gap-3">
            <li className="bg-white p-3 text-secondary font-semibold rounded">Surat, Proposal, dan Laporan Pertanggungjawaban</li>
            <li className="bg-white p-3 text-secondary font-semibold rounded">Surat, Proposal, dan Laporan Pertanggungjawaban</li>
            <li className="bg-white p-3 text-secondary font-semibold rounded">Surat, Proposal, dan Laporan Pertanggungjawaban</li>
          </ul>
          <SectionTitle className="text-[3rem] md:max-w-[210px] md:text-right">Terms and Condition</SectionTitle>
        </div>
      </Container>
    </section>
  )
}
