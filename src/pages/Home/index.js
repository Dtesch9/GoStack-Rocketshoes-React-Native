import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((amountSum, product) => {
      amountSum[product.id] = product.amount;

      return amountSum;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  function handleAddToCart(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  function renderList(product) {
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
            <AddButtonText onPress={() => handleAddToCart(product.id)}>
              adicionar
            </AddButtonText>
          </AddButton>
        </ButtonContainer>
      </Product>
    );
  }

  return (
    <Container>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => renderList(item)}
        horizontal
      />
    </Container>
  );
}
