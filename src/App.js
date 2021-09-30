import './App.css';
import {useState, useEffect} from 'react';
import Weather from './Weather';


// 51cf830fda3c7eaf4afc17e969f65e0b
// ec4d9c0f0a9b1dbe1bcd36a32a040bd1 jounin

function App() {

  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setIsLoading(false);
      }, (error) => {
        alert(error);
      })
    } else {
      setIsLoading(false);
      alert ('Geolocation not supported')
    }
  }, [])

  if (isLoading) {
    return <p>Retrieving position...</p>
  } else {
    return (
      <div style={{margin:'50px'}}>
        <h3>Your location</h3>
        <p>
          Position: &nbsp; 
          {lat.toFixed(3)}, &nbsp; 
          {lng.toFixed(3)}
        </p>
        <Weather lat={lat} lon={lng}/>
      </div>
    );
  }
}

export default App;
