import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formattedPrice } from '../../util/format';

import {
  Container,
  Product,
  ProductImage,
  Description,
  Price,
  ButtonContainer,
  CartAmount,
  Amount,
  AddButton,
  AddButtonText,
} from './styles';
import api from '../../services/api';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    this.setState({ products: response.data[0] });
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <Product>
          <ProductImage source={{ uri: products.image }} />
          <Description>{products.title}</Description>
          <Price>{formattedPrice(products.price)}</Price>
          <ButtonContainer onPress={() => {}}>
            <CartAmount>
              <Icon name="add-shopping-cart" color="#fff" size={20} />
              <Amount>{0}</Amount>
            </CartAmount>
            <AddButton>
              <AddButtonText>adicionar</AddButtonText>
            </AddButton>
          </ButtonContainer>
        </Product>
      </Container>
    );
  }
}
