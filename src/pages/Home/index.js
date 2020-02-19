import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
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

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    this.setState({ products: response.data });
  }

  handleAddToCart = product => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  renderList = product => {
    return (
      <Product>
        <ProductImage source={{ uri: product.image }} />
        <Description>{product.title}</Description>
        <Price>{formattedPrice(product.price)}</Price>
        <ButtonContainer onPress={() => {}}>
          <CartAmount>
            <Icon name="add-shopping-cart" color="#fff" size={20} />
            <Amount>{0}</Amount>
          </CartAmount>
          <AddButton>
            <AddButtonText onPress={() => this.handleAddToCart(product)}>
              adicionar
            </AddButtonText>
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
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => this.renderList(item)}
          horizontal
        />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);
