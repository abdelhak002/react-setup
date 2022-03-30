import React from "react";

const Main = (props) => {
  return (
    <div
      className={`${props.className} bg-white text-gray-800 dark:bg-slate-800 dark:text-gray-100`}
    >
      {props.children}
    </div>
  );
};

export default Main;
