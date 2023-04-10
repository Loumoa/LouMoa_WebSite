
import './HousingIdPage.css'

//Import Librairie

//Icons
import HotelIcon from '@mui/icons-material/Hotel';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import LocationOnIcon from '@mui/icons-material/LocationOn';

//Import Composants
import Bar from "../../../components/Bar/Bar";
import Card from "../../../components/Card/Card";
import React from "react";

import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers-pro';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import Button from "../../../components/Button/Button";
import {useNavigate} from "react-router-dom";

interface HousingIdProps{
    id :number,
}
const HousingIdPage= ({id}: HousingIdProps) => {
    const navigate = useNavigate();
    const menu = [{value: '/home', label: 'Accueil'}, {value: "/housing", label: 'Locations'}]
    return (

        <>
            <div className='App'>
                <header>
                <Bar pages={menu}
                          settings={[{value: 'profile', label: 'Profil'},{value: 'logout', label: 'Déconnexion'}]} barcolor='rgb(131, 184, 197, 0.65)'
                />
                </header>
            </div>

                <div className ='housing-title'>
                    <h1>Nom du bien</h1>
                    <h3>propriétaire - catégorie</h3>
                </div>
            <div className = 'Housing-content'>
                    <img className={'card-img'}
                         src={'https://media.discordapp.net/attachments/1086366718227664986/1094627837203452014/Logo_LouMoa.png'}
                         alt={'bogoss'}/>
                <div className='housing-infos'>
                <div className='housing-info'>
                    <Card width={500} height={'auto'} color={'rgb(131, 184, 197, 0.65)'}>
                    <>
                        <div className='card-container'>
                            <HotelIcon style={{
                                color: "white",
                                width: 'auto',
                                height: '30px'
                            }}/>
                            <h3>Nb de chambres</h3>
                        </div>
                    </>
                    </Card>
                    <Card width={500} height={'auto'} color={'rgb(131, 184, 197, 0.65)'}>
                        <>
                            <div className='card-container'>
                                <CropSquareIcon style={{
                                    color: "white",
                                    width: 'auto',
                                    height: '30px'
                                }}/>
                                <h3>Surface maison m²</h3>
                            </div>
                        </>
                    </Card>
                    <Card width={500} height={'auto'} color={'rgb(131, 184, 197, 0.65)'}>
                        <>
                            <div className='card-container'>
                                <LocationOnIcon style={{
                                    color: "white",
                                    width: 'auto',
                                    height: '30px'
                                }}/>
                                <h3>adresse</h3>
                            </div>
                        </>
                    </Card>

                </div>
            </div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                        components={[
                            'DateField'

                        ]}
                    >
                <Card width={500} height={'auto'} color={'rgb(131, 184, 197, 0.65)'}>
                    <>
                        <h2>Prix pour une nuit €</h2>
                        <DatePicker label="Arrivée"/>
                        <DatePicker label="Départ"/>
                        <p>Prix final (prix * nb nuit) : XXX€</p>
                        <Button onClick={() => (navigate(`/housing/1`))} backColor={"white"}
                                text={"Réserver"}
                                type={'button'}
                                border={'1px solid pink'}
                                color={"green"} width={50} height={30}/>
                        </>
                </Card>
                    </DemoContainer>
                </LocalizationProvider>
            </div>
        </>
    )
}

export default HousingIdPage
