import styles from "./App.module.css";
import  About  from "./components/About/About";
import  Contact  from "./components/Contact/Contact";
import Analysis from "./Pages/Analysis/DataAnalysis.jsx";
import  Hero  from "./components/Hero/Hero";
import  Navbar  from "./components/Navbar/Navbar";
import  Projects  from "./components/Projects/Projects";
import HomePage from "./Pages/HomePage.jsx";
import DataIn from './components/Prediction/DataIn.jsx'
import Result from './Pages/Result.jsx/home/Home.jsx'
import { BrowserRouter as  Router, Routes , Route, BrowserRouter, Navigate } from 'react-router-dom'
import DataOut from "./components/Prediction/DataOut.jsx";

function App() {
  return (
    <div className={styles.App}>
       <Navbar />
      <Routes>
        <Route  exact path='/'element={<HomePage/>}/>
        <Route  exact path='/Hero'element={<Hero/>}/>        
        <Route  exact path='/About/:financialData'element={<Result/>}/>
        <Route  exact path='/Analysis'element={<Analysis/>}/>
        <Route  exact path='/Projects'element={<DataIn/>}/>
        <Route  exact path='/Contact'element={<Contact/>}/>
        <Route  exact path='/DataOut'element={<DataOut/>}/>
        
      </Routes>

    </div>
  );
}

export default App;