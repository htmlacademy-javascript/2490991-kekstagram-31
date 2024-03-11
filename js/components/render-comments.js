const bigPictureModal = document.querySelector('.big-picture');

const addComment = ({ avatar, name, message }, template) => {
  const newComment = template.cloneNode(true);
  newComment.querySelector('img').src = avatar;
  newComment.querySelector('img').alt = name;
  newComment.querySelector('p').textContent = message.join(' ');

  return newComment;
};

const renderPictureComments = (arrayOfComments) => {
  const listComments = bigPictureModal.querySelector('.social__comments');
  [...listComments.children].slice(1).forEach((element) => element.remove());

  arrayOfComments.forEach((comment) => {
    listComments.appendChild(addComment(comment, listComments.children[0]));
  });

  listComments.children[0].remove();
};

export { renderPictureComments };
