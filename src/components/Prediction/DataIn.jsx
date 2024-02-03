import { Button } from '@material-tailwind/react';
import React from 'react'
import { useState } from 'react';

const DataIn = () => {
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [realPrice, setRealPrice] = useState('');
    const [showPrice, setShowPrice] = useState("");
    const [size, setSize] = useState('');
    const [fabric, setFabric] = useState('');
    const [stock, setStock] = useState('');
    const [image, setImage] = useState([]);
    const [totalImageList, setTotalImageList] = useState([]);
    const [coverImage, setCoverImage] = useState([]);
    const [description, setDescription] = useState('');

  return (
<div className='col-span-3 flex items-center justify-center pb-[10vw]' >
    <div className='mt-12 bg-gradient-to-r from-indigo-800 to-blue-900
      text-center w-full xl:w-[90vw] px-6 pt-8  pb-15 rounded-[15px] ' >
     <h3 className='font-bold text-white text-[3rem]' >Financial Assessment</h3>
     <div className='my-6 ' >
      <div className="grid grid-cols-2 my-6  w-full items-end gap-6">   
     
    <select  onChange={(e)=>setCategory(e.target.value)} value={category}    
    className='bg-black border-[1px] border-gray-300 
     px-3 py-3 rounded-[10px] w-full outline-none'>
        <option  value="" selected disabled hidden>Age</option>
        <option  value='Western'> &gt; 25 </option>
        <option  value='Dresses'>25 - 35</option>
        <option  value='Saree'>35-45</option>
        <option  value='Kurtas'>46-55</option>
        <option  value='Ethnic'>56-65</option>
      </select>
      <input value={title} onChange={(e)=>setTitle(e.target.value)}
      placeholder='Enter your Annual Income ' className=' bg-black border-[1px] 
      border-gray-300 placeholder:text-gray-400 px-3 py-3 rounded-[10px] 
      w-full outline-none' type="text" />
      <input value={description} maxLength={120} onChange={(e)=>setDescription(e.target.value)}
      placeholder='Enter your current savings' className=' bg-black border-[1px] 
      border-gray-300 placeholder:text-gray-400 px-3 py-3 rounded-[10px] 
      w-full outline-none' type="text" />

    <input value={showPrice} onChange={(e)=>setShowPrice(e.target.value)} placeholder='Enter Amount you want to reach' className=' bg-black border-[1px] border-gray-300 placeholder:text-gray-400 px-3 py-3 rounded-[10px] w-full outline-none' type="text" />
   <input type='number' value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter Product Price' className=' bg-black border-[1px] border-gray-300 placeholder:text-gray-400 px-3 py-3 rounded-[10px] w-full outline-none' />
    <input value={realPrice} onChange={(e)=>setRealPrice(e.target.value)} placeholder='Enter Real Product Price' className=' bg-black border-[1px] border-gray-300 placeholder:text-gray-400 px-3 py-3 rounded-[10px] w-full outline-none' type="text" />
    

   <select  onChange={(e)=>setSize(e.target.value)} value={size}   
    className=' bg-black border-[1px] border-gray-300 
    px-3 py-3 rounded-[10px] w-full outline-none'>
        <option  value='' disabled hidden>Time Constraint</option>
        <option  value="S">Within a year</option>
        <option  value="M">2-3 years</option>
        <option  value="L">5-10 years</option>
        <option  value="XL">10-15</option>
        <option  value="XXL">20+ years</option>
        <option  value="XXL">Retirement Plans</option>
        </select>
        {/* <select  onChange={(e)=>setFabric(e.target.value)} value={fabric}   
    className=' bg-black border-[1px] border-gray-300 
    px-3 py-3 rounded-[10px] w-full outline-none'>
        <option value="" disabled hidden>Choose a Fabric</option>
        <option  value="Silk">Silk</option>
        <option  value="Cotton">Cotton</option>
        <option  value="Rayon">Rayon</option>
        <option  value="Linen">Linen</option>
        </select> */}
    <select  onChange={(e)=>setStock(e.target.value)} value={stock} 
       className='bg-black border-[1px] border-gray-300 
       px-3 py-3 rounded-[10px] w-full outline-none'>
        <option  value=""  disabled hidden>Family Status </option>
        <option  value="in stock">Bachelor</option>
        <option  value="out of stock">Married</option>
        <option  value="out of stock">Dependant Parents</option>
    </select>

            </div>
            <Button
            color="blue" className='tracking-wider text-black font-[600] text-[1.3vw]'>
                Submit
            </Button>
        </div>  
    </div>
</div>

  )
}

export default DataIn