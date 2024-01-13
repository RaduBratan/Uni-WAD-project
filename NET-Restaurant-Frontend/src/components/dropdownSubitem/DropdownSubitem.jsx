import './DropdownSubitem.css';

const DropdownSubitem = ({
  name,
  method,
  url,
  bodyProperties,
  params,
  setMethodName,
  setBodyInputs,
  setParamInputs,
  setBodyInputsData,
  setParamInputsData,
  setMethod,
  setUrl
}) => {
  const onClick = (e) => {
    setMethodName(name);
    const inputBodyFields = bodyProperties.map((input, id) => ({
      id,
      data: {
        name: input[0],
        type: input[1] === 'string' || input[1] === 'string?' || input[1] === 'Guid' ? 'text' : 'number',
        placeholder: input[0]
      }
    }));
    const inputParamFields = params.map((input, id) => ({
      id,
      data: {
        name: input[0],
        type: input[1] === 'string' || input[1] === 'string?' || input[1] === 'Guid' ? 'text' : 'number',
        placeholder: input[0]
      }
    }));
    setBodyInputs(inputBodyFields);
    setParamInputs(inputParamFields);

    const bodyInputsData = Array(inputBodyFields.length);
    for (let i = 0; i < inputBodyFields.length; i++) bodyInputsData[i] = { name: inputBodyFields[i].data.name, data: '' };

    setBodyInputsData(bodyInputsData);

    const paramInputsData = Array(inputParamFields.length);
    for (let i = 0; i < inputParamFields.length; i++) paramInputsData[i] = { name: inputParamFields[i].data.name, data: '' };

    setParamInputsData(paramInputsData);

    setMethod(method);
    setUrl(url);
  };

  return (
    <div className="DropdownSubitem" onClick={onClick}>
      <h3>{name}</h3>
    </div>
  );
};

export default DropdownSubitem;
