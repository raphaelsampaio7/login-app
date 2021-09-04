import React, { useState } from 'react';
import { Alert, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconFeather from 'react-native-vector-icons/Feather';
import * as Yup from 'yup';

import Header from '../../components/Header';
import Button from '../../components/Button';
import api from '../../services/api';

import { Container, Title, Description, TextButtonForgotPassword } from './styles';

const ForgotPassword: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handleSendForgotPassword = async () => {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email('Digite um e-mail válido')
        .required('E-mail obrigatório'),
    });

    const isValid = await schema.isValid({ email });

    if (!isValid) {
      Alert.alert('E-mail inválido.', 'Digite um e-mail válido.');
      return;
    }

    await api.post('/password/forgot', { email });
  }

  return (
    <>
      <Header
        style={{ height: 50, backgroundColor: '#312e38' }}

        rightComponents={[
          <IconFeather
            key='x'
            name='x'
            size={30}
            style={{ marginRight: 10, marginLeft: 10, color: '#fff' }}
            onPress={() => navigation.goBack()}
          />
        ]}
      />

      <Container>
        <View style={{ alignItems: 'center' }}>
          <Title>Esqueceu sua senha?</Title>
          <Description>
            Insira o seu endereço de e-mail abaixo e enviaremos instruções
            para definir uma nova.
          </Description>

          <TextInput
            style={{
              height: 40,
              width: 350,
              margin: 12,
              borderWidth: 1,
              padding: 10,
            }}
            onChangeText={(value) => { setEmail(value) }}
            value={email}
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
          />

          <Button
            style={{
              height: 40,
              borderRadius: 0,
              alignSelf: 'auto',
              width: 350
            }}
            onPress={() => handleSendForgotPassword()}
          >
            <TextButtonForgotPassword>
              Enviar
            </TextButtonForgotPassword>
          </Button>
        </View>

      </Container>
    </>
  );
}

export default ForgotPassword;
