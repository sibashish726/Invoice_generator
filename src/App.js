import React, { Component }  from 'react';
import './App.css'
function App() {
  const handlePrint = () =>{
    window.print()
  }
  return (
    <>
      <main className='m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded-xl rounded shadow'>
        <header className='flex flex-col items-center justify-center mb-5  xl:flex-row xl:justify-between'>
          <h2 className='font-bold uppercase tracking-wide text-4xl'>Invoice App</h2>
          <div>
            <ul className='flex items-center justify-between flex-wrap mb-3'>
              <li><button onClick={handlePrint} className="btn btn-print">Print</button></li>
              <li><button className="btn btn-download">Download</button></li>
              <li><button className="btn btn-send">Send</button></li>
            </ul>
          </div>
        </header>
        
        <section className='flex flex-col items-end justify-end'>
            {/* <input type="text" name="text" id="text" placeholder="Enter your name" required /> */}
            <h1 className='text-xl uppercase'>Sibashish Biswas</h1>
            <p>Your address</p>
        </section>

        <section className='mt-5'>
          <h1 className='text-xl uppercase'>Client name</h1>
          <p>Clients address</p>
        </section>

        <article className='my-5 flex items-end justify-end'>
          <ul>
            <li><span className='font-bold'>Invoice Number:</span></li>
            <li><span className='font-bold'>Invoice date</span></li>
            <li><span className='font-bold'>Due date</span></li>
          </ul>
        </article>

        <table>

        </table>

        <section className='mb-5'>
          <p>Notes to the client...</p>
        </section>

        <footer>
          <ul className="flex flex-wrap items-center justify-center">
            <li>
              <span className='font-bold'>Your name</span>Sibashish Biswas
            </li>
            <li>
              <span className='font-bold'>Your email</span>sibashishbiswas@gmail.com
            </li>
            <li>
              <span className='font-bold'>Your phone</span>8932939393
            </li>
            <li>
              <span className='font-bold'>Bank</span>213809329228
            </li>
            <li>
              <span>Account holder name</span>Sibahsish biswas
            </li>
            <li>
              <span className='font-bold'>Account number</span>29227370730
            </li>
            <li>
              <span className='font-bold'>Website</span>sibashishbiswas.com
            </li>
          </ul>
        </footer>
      </main>
    </>
  );
}

export default App;
