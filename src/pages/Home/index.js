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

  handleAddToCart = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  renderList = product => {
    const { amount } = this.props;

    return (
      <Product>
        <ProductImage source={{ uri: product.image }} />
        <Description>{product.title}</Description>
        <Price>{formattedPrice(product.price)}</Price>
        <ButtonContainer onPress={() => {}}>
          <CartAmount>
            <Icon name="add-shopping-cart" color="#fff" size={20} />
            <Amount>{amount[product.id] || 0}</Amount>
          </CartAmount>
          <AddButton>
            <AddButtonText onPress={() => this.handleAddToCart(product.id)}>
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

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
