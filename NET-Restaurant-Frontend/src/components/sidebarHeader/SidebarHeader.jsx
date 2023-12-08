import "./SidebarHeader.css";

const SidebarHeader = ({username, email}) => {
    return (
        <div className="SidebarHeader">
            <h3 className="Username">{username}</h3>
            <span className="Email">{email}</span>
        </div>
    );
};

export default SidebarHeader;