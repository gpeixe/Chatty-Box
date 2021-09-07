import {colors} from '../../styles/colors';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.backgroundPrimary};
  align-items: center;
  font-family: monospace;
  padding-left: 22px;
  padding-right: 22px;
`;

export const Title = styled.Text`
  color: #ffffff;
  position: relative;
  font-weight: bold;
  margin-top: 85px;
  font-size: 32px;
  line-height: 42px;
`;

export const Description = styled.Text`
  font-size: 16px;
  margin-top: 16px;
  color: #ffffff;
  margin-left: 80;
  margin-right: 80;
  text-align: center;
  width: 240px;
  height: 64px;
`;

export const Circle = styled.TouchableOpacity`
  background-color: ${colors.backgroundSecondary};
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 198px;
  border-radius: 99px;
  height: 198px;
  margin-bottom: 28px;
`;

export const UserNameContainer = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  margin-bottom: 6px;

  color: #ffffff;
`;

export const UserDescriptionContainer = styled.View`
  margin-top: 12px;
  width: 100%;
`;
