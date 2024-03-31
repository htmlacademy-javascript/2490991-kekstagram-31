import { closeBigPicture } from '../components/render-fullscreen';
import { closePreviewPicture } from '../components/render-load-photo';
import { removeListeners } from '../components/render-load-result';

const MODAL_STACKS = [];
const body = document.body;

const setModal = (modal) => MODAL_STACKS.push(modal.classList[0]);

const closeModal = () => {
  const modalClass = MODAL_STACKS.pop();

  switch (modalClass) {
    case 'success': {
      const successNode = body.querySelector('.success');
      successNode.remove();
      removeListeners();
      break;
    }
    case 'error': {
      const errorNode = body.querySelector('.error');
      errorNode.remove();
      break;
    }
    case 'img-upload': {
      closePreviewPicture();
      break;
    }
    case 'big-picture': {
      closeBigPicture();
      break;
    }
  }
};

export { closeModal, setModal };
