import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formattedPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';
import colors from '../../styles/colors';

import {
  Container,
  ProductContainer,
  List,
  Product,
  ProductImage,
  Description,
  Title,
  Price,
  DelButton,
  AmountContainer,
  ControlBox,
  SinglePrice,
  QuantityButton,
  AmountText,
  Total,
  TotalText,
  TotalPrice,
  ButtonContainer,
  AddButton,
  AddButtonText,
  EmptyCart,
  EmptyCartText,
} from './styles';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formattedPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formattedPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function addCartAmount(id, amount) {
    dispatch(CartActions.updateAmountRequest(id, amount + 1));
  }

  function removeCartAmount(id, amount) {
    dispatch(CartActions.updateAmountRequest(id, amount - 1));
  }

  function renderList(product) {
    return (
      <>
        <Product>
          <ProductImage source={{ uri: product.image }} />
          <Description>
            <Title>{product.title}</Title>
            <Price>{product.formattedPrice}</Price>
          </Description>
          <DelButton
            onPress={() => dispatch(CartActions.RemoveFromCart(product.id))}
          >
            <Icon name="delete-forever" color={colors.rocketseat} size={30} />
          </DelButton>
        </Product>

        <AmountContainer>
          <ControlBox>
            <QuantityButton
              onPress={() => removeCartAmount(product.id, product.amount)}
            >
              <Icon
                name="remove-circle-outline"
                color={colors.rocketseat}
                size={20}
              />
            </QuantityButton>

            <AmountText value={String(product.amount)} />

            <QuantityButton
              onPress={() => addCartAmount(product.id, product.amount)}
            >
              <Icon
                name="add-circle-outline"
                color={colors.rocketseat}
                size={20}
              />
            </QuantityButton>
          </ControlBox>
          <SinglePrice value={String(product.subtotal)} />
        </AmountContainer>
      </>
    );
  }

  function renderFooter() {
    return (
      <>
        <Total>
          <TotalText>total</TotalText>
          <TotalPrice value={String(total)} />
        </Total>

        <ButtonContainer onPress={() => {}}>
          <AddButton>
            <AddButtonText>finalizar pedido</AddButtonText>
          </AddButton>
        </ButtonContainer>
      </>
    );
  }

  function renderEmptyCart() {
    return (
      <>
        <EmptyCart>
          <Icon name="remove-shopping-cart" color="#99999999" size={100} />
          <EmptyCartText>seu carrinho está vazio</EmptyCartText>
        </EmptyCart>
      </>
    );
  }

  return (
    <Container>
      <ProductContainer>
        {cart.length ? (
          <List
            data={cart}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => renderList(item)}
            ListFooterComponent={() => renderFooter()}
          />
        ) : (
          renderEmptyCart()
        )}
      </ProductContainer>
    </Container>
  );
}
