import { closeBigPicture } from './render-fullscreen';
import { closePreviewPicture } from './render-load-photo';

const MODAL_STACK = [];
const body = document.body;

const setModal = (modal) => MODAL_STACK.push(modal.classList[0]);

const closeModal = () => {
  const modalClass = MODAL_STACK.pop();

  if (modalClass === 'success') {
    const successNode = body.querySelector('.success');
    successNode.remove();
    closePreviewPicture();
  } else if (modalClass === 'error') {
    const errorNode = body.querySelector('.error');
    errorNode.remove();
  } else if (modalClass === 'img-upload') {
    closePreviewPicture();
  } else if (modalClass === 'big-picture') {
    closeBigPicture();
  }
};

export { closeModal, setModal };
