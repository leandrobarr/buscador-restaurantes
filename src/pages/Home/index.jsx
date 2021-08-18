import React, {useState} from "react";
import { useSelector } from 'react-redux';
//import Slider from "react-slick";

import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';


import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map } from '../../components';

import { Container, Caroulsel, Search, Logo, Wrapper, CaroulselTitle } from './styles';

const Home = () => {
    const [inputValue, setInputValue] = useState ('');
    const [query, setQuery] = useState(null);
    const [modalOpened, setModalOpened] = useState (true);
    const { restaurants } = useSelector((state) => state.restaurants);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };

    function handleKeyPress (e) {
        if (e.key === 'Enter') {
            setQuery(inputValue);
        }
    }

    return (
    <Wrapper>
        <Container>
            <Search>
                <Logo src={logo} alt = 'Logo do restaurante' />
                <TextField
                    label='Pesquisar'
                        outlined
                    trailingIcon={<MaterialIcon role="button" icon = "search" />}>
                    <Input value = {inputValue} 
                    onKeyPress = {handleKeyPress} 
                    onChange = {(e) => setInputValue(e.target.value)} />
                </TextField>
                <CaroulselTitle>Na sua Área</CaroulselTitle>
                <Caroulsel {...settings}>
                    {restaurants.map((restaurant) => (
                    <Card 
                    key = { restaurant.place_id } 
                    photo = { restaurant.photos ? restaurant.photos[0].getUrl() : restaurante } 
                    title = { restaurant.name } 
                    />
                    ))}
                </Caroulsel>
              </Search>
              {restaurants.map((restaurant) => (
              <RestaurantCard restaurant = {restaurant} />
              ))}
            </Container>
            <Map query={query} />
        {/* <Modal open = { modalOpened } onClose = {() =>
        setModalOpened(!modalOpened)} />*/}
    </Wrapper>
    );
};

export default Home;