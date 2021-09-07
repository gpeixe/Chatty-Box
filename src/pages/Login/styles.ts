import styled from 'styled-components/native';
import {colors} from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.backgroundPrimary};
  justify-content: center;
  align-items: center;
  font-family: monospace;
`;

export const NumberContainer = styled.View`
  display: flex;
  margin-left: 49px;
  margin-right: 49px;
`;

export const SendAgainText = styled.Text`
  color: ${colors.colorPrimaryLight};
  align-self: flex-start;
  font-size: 12px;
  font-weight: 700;
  margin-top: 10px;
`;

export const Description = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 17px;

  line-height: 21px;
  text-align: center;

  margin-bottom: 42px;

  color: #ffffff;

  width: 269px;
  height: 67px;
`;

export const InputTitle = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  margin-bottom: 5px;

  line-height: 16px;

  color: #ffffff;
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;

  margin-left: 132px;
  margin-right: 132px;
  margin-bottom: 8px;
  margin-top: 24px;

  line-height: 42px;

  color: #ffffff;
`;
