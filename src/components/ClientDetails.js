import React, { Component }  from 'react';
export default function ClientDetails({clientAddress,clientName}){
    return (
        <>
          <section className='mt-10'>
            <h1 className='text-2xl uppercase mb-1'>{clientName}</h1>
            <p>{clientAddress}</p>
           </section>
        </>
    )
}