import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import { fetchSidebarData } from '';  // 
import '../Styles/styles.css';
import { AuthContext } from "../../../contexts/AuthContext.jsx";
import SidebarTile from './SidebarTile/SidebarTile.jsx';
import Category from './SidebarTile/Category.jsx';
import Thread from './SidebarTile/Thread.jsx';

function Sidebar() {

    const [sidebarData, setSidebarData] = useState({
        categories: [],
        threads: [],
        directMessages: [],
    });



    return (
        <div className="sidebar">
            <SidebarTile> <Category></Category> </SidebarTile>
            <SidebarTile> <Thread></Thread> </SidebarTile>
            {/* <SidebarTile title="Threads" items={sidebarData.threads} route="/thread" />
      <SidebarTile title="Direct Messages" items={sidebarData.directMessages} route="/direct-messages" /> */}
        </div>
    )
};



export default Sidebar;
