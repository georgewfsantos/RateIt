import React, { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

import { Alert } from 'react-native';
import api from '../../services/api';

import {
  Container,
  SubmitButton,
  SubmitButtonText,
  CommentInput,
} from './styles';

const Comment = () => {
  const route = useRoute();

  const { id } = route.params;
  const navigation = useNavigation();

  const [comment, setComment] = useState('');

  async function handleSubmit() {
    await api.post(`/comments/${id}/`, { content: comment });

    navigation.navigate('Businesses');

    Alert.alert('Comentário postado com sucesso.', 'Obrigado e volte sempre');
  }

  return (
    <Container>
      <CommentInput
        multiline
        numberOfLines={50}
        placeholder="Escreva aqui o seu comentário"
        placeholderTextColor="rgba(255,255,255,0.8)"
        textAlignVertical="top"
        textAlign="center"
        value={comment}
        onChangeText={setComment}
      />
      <SubmitButton onPress={handleSubmit}>
        <SubmitButtonText>Enviar</SubmitButtonText>
      </SubmitButton>

      <SubmitButton onPress={() => navigation.navigate('Businesses')}>
        <SubmitButtonText>Voltar</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
};

export default Comment;
