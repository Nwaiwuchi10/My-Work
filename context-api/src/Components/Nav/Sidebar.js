import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",

    // Option: "Hom1",
    path: "/home",

    // icons: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Features",
    path: "/feature",
    option: "Home1, Home2, HomeBoxed",
    // icons: <FaIcons.FaTimesCircle />,
    cName: "nav-text",
  },

  {
    title: "About Us ",
    path: "/aboutus ",
    option: "Home1, Home2, HomeBoxed",
    // icons: <FaIcons.FaAd />,
    cName: "nav-text",
  },
  {
    title: "Services",
    path: "/services",
    // icons: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "News",
    path: "/news",
    option: "Home1, Home2, HomeBoxed",
    // icons: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "Contacts",
    path: "/contacts",
    // icons: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];

export default SidebarData;
