import Row from './Row'

function Board(props) {
  return (
    <div className='board'>
      <Row />
      <Row reverse/>
      <Row />
      <Row reverse/>
      <Row />
      <Row reverse/>
      <Row />
      <Row reverse/>
    </div>
  )
}

export default Board;