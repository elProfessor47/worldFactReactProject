import React from "react";

const getFormData = (event) => {
  event.preventDefault(); // prevent page reload

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  event.target.reset()
};
const Contact = () => {
  return (
    <div className="flex justify-center my-30">
      <div className=" flex items-center flex-col">
        <h1 className="text-5xl">Contact Us</h1>
        <form className="flex flex-col mt-10" onSubmit={getFormData}>
          <input
            className="border border-gray-500 my-3 px-5 py-2 rounded-xl w-120"
            type="text"
            placeholder="Enter Your Name"
            name="username"
            autoComplete="off"
            required
          />
          <input
            className="border border-gray-500 my-3 px-5 py-2 rounded-xl w-120"
            type="text"
            placeholder="Enter Your Password"
            name="password"
            autoComplete="off"
            required
          />
          <textarea
            className="border border-gray-500 my-3 px-5 py-2 rounded-xl w-120"
            placeholder="Enter Your Message"
            name="message"
            autoComplete="off"
            required
            rows="10"
          />
          <button
            className="bg-[#202020] cursor-pointer text-xl border border-gray-500 my-3 px-5 py-2 rounded-xl w-120 text-start"
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
