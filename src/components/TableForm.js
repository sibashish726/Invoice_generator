import React, { Component }  from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useEffect ,useState } from "react";
import {v4 as uuidv4} from "uuid";

export default function TableForm({description,setDescription,quantity,setQuantity,setPrice,price,amount,setAmount,list,setList,total,setTotal}){
  const [isEditing,setIsEditing] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault()
    const newItems = {
      id: uuidv4(),
      description,
      quantity,
      price,
      amount,
    }
    setDescription("")
    setQuantity("")
    setPrice("")
    setAmount("")
    setList([...list,newItems])
    setIsEditing(false)
    
  } 

  useEffect(() =>{
    const calculateAmount =(amount) =>{
      setAmount(quantity*price)
    } 
     calculateAmount(amount)
    },[amount,price,quantity,setAmount])

  useEffect(() =>{
    let rows = document.querySelectorAll(".amount")
    let sum = 0

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
        setTotal(sum)
      }
    }
  })
  
  const deleteRow = (id) => setList(list.filter((row) => row.id !== id))
  
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id)
    setList(list.filter((row) => row.id !== id))
    setIsEditing(true)
    setDescription(editingRow.description)
    setQuantity(editRow.quantity)
    setPrice(editRow.price)
  }
  return (
        <>
          <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:mt-16">
           <label htmlFor='description'>Item description</label>
           <input 
             type="text" 
             name="description" 
             id="description" 
             placeholder="Item description" 
             value={description} 
             onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className='md:grid grid-cols-3 gap-3 '>
          <div className="flex flex-col">
           <label htmlFor='quantity'>Item Quantity</label>
           <input 
             type="number" 
             name="quantity" 
             id="quantity" 
             placeholder="Quantity" 
             value={quantity} 
             onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
           <label htmlFor='price'>Item Price</label>
           <input 
             type="number" 
             name="price" 
             id="price" 
             placeholder="Price" 
             value={price} 
             onChange={(e) => setPrice(e.target.value)}
            />
          </div>


          <div className="flex flex-col">
           <label htmlFor='amount'>Total Amount</label>
           <p>{amount}</p>
          </div>  
          </div>
          <button 
            type="submit"
            className="mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 " 
           >
            {isEditing ? "Editing Item" : "Add Table Item"}
           </button>
          </form>

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
                  <td className="amount">{amount}</td>
                  <td><button onClick={() => deleteRow(id)}><AiOutlineDelete className="text-red-500 font-bold text-xl"/></button></td>
                  <td><button onClick={() => editRow(id)}><AiOutlineEdit className="text-blue-500 font-bold text-xl"/></button></td>
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