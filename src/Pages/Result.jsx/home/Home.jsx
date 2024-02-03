import React from "react"
import Cards from "../cards/Card.jsx"
import Charts from "../cards/charts/Charts.jsx"
import TableData from "../table/TableData.jsx"
import User from "../users/User.jsx"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container'>
          <div className='heading flexSB'>
            <h3>DashBoard</h3>
            <span>Adminto / DashBoard</span>
          </div>
          <Cards />
          <Charts />
          <User />
          <TableData />
        </div>
      </section>
    </>
  )
}

export default Home