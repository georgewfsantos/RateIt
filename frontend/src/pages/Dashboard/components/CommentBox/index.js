import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function CommentBox({ comment }) {
  return (
    <Container className="content">
      <img src={comment.user.avatar?.url} alt="avatar" />
      <p>{comment.content}</p>
    </Container>
  );
}

CommentBox.propTypes = {
  comment: PropTypes.shape({
    content: PropTypes.string,
    user: PropTypes.shape({
      avatar: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }).isRequired,
};
