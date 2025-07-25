import './Week.css'

function Weekly() {
  return (
    <div className="week-card">
      <h1>To-Do Week List</h1>
      <table>
        <thead>
          <tr>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      {/* <section className="week-days">
        <div>
          <h2>Monday</h2>
          <section className='day'></section>
        </div>
        <div>
          <h2>Tuesday</h2>
          <section className='day'></section>
        </div>
        <div>
          <h2>Wednesday</h2>
          <section className='day'></section>
        </div>
        <div>
          <h2>Thursday</h2>
          <section className='day'></section>
        </div>
        <div>
          <h2>Friday</h2>
          <section className='day'></section>
        </div>
      </section> */}
    </div>
  )
}

export default Weekly;