import React from 'react';

const App = () => {
  function sumbithandler(event) {
    event.preventDefault();  
    console.log("SUBMITTED");
  }

  return (
    <div className='abc'>
      <form onSubmit={sumbithandler} className='form'>
        <input type="text" placeholder="Enter Your Name" required />
        <br />
        <input type="email" placeholder="Enter Your Email" required />
        <br />
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
};

export default App;
