import styled from 'styled-components/native';

export const Container = styled.View`
  background: #191920;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;

export const ProductContainer = styled.View`
  margin-top: 10px;
  background-color: white;
  flex: 1;
  max-height: 358px;
  border-radius: 6px;
  padding: 10px;
  align-items: flex-start;
`;

export const Product = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const Description = styled.View`
  flex-direction: column;
  flex: 1;
`;

export const Title = styled.Text`
  /* flex: 1; */
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

export const AddButton = styled.View`
  flex: 1;
`;

export const AddButtonText = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;
