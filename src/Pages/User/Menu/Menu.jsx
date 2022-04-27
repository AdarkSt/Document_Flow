import { NavLink, useRouteMatch } from "react-router-dom"
import { useLocation } from "react-router-dom"

import NoteAddIcon from '@mui/icons-material/NoteAdd'
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo'
import FileOpenIcon from '@mui/icons-material/FileOpen'
import EventIcon from '@mui/icons-material/Event'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import "./Menu.css"

export const Menu = props => {

    const location = useLocation()
    const {url} = useRouteMatch()
    const globalUser = location.state
    
    return (
        <ul className="nav myNav">
            <li className="nav-item">
                <NavLink 
                    className="nav-link myLink"
                    activeClassName="nav-link myLink active"
                    to={{pathname:`${url}/documents`, state:location.state}}
                    exact
                >
                    Փաստաթղթերի ձևանմուշներ
                    <NoteAddIcon className="menuIcons"/>
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink  
                    className="nav-link myLink"
                    activeClassName="nav-link myLink active"
                    to={{pathname:`${url}/requestes`, state:location.state}}
                    exact
                >
                    Ուղարկել Փաստաթուղթ
                    <ContentPasteGoIcon className="menuIcons"/>
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className="nav-link myLink"
                    activeClassName="nav-link myLink active"
                    to={{pathname:`${url}/resaved_docs`, state:location.state}}
                    exact
                >
                    Ստացված Փաստաթղթեր
                    <FileOpenIcon className="menuIcons"/>
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className="nav-link myLink"
                    activeClassName="nav-link myLink active"
                    to={{pathname:`${url}/sended_docs`, state:location.state}}
                    exact
                >
                    Ուղարկված Փաստաթղթեր
                    <EventIcon className="menuIcons"/>
                </NavLink>
            </li>
            {globalUser.role === "admin" && 
                <li className="nav-item">
                    <NavLink
                        className="nav-link myLink"
                        activeClassName="nav-link myLink active"
                        to={{pathname:`${url}/manage_workers`, state:location.state}}
                        exact
                    >
                        Աշխատակիցների համակարգում
                        <ManageAccountsIcon className="menuIcons"/>
                    </NavLink>
                </li>
            }
        </ul>
    )
}