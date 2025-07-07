import React, { useEffect } from "react";

const getFormData = (event) => {
  event.preventDefault(); // prevent page reload

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  event.target.reset()
};
const Contact = () => {
    useEffect(() => {
      window.scrollTo(0,0)
    },[])
  return (
    <div className="flex justify-center my-25 mb-10 ">
      <div className=" flex items-center flex-col">
        <h1 className="text-[40px]">Contact Us</h1>
        <form className="flex flex-col mt-5" onSubmit={getFormData}>
          <input
            className="border rounded-xl border-gray-500 my-3 px-5 py-2 rounded-xl70 500:w-96 600:w-110 700:w-125 800:w-140"
            type="text"
            placeholder="Enter Your Name"
            name="username"
            autoComplete="off"
            required
          />
          <input
            className="border border-gray-500 my-3 px-5 py-2 rounded-xl w-70 500:w-96 600:w-110 700:w-125 800:w-140"
            type="text"
            placeholder="Enter Your Password"
            name="password"
            autoComplete="off"
            required
          />
          <textarea
            className="border border-gray-500 my-3 px-5 py-2 rounded-xl w-70 500:w-96 600:w-110 700:w-125 800:w-140"
            placeholder="Enter Your Message"
            name="message"
            autoComplete="off"
            required
            rows="10"
          />
          <button
            className="bg-[#202020] cursor-pointer text-xl border border-gray-500 my-3 px-5 py-2 rounded-xl w-70 500:w-96 600:w-110 700:w-125 800:w-140 text-start"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
