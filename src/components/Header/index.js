import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, LogoImage, Linked, CartContainer, Items } from './styles';

export default function Header({ navigation }) {
  return (
    <Container>
      <Linked onPress={() => navigation.navigate('Home')}>
        <LogoImage />
      </Linked>

      <CartContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={24} color="#fff" />
        <Items>{3}</Items>
      </CartContainer>
    </Container>
  );
}
