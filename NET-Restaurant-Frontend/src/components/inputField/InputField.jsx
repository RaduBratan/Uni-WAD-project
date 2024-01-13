import './InputField.css';

export const InputField = ({ id, inputField, inputsData, setInputsData }) => {
  const onChange = (e) => {
    console.log(inputsData);
    const newInputsData = Array(inputsData.length);

    for (let i = 0; i < inputsData.length; i++) {
      if (id === i) newInputsData[i] = { name: inputsData[i].name, data: e.target.value };
      else newInputsData[i] = inputsData[i];
    }

    setInputsData(newInputsData);
  };

  return (
    <div className="InputField">
      <span>{inputField.name}</span>
      <input type={inputField.type} onChange={onChange} placeholder={inputField.placeholder} />
    </div>
  );
};
