import React from 'react';

const MainStatus = (props) => {
    const {icon, connectionName, connectionStatus, navVisible, setNavVisible} = props;
    return (
        <button className="MainStatus" type="button" onClick={ () => setNavVisible(!navVisible) }>
            <img className="MainStatus_icon" src={icon} alt="Status Icon" />
            <div className="MainStatus_label">
                <strong>{connectionName}</strong>
                <span>Connection {connectionStatus ? 'Enabled' : 'Disabled'}</span>
            </div>
        </button>
    );
}

export default MainStatus;