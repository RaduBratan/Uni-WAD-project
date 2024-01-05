import './DropdownSubitem.css';

const DropdownSubitem = ({ name, 
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
                           setUrl}) => {
    const onClick = (e) => {
        //console.log(bodyProperties)
        setMethodName(name);
        const inputBodyFields = bodyProperties.map((input, id) => ({
            id,
            data: {
                name: input[0],
                type: ((input[1] === "string" || input[1] === "string?" || input[1] === "Guid") ? "text" : "number"),
                placeholder: input[0]
            },
        }));
        const inputParamFields = params.map((input, id) => ({
            id,
            data: {
                name: input[0],
                type: ((input[1] === "string" || input[1] === "string?" || input[1] === "Guid") ? "text" : "number"),
                placeholder: input[0]
            },
        }));
        //console.log(inputFields)
        setBodyInputs(inputBodyFields);
        setParamInputs(inputParamFields);

        // console.log("input body fields")
        // console.log(inputBodyFields)
        const bodyInputsData = Array(inputBodyFields.length);
        for(let i = 0; i < inputBodyFields.length; i++)
            bodyInputsData[i] = {name: inputBodyFields[i].data.name, data: ''}
        
        setBodyInputsData(bodyInputsData)

        // console.log("input param fields")
        // console.log(inputParamFields)
        const paramInputsData = Array(inputParamFields.length);
        for(let i = 0; i < inputParamFields.length; i++)
            paramInputsData[i] = {name: inputParamFields[i].data.name, data: ''}

        setParamInputsData(paramInputsData);

        setMethod(method);
        setUrl(url);
    }

    return (
        <div className="DropdownSubitem" onClick={onClick}>
            <h3>{name}</h3>
        </div>
    )
};

export default DropdownSubitem;