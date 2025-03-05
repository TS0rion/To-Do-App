import React from "react";
import check from "../assets/check.png";
import not_check from "../assets/not-check.png";
import remove from "../assets/delete.png";
const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img
          src={isComplete ? check : not_check}
          alt="check-icon"
          className="w-7"
        />
        <p
          className={`text-slate-900 ml-4 text-[17px] decoration-slate-900 ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>

      <img
        onClick={() => {
          deleteTodo(id);
        }}
        src={remove}
        alt=""
        className="w-4 cursor-pointer "
      />
    </div>
  );
};

export default TodoItems;
