import { useState } from 'react';
import React, { Component }  from 'react';
import Footer from './components/Footer';
import Notes from './components/Notes'; 
import Header from './components/Header';
import MainDetails from './components/MainDetails';
import ClientDetails from './components/ClientDetails';
import Dates from './components/Dates';
import './App.css'
function App() {
  
   const [showInvoice, setShowInvoice] = useState(false);

  const handlePrint = () =>{
    window.print()
  }
  return (
    <>
      <main className='m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded-xl rounded shadow'>
       {showInvoice ? (
       <div>
        <Header handlePrint={handlePrint} />
        <MainDetails />
        <ClientDetails />
        <Dates />
        <Notes />
        <Footer />
        <button
          onClick={() => setShowInvoice(false)}
          className="bg-blue-500 mt-5 text-white font-bold py-2 px-2 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
          Edit Information
        </button>
       </div> ): (
         <>
          <div className="flex flex-col justify-center">
          <input 
            type="text" 
            name="text" 
            placeholder="Enter your name" 
            autoComplete="off"
          />
          <button 
            onClick={() => setShowInvoice(true)}
            className="bg-blue-500 text-white font-bold py-2 px-2 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
            Preview invoice
          </button>
          </div>
         </>

       )}
      </main>
    </>
  );
}

export default App;
