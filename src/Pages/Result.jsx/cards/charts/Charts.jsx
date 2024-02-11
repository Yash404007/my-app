import React from "react"
import Common from "../../../common/Common.jsx"
import "./chart.module.css"
import ReactApexChart from "react-apexcharts"
import { useEffect } from "react"


const Charts = () => {

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

console.log(expenses, debt, savings, emergencyFund)
const expensesNumber = parseFloat(expenses);
const debtNumber = parseFloat(debt);
const savingsNumber = parseFloat(savings);

const data = {
  series: [expensesNumber, debtNumber, savingsNumber],
  options: {
    chart: {
      type: "donut",
      // add this by typing
      foreColor: "grey",
    },
    fill: {
      colors: ["#35B8E0", "#6658DD", "#FF8ACC"],
    },
    stroke: {
      colors: ["#313844"],
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true,
            },
          },
        },
      },
    },
    labels: ["Expenses", "Debt", "Savings"],
    legend: {
      position: "bottom",
    },
  },
};

  const bardata = {
    series: [
      {
        name: "Net Profit",
        data: [65, 45, 75, 35, 30, 85],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        // add this by typing
        foreColor: "grey",
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "25%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        foreColor: "#fff",
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      fill: {
        opacity: 1,
      },
      // remove  it tooltip
      grid: {
        show: false,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: true,
        },
      },
      yaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: true,
        },
      },
    },
  }

  const line = {
    series: [
      {
        name: "debtToIncomeRatio",
        data: [50, 60, 10, 60, 80, 30],
      },
      {
        name: "expenseToIncomeRatio,",
        data: [0, 40, 80, 20, 40, 60],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
        //add
        foreColor: "grey",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: ["2015", "2016", "2017", "2018", "2019", "2020"],
      },
      //add it
      grid: {
        show: false,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: true,
        },
      },
      yaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: true,
        },
      },
    },
  }

  return (
    <>
      <section className='charts grid2'>
       <div className="grid grid-rows-2">
        <div className="grid grid-rows">
        <div className='cardBox'>
          <Common title='Statistics' />
          <ReactApexChart options={bardata.options} series={bardata.series} type='bar' height={350} />
        </div>
        </div>
        <div className='cardBox'>
          <Common title='Total Revenue' />
          <ReactApexChart options={line.options} series={line.series} type='line' height={350} />
        </div></div>
       
      </section>
    </>
  )
}

export default Charts