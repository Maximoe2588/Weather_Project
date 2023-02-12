/*
function WeatherDisplay() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch("http://api.weatherapi.com/v1/current.json?key=9cee7bc3d2c14c32bc1201923231202&q=Texas");
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeather();
  }, []);

  return (
    <div>
      {weatherData ? (
        <div>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WeatherDisplay;*/

/*const App = () => {
  const [zipCode, setZipCode] = useState('');
  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await fetch( `http://api.weatherapi.com/v1/current.json?key=9cee7bc3d2c14c32bc1201923231202&q=${zipCode}`);
      const data = await response.json();
      setTemperature(data.main.temp);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter zip code" value={zipCode} onChange={(event) => setZipCode(event.target.value)} />
        <button type="submit">Get Temperature</button>
      </form>
      {error && <p>{error}</p>}
      {temperature && <p>Temperature: {temperature}°F</p>}
    </div>
  );
};*/