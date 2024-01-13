import { InputField } from '../inputField/InputField';
import './InputList.css';

export const InputList = ({ inputs, inputsData, setInputsData }) => {
  return (
    <div className="InputList">
      {inputs.map((inputField, id) => (
        <InputField key={inputField.id} id={id} inputField={inputField.data} inputsData={inputsData} setInputsData={setInputsData} />
      ))}
    </div>
  );
};
