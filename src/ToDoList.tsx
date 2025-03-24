import { useState } from "react";
import { useForm } from "react-hook-form";

/* function ToDoList() {
  const [toDo, setToDo] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
  };
  return (
    <div>
      <h1>내가 가고 싶은 나라들</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="name" />
        <button>가자!</button>
      </form>
    </div>
  );
}
*/

function ToDoList() {
  const { register } = useForm();
  return (
    <div>
      <h1>내가 가고 싶은 나라들</h1>
      <form>
        <input {...register("toDo")} placeholder="name" />
        <button>가자!</button>
      </form>
    </div>
  );
}

export default ToDoList;
