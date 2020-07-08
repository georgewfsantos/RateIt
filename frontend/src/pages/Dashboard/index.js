import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import {
  Container,
  Wrapper,
  ImageContainer,
  CommentsContainer,
} from './styles';

import CommentBox from './components/CommentBox';

export default function Dashboard() {
  const [comments, setComments] = useState([]);

  const [user, setUser] = useState({});

  useEffect(() => {
    async function loadUserInfo() {
      const response = await api.get('/users');

      setUser(response.data);
    }
    loadUserInfo();
  }, [user]);

  useEffect(() => {
    async function loadComments() {
      const response = await api.get('/comments');

      setComments(response.data);
    }
    loadComments();
  }, []);

  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <img src={user.avatar?.url} alt="avatar" />
        </ImageContainer>

        <CommentsContainer>
          <ul>
            {comments.map((comment) => (
              <li>
                <CommentBox comment={comment} />
              </li>
            ))}
          </ul>
        </CommentsContainer>
      </Wrapper>
    </Container>
  );
}
