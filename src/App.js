import { useState,useRef } from 'react';
import React, { Component }  from 'react';
import Footer from './components/Footer';
import Notes from './components/Notes'; 
import Header from './components/Header';
import MainDetails from './components/MainDetails';
import ClientDetails from './components/ClientDetails';
import Dates from './components/Dates';
import Table from './components/Table';
import TableForm from './components/TableForm';
import ReactToPrint from 'react-to-print';
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
   const [description, setDescription] = useState("");
   const [quantity, setQuantity] = useState("");
   const [price, setPrice] = useState("");
   const [amount, setAmount] = useState("");
   const [list,setList] =useState([]);
   const [total,setTotal] = useState(0);
   
  const componentRef = useRef()
  const handlePrint = () =>{
    window.print()
  }
  return (
    <>
      <main className='m-5 p-5 lg:max-w-2xl xl:max-w-2xl bg-white rounded-xl rounded shadow md:max-w-xl md:mx-auto'>
      <ReactToPrint
        trigger={() => <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'>Print this out!</button>}
        content={() => componentRef.current}
      />
       {showInvoice ? (
        <>
           <div ref={componentRef} className='p-5'>
            <Header handlePrint={handlePrint} />
            <MainDetails name={name} address={address}/>
            <ClientDetails clientName={clientName} clientAddress={clientAddress}/>
            <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate}/>
            <Table description={description} price={price} amount={amount} quantity={quantity} list={list} setList={setList} total={total} setTotal={setTotal}/>
            <Notes notes={notes}/>
            <Footer name={name} address={address} website={website} email={email} bankAccount={bankAccount} phone={phone} bankName={bankName}/>
           </div>
           <button
             onClick={() => setShowInvoice(false)}
             className="bg-blue-500 mt-5 text-white font-bold py-2 px-2 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
             Edit Information
            </button>
        </>
      ): (
         <>
          
          <div className="flex flex-col justify-center">
          <article className='md:grid grid-cols-2 gap-10'>
            <div className='flex flex-col'>
             <label htmlFor="name">Enter Name</label>
             <input 
              type="text" 
              name="text" 
              id="name"
              placeholder="Enter name" 
              autoComplete="off"
              value={name}
              onChange = {(e) => setName(e.target.value)}
              />
            </div>

            <div className='flex flex-col'>
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
            </div>
          </article>

        <article className=' md:grid grid-cols-3 gap-7'>
          <div className='flex flex-col'>
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
          </div>

          <div className='flex flex-col'>
          <label htmlFor="website">Enter Website</label>
           <input 
            type="url" 
            name="website" 
            id="website"
            placeholder="Enter website" 
            autoComplete="off"
            value={website}
            onChange = {(e) => setWebsite(e.target.value)}
           />
          </div>

          <div className='flex flex-col'>
          <label htmlFor="phone">Enter phone</label>
           <input 
            type="number" 
            name="phone" 
            id="phone"
            placeholder="Enter phone" 
            autoComplete="off"
            value={phone}
            onChange = {(e) => setPhone(e.target.value)}
           />
          </div>
        </article>

        <article className='md:grid grid-cols-2 gap-10'>
          <div className='flex flex-col'>
           <label htmlFor="bankName">Enter Bank Name</label>
           <input 
             type="text" 
             name="bankName" 
             id="bankName"
             placeholder="Enter bankName" 
             autoComplete="off"
             value={bankName}
             onChange = {(e) => setBankName(e.target.value)}
            />
          </div>

          <div className='flex flex-col'>
           <label htmlFor="bankAccount">Enter Bank Account</label>
           <input 
            type="number" 
            name="bankAccount" 
            id="bankAccount"
            placeholder="Enter Bank Account" 
            autoComplete="off"
            value={bankAccount}
            onChange = {(e) => setBankAccount(e.target.value)}
           />
          </div>
        </article>



        
        <article className='md:grid grid-cols-2 gap-10 md:mt-10'>
          <div className='flex flex-col'>
           <label htmlFor="clientName">Enter Client name</label>
           <input 
            type="text" 
            name="clientName" 
            id="clientName"
            placeholder="Enter Client Name" 
            autoComplete="off"
            value={clientName}
            onChange = {(e) => setClientName(e.target.value)}
           />
          </div>

          <div className='flex flex-col'>
           <label htmlFor="clientAddress">Enter Client Address</label>
           <input 
            type="text" 
            name="clientAddress" 
            id="clientAddress"
            placeholder="Enter Client Address" 
            autoComplete="off"
            value={clientAddress}
            onChange = {(e) => setClientAddress(e.target.value)}
           />
          </div>
        </article>
         


         
        <article className=' md:grid grid-cols-3 gap-7'>
          <div className='flex flex-col'>
          <label htmlFor="invoiceNumber">Invoice Number</label>
           <input 
            type="text" 
            name="invoiceNumber" 
            id="invoiceNumber"
            placeholder="Invoice Number" 
            autoComplete="off"
            value={invoiceNumber}
            onChange = {(e) => setInvoiceNumber(e.target.value)}
           />

          
          </div>

          <div className='flex flex-col'>
          <label htmlFor="invoiceDate">Invoice Date</label>
           <input 
            type="date" 
            name="invoiceDate" 
            id="invoiceDate"
            placeholder="Invoice Date" 
            autoComplete="off"
            value={invoiceDate}
            onChange = {(e) => setInvoiceDate(e.target.value)}
           />
         
         
          </div>

          <div className='flex flex-col'>
          <label htmlFor="dueDate">Due Date</label>
           <input 
            type="date" 
            name="dueDate" 
            id="dueDate"
            placeholder="Due Date" 
            autoComplete="off"
            value={dueDate}
            onChange = {(e) => setDueDate(e.target.value)}
           />
          </div>
        </article>
         
          {/* There will be the table */}
           <article >
             <TableForm 
                description={description} 
                setDescription={setDescription} 
                quantity={quantity}
                setQuantity={setQuantity}
                price={price}
                setPrice={setPrice}
                amount={amount}
                setAmount={setAmount}
                list={list}
                setList={setList}
                total={total}
                setTotal={setTotal}
              />
           </article>
          {/* End of table */}
          <label htmlFor="notes">Additional Notes</label>
           <textarea 
             name="notes" 
             id="notes" 
             cols="20" 
             rows="10" 
             placeholder="Additional notes" 
             value={notes} onChange={(e) => setNotes(e.target.value)} />
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
