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
   const [name, setName] = useState("");
   const [address, setAddress] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [bankName, setBankName] = useState("");
   const [bankAccount, setBankAccount] = useState("");
   const [website, setWebsite] = useState("");
   const [clientName, setClientName] = useState("");
   const [clientAddress, setClientAddress] = useState("");
   const [invoiceNumber, setInvoiceNumber] = useState("");
   const [invoiceDate, setInvoiceDate] = useState("");
   const [dueDate, setDueDate] = useState("");
   const [notes, setNotes] = useState("");


  const handlePrint = () =>{
    window.print()
  }
  return (
    <>
      <main className='m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded-xl rounded shadow'>
       {showInvoice ? (
       <div>
        <Header handlePrint={handlePrint} />
        <MainDetails name={name} address={address}/>
        <ClientDetails />
        <Dates />
        <Notes />
        <Footer name={name} address={address} website={website} email={email}/>
        <button
          onClick={() => setShowInvoice(false)}
          className="bg-blue-500 mt-5 text-white font-bold py-2 px-2 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
          Edit Information
        </button>
       </div> ): (
         <>
          
          <div className="flex flex-col justify-center">
           <label htmlFor="name">Enter  name</label>
           <input 
            type="text" 
            name="text" 
            id="name"
            placeholder="Enter name" 
            autoComplete="off"
            value={name}
            onChange = {(e) => setName(e.target.value)}
           />

         <label htmlFor="address">Enter address</label>
           <input 
            type="text" 
            name="text" 
            id="address"
            placeholder="Enter address" 
            autoComplete="off"
            value={address}
            onChange = {(e) => setAddress(e.target.value)}
           />

          <label htmlFor="email">Enter email</label>
           <input 
            type="text" 
            name="text" 
            id="email"
            placeholder="Enter email" 
            autoComplete="off"
            value={email}
            onChange = {(e) => setEmail(e.target.value)}
           />

         <label htmlFor="website">Enter email</label>
           <input 
            type="url" 
            name="website" 
            id="website"
            placeholder="Enter website" 
            autoComplete="off"
            value={website}
            onChange = {(e) => setWebsite(e.target.value)}
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
