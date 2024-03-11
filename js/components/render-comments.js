import { DEFAULT_COMMENTS_QTY } from '../constants.js';

const addComment = ({ avatar, name, message }, template) => {
  const newComment = template.cloneNode(true);
  newComment.querySelector('img').src = avatar;
  newComment.querySelector('img').alt = name;
  newComment.querySelector('p').textContent = message.join(' ');
  return newComment;
};

const renderPhotoComments = (comments, bigPictureModal) => {
  const commentShowCount = bigPictureModal.querySelector(
    '.social__comment-shown-count'
  );
  const listComments = bigPictureModal.querySelector('.social__comments');
  const moreCommentsButton = bigPictureModal.querySelector('.comments-loader');

  const template = listComments.children[0];

  listComments.innerHTML = '';
  let counter = 0;

  const createComments = () => {
    const startIndex = counter * DEFAULT_COMMENTS_QTY;
    counter++;
    const endIndex = Math.min(
      startIndex + DEFAULT_COMMENTS_QTY,
      comments.length
    );

    const currentComments = comments.slice(startIndex, endIndex);

    currentComments.forEach((comment) => {
      listComments.appendChild(addComment(comment, template));
    });

    commentShowCount.textContent = endIndex;
    moreCommentsButton.classList.toggle('hidden', endIndex === comments.length);
  };
  createComments();

  moreCommentsButton.addEventListener('click', () => {
    createComments();
  });
};

export { renderPhotoComments };
