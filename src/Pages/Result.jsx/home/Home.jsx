import React from "react"
import Cards from "../cards/Card.jsx"
import Charts from "../cards/charts/Charts.jsx"
import ChartIncome from "../cards/charts/ChartIncome.jsx"
import TableData from "../table/TableData.jsx"
import User from "../users/User.jsx"

const Home = () => {
  return (
    <>
      <section className='home  m-10 w-full'>
        <div className='container p-5 m-0 w-full'>
          <div className='heading flexSB '>
            <h3 className="flex justify-center text-[3vw] font-[600]">Financial Status</h3>
            {/* <span className=""> Adminto / DashBoard</span> */}
          </div>
          <div className="flex flex-col gap-[7vw]">
          <div>
         <ChartIncome />
          </div> 
         <div>
         <Cards />
          </div> 
          <div>
          <Charts />
            </div>
          </div>
          <div className="mt-[2vw]">
         <User />
         </div> 
         <div clasName="mt-[2vw]">
         <TableData />
         </div>
        </div>
      </section>
    </>
  )
}

export default Home