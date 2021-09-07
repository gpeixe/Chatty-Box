import React from 'react';
import * as Styled from './styles';
import {Input} from '@components/common/Input';
import {Button} from '@components/common/Button';
import {Logo} from '@assets/icons/Logo';

export const Login: React.FC = () => {
  return (
    <Styled.Container>
      <Logo />
      <Styled.Title>Entrar</Styled.Title>
      <Styled.Description>
        Nos informe seu número de celular e enviaremos um código de confirmação
        para seu celular.
      </Styled.Description>
      <Styled.NumberContainer>
        <Styled.InputTitle>Número celular</Styled.InputTitle>
        <Input
          placeholder="(xx) xxxxx-xxxx"
          width="316px"
          height="42px"
          borderRadius="5px"
          paddingBottom="15px"
          paddingLeft="15px"
          paddingRight="15px"
          paddingTop="15px"
        />
        <Styled.SendAgainText>
          Não recebeu? Enviar novamente!
        </Styled.SendAgainText>
      </Styled.NumberContainer>

      <Button
        marginTop="42px"
        text="Enviar"
        width="316px"
        marginLeft="49px"
        marginRight="49px"
        borderRadius="5px"
        marginBottom="32px"
        height="43px"
      />
    </Styled.Container>
  );
};
