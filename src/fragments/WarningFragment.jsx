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
               Pengajuan proposal kepada Sekretaris paling lambat 14 hari sebelum proposal diajukan ke jurusan, fakultas, maupun universitas. Sekretaris tidak akan melakukan pengecekan jika pengajuan proposal <span className="text-red-400">kurang dari 14 hari</span> sebelum pengajuan ke jurusan, fakultas, maupun universitas.   
              </li>
              <li>
               Pengumpulan laporan pertanggungjawaban program kerja ke Himpunan maksimal 14 hari setelah kegiatan dilaksanakan. Jika melebihi waktu yang sudah ditentukan maka akan dikenakan sanksi berupa denda Rp 1.000,-/24jam.  
              </li>
              <li>
               Jika laporan pertanggungjawaban program kerja A belum selesai maka, program kerja B tidak bisa dijalankan. 
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
