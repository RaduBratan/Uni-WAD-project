import './App.css';
import { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import { columnsExample, inputsExample, rowsExample, serviceConstants } from './constants/constants';
import Table from './components/table/Table';
import { InputList } from './components/inputList/InputList';

const App = () => {
  const [username, setUsername] = useState("Guest");
  const [services, setServices] = useState(serviceConstants);
  const [columns, setColumns] = useState(columnsExample);
  const [rows, setRows] = useState(rowsExample);
  const [inputs, setInputs] = useState(inputsExample);

  console.log("App inputs: " + JSON.stringify(inputs));
  return (
    <div className="App">
      <Sidebar username={username} services={services} />
      <InputList inputs={inputs} />
      <div className="TableDiv">
        <Table columns={columns} rows={rows} />
      </div>
    </div>
  );
}

export default App;