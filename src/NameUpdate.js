import React, { useState } from 'react';

function NameInput() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the name, like send it to a server
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" placeholder='Add your Name...' value={name} onChange={e => setName(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h2>Hi my name is  : {name}</h2>
    </div>
  );
}

export default NameInput;
