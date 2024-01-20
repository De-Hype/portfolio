

import { IoIosSend } from "react-icons/io";
import {FaStar} from "react-icons/fa"

const Contact = () => {
  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <section className="pt-3 contacts" id="contacts">
      <h3 className=" text-lg font-semibold pb-2 flex items-center gap-3"><FaStar/>Contact</h3>
      <form className="flex flex-col gap-2" onSubmit={submitForm}>
        <input
          type="text"
          name=""
          className="border rounded py-2 px-2 border-black outline-none"
          placeholder="Name"
          id=""
        />
        <input
          type="email"
          className="border rounded py-2 px-2 outline-none border-black"
          name=""
          placeholder="Email"
          id=""
        />
        <textarea
          name=""
          className="border rounded py-3 px-2 outline-none border-black resize-none"
          placeholder="Messages"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button
          type="submit"
          className="p-3  rounded outline-none bg-black hover:bg-slate-700 transition-all text-white  flex items-center gap-2"
        >
          <span className="mx-auto text-sm flex items-center gap-1">
            Send <IoIosSend className="text-xl" />
          </span>
        </button>
      </form>
    </section>
  );
};

export default Contact;
