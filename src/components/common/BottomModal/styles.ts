import styled, {css} from 'styled-components/native';
import Modal from 'react-native-modal';
import {colors} from '../../../styles/colors';

interface ContainerProps {
  paddingBottom: number;
}

interface ModalHeaderprops {
  height?: number;
}

export const ModalComponent = styled(Modal as any)`
  justify-content: flex-end;
  margin: 0;
`;

export const Container = styled.View<ContainerProps>`
  background-color: ${colors.backgroundPrimary};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  overflow: hidden;

  padding-bottom: ${props => props.paddingBottom || 0}px;

  min-height: 300px;
`;

export const ModalHeader = styled.View<ModalHeaderprops>`
  padding-left: 19px;
  padding-right: 19px;

  margin-bottom: 8px;

  ${props =>
    props.height &&
    css`
      height: ${props.height}px;
    `}
`;

export const HeaderImageContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const ModalPath = styled.View`
  margin-top: 12px;

  width: 120px;
  height: 8px;

  border-radius: 30px;

  align-self: center;

  background-color: ${colors.backgroundSecondary};
`;

export const BodyWrapper = styled.View`
  padding-left: 28px;
  padding-right: 28px;
`;
