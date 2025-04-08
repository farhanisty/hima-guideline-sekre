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
                    <li>Rake Putri (<a className="underline hover:text-red-200" href="https://wa.me/6285800616542">085800616542</a>)</li>
                    <li>Najwa Egi (<a className="underline hover:text-red-200" href="https://wa.me/6285225737863">085225737863</a>)</li>
                  </ul>
              </Card.Body>
            </Card>
            <Card className="">
              <Card.Header title="Quick Links :" />
              <Card.Body>
                  <ul>
                    <li>Scribbletary: (<a className="underline hover:text-red-200" href="https://bit.ly/SCRIBBLETARY2025">https://bit.ly/SCRIBBLETARY2025</a>)</li>
                    <li>Guidelines Scribbletary: (<a className="underline hover:text-red-200" href="https://bit.ly/GUIDLINESCRIBBLETARY2025">https://bit.ly/GUIDLINESCRIBBLETARY2025</a>)</li>
                    <li>Documents Format: (<a className="underline hover:text-red-200" href="https://drive.google.com/drive/folders/1K-kUHyVkqHvQYssKf57IVGDy_Yx5XISh">Document Format 2025</a>)</li>
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
