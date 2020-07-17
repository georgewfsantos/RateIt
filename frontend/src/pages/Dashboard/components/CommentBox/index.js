import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import { Container } from './styles';

export default function CommentBox({ comment }) {
  return (
    <Container className="content">
      <img src={comment.user.avatar?.url} alt="avatar" />
      <div className="comment-content">
        <strong>{comment.user.name}</strong>
        <p>{comment.content}</p>
        <span>{format(new Date(comment.createdAt), 'dd/MM/yyyy')}</span>
      </div>
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
