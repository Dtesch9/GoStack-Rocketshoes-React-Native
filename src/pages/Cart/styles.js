import styled from 'styled-components/native';

export const Container = styled.View`
  background: #191920;
  font-family: sans-serif;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;

// Product Box
export const ProductContainer = styled.View`
  margin-top: 10px;
  background-color: white;
  min-height: 358px;
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
  margin-right: 10px;
`;

// Description Box
export const Description = styled.View`
  flex-direction: column;
  flex: 1;
`;

export const Title = styled.Text`
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

export const DelButton = styled.TouchableOpacity``;

// Amount box
export const AmountContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  margin-top: 10px;
  background: #eeeeee;
  border-radius: 4px;
  padding: 6px;
  width: 100%;
  max-height: 50px;
`;

export const ControlBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const QuantityButton = styled.TouchableOpacity`
  margin: 0 5px 0 5px;
`;

export const AmountText = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  border-width: 1px;
  border-color: #dddddd;
  border-radius: 6px;

  font-size: 18px;
  padding: 2px 18px;
  text-align: center;
  color: black;
`;

export const SinglePrice = styled.TextInput.attrs({
  readonly: true,
})`
  padding: 1px 0 0 0;
  font-weight: bold;
  font-size: 18px;
`;

// Footer Button
export const ButtonContainer = styled.TouchableOpacity`
  margin-top: auto;
  flex-direction: row;
  background: #7159c1;
  width: 100%;
  height: 48px;
  align-items: center;
  border-radius: 4px;
`;

export const AddButton = styled.View`
  flex: 1;
`;

export const AddButtonText = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: #fff;
  text-align: center;
`;
