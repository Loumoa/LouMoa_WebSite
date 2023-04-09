import List from "@mui/material/List"
import {ListItemButton, ListItemIcon, ListItemText, ListSubheader} from "@mui/material";

import {useNavigate} from "react-router-dom";

import Logo from './menu-icons/Logo.png'

import './Menu.css'

import CreditCardIcon from '@mui/icons-material/CreditCard';

import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import ApartmentIcon from '@mui/icons-material/Apartment';

import LogoutIcon from '@mui/icons-material/Logout';

const Menu = () => {

    const navigate = useNavigate()

    //Context


    return (
        <List
            sx={{
                maxWidth: 360,
                background: 'linear-gradient(0deg, rgba(146, 179, 186, 0.75), rgba(146, 179, 186, 0.75)), #FFFFFF',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                position: 'fixed',
                height: '100%',
                width: 230,
                top: 0,
                left: 0,
                zIndex: 1,
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" sx={{
                    marginBottom: '40px',
                    background: 'linear-gradient(0deg, rgba(146, 179, 186, 0.75), rgba(146, 179, 186, 0.75)), #FFFFFF',
                    position: 'relative'
                }}>
                    <div className={'logo-menu-content'}>
                        <ListItemIcon>
                            <img src={Logo} alt={'icon'} className={'logo-img'}/>
                        </ListItemIcon>
                        <h3>LouMoa</h3>
                    </div>
                </ListSubheader>
            }
        >
            <ListItemButton onClick={() => (navigate('/home'))}>
                <ListItemIcon>
                    <HomeIcon style={{
                        color: "white",
                        width: 'auto',
                        height: '30px'
                    }}/>
                </ListItemIcon>
                <ListItemText sx={{fontSize: '14px', marginLeft: '5px'}} primary="Accueil"/>
            </ListItemButton>

            <ListItemButton onClick={() => (navigate('/visit'))}>
                <ListItemIcon>
                    <CalendarMonthIcon  style={{
                        width: 'auto',
                        height: '30px',
                        color: "white"
                    }}/>
                </ListItemIcon>
                <ListItemText sx={{fontSize: '14px', marginLeft: '5px'}} primary="Visite"/>
            </ListItemButton>

            <ListItemButton onClick={() => (navigate('/client'))}>
                <ListItemIcon>
                    <PersonIcon style={{
                        width: 'auto',
                        height: '30px',
                        color: "white"
                    }}/>
                </ListItemIcon>
                <ListItemText sx={{fontSize: '14px', marginLeft: '5px'}} primary="Clients"/>
            </ListItemButton>

            <ListItemButton onClick={() => (navigate('/housing'))}>
                <ListItemIcon>
                    <ApartmentIcon style={{
                        width: 'auto',
                        height: '30px',
                        color: "white"
                    }}/>
                </ListItemIcon>
                <ListItemText sx={{fontSize: '14px', marginLeft: '5px'}} primary="Logement"/>
            </ListItemButton>

            <ListItemButton onClick={() => (navigate('/history'))}>
                <ListItemIcon>
                    <CreditCardIcon style={{
                        color: "white",
                        width: 'auto',
                        height: '30px'
                    }}/>

                </ListItemIcon>
                <ListItemText sx={{fontSize: '14px', marginLeft: '5px'}} primary="Transactions"/>
            </ListItemButton>

            <ListItemButton sx={{
                position: 'fixed',
                bottom: 2,
                width: 230
            }} onClick={() => {

                navigate('/login');
            }}>
                <ListItemIcon>
                    <LogoutIcon style={{
                        width: 'auto',
                        height: '30px',
                        color: "white"
                    }}/>
                </ListItemIcon>
                <ListItemText sx={{fontSize: '14px', marginLeft: '5px'}} primary="Déconnexion"/>
            </ListItemButton>
        </List>
    );
}

export default Menu