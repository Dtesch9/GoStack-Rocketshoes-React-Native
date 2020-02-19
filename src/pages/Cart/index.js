import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formattedPrice } from '../../util/format';
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

function Cart({ cart = [] }) {
  function renderList(product) {
    return (
      <>
        <Product>
          <ProductImage source={{ uri: product.image }} />
          <Description>
            <Title>{product.title}</Title>
            <Price>{formattedPrice(product.price)}</Price>
          </Description>
          <DelButton>
            <Icon name="delete-forever" color={colors.rocketseat} size={30} />
          </DelButton>
        </Product>

        <AmountContainer>
          <ControlBox>
            <QuantityButton onPress={() => {}}>
              <Icon
                name="remove-circle-outline"
                color={colors.rocketseat}
                size={20}
              />
            </QuantityButton>

            <AmountText value={String(3)} />

            <QuantityButton onPress={() => {}}>
              <Icon
                name="add-circle-outline"
                color={colors.rocketseat}
                size={20}
              />
            </QuantityButton>
          </ControlBox>
          <SinglePrice value={String(formattedPrice(product.price))} />
        </AmountContainer>
      </>
    );
  }

  function renderFooter() {
    return (
      <>
        <Total>
          <TotalText>total</TotalText>
          <TotalPrice value={String(formattedPrice(1619, 12))} />
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
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
