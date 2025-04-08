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
              <Accordion.Item className="bg-secondary text-white rounded font-semibold" value="regulation-1">
                <Accordion.Trigger>Pengajuan Dokumen</Accordion.Trigger>
                <Accordion.Body>
                  <div className="pl-3">
                    <ul className="list-decimal flex flex-col gap-2">
                      <li>Pengajuan dokumen seperti surat-surat, proposal kegiatan, dan laporan pertanggungjawaban harus sesuai dengan tenggat waktu yang ditetapkan oleh Sekretaris HIMASISFO.</li>
                      <li>Semua pengajuan yang dilakukan di luar jam kerja tidak akan diproses. Pengajuan harus diajukan kembali saat jam kerja, kecuali jika ada keadaan mendesak.</li>
                    </ul>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="bg-secondary text-white rounded font-semibold" value="regulation-2">
                <Accordion.Trigger>Pengarsipan Dokumen</Accordion.Trigger>
                <Accordion.Body>
                  <div className="pl-3">
                    <ul className="list-decimal flex flex-col gap-2">
                      <li>Semua dokumen kegiatan, termasuk proposal, surat-menyurat, dan Laporan Pertanggungjawaban (LPJ), harus diarsipkan secara digital dan/atau fisik.</li>
                      <li>Pengarsipan dilakukan sesuai format yang telah ditetapkan oleh Sekretaris dan harus tersedia untuk pengecekan kapan saja jika diperlukan.</li>
                    </ul>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
        </div>
      </Container>
    </div>
  )
}
