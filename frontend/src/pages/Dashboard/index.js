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
  const [fullComment, setFullComment] = useState([]);
  const [user, setUser] = useState({});

  const [showFullComment, setshowFullComment] = useState(false);

  useEffect(() => {
    async function loadUserInfo() {
      const response = await api.get('/users');

      setUser(response.data);
    }
    loadUserInfo();
  }, []);

  useEffect(() => {
    async function loadComments() {
      const response = await api.get('/comments');

      setComments(response.data);
    }
    loadComments();
  }, []);

  function handleCommentVisible(content) {
    setshowFullComment(!showFullComment);

    setFullComment(content);
  }

  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          {showFullComment ? (
            <p>{fullComment}</p>
          ) : (
            <>
              <img src={user.avatar?.url} alt="avatar" />
              <h1>{user.name}</h1>
            </>
          )}
        </ImageContainer>

        <CommentsContainer>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <CommentBox
                  comment={comment}
                  commentVisible={handleCommentVisible}
                />
              </li>
            ))}
          </ul>
        </CommentsContainer>
      </Wrapper>
    </Container>
  );
}
