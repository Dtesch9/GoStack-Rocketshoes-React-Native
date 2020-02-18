import styled from 'styled-components/native';

export const Container = styled.View`
  background: #191920;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;

export const Product = styled.View`
  margin-top: 10px;
  background-color: white;
  width: 220px;
  height: 358px;
  border-radius: 6px;
  padding: 10px;
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

export const ButtonContainer = styled.TouchableOpacity`
  margin-top: auto;
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
  background: red;
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
