//Import React


//Import Librairie

//Icons
import HotelIcon from '@mui/icons-material/Hotel';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import LocationOnIcon from '@mui/icons-material/LocationOn';

//Import Composants

import Bar from "../../../components/Bar/Bar";
import Card from "../../../components/Card/Card";

interface HousingIdProps{
    id :number,
}
const HousingIdPage= ({id}: HousingIdProps) => {
    const menu = [{value: '/home', label: 'Accueil'}, {value: "/housing", label: 'Locations'}]
    return (

        <>
            <div className='App'>
                <Bar pages={menu}
                          settings={[{value: 'profile', label: 'Profil'},{value: 'logout', label: 'Déconnexion'}]} barcolor='rgb(131, 184, 197, 0.65)'
                />
            </div>
            <div className = 'Housing-content'>
                <div className ='housing-title'>
                    <h1>Nom du bien</h1>
                    <h3>propriétaire - catégorie</h3>
                </div>
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
        </>
    )
}

export default HousingIdPage
