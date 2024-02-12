import { Button } from '@material-tailwind/react';
import React from 'react'
import { useState } from 'react';
import {fireDB } from "../../firebaseConfig";
import {  setDoc, doc, addDoc, collection } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const DataIn = () => {
    const [income, setIncome] = useState('');
    const [expenses, setExpenses] = useState('');
    const [debt, setDebt] = useState('');
    const [savings, setSavings] = useState('');
    const [emergencyFund, setEmergencyFund] = useState('');
    const [investmentGoals, setInvestmentGoals] = useState('');
    const [riskTolerance, setRiskTolerance] = useState('');
    const [familyStatus, setFamilyStatus] = useState('');
    const [timeConstraint, setTimeConstraint] = useState('');
    const [currentStocks, setCurrentStocks] = useState('7899');
    const [currentBonds, setCurrentBonds] = useState('6466');
    const [age, setAge] = useState('');
    const [debtToIncomeRatio, setDebtToIncomeRatio] = useState(0);
    const [savingsRate, setSavingsRate] = useState(0);
    const [emergencyFundStatus, setEmergencyFundStatus] = useState(0);
    const [expenseToIncomeRatio, setExpenseToIncomeRatio] = useState(0);
    const [investmentGoalsProgress, setInvestmentGoalsProgress] = useState(0);
    const navigate = useNavigate();

    const addProduct = async () => {
      if (
        income.trim() === "" ||
        expenses.trim() === "" ||
        debt.trim() === "" ||
        familyStatus.trim() === "" ||
        age.trim() === "" ||
        emergencyFund.trim() === "" ||
        investmentGoals.trim() === "" ||
        riskTolerance.trim() === "" ||
        savings.trim() === "" ||
        timeConstraint.trim() === ""
      ) {
        return console.log("All fields are required");
      }
  
      try {
        const productRef = collection(fireDB, "finStatus");
        const docRef = await addDoc(productRef, {
          familyStatus: familyStatus,
          income:income,
          debt: debt,
          expenses: expenses,
          emergencyFund: emergencyFund,
          investmentGoals: investmentGoals,
          createdAt: new Date().toUTCString(),
          riskTolerance: riskTolerance,
          savings: savings,
          age: age,
          timeConstraint: timeConstraint,
        });
        const debtToIncomeRatioValue =
        (parseFloat(debt) / parseFloat(income)) * 100;
      const savingsRateValue =
        (parseFloat(savings) / parseFloat(income)) * 100;
      const emergencyFundStatusValue =
        parseFloat(emergencyFund) / (3 * (parseFloat(expenses) / 12));
      const expenseToIncomeRatioValue =
        (parseFloat(expenses) / parseFloat(income)) * 100;
      const investmentGoalsProgressValue =
        (parseFloat(currentStocks) +
          parseFloat(currentBonds) +
          parseFloat(income) * 0.25 * 3) /
        parseFloat(investmentGoals);

        localStorage.setItem('financialMetrics', JSON.stringify({
          debtToIncomeRatio: debtToIncomeRatioValue,
          savingsRate: savingsRateValue,
          emergencyFundStatus: emergencyFundStatusValue,
          expenseToIncomeRatio: expenseToIncomeRatioValue,
          investmentGoalsProgress: investmentGoalsProgressValue,
          age:age,
          riskTolerance:riskTolerance,
          familyStatus:familyStatus,
          timeConstraint:timeConstraint,
          income: income,
          expenses:expenses,
          emergencyFund:emergencyFund,
          savings:savings,
          debt:debt
  
      }));
  
        await setDoc(doc(fireDB, "finStatus", docRef.id), {
          familyStatus: familyStatus,
          debt: debt,
          income:income,
          expenses: expenses,
          emergencyFund: emergencyFund,
          investmentGoals: investmentGoals,
          createdAt: new Date().toUTCString(),
          riskTolerance: riskTolerance,
          savings: savings,
          age: age,
          timeConstraint: timeConstraint,
          id: docRef.id,
        });
        // Reset state values
        setFamilyStatus("");
        setDebt("");
        setIncome("");
        setAge("");
        setExpenses("");
        setEmergencyFund("");
        setRiskTolerance("");
        setSavings("");
        setTimeConstraint("");
        setInvestmentGoals("");
  
        console.log("Product Added successfully");
        navigate("/About/:financialData")
       
      } catch (error) {
        console.log("Error adding product:", error);
        console.log("Failed to add product");
      }
    };
    

  return (
<div className='col-span-3 flex items-center justify-center pb-[10vw]' >
    <div className='mt-12 bg-gradient-to-r from-indigo-800 to-blue-900
      text-center w-full xl:w-[90vw] px-6 pt-8  pb-15 rounded-[15px] ' >
     <h3 className='font-bold text-white text-[3rem]' >Financial Assessment</h3>
     <div className='my-6 ' >
      <div className="grid grid-cols-2 my-6  w-full items-end gap-6">   
     
    <select  onChange={(e)=>setAge(e.target.value)} value={age}    
    className='bg-black border-[1px] border-gray-300 
     px-3 py-3 rounded-[10px] w-full outline-none'>
        <option  value="" selected disabled hidden>Age</option>
        <option  value='25'> &gt; 25 </option>
        <option  value='30'>25 - 35</option>
        <option  value='40'>35-45</option>
        <option  value='50'>46-55</option>
        <option  value='60'>56-65</option>
      </select>
      <input value={income} onChange={(e)=>setIncome(e.target.value)}
      placeholder='Enter your Annual Income ' className=' bg-black border-[1px] 
      border-gray-300 placeholder:text-gray-400 px-3 py-3 rounded-[10px] 
      w-full outline-none' type="text" />
      <input value={savings} maxLength={120} onChange={(e)=>setSavings(e.target.value)}
      placeholder='Enter your current savings' className=' bg-black border-[1px] 
      border-gray-300 placeholder:text-gray-400 px-3 py-3 rounded-[10px] 
      w-full outline-none' type="text" />
      <input value={expenses} maxLength={120} onChange={(e)=>setExpenses(e.target.value)}
      placeholder='Enter your Expenses' className=' bg-black border-[1px] 
      border-gray-300 placeholder:text-gray-400 px-3 py-3 rounded-[10px] 
      w-full outline-none' type="text" />

    <input value={investmentGoals} onChange={(e)=>setInvestmentGoals(e.target.value)} placeholder='Enter Amount you want to reach' className=' bg-black border-[1px] border-gray-300 placeholder:text-gray-400 px-3 py-3 rounded-[10px] w-full outline-none' type="text" />
   <input type='number' value={emergencyFund} onChange={(e)=>setEmergencyFund(e.target.value)} 
   placeholder='Emergency Fund Savings' className=' bg-black border-[1px] border-gray-300 placeholder:text-gray-400 px-3 py-3 rounded-[10px] w-full outline-none' />
    <input value={debt} onChange={(e)=>setDebt(e.target.value)} 
    placeholder='Debt' className=' bg-black border-[1px] border-gray-300 placeholder:text-gray-400 px-3 py-3 rounded-[10px] w-full outline-none' type="text" />
    

   <select  onChange={(e)=>setTimeConstraint(e.target.value)} value={timeConstraint}   
    className=' bg-black border-[1px] border-gray-300 
    px-3 py-3 rounded-[10px] w-full outline-none'>
        <option  value='' disabled hidden>Time Constraint</option>
        <option  value="1">Within a year</option>
        <option  value="3">2-3 years</option>
        <option  value="10">5-10 years</option>
        <option  value="15">10-15</option>
        <option  value="60">20+ years</option>
        <option  value="80">Retirement Plans</option>
        </select>
        <select  onChange={(e)=>setRiskTolerance(e.target.value)} value={riskTolerance}   
    className=' bg-black border-[1px] border-gray-300 
    px-3 py-3 rounded-[10px] w-full outline-none'>
        <option value="" disabled hidden>Select Risk Tolerance</option>
        <option  value="low">Low</option>
        <option  value="medium">Moderate</option>
        <option  value="high">High</option>
        <option  value="very high">Very High</option>
        </select>
    <select  onChange={(e)=>setFamilyStatus(e.target.value)} value={familyStatus} 
       className='bg-black border-[1px] border-gray-300 
       px-3 py-3 rounded-[10px] w-full outline-none'>
        <option  value=""  disabled hidden>Family Status </option>
        <option  value="Bachelor">Bachelor</option>
        <option  value="Married">Married</option>
        <option  value="Dependant parents">Dependant Parents</option>
    </select>

            </div>
            {/* <Link to={{ pathname: "/About/:financialData", state: { financialData } }}> */}
            <Button
            onClick={addProduct}
            color="blue" className='tracking-wider text-black font-[600] text-[1.3vw]'>
                Submit
            </Button>
          {/* </Link> */}
        </div>  
    </div>
</div>

  )
}

export default DataIn