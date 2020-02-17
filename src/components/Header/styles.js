import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  flex: 1;
  background: #141419;
  padding: 50px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Linked = styled.TouchableOpacity`
  justify-content: center;
  width: 185px;
  height: 24px;
`;

export const LogoImage = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const CartContainer = styled.TouchableOpacity`
  color: white;
  justify-content: flex-end;
  align-items: flex-end;
  max-width: 24px;
  height: 24px;
  flex: 1;
`;

export const Items = styled.Text`
  position: absolute;
  top: -8px;
  right: -8px;

  background: #7159c1;
  width: 18px;
  height: 18px;
  border-radius: 9px;

  text-align: center;
  color: white;
`;
