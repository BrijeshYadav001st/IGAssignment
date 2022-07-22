import React from 'react';

function Modal({
    children,
    open,
    close,
    fade,
    backdrop,
    fullscreen,
    centered,
    transition,
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
                className={`top-0 left-0 right-0 absolute bottom-0 z-10 ${backdrop ? 'absolute top-0 left-0 right-0 bottom-10 z-10' : null
                    } ${fade ? 'animation md:opacity-1' : null}`}
                onClick={close}
            ></div>

            <div
                className={`fixed top-12 left-80 ml-4  transform  w-1/2 ${fullscreen}
                
                            ${centered ? 'absolute top-20 left-20 transform' : null} 
                            ${transition ? 'animation delay-100 transition' : null}`}
            >
                <div className="w-full h-96 p-20 box-border">
                    {childrenWithProps}
                </div>
            </div>
        </>
    );
}

export default Modal;
