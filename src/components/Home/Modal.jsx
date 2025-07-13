import React from 'react';

const Modal = () => {
    return (
        <div>
            <dialog id="signup_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Sign Up</h3>
                    {/* Your Sign Up form component here */}
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

            <dialog id="login_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Log In</h3>
                    {/* Your Login form component here */}
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default Modal;