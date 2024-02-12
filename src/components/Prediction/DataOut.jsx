import React from 'react'
import { useState, useEffect } from 'react';

const DataOut = () => {
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
    <div>
        <div className='flex justify-center text-[1.75vw] font-[600] '>Financial Advice</div>
        <div className="my-[1vw] text-[1.5vw]">
            Hello, Customer👋
        </div>
            <p className="leading-[3.85vw] m-[1.5vw] text-[2vw] flex justify-between font-[600]">"{financialAdvice}"!!!</p>

    </div>
  )
}

export default DataOut