import Container from "../components/Container"
import SectionTitle from "../components/SectionTitle"

export default function WarningFragment() {
  return (
    <section className="py-[3rem]">
      <Container>
        <div className="z-10 px-8 py-3 h-full w-full bg-white-500 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 rounded-[2rem]"
          style={{
            border: "1px solid var(--secondary)"
          }}
        >
          <SectionTitle className="text-[3rem] text-white">Warning</SectionTitle>
          <div className="text-white mt-4 pl-5">
            <ul className="list-disc flex flex-col gap-3">
              <li>
                Disarankan untuk mengajukan <span className="text-red-400">surat izin penggunaan tempat 21 hari</span> sebelum kegiatan dilaksanakan ke Ruang Pelayanan Mahasiswa Fakultas Teknik Industri
              </li>
              <li>
                Disarankan untuk mengajukan surat izin kegiatan maksimal 14 hari sebelum kegiatan dilaksanakan ke Ruang Pelayanan Mahasiswa Fakultas Teknik Industri
              </li>
              <li>
                Pengajuan Proposal dapat dilakukan bersamaan dengan Surat Izin Kegiatan
              </li>
              <li>
                Penggunaan ruang seminar informatika harus disertai dengan surat pernyataan dan kartu tanda mahasiswa kepada petugas atau jurusan atau prodi atau kepada pihak yang ditunjuk oleh ketua jurusan.
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
