import React, { Component }  from 'react';
export default function Footer({name,address,email,website,bankAccount,phone,bankName}){
    return (
        <>
        <footer className="footer border-t-2 border-gray-300 p-t-5">
          <ul className="flex flex-wrap items-center justify-center">
            <li>
              <span className='font-bold'>Your name</span>{name}
            </li>
            <li>
              <span className='font-bold'>Your email</span>{email}
            </li>
            <li>
              <span className='font-bold'>Your phone</span>{phone}
            </li>
            <li>
              <span className='font-bold'>Your Address</span>{address}
            </li>
            <li>
              <span className='font-bold'>Account holder name</span>{bankName}
            </li>
            <li>
              <span className='font-bold'>Account number</span>{bankAccount}
            </li>
            <li>
              <span className='font-bold'>Website</span>{" "}
              <a href={website} rel="noopener noreferrer" target="_blank">{website}</a>
            </li>
          </ul>
        </footer>
        </>
    )
}