import Container from "../components/Container"
import SectionTitle from "../components/SectionTitle"
import BoardItem from "../components/BoardItem"
import CardDrive from "../components/CardDrive"
import ModalSubheader from "../components/ModalSubheader"

export default function NoticeBoardFragment() {
  return (
    <section className="py-[3rem]" style={{
      background: "rgba(60, 79, 130, .07)",
    }}>
      <Container>
        <div class="flex flex-col md:flex-row gap-8 mb-6">
          <div className="flex-1">
            <SectionTitle className="text-[4rem] text-center">Notice Board</SectionTitle>
          </div>
          <div className="flex-1">
            <BoardItem header="Persyaratan Umum">
              <BoardItem.Body>
                <ModalSubheader title="Peraturan Rektor" />
                <ol className="flex flex-col gap-2 list-decimal pl-3 pt-1">
                  <li>Peraturan Rektor Nomor 4 Tahun 2021 tentang Ortala Kemahasiswaan UPNVY</li>
                  <li>Peraturan Rektor Nomor 3 Tahun 2023 tentang Standar Layanan Kegiatan Mahasiswa UPNVY</li>
                  <li>Peraturan Rektor Nomor 4 Tahun 2023 Tentang Pedoman Pendanaan dan Kegiatan Organisasi Kemahasiswaan UPNVY</li>
                </ol>
              </BoardItem.Body>
            </BoardItem>
          </div>
          <div className="flex-1">
            <BoardItem header="Permohonan Dana dari Himpunan">
              <BoardItem.Body>
                <ModalSubheader title="Standar Operasional Prosedur Bendahara HIMASISFO" />
                <CardDrive title="Link Drive Permohonan Dana dari Himpunan" link="https://docs.google.com/document/d/1lFkLO9FMUPm4Ae8lHJkv1nOOTMPqudEN/edit?usp=sharing&ouid=118118187862737257017&rtpof=true&sd=true"/>
                <ModalSubheader title="Notes :" />
                <p>Proker yang mengajukan permohonan dana dari Himpunan Mahasiswa Program Studi Sistem Informasi harus mengajukan proposal yang ditandatangani oleh Ketua Pelaksana Kegiatan dan Ketua Himpunan Mahasiswa Program Studi Sistem Informasi</p>
              </BoardItem.Body>
            </BoardItem>
          </div>
          <div className="flex-1">
            <BoardItem header="Permohonan Dana dari Jurusan/Fakultas">
              <BoardItem.Body>
                <ModalSubheader title="Persyaratan : " />
                <CardDrive title="Link Drive Permohonan Dana dari Jurusan/Fakultas" link="https://drive.google.com/file/d/1ZwLnfUI6sJr_YTmAeBayGUatIM0FOvY8/view?usp=drive_link"/>
                <ModalSubheader title="Tahapan :" />
                <ol className="flex flex-col gap-2 list-decimal pl-3 pt-1">
                  <li>Proker yang meminta dana dari Fakultas atau Universitas harus menyusun proposal yang ditandatangani oleh Ketua Pelaksana, Ketua Himpunan Mahasiswa dengan persetujuan Koordinator Program Studi dan Ketua Jurusan.</li>
                  <li>Proposal harus disetujui oleh Wakil Dekan Bidang Kemahasiswaan dan Kerjasama.</li>
                  <li>Menyiapkan surat izin kegiatan yang ditujukan kepada Wakil Dekan Bidang Kemahasiswaan dan Kerjasama dengan melampirkan proposal. </li>
                </ol>
              </BoardItem.Body>
            </BoardItem>
          </div>
        </div>
        <div class="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <BoardItem header="Surat Izin Penggunaan Tempat/Alat">
              <BoardItem.Body>
                <ModalSubheader title="Tujuan Surat : " />
                <table class="table-auto border border-gray-400 border-collapse w-full">
                  <thead>
                    <tr class="bg-gray-100">
                      <th class="border border-gray-400 px-4 py-2">Kebutuhan</th>
                      <th class="border border-gray-400 px-4 py-2">Tujuan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border border-gray-400 px-4 py-2">Ruang kelas atau fasilitas tingkat Fakultas Teknik Industri lainnya</td>
                      <td class="border border-gray-400 px-4 py-2">Wakil Dekan Bidang Umum dan Keuangan Fakultas Teknik Industri</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="border border-gray-400 px-4 py-2">Ruang seminar informatika, Mess Classrom, Taman Informatika</td>
                      <td class="border border-gray-400 px-4 py-2">Ketua Jurusan Informatika</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="border border-gray-400 px-4 py-2">Lapangan basket atau fasilitas tingkat Universitas lainnya</td>
                      <td class="border border-gray-400 px-4 py-2">Kepala Biro Umum dan Keuangan</td>
                    </tr>
                  </tbody>
                </table>
                <ModalSubheader title="Tahapan :" />
                <ol className="flex flex-col gap-2 list-decimal pl-3 pt-1">
                  <li>Permintaan Nomor Surat kepada Biro Kesekretariatan Himasisfo melalui Scribbletary maksimal 7 hari sebelum surat diserahkan ke Ruang Pelayanan Mahasiswa Fakultas Teknik Industri</li>
                  <li>Meminta tandatangan kepada pihak-pihak yang sudah dicantumkan</li>
                  <li>Mengajukan surat ke Ruang Pelayanan Mahasiswa FTI</li>
                  <li>Follow up status surat (diproses s.d. disetujui)</li>
                </ol>
                <ModalSubheader title="Notes :" />
                <p>Disarankan untuk mengajukan surat 21 hari sebelum kegiatan dilaksanakan ke Ruang Pelayanan Mahasiswa Fakultas Teknik Industri</p>
              </BoardItem.Body>
            </BoardItem>
          </div>
          <div className="flex-1">
            <BoardItem header="Surat Izin Kegiatan">
              <BoardItem.Body>
                <ModalSubheader title="Tujuan Surat : " />
                <p>Wakil Dekan Bidang Kemahasiswaan, Kerjasama, dan Perencanaan Fakultas Teknik Industri</p>
                <ModalSubheader title="Tahapan :" />
                <ol className="flex flex-col gap-2 list-decimal pl-3 pt-1">
                  <li>Permintaan Nomor Surat kepada Biro Kesekretariatan Himasisfo melalui Scribbletary maksimal 7 hari sebelum surat diserahkan ke Ruang Pelayanan Mahasiswa Fakultas Teknik Industri</li>
                  <li>Meminta tandatangan kepada pihak-pihak yang sudah dicantumkan</li>
                  <li>Mengajukan surat ke Ruang Pelayanan Mahasiswa FTI</li>
                  <li>Follow up status surat (diproses s.d. disetujui)</li>
                </ol>
                <ModalSubheader title="Notes :" />
                <p>Disarankan untuk mengajukan surat maksimal 14 hari sebelum kegiatan dilaksanakan ke Ruang Pelayanan Mahasiswa Fakultas Teknik Industri</p>
              </BoardItem.Body>
            </BoardItem>
          </div>
          <div className="flex-1">
            <BoardItem header="Proposal Kegiatan">
              <BoardItem.Body>
                <ModalSubheader title="Tahapan : " />
                <ol className="flex flex-col gap-2 list-decimal pl-3 pt-1">
                  <li>Pengajuan Proposal Kegiatan kepada Biro Kesekretariatan Himasisfo melalui Scribbletary maksimal 14 hari sebelum proposal diserahkan ke Ruang Pelayanan Mahasiswa Fakultas Teknik Industri</li>
                  <li>Meminta tandatangan kepada pihak-pihak yang sudah dicantumkan</li>
                  <li>Mengajukan proposal ke Ruang Pelayanan Mahasiswa FTI</li>
                  <li>Follow up status surat (diproses s.d. disetujui)</li>
                </ol>
                <ModalSubheader title="Notes :" />
                <p>Disarankan untuk mengajukan proposal maksimal 14 hari sebelum kegiatan dilaksanakan ke Ruang Pelayanan Mahasiswa Fakultas Teknik Industri bersamaan dengan surat izin kegiatan</p>
              </BoardItem.Body>
            </BoardItem>
          </div>
          <div className="flex-1">
            <BoardItem header="Laporan Pertanggungjawaban Kegiatan">
              <BoardItem.Body>
                <ModalSubheader title="Tahapan : " />
                <ol className="flex flex-col gap-2 list-decimal pl-3 pt-1">
                  <li>Pengajuan Laporan Pertanggungjwaban Kegiatan kepada Biro Kesekretariatan Himasisfo melalui Scribbletary maksimal 14 hari setelah kegiatan dilaksanakan</li>
                  <li>2. Meminta tandatangan kepada pihak-pihak yang sudah dicantumkan</li>
                  <li>Mengajukan Laporan Pertanggungjawaban kepada Sekretaris Jurusan Informatika untuk dilanjutkan ke Fakultas</li>
                </ol>
                <ModalSubheader title="Notes :" />
                <p>Pengajuan Laporan Pertanggungjawaban kepada Sekretaris Jurusan Informatika dilakukan ketika kegiatan menggunakan dana dari Jurusan/Fakultas. Biasanya Laporan Pertanggungjawaban untuk Jurusan Informatika diserahkan 7 hari setelah kegiatan dilaksanakan.</p>
              </BoardItem.Body>
            </BoardItem>
          </div>
        </div>
      </Container>
    </section>
  )
}
