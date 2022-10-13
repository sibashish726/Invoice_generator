import React, { Component }  from 'react';
export default function Header({handlePrint}){
  
    return (
        <>
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
        </>
    )
}