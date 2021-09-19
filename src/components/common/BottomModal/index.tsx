// Bibliotecas Externas
import React from 'react';
import {
  ImageProps,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// Estilização
import * as Styled from './styles';
import {Text} from '../Button/styles';

interface FlowModalProps {
  isModalActive: boolean;
  headerImage?: string | ImageProps;
  handleClickOutsideModal?: () => void;
  handleSwipeComplete?: () => void;
  handleOnModalHide?: () => void;
  children?: any;
}

const BottomModal: React.FC<FlowModalProps> = ({
  isModalActive,
  handleClickOutsideModal,
  handleSwipeComplete,
  handleOnModalHide,
  children,
}) => {
  const insets = useSafeAreaInsets();
  return (
    <Styled.ModalComponent
      onBackButtonPress={() =>
        handleClickOutsideModal && handleClickOutsideModal()
      }
      onSwipeComplete={() => handleSwipeComplete && handleSwipeComplete()}
      onModalHide={() => handleOnModalHide && handleOnModalHide()}
      swipeDirection={['down']}
      backdropOpacity={0.4}
      backdropColor={'black'}
      isVisible={isModalActive}
      hideModalContentWhileAnimating={true}
      backdropTransitionOutTiming={0}
      propagateSwipe={true}
      statusBarTranslucent
      animationInTiming={600}
      animationOutTiming={600}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}>
        <ScrollView keyboardShouldPersistTaps="always" scrollEnabled={false}>
          <Styled.Container paddingBottom={insets.bottom}>
            <Styled.ModalHeader>
              <Styled.ModalPath />
            </Styled.ModalHeader>
            {children ? children : <Text />}
          </Styled.Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </Styled.ModalComponent>
  );
};

export default BottomModal;
