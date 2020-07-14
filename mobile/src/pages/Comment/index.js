import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import SubmitButton from '../../components/Button';

import { Container, CommentInput } from './styles';

const Comment = () => {
  const route = useRoute();
  const user_id = useSelector((state) => state.user.id);

  const { id } = route.params;
  const navigation = useNavigation();

  const [comment, setComment] = useState('');

  async function handleSubmit() {
    await api.post(`/comments/${id}/${user_id}`);
  }

  return (
    <Container>
      <CommentInput
        multiline
        numberOfLines={50}
        placeholder="Escreva aqui o seu comentário"
        placeholderTextColor="#999999"
        textAlignVertical="top"
        value={comment}
        onChangeText={setComment}
      />
      <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton>

      <SubmitButton onPress={() => navigation.navigate('Businesses')}>
        Voltar
      </SubmitButton>
    </Container>
  );
};

export default Comment;
