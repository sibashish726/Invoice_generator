import React, { Component }  from 'react';
export default function MainDetails({name, address}){
    return (
        <>
          <section className='flex flex-col items-end justify-end'>
            <h1 className='font-bold md:text-4xl text-xl uppercase mb-1'>{name}</h1>
            <p>{address}</p>
           </section>
        </>
    )
}