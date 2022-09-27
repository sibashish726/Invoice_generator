import React, { Component }  from 'react';
import './App.css'
function App() {
  const handlePrint = () =>{
    window.print()
  }
  return (
    <>
      <main>
        <header>
          <h2>Invoice App</h2>
          <div>
            <ul>
              <li><button onClick={handlePrint}>Print</button></li>
              <li>Download</li>
              <li>Send</li>
            </ul>
          </div>
        </header>
        
        <section>
            {/* <input type="text" name="text" id="text" placeholder="Enter your name" required /> */}
            <h2>Sibashish Biswas</h2>
            <p>Your address</p>
        </section>

        <section>
          <h2>Client name</h2>
          <p>Clients address</p>
        </section>

        <article>
          <ul>
            <li>Invoice Number</li>
            <li>Invoice date</li>
            <li>Due date</li>
            <li></li>
          </ul>
        </article>
      </main>
    </>
  );
}

export default App;
