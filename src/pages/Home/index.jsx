import React, {useState} from "react";
import Slider from "react-slick";

import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';


import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card } from '../../components';

import { Container, Caroulsel, Search, Logo, Wrapper, Map, CaroulselTitle } from './styles';

const Home = () => {
    const [inputValue, setInputValue] = useState ('');

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };

    return (
    <Wrapper>
        <Container>
            <Search>
                <Logo src={logo} alt = 'Logo do restaurante' />
                <TextField
                    label='Pesquisar'
                        outlined
                    trailingIcon={<MaterialIcon role="button" icon = "search" />}>
                    <Input value = {inputValue} onChange = {(e) => setInputValue(e.target.value)} />
                </TextField>
                <CaroulselTitle>Na sua Área</CaroulselTitle>
                <Caroulsel {...settings}>
                    <Card photo = { restaurante } title = " Nome sei lá " />
                    <Card photo = { restaurante } title = " Nome sei lá " />
                    <Card photo = { restaurante } title = " Nome sei lá " />
                    <Card photo = { restaurante } title = " Nome sei lá " />
                    <Card photo = { restaurante } title = " Nome sei lá " />
                    <Card photo = { restaurante } title = " Nome sei lá " />
                    <Card photo = { restaurante } title = " Nome sei lá " />
                    
                </Caroulsel>
            </Search>
        </Container>
        <Map />
    </Wrapper>
    );
};

export default Home;