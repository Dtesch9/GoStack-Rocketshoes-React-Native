import React, { Component } from 'react';

import { formattedPrice } from '../../util/format';
import api from '../../services/api';

import {
  Container,
  ProductContainer,
  Product,
  ProductImage,
  Description,
  Title,
  Price,
  ButtonContainer,
  AddButton,
  AddButtonText,
} from './styles';

export default class Cart extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.load();
  }

  load = async () => {
    const response = await api.get('products');

    this.setState({ products: response.data[0] });
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <ProductContainer>
          <Product>
            <ProductImage source={{ uri: products.image }} />
            <Description>
              <Title>{products.title}</Title>
              <Price>{formattedPrice(products.price)}</Price>
            </Description>
          </Product>

          <ButtonContainer onPress={() => {}}>
            <AddButton>
              <AddButtonText>finalizar pedido</AddButtonText>
            </AddButton>
          </ButtonContainer>
        </ProductContainer>
      </Container>
    );
  }
}
