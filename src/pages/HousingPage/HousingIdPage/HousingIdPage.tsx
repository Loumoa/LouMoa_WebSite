//Import React


//Import Librairie



//Import Composants

import Bar from "../../../components/Bar/Bar";

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
            <div><h1>MAISON SOLO</h1></div>
        </>
    )
}

export default HousingIdPage
