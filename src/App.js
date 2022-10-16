
import './assets/css/App.css';
import NavBar from './components/NavBar/NavBar';
import WeatherPanel from './components/Weather/WeatherPanel';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <WeatherPanel/>
    </div>
  );
}

export default App;
