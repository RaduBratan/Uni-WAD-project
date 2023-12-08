import Dropdown from "../dropdown/Dropdown";
import SidebarHeader from "../sidebarHeader/SidebarHeader";

const Sidebar = ({username, services}) => {
    return (
        <div className="Sidebar">
            <SidebarHeader username={username}/>
            <Dropdown services={services}/>
        </div>
    );
};

export default Sidebar;