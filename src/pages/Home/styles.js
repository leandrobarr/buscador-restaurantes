import styled from 'styled-components';

import Slider from 'react-slick';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Container = styled.aside`
  background: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    padding: 16px;
`;

export const Logo = styled.img`
    margin-botton: 15px;
    margin-left: 75px;
    width: 160px
`;

export const Map = styled.div`
    background-color: red;
    width: 500px;
`;

export const Caroulsel = styled(Slider)`
    .slick-slide {
        margin-right: 16px;
    }
`;

export const CaroulselTitle = styled.h1`
      font-family: ${(props) => props.theme.fonts.regular};
      color: ${(props) => props.theme.colors.text};
      font-size: 24px;
      font-weight: bold;
      line-height: 29px;
      margin: 16px 0;
`;
