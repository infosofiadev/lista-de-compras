import { useState } from "react";
import Input from "./Input";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  return (
  <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
    <Input 
      type="text" placeholder="Digite o produto" 
      value={title}
      onChange={(event) => setTitle(event.target.value)}
    />
    {/* <Input 
      type="button"
      value={category}
      onChange={(event) => setCategory(event.target.value)}
    /> */}
    <select value={category} onChange={(e) => setCategory(e.target.value)} className="space-y-4 p-2 bg-slate-100 rounded-md shadow flex flex-col" placeholder="Selecione...">
      <option value="">Escolha uma opção:</option>
      <option value="supermercado">Supermercado</option>
      <option value="acougue">Açougue</option>
      <option value="sacolao">Sacolão</option>
      <option value="padaria">Padaria</option>
      <option value="farmacia">Farmácia</option>
      <option value="casa">Casa</option>
    </select>
    <button 
    onClick={() => {
      if (!title.trim() || !category.trim()) {
        return alert("Preencha o nome do produto.")
      }
      props.onAddTaskSubmit(title, category);
      setTitle("");
      setCategory("");
    }}
    className="bg-slate-700 text-white px-4 py-2 rounded-md font-medium">
        Adicionar
    </button>
  </div>
  )
}

export default AddTask;
