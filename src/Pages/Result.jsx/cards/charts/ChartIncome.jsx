import React from "react"
import Common from "../../../common/Common.jsx"
import "./chart.module.css"
import ReactApexChart from "react-apexcharts"
import { useEffect, useState } from "react"
import DataIn from "../../../../components/Prediction/DataIn.jsx"
import DataOut from "../../../../components/Prediction/DataOut.jsx"


const Charts = () => {



    const [financialMetrics, setFinancialMetrics] = useState(null);

    useEffect(() => {
      // Retrieve financial metrics from localStorage
      const financialMetricsString = localStorage.getItem("financialMetrics");
       if(financialMetricsString)
       { 
        const financialMetricsData = JSON.parse(financialMetricsString);
        setFinancialMetrics(financialMetricsData);
       }
        // console.log(financialMetrics)
       
    }, []);
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
      } = financialMetrics || {}
      console.log(debt)
console.log(expenses, debt, savings, emergencyFund)
// console.log( debt)

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
      enabled: true,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          labels: {
            show: true,
            total: {
              showAlways: false,
              show: false,
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
        name: "Sales",
        data: [50, 60, 10, 60, 80, 30],
      },
      {
        name: "Revenue",
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
      <section className='charts grid2 bg-black my-[2vw] rounded-[1.5vw] mr-[4vw] p-[2vw]'>
       <div className="grid grid-rows">
        <div className="grid grid-cols-2">
        <div className='cardBox'>
          <Common title='Income Status' />
          <div className="flex justify-center">Income Division</div>
          <ReactApexChart options={data.options} series={data.series} type='donut' height={350} />
          <div className="flex justify-center text-[1.75vw] mt-[1vw] font-[600]">Total Income ${income} </div>
        </div>
        <div className="cardBox">
       <DataOut/>
        </div>
        </div>
        </div>
       
      </section>
    </>
  )
}

export default Charts