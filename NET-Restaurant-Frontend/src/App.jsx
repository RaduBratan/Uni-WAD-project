import './App.css';
import { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import { serviceConstants } from './constants/constants';

const App = () => {
  const [username, setUsername] = useState("Guest");
  const [services, setServices] = useState(serviceConstants);

  return (
    <div className="App">
      <Sidebar username={username} services={services}/>
    </div>
  );
}

export default App;