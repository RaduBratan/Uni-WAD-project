import DropdownSubitem from "../dropdownSubitem/DropdownSubitem";
import './DropdownItem.css';

const DropdownItem = ({name,
                       actions,
                       setMethodName,
                       setBodyInputs,
                       setParamInputs,
                       setBodyInputsData, 
                       setParamInputsData, 
                       setMethod, 
                       setUrl}) => {
    //console.log(props);
    return (
        <div className="DropdownItem">
            <div className="DropdownChoice">
                <h3>{name}</h3>
            </div>
            <div className="DropdownHidden">
                {actions.map(action => {
                    return <DropdownSubitem 
                        key={action.id} 
                        name={action.name}
                        method={action.method}
                        url={action.url} 
                        bodyProperties={action.bodyProperties} 
                        params={action.params}
                        setMethodName={setMethodName}
                        setBodyInputs={setBodyInputs}
                        setParamInputs={setParamInputs}
                        setBodyInputsData={setBodyInputsData}
                        setParamInputsData={setParamInputsData}
                        setMethod={setMethod}
                        setUrl={setUrl}
                    />
                })}
            </div>
        </div>
    );
};

export default DropdownItem;