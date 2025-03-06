// /src/components/Dashboard/Sidebar/SidebarTile/DirectMessages.jsx

import React from 'react';

const DirectMessages = ({ onSelectContent }) => {
    return (
        <div className="direct-messages" onClick={() => onSelectContent({ title: "Direct Messages selected", type: 'directmessages' })}>
            <h3>Direct Messages</h3>
        </div>
    );
};

export default DirectMessages;
