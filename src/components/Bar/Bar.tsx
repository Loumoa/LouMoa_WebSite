
import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {useNavigate} from "react-router-dom";
import Popup from "../Popup/Popup";
import Card from "../Card/Card";
import './bar.css';


interface IAnchorEl {
    Nav: HTMLElement | null,
    User: HTMLElement | null,
}

const Bar = ({pages, settings, barcolor, boxShadow}: any): JSX.Element => {

    const [anchorEl, setAnchorEl] = React.useState<IAnchorEl>({
        Nav: null,
        User: null,
    });

    const navigate = useNavigate();

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl({...anchorEl, Nav: event.currentTarget});
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl({...anchorEl, User: event.currentTarget});
    };

    const handleCloseNavMenu = () => {
        setAnchorEl({...anchorEl, Nav: null});
    };

    const handleCloseUserMenu = () => {
        setAnchorEl({...anchorEl, User: null});
    };

    const [open, setOpen] = React.useState(false);
    const handleOpenProfil = () => {
        setOpen(true);
    };
    const handleCloseProfile = () => {
        setOpen(false);
    };

    return (
        <AppBar position='sticky'
                sx={{
                    bgcolor: barcolor,
                    boxShadow: boxShadow,
                }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            height: 40,
                            width: "auto",
                        }}
                    >
                        <img
                            src="https://media.discordapp.net/attachments/1086366718227664986/1094627837203452014/Logo_LouMoa.png"
                            alt="Logo et Nom du site : LouMoa"/>
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl.Nav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorEl.Nav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page: any) => (
                                <MenuItem key={page} onClick={() => {
                                    navigate(page.value)
                                }}>
                                    <Typography textAlign="center">{page.label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            height: 40,
                            width: 'auto',
                        }}
                    >
                        <img
                            src="https://media.discordapp.net/attachments/986278437293527110/993428212526878890/beeeee.png"
                            alt="Logo et Nom du site : LouMoa"/>

                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page: any) => (
                            <Button
                                key={page.value}
                                onClick={() => {
                                    navigate(page.value)
                                }}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {page.label}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar alt="Photo de profil" src="../Menu/menu-icons/Logo.png"/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '40px'}}
                            id="menu-appbar"
                            anchorEl={anchorEl.User}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl.User)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting: any) => (
                                <MenuItem key={setting.value} onClick={
                                    () => {
                                        if(setting.value === 'logout'){
                                            navigate('/')
                                        }
                                        else if(setting.value === 'profile'){
                                            handleOpenProfil()
                                        }
                                    }
                                }>
                                    <Typography textAlign="center">{setting.label}</Typography>
                                </MenuItem>
                            ))}
                            <Popup open={open} onClose={handleCloseProfile}>
                                <>
                                    <Card width={500} height={'auto'} color={'white'}>
                                        <>
                                            <div className="user-profile">
                                                <img alt="Photo de profil" src="https://media.discordapp.net/attachments/1086366718227664986/1094627837203452014/Logo_LouMoa.png" className="img-profil-user" />
                                                <div className="content-profile">
                                                    <p>Prénom : moi</p>
                                                    <p>Nom : meme</p>
                                                    <p>Adresse Mail : moi.meme@gmail.com</p>
                                                </div>
                                            </div>
                                        </>
                                    </Card>
                                </>
                            </Popup>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Bar;
