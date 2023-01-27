import { useEffect } from 'react';
import { useMemo } from 'react';
import { createPortal } from 'react-dom';

const modalRootEl = document.querySelector('#modal');

const ModalEl = props => {
  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    modalRootEl.appendChild(element);

    return () => {
      modalRootEl.removeChild(element);
    };
  });

  return createPortal(props.children, element);
};

export default ModalEl;
