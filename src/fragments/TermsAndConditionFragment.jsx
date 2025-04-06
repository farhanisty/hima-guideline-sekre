import Container from "../components/Container"
import SectionTitle from "../components/SectionTitle"
import Accordion from "../components/Accordion.jsx"

export default function TermsAndConditionFragment() {
  return (
    <section className="py-[3rem]"  style={{
      background: "rgba(60, 79, 130, .07)",
    }}>
      <Container>
        <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-0 justify-between items-center">
          <ul className="flex md:w-[60%] flex-col gap-3">
            <Accordion>
              <Accordion.Item className="bg-white text-secondary focus:outline-none rounded font-semibold" value="tnc-1">
                <Accordion.Trigger>Surat, Proposal, dan Laporan Pertanggungjawaban</Accordion.Trigger>
                <Accordion.Body>
                  <div className="pl-3">
                    <ul className="list-decimal flex flex-col gap-2">
                      <li>Pengaju diharuskan mematuhi semua ketentuan waktu pengajuan proposal, surat, dan LPJ sesuai dengan regulasi yang telah ditetapkan.</li>
                      <li>Biro Kesekretariatan berhak menolak jika pengajuan dokumen melanggar ketentuan yang berlaku.</li>
                      <li>Pengajuan dokumen yang terlambat atau tidak mengikuti aturan waktu pengajuan tidak akan diperiksa oleh Biro Kesekretariatan. Namun, jika ada alasan khusus, bisa mendapatkan pengecualian.</li>
                    </ul>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="bg-white text-secondary focus:outline-none rounded font-semibold" value="tnc-2">
                <Accordion.Trigger>Batasan dan Tanggungjawab</Accordion.Trigger>
                <Accordion.Body>
                  <div className="pl-3">
                    <ul className="list-decimal flex flex-col gap-2">
                      <li>Biro Kesekretariatan <span className="font-bold">tidak bertanggung jawab</span> atas <span className="font-bold">keterlambatan</span> pemrosesan dokumen yang disebabkan oleh <span className="font-bold">kelalaian pengaju</span> atau <span className="font-bold">pengajuan di luar tenggat waktu</span>.</li>
                      <li>Segala <span className="font-bold">kerusakan</span> atau <span className="font-bold">kehilangan</span> barang inventaris <span className="font-bold">akibat kelalaian peminjam</span> akan menjadi <span className="font-bold">tanggung jawab peminjam sepenuhnya</span>.</li>
                    </ul>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="bg-white text-secondary focus:outline-none rounded font-semibold" value="tnc-2">
                <Accordion.Trigger>Perubahan Ketentuan</Accordion.Trigger>
                <Accordion.Body>
                  <div>
                    Biro Kesekretariatan berhak untuk mengubah atau memperbarui TNC ini kapan saja tanpa pemberitahuan sebelumnya. Pengurus HIMASISFO diharapkan untuk selalu memeriksa pembaruan ketentuan secara berkala.
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </ul>
          <SectionTitle className="text-[3rem] md:max-w-[210px] md:text-right">Terms and Condition</SectionTitle>
        </div>
      </Container>
    </section>
  )
}
