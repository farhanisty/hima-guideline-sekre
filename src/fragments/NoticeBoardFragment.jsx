import ContentBox from "../components/ContentBox"
import BoardItem from "../components/BoardItem"

export default function NoticeBoadFragment() {
  return (
    <ContentBox>
      <ContentBox.Header>
        <ContentBox.Header.Title>Notice Board</ContentBox.Header.Title>
      </ContentBox.Header>

      <ContentBox.Body>
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
      </ContentBox.Body>
    </ContentBox>
  )
}
