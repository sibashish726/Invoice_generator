import React, { Component }  from 'react';
export default function Footer({name,address,email,website}){
    return (
        <>
        <footer>
          <ul className="flex flex-wrap items-center justify-center">
            <li>
              <span className='font-bold'>Your name</span>{name}
            </li>
            <li>
              <span className='font-bold'>Your email</span>{email}
            </li>
            <li>
              <span className='font-bold'>Your phone</span>8932939393
            </li>
            <li>
              <span className='font-bold'>Bank</span>213809329228
            </li>
            <li>
              <span className='font-bold'>Account holder name</span>{name}
            </li>
            <li>
              <span className='font-bold'>Account number</span>29227370730
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