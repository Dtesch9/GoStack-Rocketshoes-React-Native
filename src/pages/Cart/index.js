import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

function Cart({ cart = [], total, RemoveFromCart, UpdateAmount }) {
  function addCartAmount(id, amount) {
    UpdateAmount(id, amount + 1);
  }

  function removeCartAmount(id, amount) {
    UpdateAmount(id, amount - 1);
  }

  function renderList(product) {
    return (
      <>
        <Product>
          <ProductImage source={{ uri: product.image }} />
          <Description>
            <Title>{product.title}</Title>
            <Price>{formattedPrice(product.price)}</Price>
          </Description>
          <DelButton onPress={() => RemoveFromCart(product.id)}>
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

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formattedPrice(product.price * product.amount),
  })),
  total: formattedPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
