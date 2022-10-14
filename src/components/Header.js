import React, { Component }  from 'react';
export default function Header({handlePrint}){
  
    return (
        <>
          <header className='flex flex-col items-center justify-center mb-5  xl:flex-row xl:justify-between'>
          <h2 className='font-bold uppercase tracking-wide text-4xl'>Invoice App</h2>
          <div>
            <ul className='flex items-center justify-between flex-wrap mb-3'>
              <li><button onClick={handlePrint} className="bg-gray-500 text-white font-bold py-2 px-4 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300">Print</button></li>
              <li className='mx-2'><button className="bg-blue-500 text-white font-bold py-2 px-4 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Download</button></li>
              <li><button className="bg-green-500 text-white font-bold py-2 px-4 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300">Send</button></li>
            </ul>
          </div>
        </header>
        </>
    )
}