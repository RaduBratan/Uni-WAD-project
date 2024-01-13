import './App.css';
import { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import { columnsExample, inputsExample, rowsExample, serviceConstants } from './constants/constants';
import Table from './components/table/Table';
import { InputList } from './components/inputList/InputList';
import { RequestButton } from './components/requestButton/RequestButton';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  const baseUrl = 'https://localhost:7192/';
  const [username, setUsername] = useState('Guest');
  const [email, setEmail] = useState('');
  const [bearerToken, setBearerToken] = useState('demoAppJwtToken2023FMI');
  const [services, setServices] = useState(serviceConstants);
  const [columns, setColumns] = useState(columnsExample);
  const [rows, setRows] = useState(rowsExample);
  const [methodName, setMethodName] = useState('Exemplu');
  const [bodyInputs, setBodyInputs] = useState(inputsExample);
  const [paramInputs, setParamInputs] = useState(inputsExample);
  const [bodyInputsData, setBodyInputsData] = useState();
  const [paramInputsData, setParamInputsData] = useState();
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('');

  console.log('rows');
  console.log(rows);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/"></Route>
          <Route path="/auth/createUser"></Route>
          <Route path="/auth/createAdmin"></Route>
          <Route path="/auth/login"></Route>

          <Route path="/restaurant/getRestaurants"></Route>
          <Route path="/restaurant/getRestaurant"></Route>
          <Route path="/restaurant/create"></Route>
          <Route path="/restaurant/update"></Route>
          <Route path="/restaurant/delete"></Route>

          <Route path="/employee/getEmployees"></Route>
          <Route path="/employee/getEmployee"></Route>
          <Route path="/employee/create"></Route>
          <Route path="/employee/update"></Route>
          <Route path="/employee/delete"></Route>

          <Route path="/manager/getManagers"></Route>
          <Route path="/manager/getManager"></Route>
          <Route path="/manager/create"></Route>
          <Route path="/manager/update"></Route>
          <Route path="/manager/delete"></Route>

          <Route path="/recipe/getRecipes"></Route>
          <Route path="/recipe/getRecipe"></Route>
          <Route path="/recipe/create"></Route>
          <Route path="/recipe/update"></Route>
          <Route path="/recipe/delete"></Route>

          <Route path="/user/getUsers"></Route>
          <Route path="/user/getUser"></Route>
          <Route path="/user/update"></Route>
          <Route path="/user/delete"></Route>
        </Routes>
      </Router>

      <div className="App">
        <Sidebar
          username={username}
          email={email}
          services={services}
          setMethodName={setMethodName}
          setBodyInputs={setBodyInputs}
          setParamInputs={setParamInputs}
          setBodyInputsData={setBodyInputsData}
          setParamInputsData={setParamInputsData}
          setMethod={setMethod}
          setUrl={setUrl}
        />
        <div>
          <h2>{methodName}</h2>
          <InputList inputs={bodyInputs} inputsData={bodyInputsData} setInputsData={setBodyInputsData} />
          <InputList inputs={paramInputs} inputsData={paramInputsData} setInputsData={setParamInputsData} />
          <RequestButton
            url={url}
            baseUrl={baseUrl}
            method={method}
            params={paramInputsData}
            body={bodyInputsData}
            setUsername={setUsername}
            setEmail={setEmail}
            bearerToken={bearerToken}
            setBearerToken={setBearerToken}
            setColumns={setColumns}
            setRows={setRows}
          />
        </div>
        <div className="TableDiv">
          <Table columns={columns} rows={rows} />
        </div>
      </div>
    </>
  );
};

export default App;
