import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit?props.edit.value:'');

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="todo_form" onSubmit={handleSubmit}>
      {props.edit ? <><input
        type="text"
        placeholder="Update todo"
        name="text"
        value={input}
        className="todo_form--input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo_form--button">Update todo</button>
      </>:
      <>
       <input
        type="text"
        placeholder="Add a todo"
        name="text"
        value={input}
        className="todo_form--input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo_form--button">Add todo</button>
      </>
    }
     
    </form>
  );
}

export default TodoForm;
