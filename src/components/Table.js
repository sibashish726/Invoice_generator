import React, { Component }  from 'react';
export default function Table(){
    return (
        <>
          <table width="100%">
            <thead>
              <tr className='bg-gray-300 p-1 '>
                  <td>Item description</td>
                  <td>Quantity</td>
                  <td>Price</td>
                  <td>Amount</td>
              </tr>
            </thead>
            <tbody>
              <td>Something really big</td>
              <td>100</td>
              <td>$50</td>
              <td>$5000</td>
            </tbody>
          </table>
        </>
    )
}