import Hero from "./components/Hero"
import ContentBox from "./components/ContentBox"
import InformationBox from "./components/InformationBox"
import BoardItem from "./components/BoardItem"
import NoticeBoardFragment from "./fragments/NoticeBoardFragment"
import Accordion from "./components/Accordion"

function App() {
  return (
    <>
      <Hero />
      <div className="container mx-auto flex flex-col md:flex-row gap-5">
        <div className="md:w-[70%]">
          <NoticeBoardFragment/>
          <ContentBox>
            <ContentBox.Header>
              <ContentBox.Header.Title>Regulations</ContentBox.Header.Title>
            </ContentBox.Header>

            <ContentBox.Body>
              <Accordion>
                <Accordion.Item value="data-1">
                  <Accordion.Trigger>Pengajuan Dokumen</Accordion.Trigger>
                  <Accordion.Body>World</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item value="data-2">
                  <Accordion.Trigger>Pengarsipan Dokumen</Accordion.Trigger>
                  <Accordion.Body>World</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item value="data-3">
                  <Accordion.Trigger>Penggunaan Inventaris</Accordion.Trigger>
                  <Accordion.Body>World</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item value="data-4">
                  <Accordion.Trigger>Tata Tertib Piket Sekretariat</Accordion.Trigger>
                  <Accordion.Body>World</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </ContentBox.Body>
          </ContentBox>

          <ContentBox>
            <ContentBox.Header>
              <ContentBox.Header.Title>Terms and Conditions</ContentBox.Header.Title>
            </ContentBox.Header>

            <ContentBox.Body>
              <Accordion>
                <Accordion.Item value="data-1">
                  <Accordion.Trigger>Surat, Proposal, dan Laporan Pertanggungjawaban</Accordion.Trigger>
                  <Accordion.Body>World</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item value="data-2">
                  <Accordion.Trigger>Penggunaan Inventaris</Accordion.Trigger>
                  <Accordion.Body>World</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item value="data-3">
                  <Accordion.Trigger>Batasan dan Tanggungjawab</Accordion.Trigger>
                  <Accordion.Body>World</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item value="data-4">
                  <Accordion.Trigger>Perubahan Ketentuan</Accordion.Trigger>
                  <Accordion.Body>World</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </ContentBox.Body>
          </ContentBox>
        </div>
        <div className="md:w-[30%]">
          <InformationBox>
            <InformationBox.Title background="bg-red-300">Important Information</InformationBox.Title>
            <InformationBox.Body>
              <InformationBox.Item>Disarankan untuk mengajukan surat izin penggunaan tempat 21 hari sebelum kegiatan dilaksanakan ke Ruang Pelayanan Mahasiswa Fakultas Teknik Industri.</InformationBox.Item>
              <InformationBox.Item>Disarankan untuk mengajukan surat izin kegiatan maksimal 14 hari sebelum kegiatan dilaksanakan ke Ruang Pelayanan Mahasiswa Fakultas Teknik Industri.</InformationBox.Item>
              <InformationBox.Item>Pengajuan Proposal dapat dilakukan bersamaan dengan Surat Izin Kegiatan.</InformationBox.Item>
              <InformationBox.Item>Penggunaan ruang seminar informatika harus disertai dengan surat pernyataan dan kartu tanda mahasiswa kepada petugas atau jurusan atau prodi atau kepada pihak yang ditunjuk oleh ketua jurusan.</InformationBox.Item>
            </InformationBox.Body>
          </InformationBox>
          <InformationBox>
            <InformationBox.Title background="bg-yellow-300">Warning</InformationBox.Title>
            <InformationBox.Body>
              <InformationBox.Item>Pengajuan proposal kepada Biro Kesekretariatan paling lambat 14 hari sebelum proposal diajukan ke jurusan, fakultas, maupun universitas. Biro Kesekretariatan tidak akan melakukan pengecekan jika pengajuan proposal kurang dari 14 hari sebelum pengajuan ke jurusan, fakultas, maupun universitas.</InformationBox.Item>
              <InformationBox.Item>Pengumpulan laporan pertanggungjawaban program kerja ke Himpunan maksimal 14 hari setelah kegiatan dilaksanakan. Jika melebihi waktu yang sudah ditentukan maka akan dikenakan sanksi berupa denda Rp 1.000,-/24jam.</InformationBox.Item>
              <InformationBox.Item>Jika laporan pertanggungjawaban program kerja A belum selesai maka, program kerja B tidak bisa dijalankan. </InformationBox.Item>
            </InformationBox.Body>
          </InformationBox>
        </div>
      </div>
      
    </>
  )
}

export default App
