import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import { formattedPrice } from '../../util/format';
import colors from '../../styles/colors';

import {
  Container,
  ProductContainer,
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
            <SinglePrice value={String(formattedPrice(products.price))} />
          </AmountContainer>

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
