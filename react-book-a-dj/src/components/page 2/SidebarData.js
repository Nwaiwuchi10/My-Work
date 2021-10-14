import React from 'react'
import *as FaIcons  from "react-icons/fa";
import *as AiIcons from 'react-icons/ai';
import *as IoIcons from 'react-icons/io';


export const SidebarData = [
    {
        title:'Home',
        path: '/',
        icons: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title:'Categories',
        path: '/',
        icons: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    
    {
        title:'About ',
        path: '/ ',
        icons: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title:'ContactSupport',
        path: '/',
        icons: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
]




export default SidebarData
