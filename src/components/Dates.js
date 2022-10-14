import React, { Component }  from 'react';
export default function Dates({invoiceNumber,invoiceDate,dueDate}){
    return (
        <>
        <article className='my-5 flex items-end justify-end'>
          <ul>
            <li className='p-1'><span className='font-bold'>Invoive Number:</span> {invoiceNumber}</li>
            <li className='p-1 bg-gray-100'><span className='font-bold'>invoiceDate : </span>{invoiceDate}</li>
            <li className='p-1'><span className='font-bold'>dueDate: </span> {dueDate}</li>
          </ul>
        </article>
        </>
    )
}