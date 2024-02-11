import React from "react"
import Common from "../../../common/Common.jsx"
import "./chart.module.css"
import ReactApexChart from "react-apexcharts"
import { useEffect, useState } from "react"


const Charts = () => {

  const financialMetricStrings = localStorage.getItem('financialMetrics');

  // Parse the JSON string to convert it back to an object
  const financialMetrics = JSON.parse(financialMetricStrings);
  
  // Destructure the object properties to access the variables
  const {
    age,
    familyStatus,
    debtToIncomeRatio,
    expenseToIncomeRatio,
    savingsRate,
    emergencyFundStatus,
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

  const [financialAdvice, setFinancialAdvice] = useState("");

    useEffect(() => {
        // Retrieve financial metrics from localStorage
        const financialMetricsString = localStorage.getItem('financialMetrics');
        if (financialMetricsString) {
            const financialMetrics = JSON.parse(financialMetricsString);
            provideFinancialAdvice(financialMetrics);
        }
    }, []);

    // Decision tree based on financial parameters
    function provideFinancialAdvice(financialMetrics) {
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
            expense,
            savings,
            debt,
            emergencyFund
        } = financialMetrics; 
        let advice = "";
        // Decision 1: Check if emergency fund status is below recommended level
        if (emergencyFundStatus < 2) {
            // Recommend building up emergency savings
            advice = "Your emergency fund is below the recommended level. It's important to prioritize building up your emergency savings to provide a financial safety net.";
        } else {
            // Decision 2: Check if debt-to-income ratio is low and savings rate is high
            if (debtToIncomeRatio < 30 && savingsRate > 20) {
                // Decision 3: Check age and time constraint
                if (age < 40 && timeConstraint < 5) {
                    // Recommend exploring investment opportunities
                    advice = "With your low debt-to-income ratio and high savings rate, consider exploring investment opportunities suited to your risk tolerance and financial goals. Diversification and long-term planning are key.";
                } else if (age >= 40 && timeConstraint < 5) {
                    // Recommend diversified investments
                    advice = "Given your age and time constraint, focus on diversifying your investments to balance risk and return. Consider a mix of stocks, bonds, and other assets to build a resilient portfolio.";
                } else {
                    // Recommend tailored investment options
                    advice = "With your strong financial position, you have flexibility in choosing investment options tailored to your risk tolerance and long-term financial objectives. Consult our financial advisor to explore customized strategies.";
                }
            } else {
                // Decision 4: Check investment goals progress and risk tolerance
                if (investmentGoalsProgress < 80 && riskTolerance === "high") {
                    // Recommend aggressive investment strategies
                    advice = "Considering your high risk tolerance, you may want to explore more aggressive investment strategies to pursue higher returns. However, ensure you understand the associated risks and maintain a diversified portfolio.";
                } else if (investmentGoalsProgress < 80 && riskTolerance === "medium") {
                    // Recommend balanced approach
                    advice = "Given your moderate risk tolerance, aim for a balanced approach to investing. Diversify your portfolio across asset classes and periodically review your investments to align with your financial goals and risk tolerance.";
                } else {
                    // Investment goals progress is on track
                    advice = "Your investment goals progress is on track. Continue to monitor your portfolio's performance and make adjustments as needed to stay on course with your long-term financial objectives.";
                }
            }
        }
        // Update financial advice state variable
        setFinancialAdvice(advice);
        console.log("yess," + advice)
    }

  return (
    <>
      <section className='charts grid2 bg-black my-[2vw] mr-[4vw] p-[2vw]'>
       <div className="grid grid-rows">
        <div className="grid grid-cols-2">
        <div className='cardBox'>
          <Common title='Income Status' />
          <div className="flex justify-center">Income Division</div>
          <ReactApexChart options={data.options} series={data.series} type='donut' height={350} />
          <div className="flex justify-center text-[1.75vw] mt-[1vw] font-[600]">Total Income ${income} </div>

        </div>
        <div className="cardBox">
        <h1>Financial Advice</h1>
        <div className="my-[1vw] text-[1.5vw]">
            hello, Customer👋
        </div>
            <p className="leading-[3.85vw] m-[2vw] text-[2vw] flex justify-between font-[600]">"{financialAdvice}"!!!</p>

        </div>
        </div>
        </div>
       
      </section>
    </>
  )
}

export default Charts