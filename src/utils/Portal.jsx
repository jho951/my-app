// import { useEffect, useRef, useState } from 'react';
// import ReactDOM from 'react-dom';

// const Portal = ({ children, selector }) => {
//   const elRef = useRef(null);
//   const [isCreated, setIsCreated] = useState(false);

//   useEffect(() => {
//     if (!isCreated) {
//       create();
//     }
//   }, [selector, isCreated]);

//   const create = async () => {
//     await setIsCreated(true);
//     const portalElement = document.createElement('div');
//     portalElement.setAttribute('id', selector.slice(1));

//     document.body.appendChild(portalElement);
//     elRef.current = portalElement;
//   };

//   const destroy = () => {
//     if (elRef.current) {
//       document.body.removeChild(elRef.current);
//       elRef.current = null;
//     }
//   };

//   return elRef.current ? ReactDOM.createPortal(children, elRef.current) : null;
// };

// export default Portal;

import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children, selector }) => {
  const elRef = useRef(null);

  useEffect(() => {
    const existingElement = document?.querySelector(selector);
    const portalElement = document?.createElement('div');

    portalElement?.setAttribute('id', selector.slice(1));
    existingElement?.appendChild(portalElement);
    elRef.current = portalElement;

    return () => {
      existingElement?.removeChild(portalElement);
    };
  }, [selector]);

  return elRef.current ? ReactDOM.createPortal(children, elRef.current) : null;
};
export default Portal;
