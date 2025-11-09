import { useState } from "react";
import Input from "./Input";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
  <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
    <Input 
      type="text" placeholder="Digite o produto" 
      value={title}
      onChange={(event) => setTitle(event.target.value)}
    />
    <button 
    onClick={() => {
      if (!title.trim()) {
        return alert("Preencha o nome do produto.")
      }
      props.onAddTaskSubmit(title, description);
      setTitle("");
      setDescription("");
    }}
    className="bg-slate-700 text-white px-4 py-2 rounded-md font-medium">
        Adicionar
    </button>
  </div>
  )
}

export default AddTask;
