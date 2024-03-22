import { closeBigPicture } from '../components/render-fullscreen';
import { closePreviewPicture } from '../components/render-load-photo';

const MODAL_STACK = [];
const body = document.body;

const setModal = (modal) => MODAL_STACK.push(modal.classList[0]);

const closeModal = () => {
  const modalClass = MODAL_STACK.pop();

  switch (modalClass) {
    case 'success': {
      const successNode = body.querySelector('.success');
      successNode.remove();
      closePreviewPicture();
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
