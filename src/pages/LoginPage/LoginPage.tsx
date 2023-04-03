//style
import "./LoginPage.css"

//components
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import {IconButton} from "@mui/material";
import React from "react";
// icones
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
const LoginPage = () => {
        const [showPassword, setShowPassword] = React.useState(false);
        const handleClickShowPassword = () => setShowPassword((show) => !show);

        const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
        };

        return (
            <div className="login-page">
                <div className={"login-content"}>

                    <div className={'form_login'}>
                        <h2 className={"form-title"}>Bienvenue sur Loumoa</h2>
                        <p>Veuillez saisir vos informations</p>
                        <div className={"form-inputs"}>
                            <div className={'form-input-text'}>
                                <Input label={"Email"} type={"text"} position={"end"} children={<IconButton>
                                    <EmailIcon/>
                                </IconButton>} />
                            </div>
                            <div className={'form-input-text'}>
                                <Input label={"Mot de passe"} type={"password"} position={"end"} children={<IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                       onMouseDown={handleMouseDownPassword}
                                       edge="end"
                                >
                                    {showPassword ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>}/>
                            </div>
                            <div className={'form-input-text'}>
                                <p className={'pass-text'}>Mot de passe oublié ?</p>
                            </div>
                            <div className={'form-input-button'}>
                                <Button backColor={"#51818C"} text={"Continuer"}/>
                            </div>
                        </div>
                    </div>
                    <div className={'welcome-content'}>
                        <img src={'./assets/images/login_img.png'} className={'image-login'} alt={'login'}/>
                    </div>
                </div>
            </div>
        )
    }

export default LoginPage