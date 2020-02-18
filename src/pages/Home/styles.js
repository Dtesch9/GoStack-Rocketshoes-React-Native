import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  background: #191920;
  flex: 1;
  padding: 20px;
`;

export const Product = styled.View`
  margin-top: 10px;
  background-color: white;
  width: 220px;
  border-radius: 6px;
  padding: 10px;
  align-items: flex-start;
  margin-right: 10px;
  max-height: 400px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Description = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  font-weight: normal;
  line-height: 21px;
  color: #333333;
`;

export const Price = styled.Text`
  margin-top: auto;
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
  color: #000000;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  margin-top: 20px;
  flex-direction: row;
  background: #7159c1;
  width: 100%;
  height: 42px;
  align-items: center;
  border-radius: 4px;
`;

export const CartAmount = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50px;
  height: 100%;
  padding: 0 6px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background: ${darken(0.05)('#7159c1')};
`;

export const Amount = styled.Text`
  color: #fff;
`;

export const AddButton = styled.View`
  flex: 1;
`;

export const AddButtonText = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;
