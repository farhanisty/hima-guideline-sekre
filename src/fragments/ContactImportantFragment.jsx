import Container from "../components/Container"
import Card from "../components/Card"

export default function ContactImportantFragment() {
  return (
    <section className="py-[3rem]">
      <Container>
        <div className="flex flex-col md:flex-row gap-8 w-full">
          <div className="flex gap-3 flex-col md:w-[40%]">
            <Card className="">
              <Card.Header title="Contact Person :" />
              <Card.Body>
                  <ul>
                    <li>Rake Putri Cahyani (<a className="underline hover:text-red-200" href="https://google.com">085292934249</a>)</li>
                    <li>Najwa Egi (<a className="underline hover:text-red-200" href="https://google.com">085292934249</a>)</li>
                  </ul>
              </Card.Body>
            </Card>
            <Card className="">
              <Card.Header title="Quick Links :" />
              <Card.Body>
                  <ul>
                    <li>Scribbletary: https://bit.ly/SCRIBBLETARY2024</li>
                    <li>Guidelines Scribbletary: https://bit.ly/GUIDLINESCRIBBLETARY</li>
                    <li>Documents Format: [Documents Format 2024]</li>
                    <li>Surat Pernyataan Penggunaan Ruang Seminar: [link]</li>
                  </ul>
              </Card.Body>
            </Card>
          </div>

      <div className="md:w-[60%]">
        <h2 className="text-secondary text-[2rem] font-['Cormorant_Garamond'] font-bold italic">Important Things</h2>
        <ul className="list-disc flex flex-col gap-1">
          <li>Disarankan untuk mengajukan surat izin penggunaan tempat 21 hari sebelum kegiatan dilaksanakan ke Ruang Pelayanan Mahasiswa Fakultas Teknik Industri</li>
          <li>Disarankan untuk mengajukan surat izin kegiatan maksimal 14 hari sebelum kegiatan dilaksanakan ke Ruang Pelayanan Mahasiswa Fakultas Teknik Industri</li>
          <li>Pengajuan Proposal dapat dilakukan bersamaan dengan Surat Izin Kegiatan</li>
          <li>Penggunaan ruang seminar informatika harus disertai dengan surat pernyataan dan kartu tanda mahasiswa kepada petugas atau jurusan atau prodi atau kepada pihak yang ditunjuk oleh ketua jurusan.</li>
        </ul>
      </div>
        </div>
      </Container>
    </section>
  )
}
