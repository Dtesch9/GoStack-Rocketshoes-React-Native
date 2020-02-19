import React from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, LogoImage, Linked, CartContainer, Items } from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Container>
      <Linked onPress={() => navigation.navigate('Home')}>
        <LogoImage />
      </Linked>

      <CartContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={24} color="#fff" />
        <Items>{cartSize || 0}</Items>
      </CartContainer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
