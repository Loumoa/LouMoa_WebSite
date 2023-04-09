import './AllHousingPage.css'
//Import React
import React, {useState} from 'react'

//Import Librairie
import {useNavigate} from 'react-router-dom'
import Style from "styled-components"

//Import Composants
import Card from '../../../components/Card/Card'
import Button from '../../../components/Button/Button'
import Bar from '../../../components/Bar/Bar'
import Popup from "../../../components/Popup/Popup"
import Input from "../../../components/Input/Input"

const AllHousingPage = () => {
    const [inputs, setInputs] = useState<any>({})

    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(inputs)
        setInputs((values: any) => ({...values, [name]: value}))
    }

    const [open, setOpen] = React.useState(false);
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const menu = [{value: '/home', label: 'Accueil'}, {value: "/housing", label: 'Locations'}, {value: "/housing", label: 'bouffe tesmorts'} ]
    return (
<>
            <div className='App'>
                <header>
                    <Bar pages={menu}
                         settings={[{value: 'profile', label: 'Profil'},{value: 'logout', label: 'Déconnexion'}]} barcolor='#C7CFD9'/>
                </header>
            </div>
    <div className='content'>
        <div className={"btn-add-customer"}>
            <Button text={"Ajouter un bien"} backColor={"pink"} color={"white"} height={"auto"} width={"auto"}
                    onClick={handleClickOpen}></Button>
            <Popup open={open} onClose={handleClose}>
                <>
                    <Card width={500} height={'auto'} color={'white'}>
                        <>
                            <div className={"add-client-form"}>
                                <img
                                    src={(inputs?.link && inputs?.link !== '') ? inputs.link : "https://cdn.discordapp.com/attachments/986278437293527110/993425468487372881/avatars-000608309259-m1s4qg-t240x240.jpg"}
                                    alt={'bogoss'} className={"img-profil-customer"}/>
                                <div className={"content-form"}>

                                    <form>

                                        <div className={'form-input-text'}>
                                            <div className={'form-input'}>
                                                <Input name={"firstname"} label={"Nom"} type={"text"}
                                                       onChange={handleChange} children={<></>} />
                                            </div>
                                            <div className={'form-input-text'}>
                                                <Input name={"lastname"} label={"Prenom"} type={"text"}
                                                       onChange={handleChange} children={<></>}
                                                />
                                            </div>
                                            <div className={'form-input-text'}>
                                                <Input name={"enterprise"} label={"Entreprise"}
                                                       type={"text"} onChange={handleChange} children={<></>}
                                                />
                                            </div>
                                            <div className={'form-input-text'}>
                                                <Input name={"email"} label={"Email"}
                                                       type={"text"} onChange={handleChange} children={<></>}
                                                />
                                            </div>
                                            <div className={'form-input-text'}>
                                                <Input name={"phone"} label={"Telephone"}
                                                       type={"text"} onChange={handleChange} children={<></>}
                                                />
                                            </div>
                                            <div className={'form-input-text'}>
                                                <Input name={"link"} label={"Lien profil"}
                                                       type={"text"} onChange={handleChange} children={<></>}
                                                />
                                            </div>

                                        </div>

                                    </form>
                                </div>
                                <div className={'form-input-button'}>
                                    <div className={'form-add-button'}>
                                        <Button onClick={handleSubmit} backColor={"pink"}
                                                text={"Ajouter"}
                                                type={'submit'}
                                                width={50} height={30}/>
                                    </div>
                                    <div className={'form-cancel-button'}>
                                        <Button onClick={handleClose} backColor={"white"}
                                                text={"Annuler"}
                                                type={'button'}
                                                border={'1px solid pink'}
                                                color={"pink"} width={50} height={30}/>
                                    </div>
                                </div>
                            </div>
                        </>
                    </Card>
                </>
            </Popup>
        </div>
    <PageContainer>
        <h1 className={'housing-category'}>
            Maisons
        </h1>
        <div className={'cards'}>

                <Card width={300} height={'auto'} color={'rgb(131, 184, 197, 0.65)'}
                      key={null}>
                    <div className={'card-container'}>
                        <img className={'card-img'}
                             src={'https://media.discordapp.net/attachments/1086366718227664986/1094627837203452014/Logo_LouMoa.png'}
                             alt={'bogoss'}/>
                        <div className={'card-content'}>
                            <h3 className={'card-title'}>Maison de Mickey</h3>
                            <p className={'card-description'}>
                                {` 8 pièces • 4 garages • 1000m²`}
                            </p>
                            <p className={'card-city'}>MickeyLand</p>
                            <div className={'card-bottom'}>
                                <h3 className={'card-price'}>{`40€`}</h3>
                                <div>
                                    <Button
                                        text={"Plus d'infos"}
                                        backColor={'rgba(218, 194, 129, 0.75)'}
                                        onClick={() => (navigate(`/housing`))}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            <Card width={300} height={'auto'} color={'rgb(131, 184, 197, 0.65)'}
                  key={null}>
                <div className={'card-container'}>
                    <img className={'card-img'}
                         src={'https://media.discordapp.net/attachments/1086366718227664986/1094627837203452014/Logo_LouMoa.png'}
                         alt={'bogoss'}/>
                    <div className={'card-content'}>
                        <h3 className={'card-title'}>Maison de Mickey</h3>
                        <p className={'card-description'}>
                            {` 8 pièces • 4 garages • 1000m²`}
                        </p>
                        <p className={'card-city'}>MickeyLand</p>
                        <div className={'card-bottom'}>
                            <h3 className={'card-price'}>{`40€`}</h3>
                            <div>
                                <Button
                                    text={"Plus d'infos"}
                                    backColor={'rgba(218, 194, 129, 0.75)'}
                                    onClick={() => (navigate(`/housing`))}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
            <Card width={300} height={'auto'} color={'rgb(131, 184, 197, 0.65)'}
                  key={null}>
                <div className={'card-container'}>
                    <img className={'card-img'}
                         src={'https://media.discordapp.net/attachments/1086366718227664986/1094627837203452014/Logo_LouMoa.png'}
                         alt={'bogoss'}/>
                    <div className={'card-content'}>
                        <h3 className={'card-title'}>Maison de Mickey</h3>
                        <p className={'card-description'}>
                            {` 8 pièces • 4 garages • 1000m²`}
                        </p>
                        <p className={'card-city'}>MickeyLand</p>
                        <div className={'card-bottom'}>
                            <h3 className={'card-price'}>{`40€`}</h3>
                            <div>
                                <Button
                                    text={"Plus d'infos"}
                                    backColor={'rgba(218, 194, 129, 0.75)'}
                                    onClick={() => (navigate(`/housing`))}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
            <Card width={300} height={'auto'} color={'rgb(131, 184, 197, 0.65)'}
                  key={null}>
                <div className={'card-container'}>
                    <img className={'card-img'}
                         src={'https://media.discordapp.net/attachments/1086366718227664986/1094627837203452014/Logo_LouMoa.png'}
                         alt={'bogoss'}/>
                    <div className={'card-content'}>
                        <h3 className={'card-title'}>Maison de Mickey</h3>
                        <p className={'card-description'}>
                            {` 8 pièces • 4 garages • 1000m²`}
                        </p>
                        <p className={'card-city'}>MickeyLand</p>
                        <div className={'card-bottom'}>
                            <h3 className={'card-price'}>{`40€`}</h3>
                            <div>
                                <Button
                                    text={"Plus d'infos"}
                                    backColor={'rgba(218, 194, 129, 0.75)'}
                                    onClick={() => (navigate(`/housing`))}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
            <Card width={300} height={'auto'} color={'rgb(131, 184, 197, 0.65)'}
                  key={null}>
                <div className={'card-container'}>
                    <img className={'card-img'}
                         src={'https://media.discordapp.net/attachments/1086366718227664986/1094627837203452014/Logo_LouMoa.png'}
                         alt={'bogoss'}/>
                    <div className={'card-content'}>
                        <h3 className={'card-title'}>Maison de Mickey</h3>
                        <p className={'card-description'}>
                            {` 8 pièces • 4 garages • 1000m²`}
                        </p>
                        <p className={'card-city'}>MickeyLand</p>
                        <div className={'card-bottom'}>
                            <h3 className={'card-price'}>{`40€`}</h3>
                            <div>
                                <Button
                                    text={"Plus d'infos"}
                                    backColor={'rgba(218, 194, 129, 0.75)'}
                                    onClick={() => (navigate(`/housing`))}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    </PageContainer>
    </div>
</>
    )
}
const PageContainer = Style.div`
    margin-left: 230px;
`;
export default AllHousingPage