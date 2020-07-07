import React from 'react';

import { Container, /* ImageContainer */ CommentsContainer } from './styles';

import CommentBox from './components/CommentBox';

export default function Dashboard() {
  return (
    <Container>
      {/* <ImageContainer>
        <img
          src="https://images.unsplash.com/photo-1527956041665-d7a1b380c460?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          alt=""
        />
      </ImageContainer> */}

      <CommentsContainer>
        <ul>
          <li>
            <CommentBox />
            <CommentBox />
            <CommentBox />
            <CommentBox />
            <CommentBox />
            <CommentBox />
          </li>
        </ul>
      </CommentsContainer>
    </Container>
  );
}
