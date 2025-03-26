import Container from "../components/Container"
import SectionTitle from "../components/SectionTitle"
import BoardItem from "../components/BoardItem"

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
            <BoardItem>
              <BoardItem.Header>Persyaratan Umum</BoardItem.Header>
              <BoardItem.Body>Lörem ipsum bonus malus måkangen utan yvis är plal. Trebel enera vökåning. Georar besonar ukenar tetrasm. Krongar heteropol älogi. Bens plahågon pretire. </BoardItem.Body>
            </BoardItem>
          </div>
          <div className="flex-1">
            <BoardItem>
              <BoardItem.Header>Persyaratan Umum</BoardItem.Header>
              <BoardItem.Body>Lörem ipsum bonus malus måkangen utan yvis är plal. Trebel enera vökåning. Georar besonar ukenar tetrasm. Krongar heteropol älogi. Bens plahågon pretire. </BoardItem.Body>
            </BoardItem>
          </div>
          <div className="flex-1">
            <BoardItem>
              <BoardItem.Header>Persyaratan Umum</BoardItem.Header>
              <BoardItem.Body>Lörem ipsum bonus malus måkangen utan yvis är plal. Trebel enera vökåning. Georar besonar ukenar tetrasm. Krongar heteropol älogi. Bens plahågon pretire. </BoardItem.Body>
            </BoardItem>
          </div>
        </div>
        <div class="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <BoardItem>
              <BoardItem.Header>Persyaratan Umum</BoardItem.Header>
              <BoardItem.Body>Lörem ipsum bonus malus måkangen utan yvis är plal. Trebel enera vökåning. Georar besonar ukenar tetrasm. Krongar heteropol älogi. Bens plahågon pretire. </BoardItem.Body>
            </BoardItem>
          </div>
          <div className="flex-1">
            <BoardItem>
              <BoardItem.Header>Persyaratan Umum</BoardItem.Header>
              <BoardItem.Body>Lörem ipsum bonus malus måkangen utan yvis är plal. Trebel enera vökåning. Georar besonar ukenar tetrasm. Krongar heteropol älogi. Bens plahågon pretire. </BoardItem.Body>
            </BoardItem>
          </div>
          <div className="flex-1">
            <BoardItem>
              <BoardItem.Header>Persyaratan Umum</BoardItem.Header>
              <BoardItem.Body>Lörem ipsum bonus malus måkangen utan yvis är plal. Trebel enera vökåning. Georar besonar ukenar tetrasm. Krongar heteropol älogi. Bens plahågon pretire. </BoardItem.Body>
            </BoardItem>
          </div>
          <div className="flex-1">
            <BoardItem>
              <BoardItem.Header>Persyaratan Umum</BoardItem.Header>
              <BoardItem.Body>Lörem ipsum bonus malus måkangen utan yvis är plal. Trebel enera vökåning. Georar besonar ukenar tetrasm. Krongar heteropol älogi. Bens plahågon pretire. </BoardItem.Body>
            </BoardItem>
          </div>
        </div>
      </Container>
    </section>
  )
}
