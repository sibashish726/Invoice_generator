import React, { Component }  from 'react';
export default function ClientDetails({clientAddress,clientName}){
    return (
        <>
          <section className='mt-5'>
            <h1 className='text-xl uppercase'>{clientName}</h1>
            <p>{clientAddress}</p>
           </section>
        </>
    )
}