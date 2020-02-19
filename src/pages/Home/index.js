import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
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

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    this.setState({ products: response.data });
  }

  renderList = products => {
    return (
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
    );
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={products}
          keyExtractor={item => item.id}
          renderItem={({ item }) => this.renderList(item)}
          horizontal
        />
      </Container>
    );
  }
}
