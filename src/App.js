import './App.css';
import React, { useState, useEffect } from "react";

const App = () => {
  const [zipCode, setZipCode] = useState('');
  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await fetch( `http://api.weatherapi.com/v1/current.json?key=9cee7bc3d2c14c32bc1201923231202&q=${zipCode}`);
      const data = await response.json();
      console.log(data);
      setTemperature(data.current.temp_f);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <div className="App">
      <h1>Current Weather in your Zipcode</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter zip code" value={zipCode} onChange={(event) => setZipCode(event.target.value)} />
        <button type="submit">Get Temperature</button>
      </form>
      {error && <p>{error}</p>}
      {temperature && <p>Temperature: {temperature}°F</p>}
    </div>
  );
};

export default App;



