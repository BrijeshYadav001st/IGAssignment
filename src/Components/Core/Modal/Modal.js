import React from 'react';

function Modal({
  children,
  open,
  close,
  fade,
  backdrop,
  fullscreen,
  centered,
  scrollable,
  transition,
  cancel
}) {
  if (!open) {
    return null;
  }
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { close });
    }
    return child;
  });

  return (
    <>
      <div
        className={`top-0 left-0 right-0 absolute bottom-0 z-10 ${
          backdrop ? 'absolute top-0 left-0 right-0 bottom-10 z-10' : null
        } ${fade ? 'animation md:opacity-1' : null}`}
        onClick={close}
      ></div>

      <div
        className={`fixed top-12 left-80 ml-4  transform  w-1/2 ${fullscreen}
                
                            ${centered ? 'absolute top-20 left-20 transform' : null} 
                            ${transition ? 'animation delay-100 transition' : null}`}
      >
        {/* <div className='w-full h-16 flex justify-between items-center border-2 border-white p-10 box-border'>
          {title && <div className='text-center font-semibold text-black'>{title}</div>}
          <div
            className='p-0 m-0 font-semibold box-border m-lg-auto hover:text-blue'
            onClick={close}
          >
            X
          </div>
        </div> */}

        <div className={`w-full h-96 p-20 box-border ${scrollable ? 'overflow-auto' : null}`}>
          {childrenWithProps}
        </div>

        {cancel && (
          <div className='w-full h-20 flex justify-between items-center border-2 p-12 box-border '>
            <button
              className=' p-5 border-radius bg-blue-300 h-14 hover:bg-transparent border border-white items-center flex justify-center  cursor-pointer hover:text-white hover:bg-black'
              onClick={close}
            >
              {cancel}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Modal;
