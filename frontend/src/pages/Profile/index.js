import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '../../store/modules/user/actions';
import { signOut } from '../../store/modules/auth/actions';

import AvatarInput from './AvatarInput';

import { Container, Wrapper } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Wrapper>
        <Form initialData={profile} onSubmit={handleSubmit}>
          <AvatarInput name="avatar_id" />
          <Input name="name" placeholder="Full Name" />
          <Input name="email" placeholder="Your email" />

          <hr />

          <Input type="password" name="oldPassword" placeholder="Senha atual" />
          <Input type="password" name="password" placeholder="Nova senha" />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar senha"
          />

          <button type="submit">Update</button>
        </Form>
        <button type="button" onClick={handleSignOut}>
          Sign out
        </button>
      </Wrapper>
    </Container>
  );
}
