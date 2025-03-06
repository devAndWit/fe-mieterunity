// /components/Content/Content.js

import React from 'react';


const Content = ({ selectedContent }) => {
    if (!selectedContent) return <div className="no-content">Bitte wähle etwas aus!</div>;

    return (
        <div className="content">
            {selectedContent && selectedContent.type === 'thread' && (
                <ThreadMessages threadId={selectedContent._id} />
            )}
          
        </div>
    );
};

export default Content;
