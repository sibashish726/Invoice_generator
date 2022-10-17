import React, { Component }  from 'react';
export default function TableForm({describtion,setDescription}){
    return (
        <>
         <div className="flex flex-col">
           <label htmlFor='description'>Item description</label>
           <input 
             type="text" 
             name="description" 
             id="description" 
             placeholder="Item description" 
             value={describtion} onChange={(e) => setDescription(e.target.value)}
            />
         </div>  
        </>
    )
}