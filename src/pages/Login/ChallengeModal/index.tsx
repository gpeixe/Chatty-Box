import React from 'react';
import * as Styled from './styles';
import {Button} from '@components/common/Button';
import {Input} from '@components/common/Input';
import BottomModal from '@components/common/BottomModal';
import {colors} from '../../../styles/colors';
import {useNavigation} from '@react-navigation/native';
import {pages} from '../../../routes/SignInStack';

export interface Props {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export const ChallengeModal: React.FC<Props> = ({showModal, setShowModal}) => {
  const navigation = useNavigation();
  const handleConfirmPress = () => {
    navigation.navigate(pages.profile as never);
    setShowModal(false);
  };

  return (
    <BottomModal
      handleSwipeComplete={() => setShowModal(false)}
      isModalActive={showModal}>
      <Styled.ChallengeContent>
        <Styled.ChallengeTitle>Insira o código enviado</Styled.ChallengeTitle>
        <Input
          width="100%"
          height="43px"
          paddingLeft="14px"
          placeholder="Código (xxxxxx)"
          marginBottom="24px"
        />
        <Button
          text="Confirmar"
          width="100%"
          borderRadius="5px"
          marginBottom="18px"
          height="43px"
          onPress={handleConfirmPress}
        />
        <Button
          text="Enviar novamente"
          color={colors.colorPrimaryLight}
          width="100%"
          borderRadius="5px"
          height="43px"
        />
      </Styled.ChallengeContent>
    </BottomModal>
  );
};
