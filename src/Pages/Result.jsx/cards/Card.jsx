import React from "react"
import ReactApexChart from "react-apexcharts"
import "./card.module.css"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import Common from "../../common/Common"

const Cards = () => {
  const financialMetricStrings = localStorage.getItem('financialMetrics');

  // Parse the JSON string to convert it back to an object
  const financialMetrics = JSON.parse(financialMetricStrings);
  
  // Destructure the object properties to access the variables
  const {
    age,
    familyStatus,
    debtToIncomeRatio,
    savingsRate,
    emergencyFundStatus,
    expenseToIncomeRatio,
    investmentGoalsProgress,
    timeConstraint,
    riskTolerance,
    income,
    expenses,
    savings,
    debt,
    emergencyFund
  } = financialMetrics;

  const debtToIncomeRatioNumber = parseFloat(debtToIncomeRatio);
  const savingsNumber = parseFloat(savings * 0.1);
console.log(savingsNumber)
const data = {
  series: [savingsNumber],
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
    labels: [(savingsNumber.toFixed(0))],
    colors: ["#ff5b5b"],
  },
}
const debtNumber = parseFloat(debt * 0.1);
console.log("debt: " + debtNumber)
  const data1 = {
    series: [debtNumber],
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
      labels: [(debtNumber.toFixed(0))],
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
              <h1 className="flex justify-center text-[1.75vw]">Savings per 100</h1>
              <p>Savings</p>
            </div>
          </div>
        </div>
        <div className='cardBox'>
          <Common title='Income Analytics' />
          <div className='circle'>
            <div className='batch row'>
              <span>12%</span>
              <TrendingUpIcon className='batchIcon' />
            </div>
            <div className='title row'>
              <h1>Total savings: ${savings}</h1>
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
              <h1 className="flex justify-center text-[1.75vw]">Debt per 100</h1>
              <p>Debt</p>
            </div>
          </div>
        </div>
        <div className='cardBox'>
          <Common title='Income Analytics' />
          <div className='circle'>
            <div className='batch row'>
              <span>12%</span>
              <TrendingUpIcon className='batchIcon' />
            </div>
            <div className='title row'>
              <h1>Total Debt: ${debt}</h1>
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