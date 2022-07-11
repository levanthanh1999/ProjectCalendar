import { DashboardFilled, CalendarFilled, FileSearchOutlined, MinusSquareOutlined, AlignLeftOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";


// interface TypeActive 
//     {
//         dashboard = '/dashboard'
//     }

interface ListNav {
    name: string,
    icon: any,
    path: string,
    // type: TypeActive[]
}



const ListNav: ListNav[] = [
    {
        name: "Dashboard",
        icon: <DashboardFilled />,
        path: "/dashboard"
        
    },
    {
        name: "Calender",
        icon: <CalendarFilled />,
        path: "/calender"
    },
    {
        name: "Analytics",
        icon: <FileSearchOutlined />,
        path: "/analytics"
    },
    {
        name: "Ads",
        icon: <MinusSquareOutlined />,
        path: "/ads"
    },
    {
        name: "Campaign",
        icon: <AlignLeftOutlined />,
        path: "/campaign"
    },
    {
        name: "Settings",
        icon: <SettingOutlined />,
        path: "/settings"
    },
  ]

const Navigation = () => {
  

  return (
    <>
        <ul>
            { 
                ListNav.map((nav, index) => 
                    <li key={index}>
                        <NavLink to={nav.path}>
                            {nav.icon} {nav.name}
                        </NavLink>
                    </li>
            )}
        </ul> 
    </>
  );
};

export default Navigation;