import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from "./components/Hero"
import ContentBox from "./components/ContentBox"
import InformationBox from "./components/InformationBox"
import BoardItem from "./components/BoardItem"
import NoticeBoardFragment from "./fragments/NoticeBoardFragment"

function App() {
  const [count, setCount] = useState(0)

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
              <h1>Hello world</h1>
            </ContentBox.Body>
          </ContentBox>

          <ContentBox>
            <ContentBox.Header>
              <ContentBox.Header.Title>Terms and Conditions</ContentBox.Header.Title>
            </ContentBox.Header>

            <ContentBox.Body>
              <h1>Hello world</h1>
            </ContentBox.Body>
          </ContentBox>
        </div>
        <div className="md:w-[30%]">
          <InformationBox>
            <InformationBox.Title>Important Information</InformationBox.Title>
            <InformationBox.Body>
              <InformationBox.Item>Disarankan untuk mengajukan surat izin penggunaan tempat 21 hari sebelum kegiatan dilaksanakan ke Ruang Pelayanan Mahasiswa Fakultas Teknik Industri.</InformationBox.Item>
              <InformationBox.Item>Disarankan untuk mengajukan surat izin kegiatan maksimal 14 hari sebelum kegiatan dilaksanakan ke Ruang Pelayanan Mahasiswa Fakultas Teknik Industri.</InformationBox.Item>
              <InformationBox.Item>Pengajuan Proposal dapat dilakukan bersamaan dengan Surat Izin Kegiatan.</InformationBox.Item>
              <InformationBox.Item>Penggunaan ruang seminar informatika harus disertai dengan surat pernyataan dan kartu tanda mahasiswa kepada petugas atau jurusan atau prodi atau kepada pihak yang ditunjuk oleh ketua jurusan.</InformationBox.Item>
            </InformationBox.Body>
          </InformationBox>
          <InformationBox>
            <InformationBox.Title>Warning</InformationBox.Title>
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
