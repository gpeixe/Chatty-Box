import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';
import React, {useState} from 'react';

import * as Styled from './styles';

import {SelectPhoto} from '@assets/icons/SelectPhoto';
import {Button} from '@components/common/Button';
import {Input} from '@components/common/Input';
import {ImageContainer} from '@components/common/ImageContainer';

export const Profile: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState<ImageOrVideo>(
    {} as ImageOrVideo,
  );
  return (
    <Styled.Container>
      <Styled.Title>Informações de perfil</Styled.Title>
      <Styled.Description>
        Insira aqui informações do seu perfil que aparecerá para os outros
        usuários
      </Styled.Description>
      <Styled.Circle
        onPress={async () => {
          const image = await ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
          });
          setProfilePicture(image);
        }}>
        {profilePicture.path ? (
          <ImageContainer
            source={profilePicture.path}
            width={198}
            height={198}
            borderRadius="99px"
          />
        ) : (
          <SelectPhoto />
        )}
      </Styled.Circle>
      <Styled.UserNameContainer>
        <Styled.Label>Nome de usuário</Styled.Label>
        <Input
          placeholder="Seu nome"
          width="100%"
          height="42px"
          borderRadius="5px"
          paddingBottom="15px"
          paddingLeft="15px"
          paddingTop="8px"
        />
      </Styled.UserNameContainer>
      <Styled.UserDescriptionContainer>
        <Styled.Label>Descrição</Styled.Label>
        <Input
          placeholder="Descrição"
          width="100%"
          height="100px"
          multiline={true}
          paddingTop="8px"
          borderRadius="5px"
          paddingLeft="15px"
        />
      </Styled.UserDescriptionContainer>
      <Button
        marginTop="42px"
        text="Confirmar"
        width="100%"
        borderRadius="5px"
        marginBottom="32px"
        height="43px"
      />
    </Styled.Container>
  );
};
