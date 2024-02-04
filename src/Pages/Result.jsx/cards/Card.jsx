import React from "react"
import ReactApexChart from "react-apexcharts"
import "./card.module.css"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import Common from "../../common/Common"

const Cards = () => {
  const data = {
    series: [58],
    options: {
      chart: {
        height: 150,
        type: "radialBar",
        foreColor: "grey",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "58%",
          },
          dataLabels: {
            value: {
              show: false,
            },
          },
        },
      },
      labels: ["58"],
      colors: ["#ff5b5b"],
    },
  }
  const data1 = {
    series: [80],
    options: {
      chart: {
        height: 150,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "58%",
          },
          //add it
          dataLabels: {
            value: {
              show: false,
            },
          },
        },
      },
      labels: ["80"],
      colors: ["#E9B251"],
    },
  }
  const Progress = ({ done }) => {
    return (
      <div className='progress'>
        <div
          className='progress-done'
          style={{
            opacity: 1,
            width: `${done}%`,
          }}
        ></div>
      </div>
    )
  }

  return (
    <>
      <section className='cards grid justify-center grid-cols-2 m-0 h-[20vw] w-full px-7'>
        <div className="bg-gradient-to-r from-indigo-800 to-blue-900 shadow-xl w-[40vw] p-5 rounded-[1vw]">
        <div className='cardBox'>
          <Common title='Total Revenue' />
          <div className='circle'>
            <div className='row'>
              <ReactApexChart options={data.options} series={data.series} type='radialBar' height={150} />
            </div>
            <div className='title row'>
              <h1 className="">256</h1>
              <p>Revenue today</p>
            </div>
          </div>
        </div>
        <div className='cardBox'>
          <Common title='Sales Analytics' />
          <div className='circle'>
            <div className='batch row'>
              <span>32%</span>
              <TrendingUpIcon className='batchIcon' />
            </div>
            <div className='title row'>
              <h1>8451</h1>
              <p>Revenue today</p>
            </div>
          </div>
          <Progress done='70' />
        </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-800 to-blue-900 shadow-xl w-[40vw] p-5 rounded-[1vw]">
        <div className='cardBox'>
          <Common title='Total Revenue' />
          <div className='circle'>
            <div className='row'>
              <ReactApexChart options={data1.options} series={data1.series} type='radialBar' height={150} />
            </div>
            <div className='title row'>
              <h1>256</h1>
              <p>Revenue today</p>
            </div>
          </div>
        </div>
        <div className='cardBox'>
          <Common title='Sales Analytics' />
          <div className='circle'>
            <div className='batch batch1 row'>
              <span>32%</span>
              <TrendingUpIcon className='batchIcon' />
            </div>
            <div className='title row'>
              <h1>8451</h1>
              <p>Revenue today</p>
            </div>
          </div>
          <Progress done='70' />
        </div>
        </div>
        
      </section>
    </>
  )
}

export default Cards