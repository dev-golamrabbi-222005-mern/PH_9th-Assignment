import React, { use, useRef, useState } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { toast } from 'react-toastify';

const PasswordRest = () => {
    const emailRef = useRef(null);
    const {forgotPass} = use(AuthContext);
    const [error, setError] = useState("");
    
    const handleForgotPass = () => {

      const emailFromRef = emailRef.current.value;
      console.log(emailFromRef);
      
      if (emailFromRef) {
        forgotPass(emailFromRef)
          .then((rs) => {
            toast.success("A password reset email has sent to your email.");
          })
          .catch((err) => {
            setError(err?.message);
          });
      } else {
        return setError("Must need an email");
      }
    };
    return (
      <div className="bg-[#1D232A] w-3/12 mx-auto my-5 md:my-10 lg:my-15 p-5 rounded-lg">
        <h1 className="text-3xl text-center mb-2 text-accent">
          Password Reset
        </h1>
        <p>Simply rest your password by providing your email address below:</p>
        <input
          required
          type="email"
          className="input w-full mt-4"
          placeholder="Enter your email here"
          name="email"
          ref={emailRef}
        />
        {
            error && <p className='text-red-500 mt-2'>{error}</p>
        }
        <button onClick={handleForgotPass} className="btn mt-5 w-full bg-[#0A192F]">Reset Password</button>
      </div>
    );
};

export default PasswordRest;