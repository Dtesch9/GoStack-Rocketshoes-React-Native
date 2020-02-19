import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
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

export default class Cart extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    // this.load();
  }

  load = async () => {
    const response = await api.get('products');

    this.setState({ products: response.data });
  };

  renderList = product => {
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
  };

  renderFooter = () => {
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
  };

  renderEmptyCart = () => {
    return (
      <>
        <EmptyCart>
          <Icon name="remove-shopping-cart" color="#99999999" size={100} />
          <EmptyCartText>seu carrinho está vazio</EmptyCartText>
        </EmptyCart>
      </>
    );
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <ProductContainer>
          {products.length ? (
            <List
              data={products}
              keyExtractor={item => item.id}
              renderItem={({ item }) => this.renderList(item)}
              ListFooterComponent={() => this.renderFooter()}
            />
          ) : (
            this.renderEmptyCart()
          )}
        </ProductContainer>
      </Container>
    );
  }
}
