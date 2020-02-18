import styled from 'styled-components/native';

export const Container = styled.View`
  background: #191920;
  flex: 1;
  padding: 20px;
`;

export const Product = styled.View`
  margin-top: 10px;
  background-color: white;
  width: 230px;
  height: 360px;
  border-radius: 6px;
  padding: 20px;
  align-items: flex-start;
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
  margin-top: 10px;
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
  color: #000000;
`;

// export const ButtonContainer = styled.TouchableOpacity`
//   margin-top: auto;
//   flex-direction: row;
//   width: 200px;
//   height: 42px;
//   padding: 12px;
// `;
// export const CartAmount = styled.View`
//   flex-direction: row;
// `;
// export const Amount = styled.text`
//   color: '#fff';
// `;
// export const AddButtonText = styled.Text`
//   flex: 1;
//   text-transform: uppercase;
//   font-weight: bold;
// `;
