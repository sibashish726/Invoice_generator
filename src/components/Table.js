import React, { Component }  from 'react';
export default function Table({list}){
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
        </>
    )
}