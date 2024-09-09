import React from "react";
import {useNavigate} from 'react-router-dom'

export default function ErrorPage() {

  const navigate = useNavigate();
  const handleError = () =>{
    navigate(-1);
  }
  return (
    <>
      <div className=" flex flex-col justify-center items-center w-full h-screen">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/008/568/878/small/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space-site-crash-on-technical-work-web-design-template-with-chatbot-mascot-cartoon-online-bot-assistance-failure-vector.jpg" />
        <p>The page you are looking for could not be found</p>
        <button
          className=" border-2 border-blue-600 bg-blue-600 text-white py-3 px-12 rounded-sm mt-3 hover:bg-transparent duration-200 hover:text-black"
          onClick={handleError}
        >
          Back Back
        </button>
      </div>
    </>
  );
}
