import { useState } from "react";

function SideBar({ handleToggle }) {
  return (
    <div
      className="fixed inset-0 flex flex-col  bg-zinc-700 w-1/2 left-[50%] p-5 overflow-y-scroll cursor-pointer z-50"
      onClick={handleToggle}
    >
      <h2>The Brutal Martian landscape</h2>
      <div>
        <p>Description</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quod
          eligendi beatae dignissimos velit, error suscipit voluptates laborum
          vero voluptate?
        </p>
      </div>
      <button className="fixed bottom-0 m-4 p-5 " onClick={handleToggle}>
        <i
          className={`fa-solid fa-arrow-right text-zinc-900 font-bold text-2xl`}
        ></i>
      </button>
    </div>
  );
}

export default SideBar;
