import React from "react";
import LogoImg from '../../image/logo2.svg'

const Modal = () => {
    return(
        <div className="top-28 left-0 right-0 absolute bottom-0 z-10 animation md:opacity-1 animation delay-100 transition'">
             <div className="items-center flex justify-center p-4 " >
                
                <form className="p-10 w-96  bg-gray-100 rounded-lg">
                <img className="items-center pb-4" alt="Logo" src={LogoImg} />
                    <div class="mb-4 ">
                        <label>Email</label>
                        <input
                            type="text"
                            class="form-control block w-full  text-base font-normal  bg-clip-padding rounded transitio m-0 outline-none pt-4 pl-2 border-b-2 border-gray-700 bg-transparent"
                            id="exampleFormControlInput1"

                        />
                    </div>
                    <div class="mb-4">
                        <label>Password</label>
                        <input
                            type="password"
                            class="form-control block w-full  text-base font-normal text-gray-700  bg-clip-padding rounded transitio m-0 outline-none pt-4 pl-2  border-b-2 border-gray-700 bg-transparent "
                            id="exampleFormControlInput1"

                        />
                    </div>
                    <a class="text-gray-500" href="#!">Forgot password?</a>

                    <div class="text-center pt-1 mb-12 pt-6">
                        <button
                            class="inline-block w-full text-white font-medium text-xl leading-tight  rounded shadow-md bg-gray-600 p-2"
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                        >
                            Enter
                        </button>

                    </div>
                </form>

            </div>
        </div>

    )
}
export default Modal;