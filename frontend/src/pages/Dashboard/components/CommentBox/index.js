import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import { Container } from './styles';

export default function CommentBox({ comment, commentVisible }) {
  return (
    <Container className="content">
      <img src={comment.user.avatar?.url} alt="avatar" />
      <div className="comment-content">
        <strong>{comment.user.name}</strong>
        <p>{comment.content}</p>
        <span>{format(new Date(comment.createdAt), 'dd/MM/yyyy')}</span>
        <button type="button" onClick={() => commentVisible(comment.content)}>
          Ver/ocultar comentário
        </button>
      </div>
    </Container>
  );
}

CommentBox.propTypes = {
  commentVisible: PropTypes.func.isRequired,
  comment: PropTypes.shape({
    createdAt: PropTypes.string,
    content: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }).isRequired,
};
