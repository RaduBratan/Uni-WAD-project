import DropdownItem from "../dropdownItem/DropdownItem";
import "./Dropdown.css";

const Dropdown = ({services,
                   setMethodName,
                   setBodyInputs,
                   setParamInputs, 
                   setBodyInputsData, 
                   setParamInputsData, 
                   setMethod, 
                   setUrl }) => {
    return (
        <div className="Dropdown">
            {services.map(service => {
                return <DropdownItem
                    key={service.id}
                    name={service.name}
                    actions={service.actions}
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
    )
};

export default Dropdown;