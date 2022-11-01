import React, { Component }  from 'react';
export default function Table({list,total}){
    return (
        <>
          <table width="100%" className="mb-10">
               <thead>
                 <tr className='bg-gray-300 p-1 '>
                    <td>Item description</td>
                    <td>Quantity</td>
                    <td>Price</td>
                    <td>Amount</td>
                 </tr>
                </thead>
            {list.map(({id,description,quantity,price,amount}) =>(
              <React.Fragment key={id}>
                
                <tbody>
                 <tr>
                  <td>{description}</td>
                  <td>{quantity}</td>
                  <td>${price}</td>
                  <td>${amount}</td>
                 </tr>
                </tbody>
              </React.Fragment>
            
            ))}
          </table>
          <div>
            <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">Total: ${total}</h2>
          </div>
        </>
    )
}