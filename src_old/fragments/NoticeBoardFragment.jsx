import ContentBox from "../components/ContentBox"
import BoardItem from "../components/BoardItem"
import { FaClipboard } from "react-icons/fa";

export default function NoticeBoadFragment() {
  return (
    <ContentBox>
      <ContentBox.Header>
        <ContentBox.Header.Title><span className="flex gap-2 items-center"><FaClipboard /> Notice Board</span></ContentBox.Header.Title>
      </ContentBox.Header>

      <ContentBox.Body>
        <ul className="flex flex-wrap gap-3">
            <BoardItem>
              <BoardItem.Header>Persyaratan Umum</BoardItem.Header>
              <BoardItem.Body>
                <h2>Peraturan Rektor</h2>
                <ul>
                  <li>hello</li>
                  <li>world</li>
                </ul>
              </BoardItem.Body>
            </BoardItem>
            <BoardItem>
              <BoardItem.Header>Permohonan Dana dari Himpunan</BoardItem.Header>
              <BoardItem.Body>
                <h2>Peraturan Rektor</h2>
                <ul>
                  <li>hello</li>
                  <li>world</li>
                </ul>
              </BoardItem.Body>
            </BoardItem>
            <BoardItem>
              <BoardItem.Header>Permohonan Dana dari Jurusan/Fakultas</BoardItem.Header>
              <BoardItem.Body>
                <h2>Peraturan Rektor</h2>
                <ul>
                  <li>hello</li>
                  <li>world</li>
                </ul>
              </BoardItem.Body>
            </BoardItem>
            <BoardItem>
              <BoardItem.Header>Surat Izin Penggunaan Tempat/Alat</BoardItem.Header>
              <BoardItem.Body>
                <h2>Peraturan Rektor</h2>
                <ul>
                  <li>hello</li>
                  <li>world</li>
                </ul>
              </BoardItem.Body>
            </BoardItem>
            <BoardItem>
              <BoardItem.Header>Surat Izin Kegiatan</BoardItem.Header>
              <BoardItem.Body>
                <h2>Peraturan Rektor</h2>
                <ul>
                  <li>hello</li>
                  <li>world</li>
                </ul>
              </BoardItem.Body>
            </BoardItem>
            <BoardItem>
              <BoardItem.Header>Proposal Kegiatan</BoardItem.Header>
              <BoardItem.Body>
                <h2>Peraturan Rektor</h2>
                <ul>
                  <li>hello</li>
                  <li>world</li>
                </ul>
              </BoardItem.Body>
            </BoardItem>
            <BoardItem>
              <BoardItem.Header>Laporan Pertanggungjawaban Kegiatan</BoardItem.Header>
              <BoardItem.Body>
                <h2>Peraturan Rektor</h2>
                <ul>
                  <li>hello</li>
                  <li>world</li>
                </ul>
              </BoardItem.Body>
            </BoardItem>
        </ul>
      </ContentBox.Body>
    </ContentBox>
  )
}
